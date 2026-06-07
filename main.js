// ==========================================================================
// SYNTHETIC DIGITAL LABS AI STUDIO - CORE JAVASCRIPT
// ==========================================================================

// Global state initialization
const DEFAULT_AVATARS = [
  { id: 'av-sofia', name: 'Sofía Presentadora', style: 'Presentador', lang: 'Español (ES)', img: '/assets/nova_avatar.png', desc: 'Avatar oficial premium de alta definición.' },
  { id: 'av-roberto', name: 'Roberto Corporativo', style: 'Corporativo', lang: 'Español (MX)', img: '/assets/nova_avatar.png', desc: 'Avatar formal para presentaciones empresariales.' },
  { id: 'av-elena', name: 'Elena Podcast', style: 'Podcast', lang: 'Español (ES)', img: '/assets/nova_avatar.png', desc: 'Voz amigable y estilo casual con micrófono.' }
];

const DEFAULT_VOICES = [
  { id: 'v-sofia', name: 'Voz de Sofía (Femenina)', lang: 'Español (ES)', type: 'Narrativa', isDefault: true },
  { id: 'v-roberto', name: 'Voz de Roberto (Masculina)', lang: 'Español (MX)', type: 'Corporativa', isDefault: true },
  { id: 'v-lucas', name: 'Voz de Lucas (Masculina)', lang: 'Español (ES)', type: 'Comercial', isDefault: true }
];

const DEFAULT_PROJECTS = [
  { id: 'p-1', name: 'Vídeo Explicativo AI Studio', type: 'video', date: '2026-06-01', status: 'Completado', details: 'Horizontal (16:9) • Voz Sofía' },
  { id: 'p-2', name: 'Audio Introducción Podcast', type: 'audio', date: '2026-06-03', status: 'Completado', details: 'Sintetizado • Voz Lucas' },
  { id: 'p-3', name: 'Guión Campaña Marketing', type: 'guion', date: '2026-06-05', status: 'Completado', details: 'Cercano (60s)' }
];

// Initialize localStorage values if empty
function initLocalStorage() {
  if (!localStorage.getItem('sdl_avatars')) {
    localStorage.setItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
  }
  if (!localStorage.getItem('sdl_voices')) {
    localStorage.setItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
  }
  if (!localStorage.getItem('sdl_projects')) {
    localStorage.setItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
  }
  if (!localStorage.getItem('sdl_credits')) {
    localStorage.setItem('sdl_credits', '120');
  }
  if (!localStorage.getItem('sdl_username')) {
    localStorage.setItem('sdl_username', 'Usuario SDL');
  }
  if (!localStorage.getItem('sdl_email')) {
    localStorage.setItem('sdl_email', 'usuario@syntheticdigitallab.com');
  }
}

initLocalStorage();

// State helpers
function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getCredits() {
  return parseInt(localStorage.getItem('sdl_credits')) || 120;
}
function setCredits(val) {
  localStorage.setItem('sdl_credits', Math.max(0, val).toString());
  updateCreditsDisplay();
}

// Update counters across dashboard & header
function updateCreditsDisplay() {
  const credits = getCredits();
  const fillPct = (credits / 150) * 100;
  
  const fillEl = document.getElementById('headerCreditsFill');
  const textEl = document.getElementById('headerCreditsText');
  const dashValCredits = document.getElementById('dashValCredits');
  const settingsFill = document.getElementById('settingsCreditsFill');
  const settingsText = document.getElementById('settingsCreditsText');

  if (fillEl) fillEl.style.width = `${fillPct}%`;
  if (textEl) textEl.textContent = `${credits} / 150`;
  if (dashValCredits) dashValCredits.textContent = credits;
  if (settingsFill) settingsFill.style.width = `${fillPct}%`;
  if (settingsText) settingsText.textContent = `${credits} / 150 créditos disponibles`;
}

// Update dashboard overview stats
function updateDashboardStats() {
  const avatars = getLocal('sdl_avatars') || [];
  const voices = getLocal('sdl_voices') || [];
  const projects = getLocal('sdl_projects') || [];
  
  const avatarsCount = avatars.length;
  const voicesCount = voices.length;
  const projectsCount = projects.length;
  const videosCount = projects.filter(p => p.type === 'video').length;

  const elAvatars = document.getElementById('dashValAvatars');
  const elVoices = document.getElementById('dashValVoices');
  const elVideos = document.getElementById('dashValVideos');
  const elProjects = document.getElementById('dashValProjects');

  if (elAvatars) elAvatars.textContent = avatarsCount;
  if (elVoices) elVoices.textContent = voicesCount;
  if (elVideos) elVideos.textContent = videosCount;
  if (elProjects) elProjects.textContent = projectsCount;
}

// ==========================================
// TOAST NOTIFICATIONS & MODALS
// ==========================================
function showToast(title, desc, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  
  let iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-exclamation';
  if (type === 'info') iconClass = 'fa-circle-info';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass} toast-icon"></i>
    <div class="toast-info">
      <span class="toast-title">${title}</span>
      <span class="toast-desc">${desc}</span>
    </div>
    <i class="fa-solid fa-xmark toast-close"></i>
  `;

  container.appendChild(toast);
  
  // Slide in
  setTimeout(() => toast.classList.add('active'), 50);

  // Auto remove
  const timer = setTimeout(() => {
    slideOutAndRemove(toast);
  }, 4000);

  // Close button trigger
  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(timer);
    slideOutAndRemove(toast);
  });
}

function slideOutAndRemove(el) {
  el.classList.remove('active');
  setTimeout(() => el.remove(), 400);
}

function showModal(title, message, isSuccess = true, callback = null) {
  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (!overlay) return;

  titleEl.textContent = title;
  msgEl.textContent = message;
  
  if (isSuccess) {
    icon.className = 'modal-icon';
    icon.innerHTML = '<i class="fa-solid fa-check"></i>';
    actionBtn.className = 'btn-primary';
  } else {
    icon.className = 'modal-icon error';
    icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    actionBtn.className = 'btn-danger';
  }

  overlay.classList.add('active');

  const closeHandler = () => {
    overlay.classList.remove('active');
    actionBtn.removeEventListener('click', closeHandler);
    if (callback) callback();
  };

  actionBtn.addEventListener('click', closeHandler);
}

// Modal close button
const globalModalCloseBtn = document.getElementById('globalModalCloseBtn');
if (globalModalCloseBtn) {
  globalModalCloseBtn.addEventListener('click', () => {
    document.getElementById('globalModalOverlay').classList.remove('active');
  });
}

// ==========================================
// NAVIGATION SYSTEM (Landing vs SaaS Studio)
// ==========================================
const publicLanding = document.getElementById('public-landing');
const studioApp = document.getElementById('ai-studio-app');
const menuItems = document.querySelectorAll('.menu-item');
const studioViews = document.querySelectorAll('.studio-view');
const viewTitle = document.getElementById('studioViewTitle');

// Toggle entire layout
function enterStudio(targetView = 'dashboard') {
  if (publicLanding) publicLanding.style.display = 'none';
  if (studioApp) studioApp.classList.add('active');
  
  window.scrollTo({ top: 0, behavior: 'instant' });
  
  // Set default / specific view
  switchView(targetView);
  
  // Load data inputs/lists
  loadDropdowns();
  renderDashboardActivity();
  renderProjectsList();
  renderLibrary();
  
  showToast('¡Bienvenido al AI Studio!', 'Sintonizando procesadores neuronales...', 'info');
}

function exitStudio() {
  if (studioApp) studioApp.classList.remove('active');
  if (publicLanding) publicLanding.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Switch active view panel
function switchView(viewName) {
  // Update sidebar selection
  menuItems.forEach(item => {
    if (item.dataset.view === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Switch content panels
  studioViews.forEach(view => {
    if (view.id === `view-${viewName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  // Set topbar title
  const formattedTitle = viewName
    .replace('-', ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  if (viewTitle) viewTitle.textContent = formattedTitle === 'Tts' ? 'Texto a Voz' : formattedTitle;
}

// Bind navigation listeners
document.querySelectorAll('.btn-enter-studio').forEach(btn => {
  btn.addEventListener('click', () => enterStudio('dashboard'));
});

document.querySelectorAll('.btn-exit-studio').forEach(btn => {
  btn.addEventListener('click', exitStudio);
});

// Sidebar links navigation
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const viewName = item.dataset.view;
    switchView(viewName);
    // Close sidebar on mobile
    document.getElementById('studioSidebar').classList.remove('open');
  });
});

// Public tools section CTA buttons
document.querySelectorAll('.btn-go-tool').forEach(btn => {
  btn.addEventListener('click', () => {
    const tool = btn.dataset.tool;
    let viewTarget = 'dashboard';
    
    if (tool === 'avatar') viewTarget = 'create-avatar';
    else if (tool === 'video') viewTarget = 'video-avatar';
    else if (tool === 'voice-clone') viewTarget = 'voice-clone';
    else if (tool === 'tts') viewTarget = 'tts';
    else if (tool === 'script') viewTarget = 'script-gen';
    else if (tool === 'translate') viewTarget = 'translator';
    
    enterStudio(viewTarget);
  });
});

// Quick shortcut action buttons in Dashboard
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-shortcut');
  if (btn) {
    const target = btn.dataset.target;
    switchView(target);
  }
});

// Mobile Sidebar toggler
const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
const studioSidebar = document.getElementById('studioSidebar');
if (mobileSidebarToggle && studioSidebar) {
  mobileSidebarToggle.addEventListener('click', () => {
    studioSidebar.classList.toggle('open');
  });
}

// Close mobile sidebar click outside
document.addEventListener('click', (e) => {
  if (studioSidebar && studioSidebar.classList.contains('open')) {
    if (!studioSidebar.contains(e.target) && !mobileSidebarToggle.contains(e.target)) {
      studioSidebar.classList.remove('open');
    }
  }
});

// ==========================================
// DATA DROPDOWNS LOADER
// ==========================================
function loadDropdowns() {
  const avatars = getLocal('sdl_avatars') || [];
  const voices = getLocal('sdl_voices') || [];

  const videoAvatarSelect = document.getElementById('videoAvatarSelect');
  const videoVoiceSelect = document.getElementById('videoVoiceSelect');
  const ttsVoiceSelect = document.getElementById('ttsVoiceSelect');

  // Video Avatar Dropdown
  if (videoAvatarSelect) {
    videoAvatarSelect.innerHTML = '';
    avatars.forEach(av => {
      const opt = document.createElement('option');
      opt.value = av.id;
      opt.textContent = `${av.name} (${av.style} - ${av.lang})`;
      videoAvatarSelect.appendChild(opt);
    });
  }

  // Video Voice Dropdown
  if (videoVoiceSelect) {
    videoVoiceSelect.innerHTML = '';
    voices.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = `${v.name} [${v.type}]`;
      videoVoiceSelect.appendChild(opt);
    });
  }

  // TTS Voice Dropdown
  if (ttsVoiceSelect) {
    ttsVoiceSelect.innerHTML = '';
    voices.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = `${v.name} (${v.lang})`;
      ttsVoiceSelect.appendChild(opt);
    });
  }
}

// ==========================================
// RENDER: DASHBOARD RECENT ACTIVITY
// ==========================================
function renderDashboardActivity() {
  const tbody = document.getElementById('dashboardActivityTableBody');
  if (!tbody) return;

  const projects = getLocal('sdl_projects') || [];
  tbody.innerHTML = '';

  if (projects.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted)">No hay actividad reciente.</td></tr>`;
    return;
  }

  // Show top 3 newest projects
  const recent = [...projects].reverse().slice(0, 3);
  recent.forEach(proj => {
    let iconClass = 'fa-file-lines';
    if (proj.type === 'video') iconClass = 'fa-video';
    if (proj.type === 'audio') iconClass = 'fa-microphone';
    if (proj.type === 'avatar') iconClass = 'fa-user-astronaut';

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="activity-name-cell">
        <i class="fa-solid ${iconClass} activity-icon"></i>
        <span>${proj.name}</span>
      </td>
      <td>${proj.type.toUpperCase()}</td>
      <td>${proj.date}</td>
      <td>
        <span class="activity-status-badge status-success">
          <span class="pulse-dot cyan" style="width:6px; height:6px;"></span>
          ${proj.status}
        </span>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================
// 1. CREAR AVATAR PANEL LOGIC
// ==========================================
const avatarUploadZone = document.getElementById('avatarUploadZone');
const avatarImageInput = document.getElementById('avatarImageInput');
const avatarFileName = document.getElementById('avatarFileName');
const avatarCreationForm = document.getElementById('avatarCreationForm');
const avatarProcessOverlay = document.getElementById('avatarProcessOverlay');
const avatarProcessLog = document.getElementById('avatarProcessLog');
const avatarPreviewImg = document.getElementById('avatarPreviewImg');
const avatarVisualBox = document.getElementById('avatarVisualBox');
const avatarPreviewNameText = document.getElementById('avatarPreviewNameText');
const avatarPreviewStyleText = document.getElementById('avatarPreviewStyleText');

let loadedAvatarFileUrl = '/assets/nova_avatar.png';

// File upload drag & drop trigger
if (avatarUploadZone && avatarImageInput) {
  avatarUploadZone.addEventListener('click', () => avatarImageInput.click());
  
  avatarImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      avatarFileName.textContent = `Archivo: ${file.name}`;
      loadedAvatarFileUrl = URL.createObjectURL(file);
    }
  });

  // Drag over
  avatarUploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    avatarUploadZone.style.borderColor = 'var(--neon-purple)';
  });
  
  avatarUploadZone.addEventListener('dragleave', () => {
    avatarUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  });

  avatarUploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    avatarUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      avatarFileName.textContent = `Archivo: ${file.name}`;
      loadedAvatarFileUrl = URL.createObjectURL(file);
    }
  });
}

// Form Submission (Simulate generator)
if (avatarCreationForm) {
  avatarCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const credits = getCredits();
    if (credits < 10) {
      showModal('Créditos Insuficientes', 'Necesitas al menos 10 créditos para generar un avatar.', false);
      return;
    }

    const name = document.getElementById('avatarNameInput').value.trim();
    const style = document.getElementById('avatarStyleSelect').value;
    const lang = document.getElementById('avatarLanguageSelect').value;
    const desc = document.getElementById('avatarDescInput').value.trim();

    // Show loading process overlay
    avatarProcessOverlay.classList.add('active');
    avatarVisualBox.classList.add('generating');
    
    // Log simulation steps
    const steps = [
      { text: 'Iniciando pipeline neuronal...', delay: 100 },
      { text: 'Alineando malla facial 3D...', delay: 700 },
      { text: 'Optimizando texturas HD...', delay: 1500 },
      { text: 'Sintetizando articuladores bucales...', delay: 2400 },
      { text: '¡Avatar compilado con éxito!', delay: 3200 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        avatarProcessLog.textContent = step.text;
      }, step.delay);
    });

    // Finished compile
    setTimeout(() => {
      avatarProcessOverlay.classList.remove('active');
      avatarVisualBox.classList.remove('generating');
      
      // Update preview card
      avatarPreviewImg.src = loadedAvatarFileUrl;
      avatarPreviewNameText.textContent = name;
      avatarPreviewStyleText.textContent = `${style} (${lang})`;
      
      // Deduct credits and save item
      setCredits(credits - 10);
      
      const newAvatar = {
        id: 'av-' + Date.now(),
        name,
        style,
        lang,
        img: loadedAvatarFileUrl,
        desc: desc || 'Avatar personalizado creado por el usuario.'
      };
      
      const currentAvatars = getLocal('sdl_avatars') || [];
      currentAvatars.push(newAvatar);
      setLocal('sdl_avatars', currentAvatars);

      // Save to projects
      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push({
        id: 'p-' + Date.now(),
        name: `Avatar: ${name}`,
        type: 'avatar',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `${style} • ${lang}`
      });
      setLocal('sdl_projects', currentProjects);

      updateDashboardStats();
      loadDropdowns();
      
      showToast('Avatar Creado', `"${name}" ha sido añadido a tu biblioteca.`, 'success');
      showModal('Avatar Creado con Éxito', `Tu presentador virtual "${name}" ha sido compilado. Ya puedes utilizarlo en el panel de creación de video.`, true);
      
      // Reset form
      avatarCreationForm.reset();
      avatarFileName.textContent = '';
    }, 3600);
  });
}

// ==========================================
// 2. VIDEO CON AVATAR PANEL LOGIC
// ==========================================
const videoCreationForm = document.getElementById('videoCreationForm');
const videoProcessOverlay = document.getElementById('videoProcessOverlay');
const videoProcessLog = document.getElementById('videoProcessLog');
const videoPlayerBox = document.getElementById('videoPlayerBox');
const videoPlayerImg = document.getElementById('videoPlayerImg');
const videoSubtitleTicker = document.getElementById('videoSubtitleTicker');
const videoPlayBtn = document.getElementById('videoPlayBtn');
const videoTimelineFill = document.getElementById('videoTimelineFill');
const videoTimeLabel = document.getElementById('videoTimeLabel');
const videoPreviewTitle = document.getElementById('videoPreviewTitle');
const videoPreviewDetails = document.getElementById('videoPreviewDetails');

let currentGeneratedScriptText = "";
let simulatedVideoTimelineTimer = null;
let simulatedVideoSeconds = 0;
let isVideoPlaying = false;

if (videoCreationForm) {
  videoCreationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const credits = getCredits();
    if (credits < 20) {
      showModal('Créditos Insuficientes', 'Necesitas al menos 20 créditos para generar un video con avatar.', false);
      return;
    }

    const avatarId = document.getElementById('videoAvatarSelect').value;
    const script = document.getElementById('videoScriptTextarea').value.trim();
    const format = document.getElementById('videoFormatSelect').value;
    const style = document.getElementById('videoStyleSelect').value;
    const voiceId = document.getElementById('videoVoiceSelect').value;

    currentGeneratedScriptText = script;

    // Fetch avatar name for details
    const avatars = getLocal('sdl_avatars') || [];
    const chosenAv = avatars.find(a => a.id === avatarId) || { name: 'Avatar', img: '/assets/ref_blue.png' };
    
    // Show loading state
    videoProcessOverlay.classList.add('active');
    
    const steps = [
      { text: 'Analizando estructura de guión...', delay: 100 },
      { text: 'Cargando malla tridimensional del avatar...', delay: 800 },
      { text: 'Renderizando labios con precisión fónica...', delay: 1600 },
      { text: 'Compilando frames de vídeo en servidor...', delay: 2400 },
      { text: 'Generando archivo de salida MP4...', delay: 3200 },
      { text: '¡Video compilado con éxito!', delay: 4000 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        videoProcessLog.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      videoProcessOverlay.classList.remove('active');

      // Update Preview Details
      videoPreviewTitle.textContent = `Vídeo: ${chosenAv.name}`;
      videoPreviewDetails.textContent = `${format === '16-9' ? 'Horizontal (16:9)' : format === '9-16' ? 'Vertical (9:16)' : 'Cuadrado (1:1)'} • Estilo ${style}`;
      
      // Update formats aspect ratios classes
      videoPlayerBox.className = 'video-preview-wrapper';
      if (format === '9-16') videoPlayerBox.classList.add('aspect-9-16');
      if (format === '1-1') videoPlayerBox.classList.add('aspect-1-1');

      // Update Player Image to represent the avatar
      videoPlayerImg.src = chosenAv.img;
      videoPlayerImg.style.opacity = '0.85';

      // Deduct credits and save
      setCredits(credits - 20);

      const videoName = `Vídeo: ${chosenAv.name} (${style})`;
      const newVideoProject = {
        id: 'p-' + Date.now(),
        name: videoName,
        type: 'video',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `${format === '16-9' ? 'Horizontal (16:9)' : format === '9-16' ? 'Vertical (9:16)' : 'Cuadrado (1:1)'} • ${style}`
      };

      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push(newVideoProject);
      setLocal('sdl_projects', currentProjects);

      // Update Library Videos
      const currentVideos = getLocal('sdl_videos') || [];
      currentVideos.push({
        id: 'vid-' + Date.now(),
        name: videoName,
        avatarImg: chosenAv.img,
        format,
        script: script.slice(0, 100) + '...',
        date: new Date().toISOString().split('T')[0]
      });
      setLocal('sdl_videos', currentVideos);

      updateDashboardStats();
      
      showToast('Video Generado', 'Tu video ha sido renderizado y guardado.', 'success');
      showModal('Video Generado', '¡Tu producción de video con IA ha finalizado! Puedes ver la reproducción simulada en el reproductor de la derecha o descargarlo desde tu panel de Proyectos.', true);

      // Trigger automatic simulated play helper
      resetSimulatedVideo();
      playSimulatedVideo();

      videoCreationForm.reset();
    }, 4500);
  });
}

// Simulated video player logic
function resetSimulatedVideo() {
  clearInterval(simulatedVideoTimelineTimer);
  simulatedVideoSeconds = 0;
  isVideoPlaying = false;
  videoPlayBtn.className = 'fa-solid fa-play video-play-btn';
  videoTimelineFill.style.width = '0%';
  videoTimeLabel.textContent = '0:00 / 0:05';
  videoSubtitleTicker.classList.remove('active');
  videoSubtitleTicker.textContent = '';
}

function playSimulatedVideo() {
  if (isVideoPlaying) {
    clearInterval(simulatedVideoTimelineTimer);
    isVideoPlaying = false;
    videoPlayBtn.className = 'fa-solid fa-play video-play-btn';
    videoSubtitleTicker.classList.remove('active');
  } else {
    isVideoPlaying = true;
    videoPlayBtn.className = 'fa-solid fa-pause video-play-btn';
    videoSubtitleTicker.classList.add('active');
    
    // Split script in words to show progressive subtitle
    const scriptWords = currentGeneratedScriptText ? currentGeneratedScriptText.split(' ') : ['Iniciando', 'presentación', 'de', 'Synthetic', 'Digital', 'Lab', 'AI', 'Studio.'];
    const totalDuration = 5; // 5 seconds demo
    
    simulatedVideoTimelineTimer = setInterval(() => {
      simulatedVideoSeconds += 0.1;
      
      const progress = (simulatedVideoSeconds / totalDuration) * 100;
      videoTimelineFill.style.width = `${progress}%`;
      
      // Update time label
      const currentSecondsRounded = Math.floor(simulatedVideoSeconds);
      videoTimeLabel.textContent = `0:0${currentSecondsRounded} / 0:0${totalDuration}`;

      // Update subtitle ticker depending on time
      const wordCount = scriptWords.length;
      const index = Math.min(Math.floor((simulatedVideoSeconds / totalDuration) * wordCount), wordCount - 1);
      
      // Slice and show running text
      const currentTextSlice = scriptWords.slice(0, index + 3).join(' ');
      videoSubtitleTicker.textContent = currentTextSlice;

      if (simulatedVideoSeconds >= totalDuration) {
        resetSimulatedVideo();
        showToast('Fin de Reproducción', 'Simulación de video finalizada.', 'info');
      }
    }, 100);
  }
}

if (videoPlayBtn) {
  videoPlayBtn.addEventListener('click', playSimulatedVideo);
}

// ==========================================
// 3. CLONAR VOZ PANEL LOGIC
// ==========================================
const legalConsentCheckbox = document.getElementById('legalConsentCheckbox');
const voiceSubmitBtn = document.getElementById('voiceSubmitBtn');
const voiceUploadZone = document.getElementById('voiceUploadZone');
const voiceAudioInput = document.getElementById('voiceAudioInput');
const voiceFileName = document.getElementById('voiceFileName');
const voiceCloneForm = document.getElementById('voiceCloneForm');
const voiceProcessOverlay = document.getElementById('voiceProcessOverlay');
const voiceProcessLog = document.getElementById('voiceProcessLog');
const clonedVoicePlayerCard = document.getElementById('clonedVoicePlayerCard');
const clonedVoiceTitle = document.getElementById('clonedVoiceTitle');
const clonedVoiceSubtitle = document.getElementById('clonedVoiceSubtitle');
const clonedVoicePlayBtn = document.getElementById('clonedVoicePlayBtn');

let isConsentGiven = false;
let loadedVoiceFileUrl = null;
let audioSpeakRef = null;

if (legalConsentCheckbox && voiceSubmitBtn) {
  legalConsentCheckbox.addEventListener('change', (e) => {
    isConsentGiven = e.target.checked;
    voiceSubmitBtn.disabled = !isConsentGiven;
  });
}

// Voice file uploader binding
if (voiceUploadZone && voiceAudioInput) {
  voiceUploadZone.addEventListener('click', () => voiceAudioInput.click());
  
  voiceAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      voiceFileName.textContent = `Audio: ${file.name}`;
      loadedVoiceFileUrl = URL.createObjectURL(file);
    }
  });

  voiceUploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    voiceUploadZone.style.borderColor = 'var(--neon-blue)';
  });
  
  voiceUploadZone.addEventListener('dragleave', () => {
    voiceUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  });

  voiceUploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    voiceUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      voiceFileName.textContent = `Audio: ${file.name}`;
      loadedVoiceFileUrl = URL.createObjectURL(file);
    }
  });
}

// Form Submission for Voice Clone
if (voiceCloneForm) {
  voiceCloneForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!isConsentGiven) {
      showModal('Advertencia Legal', 'Debes confirmar bajo declaración de consentimiento legal que posees los derechos de clonación de la voz.', false);
      return;
    }

    const credits = getCredits();
    if (credits < 15) {
      showModal('Créditos Insuficientes', 'Necesitas al menos 15 créditos para realizar la clonación de voz.', false);
      return;
    }

    const name = document.getElementById('voiceNameInput').value.trim();
    const lang = document.getElementById('voiceLangSelect').value;
    const type = document.getElementById('voiceTypeSelect').value;

    // Trigger loader
    voiceProcessOverlay.classList.add('active');
    
    const steps = [
      { text: 'Extrayendo muestras de audio...', delay: 100 },
      { text: 'Aislando frecuencias del hablante...', delay: 800 },
      { text: 'Eliminando ruidos de fondo...', delay: 1600 },
      { text: 'Registrando fonemas de identidad vocal...', delay: 2400 },
      { text: 'Compilando modelo sintético...', delay: 3200 },
      { text: '¡Firma de voz clonada correctamente!', delay: 3800 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        voiceProcessLog.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      voiceProcessOverlay.classList.remove('active');
      
      // Update details card
      clonedVoicePlayerCard.style.display = 'flex';
      clonedVoiceTitle.textContent = `Voz: ${name}`;
      clonedVoiceSubtitle.textContent = `Voz Clonada • Idioma: ${lang} • ${type}`;

      // Deduct credits and save voice
      setCredits(credits - 15);

      const newVoice = {
        id: 'v-' + Date.now(),
        name: `Voz de ${name} (Clonada)`,
        lang,
        type,
        isDefault: false
      };

      const currentVoices = getLocal('sdl_voices') || [];
      currentVoices.push(newVoice);
      setLocal('sdl_voices', currentVoices);

      // Save to projects
      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push({
        id: 'p-' + Date.now(),
        name: `Clonación: ${name}`,
        type: 'audio',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `${lang} • Estilo ${type}`
      });
      setLocal('sdl_projects', currentProjects);

      updateDashboardStats();
      loadDropdowns();

      showToast('Voz Clonada', `"${name}" registrada correctamente.`, 'success');
      showModal('Clonación Completa', `¡Tu firma biométrica de voz "${name}" ha sido generada con éxito! Ya está disponible en tus selectores de Texto a Voz y Generador de Videos.`, true);

      // Reset form
      voiceCloneForm.reset();
      legalConsentCheckbox.checked = false;
      isConsentGiven = false;
      voiceSubmitBtn.disabled = true;
      voiceFileName.textContent = '';
    }, 4200);
  });
}

// Cloned Voice player simulation triggers actual browser SpeechSynthesis welcoming the user!
if (clonedVoicePlayBtn) {
  clonedVoicePlayBtn.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        clonedVoicePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      } else {
        clonedVoicePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        const utterance = new SpeechSynthesisUtterance('Hola. He clonado esta muestra vocal y ya está lista para leer cualquier texto que necesites.');
        utterance.lang = 'es-ES';
        utterance.rate = 1.0;
        
        // Visualizer bar animation trigger
        const bars = document.querySelectorAll('#view-voice-clone .visualizer-bar');
        bars.forEach(b => b.classList.add('active'));

        utterance.onend = () => {
          clonedVoicePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          bars.forEach(b => b.classList.remove('active'));
        };

        window.speechSynthesis.speak(utterance);
      }
    } else {
      showToast('Sintetizador no soportado', 'Tu navegador no admite reproducción de voz.', 'error');
    }
  });
}

// ==========================================
// 4. TEXTO A VOZ (TTS) REAL INTEGRATION
// ==========================================
const ttsForm = document.getElementById('ttsForm');
const ttsProcessOverlay = document.getElementById('ttsProcessOverlay');
const ttsProcessLog = document.getElementById('ttsProcessLog');
const ttsVisualizer = document.getElementById('ttsVisualizer');
const ttsPlayerCard = document.getElementById('ttsPlayerCard');
const ttsAudioTitle = document.getElementById('ttsAudioTitle');
const ttsAudioSubtitle = document.getElementById('ttsAudioSubtitle');
const ttsPlayBtn = document.getElementById('ttsPlayBtn');
const ttsAudioDuration = document.getElementById('ttsAudioDuration');

const ttsSpeedInput = document.getElementById('ttsSpeedInput');
const ttsSpeedVal = document.getElementById('ttsSpeedVal');
const ttsPitchInput = document.getElementById('ttsPitchInput');
const ttsPitchVal = document.getElementById('ttsPitchVal');

let currentTTSUtteranceText = "";
let currentTTSSpeed = 1.0;
let currentTTSPitch = 1.0;
let currentTTSVoiceIndex = 0;

// Speed slider
if (ttsSpeedInput && ttsSpeedVal) {
  ttsSpeedInput.addEventListener('input', (e) => {
    ttsSpeedVal.textContent = e.target.value;
    currentTTSSpeed = parseFloat(e.target.value);
  });
}

// Pitch slider
if (ttsPitchInput && ttsPitchVal) {
  ttsPitchInput.addEventListener('input', (e) => {
    ttsPitchVal.textContent = e.target.value;
    currentTTSPitch = parseFloat(e.target.value);
  });
}

// Populate real browser voices into options in addition to cloned ones
function populateTtsBrowserVoices() {
  if ('speechSynthesis' in window) {
    const defaultVoiceSelect = document.getElementById('ttsLangSelect');
    if (!defaultVoiceSelect) return;
    
    // Clear list
    defaultVoiceSelect.innerHTML = '';
    
    const voices = window.speechSynthesis.getVoices();
    
    // Find Spanish voices and show first, then English, etc.
    const sorted = [...voices].sort((a, b) => {
      if (a.lang.includes('es') && !b.lang.includes('es')) return -1;
      if (!a.lang.includes('es') && b.lang.includes('es')) return 1;
      return 0;
    });

    sorted.forEach((voice, index) => {
      const opt = document.createElement('option');
      opt.value = index;
      opt.textContent = `${voice.name} (${voice.lang})`;
      defaultVoiceSelect.appendChild(opt);
    });
  }
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = populateTtsBrowserVoices;
  populateTtsBrowserVoices();
}

// Form Submit
if (ttsForm) {
  ttsForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const credits = getCredits();
    if (credits < 2) {
      showModal('Créditos Insuficientes', 'Necesitas al menos 2 créditos para generar locución de audio.', false);
      return;
    }

    const text = document.getElementById('ttsTextInput').value.trim();
    const chosenVoiceId = document.getElementById('ttsVoiceSelect').value;
    const browserVoiceIdx = document.getElementById('ttsLangSelect').value;

    currentTTSUtteranceText = text;
    currentTTSVoiceIndex = browserVoiceIdx;

    // Trigger overlay animation
    ttsProcessOverlay.classList.add('active');
    
    const steps = [
      { text: 'Procesando texto...', delay: 100 },
      { text: 'Ajustando modulación y entonación...', delay: 800 },
      { text: 'Generando locución artificial...', delay: 1500 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        ttsProcessLog.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      ttsProcessOverlay.classList.remove('active');
      
      // Update details card
      ttsPlayerCard.style.display = 'flex';
      
      const voices = getLocal('sdl_voices') || [];
      const selectedVoice = voices.find(v => v.id === chosenVoiceId) || { name: 'Voz Estándar' };
      ttsAudioTitle.textContent = `Locución: ${selectedVoice.name}`;
      ttsAudioSubtitle.textContent = `Sintetizado • ${text.slice(0, 30)}...`;
      
      // Calculate average duration based on words count
      const wordCount = text.split(' ').length;
      const durationSeconds = Math.max(2, Math.round(wordCount / 2.5)); // 2.5 words per second
      ttsAudioDuration.textContent = `0:${durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}`;

      // Deduct credits and save
      setCredits(credits - 2);

      const audName = `Locución: ${selectedVoice.name}`;
      const newAudioProject = {
        id: 'p-' + Date.now(),
        name: audName,
        type: 'audio',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `Voz: ${selectedVoice.name} • ${wordCount} Palabras`
      };

      // Add to projects list
      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push(newAudioProject);
      setLocal('sdl_projects', currentProjects);

      // Add to Library Audios
      const currentAudios = getLocal('sdl_audios') || [];
      currentAudios.push({
        id: 'aud-' + Date.now(),
        name: audName,
        text: text,
        date: new Date().toISOString().split('T')[0]
      });
      setLocal('sdl_audios', currentAudios);

      updateDashboardStats();
      
      showToast('Audio Generado', 'Firma de audio lista para reproducirse.', 'success');
      showModal('Locución Sintetizada', '¡La locución se ha generado correctamente! Haz clic en el botón de play para reproducir el audio utilizando la síntesis nativa de tu navegador.', true);

      ttsForm.reset();
      ttsSpeedVal.textContent = '1.0';
      ttsPitchVal.textContent = '1.0';
    }, 2000);
  });
}

// Speak locution audio trigger
if (ttsPlayBtn) {
  ttsPlayBtn.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        ttsPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        // Stop visualizer animation
        const bars = document.querySelectorAll('#ttsVisualizer .visualizer-bar');
        bars.forEach(b => b.classList.remove('active'));
      } else {
        ttsPlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        const utterance = new SpeechSynthesisUtterance(currentTTSUtteranceText || 'Estudio de Inteligencia Artificial de Synthetic Digital Labs.');
        
        // Load browser voice if index selected
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0 && currentTTSVoiceIndex !== null) {
          const sorted = [...voices].sort((a, b) => {
            if (a.lang.includes('es') && !b.lang.includes('es')) return -1;
            if (!a.lang.includes('es') && b.lang.includes('es')) return 1;
            return 0;
          });
          utterance.voice = sorted[currentTTSVoiceIndex];
        }

        utterance.rate = currentTTSSpeed;
        utterance.pitch = currentTTSPitch;

        // Visualizer bar animation
        const bars = document.querySelectorAll('#ttsVisualizer .visualizer-bar');
        bars.forEach(b => b.classList.add('active'));

        utterance.onend = () => {
          ttsPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          bars.forEach(b => b.classList.remove('active'));
        };

        window.speechSynthesis.speak(utterance);
      }
    } else {
      showToast('SpeechSynthesis no disponible', 'Tu navegador no permite la síntesis de voz.', 'error');
    }
  });
}

// ==========================================
// 5. GENERADOR DE GUIONES PANEL LOGIC
// ==========================================
const scriptForm = document.getElementById('scriptForm');
const scriptProcessOverlay = document.getElementById('scriptProcessOverlay');
const scriptProcessLog = document.getElementById('scriptProcessLog');
const scriptOutputTextarea = document.getElementById('scriptOutputTextarea');
const copyScriptBtn = document.getElementById('copyScriptBtn');
const sendScriptToVideoBtn = document.getElementById('sendScriptToVideoBtn');

const SCRIPT_TEMPLATES = {
  'video-corto': (topic, tone) => {
    return `[GUION PARA VIDEO CORTO - TIPO REEL/TIKTOK]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 30-60 segundos

[0:00 - GANCHO]
(Visual: Primer plano dinámico, cara expresiva)
"¿Sabías que la mayoría de las personas comete este grave error al iniciar con ${topic}? ¡Sí, yo también caí ahí!"

[0:10 - DESARROLLO]
(Visual: Texto emergente en pantalla y gestos rápidos)
"El truco no está en esforzarse el doble. Está en cambiar el enfoque. Aquí tienes los 3 pasos esenciales para dominarlo y lograr resultados de inmediato de forma inteligente:"

[0:20 - CLAVE]
(Visual: Mostrar gráfico o avatar señalando el fondo)
"Paso 1: Define tu objetivo.
Paso 2: Automatiza lo repetitivo.
Paso 3: Mide tus conversiones."

[0:45 - ACCIÓN (CTA)]
(Visual: Apuntar con el dedo hacia abajo en pantalla)
"Si quieres llevar esto al siguiente nivel, haz clic en el enlace de mi perfil y regístrate hoy mismo. ¡No te quedes fuera!"`;
  },
  'anuncio': (topic, tone) => {
    return `[GUION COMERCIAL - ANUNCIO DE PRODUCTO]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 60 segundos

[0:00 - EMPATÍA / PROBLEMA]
(Música de fondo: Tensa y sutil. Visual: Presentador serio)
"Sabemos lo frustrante que es perder horas de trabajo intentando resolver ${topic} sin ver una sola conversión real."

[0:15 - INTRODUCCIÓN DE LA SOLUCIÓN]
(Música cambia a: Alegre e inspiradora. Visual: Presentador sonríe)
"Por eso creamos una plataforma revolucionaria. Te presentamos la solución definitiva diseñada para automatizar todo el proceso y dejar atrás las complicaciones de una vez por todas."

[0:30 - BENEFICIOS / PRUEBA]
(Visual: Texto e iconos emergentes en color cyan)
"Con nuestra tecnología vas a poder:
- Reducir tus costos hasta en un 80%.
- Escalar tu producción sin contratar más personal.
- Tener soporte especializado 24/7 en español."

[0:48 - OFERTA Y LLAMADO A LA ACCIÓN]
(Visual: Mostrar botón virtual en pantalla)
"Inicia hoy tu prueba completamente gratuita y comprueba los resultados por ti mismo. Visita nuestro sitio web oficial en syntheticdigitallab.com."`;
  },
  'podcast': (topic, tone) => {
    return `[GUION DE PODCAST - INTRODUCCIÓN Y TEMARIO]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 2-3 minutos

[0:00 - INTRO CLÁSICA PODCAST]
(Efecto de sonido: Entrada de música suave - Fade out)
"Hola a todos y bienvenidos a un nuevo episodio de Innovación Digital. Hoy tenemos un tema caliente sobre la mesa que está cambiando el juego por completo: vamos a hablar a fondo sobre ${topic}."

[0:45 - DESGLOSE DE TEMARIO]
(Visual: Plano medio con fondo cyberpunk relajado)
"En este episodio analizaremos:
1. El origen del problema y por qué los métodos clásicos ya no funcionan.
2. Casos de éxito reales de empresas que implementaron soluciones tecnológicas.
3. El futuro del sector y cómo prepararte para la próxima ola digital."

[1:45 - DIÁLOGO / ENGAGE]
(Visual: Presentador gesticula cómodamente)
"Queremos leer sus comentarios. Cuéntennos en la caja de opiniones cuál ha sido su mayor reto con este tema. Quédense con nosotros porque lo que viene a continuación les va a volar la cabeza. ¡Comenzamos!"`;
  },
  'presentacion': (topic, tone) => {
    return `[GUION DE PRESENTACIÓN DE MARCA / STARTUP]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 90 segundos

[0:00 - MISIÓN Y VISIÓN]
"En Synthetic Digital Labs, creemos que la tecnología no debería ser una barrera, sino el motor que impulse tus ideas. Nuestra misión con ${topic} es clara: democratizar la creación digital."

[0:25 - EL VALOR AGREGADO]
"Hemos construido un ecosistema SaaS potente, accesible y extremadamente rápido. Un lugar donde cualquier emprendedor o corporación puede dar el salto al futuro digital sin complicaciones."

[0:50 - NUESTRO COMPROMISO]
"Detrás de cada línea de código y cada avatar sintético, hay un equipo comprometido con tu éxito. Porque cuando tú creces, nosotros también."

[1:15 - CONTACTO FINAL]
"Llegó el momento de transformar tu negocio. Escríbenos a infoweb@syntheticdigitallab.com y diseñemos tu futuro hoy."`;
  },
  'ventas': (topic, tone) => {
    return `[GUION DE VÍDEO EXPLICATIVO DE VENTAS (VSL)]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 3 minutos o más

[SECCIÓN 1: CAPTAR ATENCIÓN]
"Si eres dueño de negocio y estás buscando escalar, presta atención por los próximos 2 minutos. Te voy a revelar el método exacto para resolver ${topic} sin quemar tu presupuesto."

[SECCIÓN 2: AGITAR EL DOLOR]
"Seguramente has intentado contratar agencias, comprar herramientas caras y el resultado siempre es el mismo: frustración y dinero perdido. Eso pasa porque no estás usando automatización inteligente."

[SECCIÓN 3: LA REVELACIÓN]
"Nuestra plataforma te da el control total. Accede a herramientas listas para usar que configuran tu ecosistema en minutos y comienzan a capturar leads en piloto automático."

[SECCIÓN 4: CIERRE Y LLAMADO DE ACCIÓN]
"Esta oferta no estará disponible para siempre. Agenda una sesión estratégica personalizada hoy y reclama un 20% de descuento en tu plan Pro."`;
  },
  'educativo': (topic, tone) => {
    return `[GUION PARA TUTORIAL INSTRUCTIVO / EDUCATIVO]
TEMA: ${topic}
TONO: ${tone}
DURACIÓN: 2-3 minutos

[0:00 - PRESENTACIÓN DEL OBJETIVO]
"Hola alumnos, bienvenidos a esta clase práctica. Hoy aprenderemos de manera sencilla los fundamentos de ${topic} y cómo aplicarlos paso a paso."

[0:20 - PASO A PASO EXPLICATIVO]
"Comencemos por el concepto básico. ¿Qué es y por qué es tan relevante?
(Visual: Mostrar pizarra virtual o esquemas interactivos)
A continuación, realizaremos la primera configuración básica:
Paso 1: Abrir el panel de control.
Paso 2: Asignar las variables de entorno.
Paso 3: Validar la salida en la consola de depuración."

[1:30 - RESUMEN DE LA CLASE]
"En resumen, recuerden siempre verificar que la base de datos esté sincronizada antes de compilar. Esto les ahorrará el 90% de los errores comunes."

[2:00 - TAREA / CIERRE]
"Descarguen el material de apoyo en el enlace y nos vemos en la próxima sesión. ¡Buen código!"`;
  }
};

if (scriptForm) {
  scriptForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const type = document.getElementById('scriptTypeSelect').value;
    const topic = document.getElementById('scriptTopicInput').value.trim();
    const tone = document.getElementById('scriptToneSelect').value;
    const duration = document.getElementById('scriptDurationSelect').value;

    scriptProcessOverlay.classList.add('active');

    const steps = [
      { text: 'Analizando el tema comercial...', delay: 100 },
      { text: 'Estructurando gancho y CTA...', delay: 800 },
      { text: 'Redactando borrador de guión...', delay: 1500 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        scriptProcessLog.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      scriptProcessOverlay.classList.remove('active');

      // Generate script using template helper
      const templateFn = SCRIPT_TEMPLATES[type] || SCRIPT_TEMPLATES['video-corto'];
      const scriptOutput = templateFn(topic, tone);

      scriptOutputTextarea.value = scriptOutput;
      
      // Enable CTA actions
      sendScriptToVideoBtn.disabled = false;

      // Save to projects
      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push({
        id: 'p-' + Date.now(),
        name: `Guión: ${topic.slice(0, 20)}...`,
        type: 'guion',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `${type.toUpperCase()} • Tono ${tone}`
      });
      setLocal('sdl_projects', currentProjects);

      // Save to Library Scripts
      const currentScripts = getLocal('sdl_scripts') || [];
      currentScripts.push({
        id: 'sc-' + Date.now(),
        name: `Guión: ${topic.slice(0, 25)}`,
        content: scriptOutput,
        date: new Date().toISOString().split('T')[0]
      });
      setLocal('sdl_scripts', currentScripts);

      updateDashboardStats();

      showToast('Guión Redactado', 'Tu guión está listo y guardado.', 'success');
    }, 2000);
  });
}

// Copy script to clipboard
if (copyScriptBtn) {
  copyScriptBtn.addEventListener('click', () => {
    const text = scriptOutputTextarea.value;
    if (!text) {
      showToast('Error al copiar', 'No hay ningún guión redactado.', 'error');
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      showToast('Copiado al Portapapeles', 'Guión copiado de forma exitosa.', 'success');
    }).catch(() => {
      showToast('Error', 'No se pudo acceder al portapapeles.', 'error');
    });
  });
}

// Send script to video view
if (sendScriptToVideoBtn) {
  sendScriptToVideoBtn.addEventListener('click', () => {
    const text = scriptOutputTextarea.value;
    const videoTextarea = document.getElementById('videoScriptTextarea');
    
    if (videoTextarea && text) {
      // Clean script metadata labels for readability in video creator
      const cleanText = text.replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '').trim();
      videoTextarea.value = cleanText;
      
      switchView('video-avatar');
      showToast('Guión Importado', 'El texto se ha copiado en el creador de video.', 'success');
    }
  });
}

// ==========================================
// 6. TRADUCTOR DE VOZ PANEL LOGIC
// ==========================================
const translateForm = document.getElementById('translateForm');
const translateProcessOverlay = document.getElementById('translateProcessOverlay');
const translateProcessLog = document.getElementById('translateProcessLog');
const translateUploadZone = document.getElementById('translateUploadZone');
const translateAudioInput = document.getElementById('translateAudioInput');
const translateFileName = document.getElementById('translateFileName');
const translatePlayerCard = document.getElementById('translatePlayerCard');
const translateAudioTitle = document.getElementById('translateAudioTitle');
const translateAudioSubtitle = document.getElementById('translateAudioSubtitle');
const translatePlayBtn = document.getElementById('translatePlayBtn');

let loadedTranslateAudioUrl = null;

if (translateUploadZone && translateAudioInput) {
  translateUploadZone.addEventListener('click', () => translateAudioInput.click());
  
  translateAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      translateFileName.textContent = `Archivo: ${file.name}`;
      loadedTranslateAudioUrl = URL.createObjectURL(file);
    }
  });

  translateUploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    translateUploadZone.style.borderColor = 'var(--neon-blue)';
  });
  
  translateUploadZone.addEventListener('dragleave', () => {
    translateUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
  });

  translateUploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    translateUploadZone.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      translateFileName.textContent = `Archivo: ${file.name}`;
      loadedTranslateAudioUrl = URL.createObjectURL(file);
    }
  });
}

if (translateForm) {
  translateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const credits = getCredits();
    if (credits < 5) {
      showModal('Créditos Insuficientes', 'Necesitas al menos 5 créditos para traducir audio.', false);
      return;
    }

    const sourceLang = document.getElementById('translateSourceLangSelect').value;
    const targetLang = document.getElementById('translateTargetLangSelect').value;
    const keepStyle = document.getElementById('translateCloneStyle').checked;

    translateProcessOverlay.classList.add('active');

    const steps = [
      { text: 'Transcribiendo audio original...', delay: 100 },
      { text: 'Traduciendo bloque semántico...', delay: 800 },
      { text: 'Clonando entonación del hablante...', delay: 1600 },
      { text: 'Sintetizando pista traducida...', delay: 2400 },
      { text: '¡Traducción completada con éxito!', delay: 3000 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        translateProcessLog.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      translateProcessOverlay.classList.remove('active');

      translatePlayerCard.style.display = 'flex';
      translateAudioTitle.textContent = `Audio Traducido (${targetLang.toUpperCase()})`;
      translateAudioSubtitle.textContent = `Idioma origen: ${sourceLang.toUpperCase()} • Estilo clonado`;

      // Deduct credits and save
      setCredits(credits - 5);

      const transName = `Traducción: ${sourceLang.toUpperCase()} a ${targetLang.toUpperCase()}`;
      // Add to projects list
      const currentProjects = getLocal('sdl_projects') || [];
      currentProjects.push({
        id: 'p-' + Date.now(),
        name: transName,
        type: 'audio',
        date: new Date().toISOString().split('T')[0],
        status: 'Completado',
        details: `Traducción ${sourceLang.toUpperCase()} a ${targetLang.toUpperCase()}`
      });
      setLocal('sdl_projects', currentProjects);

      updateDashboardStats();

      showToast('Audio Traducido', 'Traducción completada con éxito.', 'success');
      showModal('Audio Traducido', '¡La traducción de voz se ha completado! Puedes escuchar el resultado simulado en inglés/español con el reproductor de la derecha.', true);

      translateForm.reset();
      translateFileName.textContent = '';
    }, 3500);
  });
}

// Speak translation voice trigger
if (translatePlayBtn) {
  translatePlayBtn.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        translatePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        const bars = document.querySelectorAll('#translateVisualizer .visualizer-bar');
        bars.forEach(b => b.classList.remove('active'));
      } else {
        translatePlayBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        // Translate visual greeting based on targets
        const targetLang = document.getElementById('translateTargetLangSelect') ? document.getElementById('translateTargetLangSelect').value : 'en';
        let speechText = "Hello! I am speaking with the voice identity translated to English.";
        let speakLocale = "en-US";
        
        if (targetLang === 'es') {
          speechText = "Hola, estoy hablando en español con el tono de voz original.";
          speakLocale = "es-ES";
        } else if (targetLang === 'pt') {
          speechText = "Olá, estou falando em português com a voz clonada.";
          speakLocale = "pt-BR";
        } else if (targetLang === 'fr') {
          speechText = "Bonjour, je parle français avec le timbre de voix d'origine.";
          speakLocale = "fr-FR";
        }

        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.lang = speakLocale;

        const bars = document.querySelectorAll('#translateVisualizer .visualizer-bar');
        bars.forEach(b => b.classList.add('active'));

        utterance.onend = () => {
          translatePlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          bars.forEach(b => b.classList.remove('active'));
        };

        window.speechSynthesis.speak(utterance);
      }
    } else {
      showToast('Sintetizador no disponible', 'Tu navegador no permite la síntesis de voz.', 'error');
    }
  });
}

// Download translated audio mock click
const translateDownloadBtn = document.getElementById('translateDownloadBtn');
if (translateDownloadBtn) {
  translateDownloadBtn.addEventListener('click', () => {
    showToast('Descarga Iniciada', 'El archivo de audio traducido se está descargando.', 'success');
  });
}

// ==========================================
// 7. EDITOR DE PROYECTOS PANEL LOGIC
// ==========================================
const projectsGrid = document.getElementById('projectsGrid');
const projectSearchInput = document.getElementById('projectSearchInput');

function renderProjectsList() {
  if (!projectsGrid) return;

  const projects = getLocal('sdl_projects') || [];
  const searchQuery = projectSearchInput ? projectSearchInput.value.toLowerCase().trim() : '';
  
  projectsGrid.innerHTML = '';

  const filtered = projects.filter(p => p.name.toLowerCase().includes(searchQuery));

  if (filtered.length === 0) {
    projectsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:var(--text-muted)">No se encontraron proyectos.</div>`;
    return;
  }

  // Render cards
  filtered.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card glass-card';
    card.innerHTML = `
      <div class="project-card-header">
        <span class="project-badge-type">${proj.type}</span>
        <span class="project-status">
          <span class="pulse-dot cyan" style="width:6px; height:6px;"></span>
          ${proj.status}
        </span>
      </div>
      <h4>${proj.name}</h4>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom: 8px;">${proj.details}</p>
      <div class="project-date"><i class="fa-regular fa-calendar"></i> Creado: ${proj.date}</div>
      <div class="project-card-footer">
        <div class="project-actions-btns">
          <button class="project-action-btn btn-download-project" data-id="${proj.id}" title="Descargar"><i class="fa-solid fa-download"></i></button>
          <button class="project-action-btn delete-btn btn-delete-project" data-id="${proj.id}" title="Eliminar"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    `;
    projectsGrid.appendChild(card);
  });

  // Re-bind actions
  document.querySelectorAll('.btn-download-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showToast('Descargando archivo', 'Tu archivo de alta definición se está procesando...', 'info');
    });
  });

  document.querySelectorAll('.btn-delete-project').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      deleteProject(id);
    });
  });
}

function deleteProject(id) {
  const current = getLocal('sdl_projects') || [];
  const updated = current.filter(p => p.id !== id);
  setLocal('sdl_projects', updated);
  
  renderProjectsList();
  renderDashboardActivity();
  updateDashboardStats();
  
  showToast('Proyecto Eliminado', 'El proyecto ha sido borrado de la lista.', 'info');
}

if (projectSearchInput) {
  projectSearchInput.addEventListener('input', renderProjectsList);
}

// ==========================================
// 8. BIBLIOTECA PANEL LOGIC (TABS)
// ==========================================
const libTabBtns = document.querySelectorAll('.lib-tab-btn');
const libTabPanels = document.querySelectorAll('.library-tab-panel');

libTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    
    libTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    libTabPanels.forEach(panel => {
      if (panel.id === `tab-panel-${tabName}`) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    renderLibraryTab(tabName);
  });
});

function renderLibrary() {
  const activeTab = document.querySelector('.lib-tab-btn.active');
  if (activeTab) {
    renderLibraryTab(activeTab.dataset.tab);
  }
}

function renderLibraryTab(tabName) {
  const gridId = `lib${tabName.charAt(0).toUpperCase() + tabName.slice(1)}Grid`;
  const gridEl = document.getElementById(gridId);
  if (!gridEl) return;

  gridEl.innerHTML = '';

  if (tabName === 'avatars') {
    const items = getLocal('sdl_avatars') || [];
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'lib-card glass-card';
      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="lib-avatar-img">
        <h4 class="lib-card-title">${item.name}</h4>
        <span class="lib-card-subtitle">${item.style}</span>
        <div class="lib-card-actions">
          <button class="btn-danger btn-delete-lib-item" data-type="avatars" data-id="${item.id}" style="width:100%;"><i class="fa-solid fa-trash"></i> Borrar</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  } 
  
  else if (tabName === 'voices') {
    const items = getLocal('sdl_voices') || [];
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'lib-card glass-card';
      card.innerHTML = `
        <div class="tool-icon" style="margin: 0 auto 16px auto;"><i class="fa-solid fa-microphone-lines"></i></div>
        <h4 class="lib-card-title">${item.name}</h4>
        <span class="lib-card-subtitle">${item.lang} • ${item.type}</span>
        <div class="lib-card-actions">
          <button class="btn-danger btn-delete-lib-item" data-type="voices" data-id="${item.id}" style="width:100%;" ${item.isDefault ? 'disabled title="Voz del sistema por defecto"' : ''}><i class="fa-solid fa-trash"></i> Borrar</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }
  
  else if (tabName === 'videos') {
    const items = getLocal('sdl_videos') || [];
    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; color:var(--text-muted)">Aún no tienes videos guardados en la biblioteca.</div>`;
      return;
    }
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'lib-card glass-card';
      card.innerHTML = `
        <img src="${item.avatarImg}" alt="${item.name}" class="lib-avatar-img" style="border-radius:10px; height: 90px; width: auto; aspect-ratio: 16/9; object-fit: cover;">
        <h4 class="lib-card-title">${item.name}</h4>
        <span class="lib-card-subtitle">${item.date}</span>
        <div class="lib-card-actions">
          <button class="btn-danger btn-delete-lib-item" data-type="videos" data-id="${item.id}" style="width:100%;"><i class="fa-solid fa-trash"></i> Borrar</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  else if (tabName === 'audios') {
    const items = getLocal('sdl_audios') || [];
    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; color:var(--text-muted)">Aún no tienes audios guardados en la biblioteca.</div>`;
      return;
    }
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'lib-card glass-card';
      card.innerHTML = `
        <div class="tool-icon" style="margin: 0 auto 16px auto;"><i class="fa-solid fa-headphones"></i></div>
        <h4 class="lib-card-title">${item.name}</h4>
        <span class="lib-card-subtitle">${item.date}</span>
        <div class="lib-card-actions">
          <button class="btn-danger btn-delete-lib-item" data-type="audios" data-id="${item.id}" style="width:100%;"><i class="fa-solid fa-trash"></i> Borrar</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  else if (tabName === 'scripts') {
    const items = getLocal('sdl_scripts') || [];
    if (items.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; color:var(--text-muted)">Aún no tienes guiones redactados en la biblioteca.</div>`;
      return;
    }
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'lib-card glass-card';
      card.innerHTML = `
        <div class="tool-icon" style="margin: 0 auto 16px auto;"><i class="fa-solid fa-file-invoice"></i></div>
        <h4 class="lib-card-title">${item.name}</h4>
        <span class="lib-card-subtitle">${item.date}</span>
        <div class="lib-card-actions">
          <button class="btn-danger btn-delete-lib-item" data-type="scripts" data-id="${item.id}" style="width:100%;"><i class="fa-solid fa-trash"></i> Borrar</button>
        </div>
      `;
      gridEl.appendChild(card);
    });
  }

  // Bind deletion buttons inside library grids
  document.querySelectorAll('.btn-delete-lib-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const type = btn.dataset.type;
      deleteLibraryItem(type, id);
    });
  });
}

function deleteLibraryItem(type, id) {
  const current = getLocal(`sdl_${type}`) || [];
  const updated = current.filter(item => item.id !== id);
  setLocal(`sdl_${type}`, updated);
  
  renderLibraryTab(type.replace('sdl_', ''));
  updateDashboardStats();
  loadDropdowns();
  
  showToast('Elemento Eliminado', 'El recurso ha sido eliminado de tu biblioteca.', 'info');
}

// ==========================================
// 9. CONFIGURACIÓN PANEL LOGIC
// ==========================================
const settingsProfileForm = document.getElementById('settingsProfileForm');
const settingsNameInput = document.getElementById('settingsNameInput');
const settingsEmailInput = document.getElementById('settingsEmailInput');

// Load profile values on view
settingsNameInput.value = localStorage.getItem('sdl_username') || 'Usuario SDL';
settingsEmailInput.value = localStorage.getItem('sdl_email') || 'usuario@syntheticdigitallab.com';

if (settingsProfileForm) {
  settingsProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = settingsNameInput.value.trim();
    const email = settingsEmailInput.value.trim();

    localStorage.setItem('sdl_username', name);
    localStorage.setItem('sdl_email', email);

    // Update sidebar text
    document.getElementById('sidebarUsername').textContent = name;
    
    showToast('Configuración Guardada', 'Tus datos de perfil han sido actualizados.', 'success');
  });
}

// Copy developer API Key trigger
const btnCopyApiKey = document.getElementById('btnCopyApiKey');
if (btnCopyApiKey) {
  btnCopyApiKey.addEventListener('click', () => {
    const keyVal = document.getElementById('configApiKeyInput').value;
    navigator.clipboard.writeText(keyVal).then(() => {
      showToast('Clave Copiada', 'Clave API copiada al portapapeles.', 'success');
    });
  });
}

// Initialize dynamic credit displays on initial entry
updateCreditsDisplay();

// ==========================================
// NEURAL NETWORK INTERACTIVE CANVAS BACKGROUND
// ==========================================
const canvas = document.getElementById('neuralCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 50;
  const connectionDistance = 110;
  const mouse = { x: null, y: null, radius: 150 };

  // Set Canvas Size
  function resizeCanvas() {
    if (!publicLanding || publicLanding.style.display === 'none') return;
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Mouse tracking
  window.addEventListener('mousemove', (e) => {
    if (publicLanding && publicLanding.style.display === 'none') return;
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 1.5 + 1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#bd00ff';
      ctx.shadowBlur = 4;
      ctx.shadowColor = '#bd00ff';
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 0.3;
          this.y += (dy / dist) * force * 0.3;
        }
      }
    }
  }

  // Init
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    if (publicLanding && publicLanding.style.display === 'none') {
      requestAnimationFrame(animate);
      return;
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.12;
          ctx.strokeStyle = '#00d2ff';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.globalAlpha = alpha;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// FAQ ACCORDION HANDLER
// ==========================================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const trigger = item.querySelector('.faq-trigger');
  const content = item.querySelector('.faq-content');

  if (trigger && content) {
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});

// ==========================================
// CONTACT FORM SUBMISSION
// ==========================================
const contactForm = document.getElementById('contactForm');
const contactFormStatus = document.getElementById('contactFormStatus');

if (contactForm && contactFormStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    
    contactFormStatus.className = 'form-status-message success';
    contactFormStatus.style.display = 'block';
    contactFormStatus.innerHTML = `<strong>¡Muchas gracias, ${name}!</strong> Tu solicitud para el servicio de <em>${subject}</em> ha sido recibida. Nos comunicaremos contigo a <strong>${email}</strong> en menos de 24 horas.`;
    
    contactForm.reset();
    
    setTimeout(() => {
      contactFormStatus.style.display = 'none';
    }, 6000);
  });
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('open')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}

// ==========================================
// VIRTUAL VOICE AGENT "NOVA" (JARVIS/SIRI STYLE)
// ==========================================
class NovaAssistant {
  constructor() {
    this.agentContainer = document.getElementById('novaAgent');
    this.bubbleText = document.getElementById('novaBubbleText');
    this.guideBanner = document.getElementById('novaGuideBanner');
    this.closeBannerBtn = document.getElementById('closeGuideBanner');
    this.avatarImg = this.agentContainer ? this.agentContainer.querySelector('.nova-robot-char') : null;
    
    this.recognition = null;
    this.voices = [];
    this.sleepTimer = null;
    this.state = 'sleep'; // 'sleep', 'listening', 'speaking'
    this.firstInteractionDone = false;
    this.micPermissionDenied = false;

    if (!this.agentContainer) return;

    this.initSpeechSynthesis();
    this.initSpeechRecognition();
    this.bindEvents();
  }

  initSpeechSynthesis() {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        this.voices = window.speechSynthesis.getVoices();
      };
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }

  initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'es-ES';

      this.recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        console.log('[Nova Speech Input]:', transcript);
        this.handleSpeechInput(transcript);
      };

      this.recognition.onerror = (event) => {
        console.error('[Nova Speech Error]:', event.error);
        if (event.error === 'not-allowed') {
          this.micPermissionDenied = true;
          this.updateBubble('Micrófono bloqueado. Tócame para intentar activarlo.');
          this.setState('sleep');
        }
      };

      this.recognition.onend = () => {
        // Auto-restart if we are in listening or sleep state, and permission is not denied
        if (!this.micPermissionDenied && (this.state === 'sleep' || this.state === 'listening')) {
          this.startListening();
        }
      };
    } else {
      console.log('[Nova]: Speech Recognition not supported in this browser.');
      this.updateBubble('Control por voz no soportado.');
    }
  }

  startListening() {
    if (!this.recognition) return;
    try {
      this.recognition.start();
    } catch (e) {
      // Ignored if already started
    }
  }

  stopListening() {
    if (!this.recognition) return;
    try {
      this.recognition.stop();
    } catch (e) {
      // Ignored if already stopped
    }
  }

  bindEvents() {
    // Close Banner Event
    if (this.closeBannerBtn && this.guideBanner) {
      this.closeBannerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.guideBanner.style.display = 'none';
      });
    }

    // Clicking the guide banner wakes up Nova manually
    if (this.guideBanner) {
      this.guideBanner.addEventListener('click', (e) => {
        if (e.target !== this.closeBannerBtn && e.target.parentElement !== this.closeBannerBtn) {
          this.wakeUp();
        }
      });
    }

    // Clicking the avatar resets wake timer and talks
    const avatarWrapper = this.agentContainer.querySelector('.nova-avatar-wrapper');
    if (avatarWrapper) {
      avatarWrapper.addEventListener('click', (e) => {
        e.stopPropagation();
        this.wakeUp();
      });
    }

    // Start passive recognition in background upon any first scroll/click/touch
    const startPassiveRecognition = () => {
      if (!this.firstInteractionDone) {
        this.firstInteractionDone = true;
        this.startListening();
        console.log('[Nova]: Background listening started.');
        
        // Remove listeners
        window.removeEventListener('click', startPassiveRecognition);
        window.removeEventListener('scroll', startPassiveRecognition);
        window.removeEventListener('touchstart', startPassiveRecognition);
      }
    };
    window.addEventListener('click', startPassiveRecognition);
    window.addEventListener('scroll', startPassiveRecognition);
    window.addEventListener('touchstart', startPassiveRecognition);
  }

  setState(newState) {
    this.state = newState;
    if (newState === 'sleep') {
      this.agentContainer.className = 'nova-siri-container hidden';
    } else {
      this.agentContainer.className = `nova-siri-container state-${newState}`;
    }
  }

  updateBubble(text) {
    if (this.bubbleText) {
      this.bubbleText.textContent = text;
    }
  }

  wakeUp() {
    this.micPermissionDenied = false;
    
    // Slide up robot from bottom center
    this.agentContainer.classList.remove('hidden');
    this.setState('listening');
    this.updateBubble('¿En qué puedo ayudarte?');
    
    this.speak('Hola. Bienvenido a Synthetic Digital Labs. ¿En qué te puedo ayudar hoy?', true);
  }

  goToSleep() {
    this.setState('sleep');
    this.updateBubble('Hasta luego.');
    
    if ('speechSynthesis' in window) {
      this.speak('De nada. Si me necesitas de nuevo, solo dime "Hola Nova". ¡Que tengas un gran día!', false);
    } else {
      setTimeout(() => {
        if (this.state === 'sleep') {
          this.agentContainer.classList.add('hidden');
          this.startListening();
        }
      }, 1200);
    }
  }

  speak(text, keepActive = true) {
    if (!('speechSynthesis' in window)) {
      this.updateBubble(text);
      this.setState(keepActive ? 'listening' : 'sleep');
      return;
    }

    // STOP MICROPHONE FIRST
    this.stopListening();

    // CRITICAL COLLISION FIX: Set state to speaking IMMEDIATELY (synchronously)
    // so the mic's onend event knows we are speaking and does NOT auto-restart!
    this.setState('speaking');

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find Spanish voice
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }
    const esVoice = this.voices.find(v => v.lang.includes('es') || v.lang.includes('ES'));
    if (esVoice) {
      utterance.voice = esVoice;
      utterance.lang = esVoice.lang;
    } else {
      utterance.lang = 'es-ES'; // Default fallback locale
    }

    utterance.onstart = () => {
      this.updateBubble(text);
      if (this.sleepTimer) clearTimeout(this.sleepTimer);
    };

    utterance.onend = () => {
      if (keepActive) {
        this.setState('listening');
        this.updateBubble('🎙️ Escuchando...');
        // 400ms guard to prevent hearing own voice residual echo
        setTimeout(() => {
          if (this.state === 'listening') {
            this.startListening();
            this.resetSleepTimer();
          }
        }, 400);
      } else {
        this.setState('sleep');
        // Let it slide down
        setTimeout(() => {
          if (this.state === 'sleep') {
            this.agentContainer.classList.add('hidden');
            this.startListening();
          }
        }, 800);
      }
    };

    utterance.onerror = () => {
      this.setState(keepActive ? 'listening' : 'sleep');
      if (keepActive) {
        this.startListening();
        this.resetSleepTimer();
      } else {
        this.agentContainer.classList.add('hidden');
        this.startListening();
      }
    };

    window.speechSynthesis.speak(utterance);
  }

  resetSleepTimer() {
    if (this.sleepTimer) clearTimeout(this.sleepTimer);
    this.sleepTimer = setTimeout(() => {
      if (this.state === 'listening') {
        this.goToSleep();
      }
    }, 6000); // 6 seconds of silence countdown
  }

  handleSpeechInput(transcript) {
    if (this.state === 'sleep') {
      // Autonomous Voice Wake-up Intent
      const wakeWords = ['nova', 'noba', 'hola nova', 'hey nova', 'oye nova', 'hola noba', 'despierta', 'hola', 'buenos días', 'buenas tardes', 'buenas'];
      const heardWakeWord = wakeWords.some(word => transcript.includes(word));
      
      if (heardWakeWord) {
        this.wakeUp();
      }
    } else if (this.state === 'listening') {
      this.resetSleepTimer();
      
      let matched = false;

      // Navigation Command Intents
      if (transcript.includes('portafolio') || transcript.includes('trabajo') || transcript.includes('páginas') || transcript.includes('proyectos') || transcript.includes('catálogo')) {
        this.speak("Entendido. Llevándote a nuestro portafolio de referencias y marcas activas.", true);
        this.scrollToSection('portafolio');
        matched = true;
      } else if (transcript.includes('beneficios') || transcript.includes('ventaja') || transcript.includes('por qué')) {
        this.speak("Aquí tienes las ventajas clave de usar nuestro AI Studio.", true);
        this.scrollToSection('beneficios');
        matched = true;
      } else if (transcript.includes('contacto') || transcript.includes('correo') || transcript.includes('teléfono') || transcript.includes('escribir') || transcript.includes('llamar') || transcript.includes('whatsapp')) {
        this.speak("Abriendo la sección de contacto. Puedes enviarnos un mensaje o chatear por WhatsApp.", true);
        this.scrollToSection('contacto');
        matched = true;
      } else if (transcript.includes('servicios') || transcript.includes('herramientas') || transcript.includes('hacen') || transcript.includes('ofrecen')) {
        this.speak("Aquí tienes el listado de herramientas de creación con inteligencia artificial disponibles.", true);
        this.scrollToSection('herramientas');
        matched = true;
      } else if (transcript.includes('cómo funciona') || transcript.includes('pasos') || transcript.includes('funciona')) {
        this.speak("Te desplazo a los tres sencillos pasos para generar tu primer video con IA.", true);
        this.scrollToSection('como-funciona');
        matched = true;
      } else if (transcript.includes('pregunta') || transcript.includes('duda') || transcript.includes('faq') || transcript.includes('frecuente')) {
        this.speak("Te desplazo a la sección de preguntas frecuentes resueltas por nuestro equipo.", true);
        this.scrollToSection('faq');
        matched = true;
      } else if (transcript.includes('planes') || transcript.includes('precios') || transcript.includes('costo') || transcript.includes('tarifa') || transcript.includes('gratis')) {
        this.speak("Te muestro nuestros planes flexibles de suscripción y créditos mensuales.", true);
        this.scrollToSection('planes');
        matched = true;
      }
      
      // Jarvis Q&A Direct Knowledge Intents
      if (!matched) {
        if (transcript.includes('precio') || transcript.includes('costo') || transcript.includes('cuesta') || transcript.includes('tarifas') || transcript.includes('valor')) {
          this.speak("Nuestros planes de suscripción para el AI Studio van desde un demo gratuito hasta nuestro plan Pro de 29 dólares al mes con 150 créditos.", true);
          matched = true;
        } else if (transcript.includes('tiempo') || transcript.includes('tardan') || transcript.includes('días') || transcript.includes('demoran') || transcript.includes('entrega')) {
          this.speak("La generación de avatares, guiones y texto a voz toma apenas unos segundos de forma digital en nuestro AI Studio.", true);
          matched = true;
        } else if (transcript.includes('avatar') || transcript.includes('avatara') || transcript.includes('muñeco') || transcript.includes('personaje')) {
          this.speak("En el AI Studio puedes generar avatares 3D realistas, corporativos o educativos a partir de fotos e indicarles qué decir en segundos.", true);
          matched = true;
        } else if (transcript.includes('quiénes son') || transcript.includes('empresa') || transcript.includes('quien eres') || transcript.includes('creadores')) {
          this.speak("Somos Synthetic Digital Labs, el mejor lugar para crear tus páginas web, aplicaciones móviles y contenidos impulsados por Inteligencia Artificial.", true);
          matched = true;
        } else if (transcript.includes('dónde están') || transcript.includes('ubicados') || transcript.includes('oficina') || transcript.includes('país')) {
          this.speak("Nuestras oficinas centrales están en Miami, Florida, pero atendemos a clientes y startups de todo el mundo.", true);
          matched = true;
        } else if (transcript.includes('pago') || transcript.includes('pagar') || transcript.includes('métodos') || transcript.includes('formas')) {
          this.speak("Aceptamos pagos directos con tarjeta de crédito, PayPal y criptomonedas directamente en la plataforma.", true);
          matched = true;
        } else if (transcript.includes('hola') || transcript.includes('saludo') || transcript.includes('buenos días') || transcript.includes('buenas tardes')) {
          this.speak("¡Hola! Soy Nova, tu asistente virtual en Synthetic Digital Labs. ¿En qué puedo guiarte hoy?", true);
          matched = true;
        } else if (transcript.includes('gracias') || transcript.includes('adiós') || transcript.includes('chao') || transcript.includes('hasta luego')) {
          this.speak("De nada. Si necesitas algo más, solo dime 'Hola Nova'. ¡Que tengas un gran día!", false);
          matched = true;
        }
      }

      if (!matched) {
        this.speak("Lo siento, no he entendido esa pregunta. Puedes consultarme sobre precios, herramientas, cómo funciona o solicitar ir a una sección.", true);
      }
    }
  }

  scrollToSection(id) {
    const publicLanding = document.getElementById('public-landing');
    if (publicLanding && publicLanding.style.display === 'none') {
      const exitBtn = document.querySelector('.btn-exit-studio');
      if (exitBtn) exitBtn.click();
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

// Initialize Assistant
new NovaAssistant();
