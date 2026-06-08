// ==========================================================================
// STUDIO SDL AI - CORE JAVASCRIPT (HEYGEN CLONE 100% DESDE CERO)
// ==========================================================================

// --- DEFAULT STATE / DATABASE ---
const DEFAULT_AVATARS = [
  { id: 'av-sofia-biz', name: 'Sofía (Traje Formal)', category: 'Avatar Pro', style: 'Avatar Pro', lang: 'Español (ES)', img: 'assets/avatar_sofia.png', desc: 'Avatar premium formal para negocios.' },
  { id: 'av-roberto-biz', name: 'Roberto (Ejecutivo)', category: 'Avatar Pro', style: 'Avatar Pro', lang: 'Español (MX)', img: 'assets/avatar_roberto.png', desc: 'Presentador ejecutivo de alta fidelidad.' },
  { id: 'av-elena-pod', name: 'Elena (Podcast)', category: 'Avatar Pro', style: 'Avatar Pro', lang: 'Español (ES)', img: 'assets/avatar_elena.png', desc: 'Estilo casual con micrófono de estudio.' },
  { id: 'av-nova-fut', name: 'Nova (Holograma 3D)', category: 'Avatar Pro', style: 'Avatar Pro', lang: 'Español (ES)', img: 'assets/avatar_nova.png', desc: 'Presentadora interactiva futurista.' },
  { id: 'av-sofia-casual', name: 'Sofía (Casual)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (ES)', img: 'assets/avatar_sofia.png', desc: 'Estilo semi-formal para tutoriales.' },
  { id: 'av-roberto-sport', name: 'Roberto (Sport)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (MX)', img: 'assets/avatar_roberto.png', desc: 'Ropa informal para marketing dinámico.' },
  { id: 'av-elena-edu', name: 'Elena (Explicativa)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (ES)', img: 'assets/avatar_elena.png', desc: 'Enfoque conversacional para e-learning.' },
  { id: 'av-nova-human', name: 'Nova (Intelecto)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (US)', img: 'assets/avatar_nova.png', desc: 'Estilo interactivo para demostraciones.' },
  { id: 'av-photo-marcus', name: 'Marcus (Talking Photo)', category: 'Talking Photo', style: 'Talking Photo', lang: 'Inglés (US)', img: 'assets/avatar_roberto.png', desc: 'Foto de retrato animada con gesticulación.' },
  { id: 'av-photo-chloe', name: 'Chloe (Talking Photo)', category: 'Talking Photo', style: 'Talking Photo', lang: 'Inglés (UK)', img: 'assets/avatar_sofia.png', desc: 'Foto de retrato femenino animada por IA.' },
  { id: 'av-photo-lucia', name: 'Lucía (Talking Photo)', category: 'Talking Photo', style: 'Talking Photo', lang: 'Español (ES)', img: 'assets/avatar_elena.png', desc: 'Foto de retrato español para narración.' },
  { id: 'av-photo-cyber', name: 'CyberFace (Talking Photo)', category: 'Talking Photo', style: 'Talking Photo', lang: 'Español (ES)', img: 'assets/avatar_nova.png', desc: 'Rostro tecnológico animado por voz.' },
  { id: 'av-sofia-tele', name: 'Sofía (Teletrabajo)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (ES)', img: 'assets/avatar_sofia.png', desc: 'Estilo diario desde oficina hogareña.' },
  { id: 'av-roberto-glass', name: 'Roberto (Moda)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (MX)', img: 'assets/avatar_roberto.png', desc: 'Estilo de verano para redes sociales.' },
  { id: 'av-elena-formal', name: 'Elena (Traje de Gala)', category: 'Avatar Pro', style: 'Avatar Pro', lang: 'Español (ES)', img: 'assets/avatar_elena.png', desc: 'Estilo premium elegante para ceremonias.' },
  { id: 'av-nova-casual', name: 'Nova (Casual Dress)', category: 'Avatar Lite', style: 'Avatar Lite', lang: 'Español (ES)', img: 'assets/avatar_nova.png', desc: 'Estilo cotidiano para videos explicativos.' }
];

const DEFAULT_VOICES = [
  { id: 'v-sofia', name: 'Sofía Voz (Femenina)', lang: 'Español (ES)', gender: 'Femenino', tone: 'Profesional', isPremium: true, pitch: 1.15, rate: 1.0 },
  { id: 'v-roberto', name: 'Roberto Voz (Masculina)', lang: 'Español (MX)', gender: 'Masculino', tone: 'Corporativo', isPremium: true, pitch: 0.8, rate: 0.9 },
  { id: 'v-elena', name: 'Elena Voz (Femenina)', lang: 'Español (ES)', gender: 'Femenino', tone: 'Cálido', isPremium: false, pitch: 1.05, rate: 1.05 },
  { id: 'v-lucas', name: 'Lucas Voz (Masculina)', lang: 'Español (ES)', gender: 'Masculino', tone: 'Vendedor', isPremium: false, pitch: 0.85, rate: 1.1 },
  { id: 'v-john', name: 'John Voice (Male)', lang: 'Inglés (US)', gender: 'Masculino', tone: 'Natural', isPremium: true, pitch: 0.9, rate: 0.95 },
  { id: 'v-sarah', name: 'Sarah Voice (Female)', lang: 'Inglés (US)', gender: 'Femenino', tone: 'Narrativa', isPremium: true, pitch: 1.1, rate: 1.0 }
];

const DEFAULT_TEMPLATES = [
  { id: 'temp-corp', name: 'Resultados Corporativos', tag: 'Negocios', aspect: '16:9', avatar: 'av-roberto-biz', voice: 'v-roberto', script: 'Estimado equipo de dirección, hoy les presento el balance comercial y los resultados destacados del trimestre. Hemos superado los objetivos fijados en un doce por ciento.' },
  { id: 'temp-sales', name: 'Anuncio Promocional Redes', tag: 'Marketing', aspect: '9:16', avatar: 'av-sofia-casual', voice: 'v-sofia', script: '¿Cansado de gastar miles de dólares en estudios de grabación? Con AI Studio puedes crear presentadores interactivos para tus productos en menos de un minuto. ¡Haz clic para probarlo gratis!' },
  { id: 'temp-edu', name: 'Tutorial de Clonación', tag: 'Educativo', aspect: '9:16', avatar: 'av-elena-pod', voice: 'v-elena', script: 'Hola a todos, hoy aprenderemos cómo puedes clonar tu propia voz de forma ética utilizando nuestro panel avanzado de locución. Tan solo requiere diez segundos de audio limpio.' },
  { id: 'temp-news', name: 'Noticias Tecnología IA', tag: 'Noticias', aspect: '16:9', avatar: 'av-nova-fut', voice: 'v-lucas', script: 'Última hora: Synthetic Digital Labs lanza oficialmente su espacio de trabajo rediseñado, unificando avatares y línea de tiempo interactiva.' }
];

const DEFAULT_PROJECTS = [
  { id: 'p-1', name: 'Vídeo Comercial AI Studio', type: 'video', date: '2026-06-01', duration: '15s', details: 'Horizontal (16:9) • Voz Sofía', avatarImg: 'assets/avatar_sofia.png' },
  { id: 'p-2', name: 'Locución Introductoria Podcast', type: 'audio', date: '2026-06-03', duration: '30s', details: 'Sintetizado • Voz Lucas', avatarImg: 'assets/avatar_roberto.png' },
  { id: 'p-3', name: 'Guión Campaña Marketing', type: 'guion', date: '2026-06-05', duration: '60s', details: 'Persuasivo • Español', avatarImg: 'assets/logo.png' }
];

// --- INITIALIZE STORAGE ---
function safeGetItem(key, fallback = null) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (e) {
    return fallback;
  }
}
function safeSetItem(key, val) {
  try {
    localStorage.setItem(key, val);
  } catch (e) {}
}

function initLocalStorage() {
  const currentDbVersion = 'v2.4';
  const storedDbVersion = safeGetItem('sdl_db_version');

  if (storedDbVersion !== currentDbVersion) {
    safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
    safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
    safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
    safeSetItem('sdl_credits', '120');
    safeSetItem('sdl_db_version', currentDbVersion);
  } else {
    if (!safeGetItem('sdl_avatars')) safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
    if (!safeGetItem('sdl_voices')) safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
    if (!safeGetItem('sdl_projects')) safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
  }
  if (!safeGetItem('sdl_credits')) safeSetItem('sdl_credits', '120');
  if (!safeGetItem('sdl_username')) safeSetItem('sdl_username', 'Usuario SDL');
  if (!safeGetItem('sdl_email')) safeSetItem('sdl_email', 'usuario@syntheticdigitallab.com');
}
initLocalStorage();

function getLocal(key) {
  try {
    const val = safeGetItem(key);
    if (!val) return [];
    return JSON.parse(val) || [];
  } catch (e) {
    return [];
  }
}
function setLocal(key, val) {
  safeSetItem(key, JSON.stringify(val));
}
function getCredits() {
  return parseInt(safeGetItem('sdl_credits')) || 120;
}
function setCredits(val) {
  safeSetItem('sdl_credits', Math.max(0, val).toString());
  updateCreditsDisplay();
}

// --- GLOBAL STATE ---
let activeView = 'dashboard';
let selectedRatio = '16-9';
let isBackendOnline = false;
let backendApiConfigured = { elevenLabsConfigured: false, dIdConfigured: false };
let activeAudioElement = null;
let activeSpeechUtterance = null;
let isSpeakingPreview = false;

// Webcam states
let webcamStream = null;
let instantAvatarRecorder = null;
let webcamChunks = [];

// Voice cloning states
let mediaRecorder = null;
let recordedChunks = [];
let recordedAudioFile = null;

// Multi-Scene Editor State
let scenes = [
  {
    id: 's-' + Date.now(),
    avatarId: 'av-sofia-biz',
    voiceId: 'v-sofia',
    script: 'Escribe tu guión aquí para esta escena.',
    bg: 'dark',
    duration: 5,
    layers: [
      {
        id: 'layer-avatar-' + Date.now(),
        type: 'avatar',
        avatarId: 'av-sofia-biz',
        top: 50,
        left: 50,
        width: 260,
        height: 260,
        zIndex: 10
      },
      {
        id: 'layer-text-' + Date.now(),
        type: 'text',
        text: 'Mi Título de Escena',
        fontSize: 28,
        fontStyle: "'Inter', sans-serif",
        color: '#ffffff',
        top: 25,
        left: 50,
        width: 320,
        height: 60,
        zIndex: 20
      }
    ]
  }
];
let currentSceneIndex = 0;
let activeSelectedLayer = null; // Stores reference of the selected layer object inside scenes[currentSceneIndex].layers

// --- TOAST NOTIFICATIONS ---
function showToast(title, desc, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-notification ${type} active`;
  
  let iconClass = 'fa-circle-check';
  if (type === 'error') iconClass = 'fa-circle-exclamation';
  if (type === 'info') iconClass = 'fa-circle-info';

  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <div class="toast-details">
      <span class="toast-title">${title}</span>
      <span class="toast-desc">${desc}</span>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function showModal(title, msg, showConfirmButton = false, onConfirm = null) {
  const overlay = document.getElementById('globalModalOverlay');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    titleEl.textContent = title;
    msgEl.textContent = msg;
    if (showConfirmButton) {
      actionBtn.style.display = 'block';
      actionBtn.textContent = 'Confirmar';
      
      const clickHandler = () => {
        if (onConfirm) onConfirm();
        overlay.classList.remove('active');
        actionBtn.removeEventListener('click', clickHandler);
      };
      actionBtn.addEventListener('click', clickHandler);
    } else {
      actionBtn.style.display = 'none';
    }
    overlay.classList.add('active');
  }
}

function updateCreditsDisplay() {
  const credits = getCredits();
  const fillPct = Math.min(100, (credits / 150) * 100);
  
  const fillEl = document.getElementById('headerCreditsFill');
  const textEl = document.getElementById('headerCreditsText');
  const settingsText = document.getElementById('settingsCreditsVal');

  if (fillEl) fillEl.style.width = `${fillPct}%`;
  if (textEl) textEl.textContent = `${credits} / 150`;
  if (settingsText) settingsText.textContent = `${credits} créditos`;
}

// --- HEALTH CHECK ON START ---
async function checkBackendHealth() {
  try {
    const res = await fetch('http://localhost:3000/api/health');
    if (res.ok) {
      const data = await res.json();
      isBackendOnline = data.status === 'online';
      backendApiConfigured.elevenLabsConfigured = data.elevenLabsConfigured;
      backendApiConfigured.dIdConfigured = data.dIdConfigured;
      console.log('Backend proxy connected. Configured APIs:', backendApiConfigured);
    } else {
      isBackendOnline = false;
    }
  } catch (err) {
    isBackendOnline = false;
    console.warn('Backend is offline. Using client-side simulation mocks.', err);
  }
}
checkBackendHealth();

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = safeGetItem('theme') || 'light';
  document.body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme';
  
  const themeToggle = document.getElementById('themeToggleBtn');
  if (themeToggle) {
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  }
}

const themeToggleBtn = document.getElementById('themeToggleBtn');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    document.body.className = newTheme === 'dark' ? 'dark-theme' : 'light-theme';
    safeSetItem('theme', newTheme);
    themeToggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    showToast('Tema Cambiado', `Se ha activado el Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'}`, 'info');
  });
}

// --- VIEW NAVIGATION ENGINE ---
function switchView(targetView) {
  activeView = targetView;
  
  // Close speaking and previews
  stopTTSPreview();

  // Hide all views, display target
  document.querySelectorAll('.studio-view').forEach(view => {
    view.classList.remove('active');
  });
  
  const activePanel = document.getElementById(`view-${targetView}`);
  if (activePanel) activePanel.classList.add('active');

  // Update navigation items active state
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.dataset.view === targetView) item.classList.add('active');
    else item.classList.remove('active');
  });

  // Toggle editor body sizing and layout logic
  if (targetView === 'editor') {
    document.querySelector('.sidebar-navigation').style.display = 'none';
    syncEditorPresets();
  } else {
    document.querySelector('.sidebar-navigation').style.display = 'flex';
  }

  // Trigger render functions
  if (targetView === 'dashboard') renderHomeWidgets();
  if (targetView === 'templates') renderTemplatesLibrary();
  if (targetView === 'avatars') renderAvatarsGrid();
  if (targetView === 'voices') renderVoicesLibrary();
  if (targetView === 'library') renderLibrary();

  // Close create video dropdown
  const dropdown = document.getElementById('createVideoDropdown');
  if (dropdown) dropdown.classList.remove('active');
}

// Bind navigation sidebar
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    switchView(item.dataset.view);
  });
});

// Shortcut buttons
document.addEventListener('click', (e) => {
  const shortcut = e.target.closest('.btn-shortcut');
  if (shortcut) {
    const target = shortcut.dataset.target;
    if (target === 'editor') {
      const aspect = shortcut.dataset.aspect || '16-9';
      setRatio(aspect);
      // Initialize a clean default scene
      scenes = [
        {
          id: 's-' + Date.now(),
          avatarId: 'av-sofia-biz',
          voiceId: 'v-sofia',
          script: 'Hola, bienvenidos a este nuevo video generado con Inteligencia Artificial.',
          bg: 'dark',
          duration: 5,
          layers: [
            {
              id: 'layer-avatar-' + Date.now(),
              type: 'avatar',
              avatarId: 'av-sofia-biz',
              top: 50,
              left: 50,
              width: 260,
              height: 260,
              zIndex: 10
            },
            {
              id: 'layer-text-' + (Date.now() + 1),
              type: 'text',
              text: 'Mi Título de Escena',
              fontSize: 28,
              fontStyle: "'Inter', sans-serif",
              color: '#ffffff',
              top: 25,
              left: 50,
              width: 320,
              height: 60,
              zIndex: 20
            }
          ]
        }
      ];
      currentSceneIndex = 0;
      activeSelectedLayerId = null;
    }
    switchView(target);
  }
});

// Create video toggle button dropdown
const btnCreateVideoToggle = document.getElementById('btnCreateVideoToggle');
if (btnCreateVideoToggle) {
  btnCreateVideoToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = document.getElementById('createVideoDropdown');
    if (dropdown) dropdown.classList.toggle('active');
  });
}
document.addEventListener('click', () => {
  const dropdown = document.getElementById('createVideoDropdown');
  if (dropdown) dropdown.classList.remove('active');
});

// --- HOME WIDGETS RENDERING ---
function renderHomeWidgets() {
  const dashTemplates = document.getElementById('dashTemplatesGrid');
  const dashAvatars = document.getElementById('dashAvatarsGrid');

  if (dashTemplates) {
    dashTemplates.innerHTML = '';
    DEFAULT_TEMPLATES.slice(0, 3).forEach(temp => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `
        <div class="proj-thumb-box">
          <img src="thumbs/${temp.id.replace('-', '_')}.png" alt="${temp.name}">
          <span class="proj-duration">${temp.aspect}</span>
        </div>
        <div class="proj-info">
          <h4 class="proj-title">${temp.name}</h4>
          <span class="proj-date">${temp.tag}</span>
          <button class="btn-primary-sm btn-load-temp" data-id="${temp.id}">Usar Plantilla</button>
        </div>
      `;
      dashTemplates.appendChild(card);
    });
  }

  if (dashAvatars) {
    dashAvatars.innerHTML = '';
    const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
    avatars.slice(0, 4).forEach(av => {
      const card = document.createElement('div');
      card.className = 'avatar-card';
      card.innerHTML = `
        <div class="av-thumb-wrapper">
          <img src="${av.img}" alt="${av.name}">
        </div>
        <div class="av-info-bar">
          <h4>${av.name}</h4>
          <span>${av.style}</span>
        </div>
      `;
      card.addEventListener('click', () => {
        // Load clean editor with this avatar
        scenes[0].avatarId = av.id;
        switchView('editor');
      });
      dashAvatars.appendChild(card);
    });
  }
}

// --- TEMPLATES LIBRARY ---
function renderTemplatesLibrary() {
  const grid = document.getElementById('allTemplatesGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  DEFAULT_TEMPLATES.forEach(temp => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `
      <div class="proj-thumb-box">
        <img src="thumbs/${temp.id.replace('-', '_')}.png" alt="${temp.name}">
        <span class="proj-duration">${temp.aspect}</span>
      </div>
      <div class="proj-info">
        <h4 class="proj-title">${temp.name}</h4>
        <span class="proj-date">${temp.tag}</span>
        <button class="btn-primary-sm btn-load-temp" data-id="${temp.id}">Usar Plantilla</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Load template click handler
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-load-temp');
  if (btn) {
    const tempId = btn.dataset.id;
    const temp = DEFAULT_TEMPLATES.find(t => t.id === tempId);
    if (temp) {
      setRatio(temp.aspect);
      scenes = [
        {
          id: 's-' + Date.now(),
          avatarId: temp.avatar,
          voiceId: temp.voice,
          script: temp.script,
          bg: 'dark',
          duration: 6,
          layers: [
            {
              id: 'layer-avatar-' + Date.now(),
              type: 'avatar',
              avatarId: temp.avatar,
              top: 50,
              left: 50,
              width: 260,
              height: 260,
              zIndex: 10
            },
            {
              id: 'layer-text-' + (Date.now() + 1),
              type: 'text',
              text: temp.name,
              fontSize: 26,
              fontStyle: "'Inter', sans-serif",
              color: '#ffffff',
              top: 25,
              left: 50,
              width: 320,
              height: 60,
              zIndex: 20
            }
          ]
        }
      ];
      currentSceneIndex = 0;
      activeSelectedLayerId = null;
      switchView('editor');
      showToast('Plantilla Cargada', `Se cargó "${temp.name}" en el lienzo.`, 'success');
    }
  }
});

// --- AVATARS LIBRARY & WEB RECORDING ---
let selectedAvatarFilter = 'all';
function renderAvatarsGrid() {
  const grid = document.getElementById('allAvatarsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
  
  const filtered = avatars.filter(av => {
    if (selectedAvatarFilter === 'all') return true;
    return av.category === selectedAvatarFilter;
  });

  filtered.forEach(av => {
    const card = document.createElement('div');
    card.className = 'avatar-card';
    card.innerHTML = `
      <div class="av-thumb-wrapper">
        <img src="${av.img}" alt="${av.name}">
      </div>
      <div class="av-info-bar">
        <h4>${av.name}</h4>
        <span>${av.style}</span>
      </div>
    `;
    card.addEventListener('click', () => {
      scenes[0].avatarId = av.id;
      switchView('editor');
    });
    grid.appendChild(card);
  });
}

// Avatar filters binding
document.querySelectorAll('.btn-filter-av').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-filter-av').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedAvatarFilter = btn.dataset.filter;
    renderAvatarsGrid();
  });
});

// Instant Avatar Webcam mockup/real flow
const btnToggleWebcam = document.getElementById('btnToggleWebcam');
const btnStartInstantAvatar = document.getElementById('btnStartInstantAvatar');
const webcamVideo = document.getElementById('webcamVideo');
const webcamPlaceholder = document.getElementById('webcamPlaceholder');
const instantAvatarEthicsCheck = document.getElementById('instantAvatarEthicsCheck');

if (instantAvatarEthicsCheck) {
  instantAvatarEthicsCheck.addEventListener('change', () => {
    if (webcamStream) {
      btnStartInstantAvatar.disabled = !instantAvatarEthicsCheck.checked;
    }
  });
}

if (btnToggleWebcam) {
  btnToggleWebcam.addEventListener('click', () => {
    if (!webcamStream) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          webcamStream = stream;
          webcamVideo.srcObject = stream;
          webcamVideo.style.display = 'block';
          webcamPlaceholder.style.display = 'none';
          btnToggleWebcam.innerHTML = '<i class="fa-solid fa-video-slash"></i> Desactivar Cámara';
          btnStartInstantAvatar.disabled = !instantAvatarEthicsCheck.checked;
          showToast('Cámara Activa', 'Permisos concedidos con éxito.', 'success');
        })
        .catch(err => {
          console.warn('Webcam permission denied or error:', err);
          showToast('Acceso Denegado', 'No se pudo acceder a tu cámara o micrófono.', 'error');
        });
    } else {
      stopWebcamStream();
    }
  });
}

function stopWebcamStream() {
  if (webcamStream) {
    webcamStream.getTracks().forEach(track => track.stop());
    webcamStream = null;
  }
  webcamVideo.style.display = 'none';
  webcamVideo.srcObject = null;
  webcamPlaceholder.style.display = 'flex';
  btnToggleWebcam.innerHTML = '<i class="fa-solid fa-camera"></i> Activar Cámara';
  btnStartInstantAvatar.disabled = true;
}

if (btnStartInstantAvatar) {
  btnStartInstantAvatar.addEventListener('click', () => {
    const credits = getCredits();
    if (credits < 40) {
      showModal('Créditos Insuficientes', 'Requieres al menos 40 créditos para grabar un Instant Avatar.', false);
      return;
    }

    const recIndicator = document.getElementById('recordingIndicator');
    const timerEl = document.getElementById('webcamTimer');
    
    if (recIndicator) recIndicator.style.display = 'flex';
    if (timerEl) timerEl.style.display = 'block';
    btnStartInstantAvatar.disabled = true;
    btnToggleWebcam.disabled = true;

    // Start recording audio/video chunks
    webcamChunks = [];
    if (webcamStream) {
      instantAvatarRecorder = new MediaRecorder(webcamStream);
      instantAvatarRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) webcamChunks.push(e.data);
      };
      instantAvatarRecorder.start();
    }

    let seconds = 5;
    timerEl.textContent = `0:0${seconds}`;
    
    const countInterval = setInterval(() => {
      seconds--;
      timerEl.textContent = `0:0${seconds}`;
      if (seconds <= 0) {
        clearInterval(countInterval);
        
        // Stop recording
        if (instantAvatarRecorder && instantAvatarRecorder.state !== 'inactive') {
          instantAvatarRecorder.stop();
        }

        if (recIndicator) recIndicator.style.display = 'none';
        if (timerEl) timerEl.style.display = 'none';
        btnToggleWebcam.disabled = false;
        
        stopWebcamStream();

        // Process mockup
        showModal('Procesando Clon Digital', 'Sintetizando malla facial 3D y alineando características...', false);
        
        setTimeout(() => {
          // Add custom avatar
          const newAv = {
            id: 'av-' + Date.now(),
            name: 'Mi Avatar Grabado (Webcam)',
            category: 'Avatar Pro',
            style: 'Avatar Pro',
            lang: 'Español (ES)',
            img: 'assets/avatar_nova.png', // Fallback template avatar representation
            desc: 'Clon facial grabado por webcam en tiempo real.'
          };

          const current = getLocal('sdl_avatars') || DEFAULT_AVATARS;
          current.push(newAv);
          setLocal('sdl_avatars', current);

          setCredits(credits - 40);
          
          document.getElementById('globalModalOverlay').classList.remove('active');
          showToast('Clon Creado', 'Tu Instant Avatar ya está disponible en la lista de presentadores.', 'success');
          
          // Switch to list tab
          document.querySelector('[data-tab="avatar-panel-studio"]').click();
          renderAvatarsGrid();
        }, 3000);
      }
    }, 1000);
  });
}

// Talking Photo upload and submit flow
const photoUploadZone = document.getElementById('photoUploadZone');
const photoFileInput = document.getElementById('photoFileInput');
const photoFileName = document.getElementById('photoFileName');
const photoAvatarName = document.getElementById('photoAvatarName');
const btnCreatePhotoAvatar = document.getElementById('btnCreatePhotoAvatar');
const photoPreviewBox = document.getElementById('photoPreviewBox');
let uploadedPhotoBase64 = null;

if (photoUploadZone && photoFileInput) {
  photoUploadZone.addEventListener('click', () => photoFileInput.click());
  photoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      photoFileName.textContent = file.name;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedPhotoBase64 = event.target.result;
        photoPreviewBox.innerHTML = `<img src="${uploadedPhotoBase64}" style="width:100%; height:100%; object-fit:cover;">`;
        checkPhotoCreateUnlock();
      };
      reader.readAsDataURL(file);
    }
  });
}

if (photoAvatarName) {
  photoAvatarName.addEventListener('input', checkPhotoCreateUnlock);
}

function checkPhotoCreateUnlock() {
  if (btnCreatePhotoAvatar) {
    btnCreatePhotoAvatar.disabled = !(uploadedPhotoBase64 && photoAvatarName.value.trim());
  }
}

if (btnCreatePhotoAvatar) {
  btnCreatePhotoAvatar.addEventListener('click', () => {
    const credits = getCredits();
    if (credits < 30) {
      showModal('Créditos Insuficientes', 'Crear un Talking Photo consume 30 créditos.', false);
      return;
    }

    const name = photoAvatarName.value.trim();
    if (!name || !uploadedPhotoBase64) return;

    showModal('Animando Fotografía', 'Generando puntos clave de animación gesticular...', false);
    
    setTimeout(() => {
      const newAv = {
        id: 'av-' + Date.now(),
        name: `${name} (Foto Animada)`,
        category: 'Talking Photo',
        style: 'Talking Photo',
        lang: 'Español (ES)',
        img: uploadedPhotoBase64,
        desc: 'Retrato fotográfico animado mediante inteligencia artificial.'
      };

      const current = getLocal('sdl_avatars') || DEFAULT_AVATARS;
      current.push(newAv);
      setLocal('sdl_avatars', current);

      setCredits(credits - 30);

      document.getElementById('globalModalOverlay').classList.remove('active');
      showToast('Foto Animada con Éxito', `"${name}" se añadió a tu biblioteca de avatares.`, 'success');
      
      // Cleanup
      photoAvatarName.value = '';
      uploadedPhotoBase64 = null;
      photoFileName.textContent = '';
      photoPreviewBox.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted)">Previsualización</span>';
      btnCreatePhotoAvatar.disabled = true;

      // Redirect
      document.querySelector('[data-tab="avatar-panel-studio"]').click();
      renderAvatarsGrid();
    }, 2500);
  });
}

// --- VOICE LIBRARY ---
let selectedVoiceFilter = 'all';
function renderVoicesLibrary() {
  const grid = document.getElementById('voicesLibraryGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const voices = getLocal('sdl_voices') || DEFAULT_VOICES;

  const filtered = voices.filter(v => {
    if (selectedVoiceFilter === 'all') return true;
    return v.gender === selectedVoiceFilter;
  });

  filtered.forEach(v => {
    const card = document.createElement('div');
    card.className = 'voice-card';
    card.innerHTML = `
      <div class="vc-info">
        <span class="vc-name">${v.name}</span>
        <span class="vc-meta">${v.lang} • ${v.gender} • ${v.tone}</span>
      </div>
      <button class="btn-play-voice-preview" data-id="${v.id}"><i class="fa-solid fa-volume-high"></i></button>
    `;
    grid.appendChild(card);
  });
}

// Voice filter binding
document.querySelectorAll('.btn-filter-voice').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.btn-filter-voice').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedVoiceFilter = btn.dataset.filter;
    renderVoicesLibrary();
  });
});

// Play voice preview click
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-play-voice-preview');
  if (btn) {
    const voiceId = btn.dataset.id;
    const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    const voice = voices.find(v => v.id === voiceId);
    if (voice) {
      playVoicePreviewAudio(voice);
    }
  }
});

function playVoicePreviewAudio(voice) {
  stopTTSPreview();

  const previewText = `Hola, mi nombre es ${voice.name.split(' ')[0]}. Estoy listo para interpretar tus guiones.`;

  if (isBackendOnline && backendApiConfigured.elevenLabsConfigured) {
    fetch('http://localhost:3000/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: previewText, voiceId: voice.id })
    })
    .then(res => {
      if (!res.ok) throw new Error('API failed');
      return res.blob();
    })
    .then(blob => {
      activeAudioElement = new Audio(URL.createObjectURL(blob));
      activeAudioElement.play();
    })
    .catch(() => {
      playLocalSpeechPreview(previewText, voice);
    });
  } else {
    playLocalSpeechPreview(previewText, voice);
  }
}

function playLocalSpeechPreview(text, voice) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  if (voice.pitch !== undefined) utterance.pitch = voice.pitch;
  if (voice.rate !== undefined) utterance.rate = voice.rate;
  
  const match = getSystemVoiceForId(voice, window.speechSynthesis.getVoices());
  if (match) utterance.voice = match;

  window.speechSynthesis.speak(utterance);
}

function getSystemVoiceForId(vc, sysVoices) {
  const isFemale = vc.gender === 'Femenino';
  const isEnglish = vc.lang.includes('Inglés');
  
  let match = sysVoices.find(v => {
    const nameLower = v.name.toLowerCase();
    const matchesLang = isEnglish ? (v.lang.startsWith('en') || nameLower.includes('english')) : (v.lang.startsWith('es') || nameLower.includes('spanish'));
    const matchesGender = isFemale ? (nameLower.includes('google') || nameLower.includes('helena') || nameLower.includes('zira') || nameLower.includes('samantha') || nameLower.includes('sabina')) : (!nameLower.includes('helena') && !nameLower.includes('zira') && !nameLower.includes('samantha') && !nameLower.includes('sabina'));
    return matchesLang && matchesGender;
  });

  return match || sysVoices[0];
}

// --- VOICE CLONING (REAL & SIMULATED) ---
const voiceAudioInput = document.getElementById('voiceAudioInput');
const voiceUploadZone = document.getElementById('voiceUploadZone');
const voiceFileName = document.getElementById('voiceFileName');
const btnRecordVoice = document.getElementById('btnRecordVoice');
const recordIndicator = document.getElementById('recordIndicator');
const voiceConsentCheck = document.getElementById('voiceConsentCheck');
const voiceNameInput = document.getElementById('voiceNameInput');
const btnCloneVoice = document.getElementById('btnCloneVoice');
let voiceAudioFileUploaded = false;
let isVoiceRecording = false;

if (voiceUploadZone && voiceAudioInput) {
  voiceUploadZone.addEventListener('click', () => voiceAudioInput.click());
  voiceAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      voiceFileName.textContent = file.name;
      voiceAudioFileUploaded = true;
      checkCloneVoiceUnlock();
    }
  });
}

if (btnRecordVoice) {
  btnRecordVoice.addEventListener('click', () => {
    if (!isVoiceRecording) {
      recordedChunks = [];
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          mediaRecorder = new MediaRecorder(stream);
          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) recordedChunks.push(e.data);
          };
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
            recordedAudioFile = new File([audioBlob], 'live_recording.wav', { type: 'audio/wav' });
            if (voiceFileName) voiceFileName.textContent = 'Grabación en vivo: live_recording.wav';
            voiceAudioFileUploaded = true;
            checkCloneVoiceUnlock();
          };
          mediaRecorder.start();
          isVoiceRecording = true;
          btnRecordVoice.innerHTML = '<i class="fa-solid fa-square"></i> Detener';
          if (recordIndicator) recordIndicator.style.display = 'flex';
          if (voiceFileName) voiceFileName.textContent = 'Grabando muestra de voz real...';
        })
        .catch(err => {
          console.warn('Microphone access denied or error. Falling back to simulated live recording.', err);
          isVoiceRecording = true;
          btnRecordVoice.innerHTML = '<i class="fa-solid fa-square"></i> Detener';
          if (recordIndicator) recordIndicator.style.display = 'flex';
          if (voiceFileName) voiceFileName.textContent = 'Grabando muestra de voz (Simulado)...';
        });
    } else {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        mediaRecorder = null;
      } else {
        if (voiceFileName) voiceFileName.textContent = 'Muestra grabada en vivo (Simulada).wav';
        voiceAudioFileUploaded = true;
        checkCloneVoiceUnlock();
      }
      isVoiceRecording = false;
      btnRecordVoice.innerHTML = '<i class="fa-solid fa-circle"></i> Grabar en vivo';
      if (recordIndicator) recordIndicator.style.display = 'none';
    }
  });
}

if (voiceConsentCheck) {
  voiceConsentCheck.addEventListener('change', checkCloneVoiceUnlock);
}

function checkCloneVoiceUnlock() {
  if (btnCloneVoice) {
    btnCloneVoice.disabled = !(voiceAudioFileUploaded && voiceConsentCheck.checked);
  }
}

function resetCloningFields() {
  voiceNameInput.value = '';
  if (voiceFileName) voiceFileName.textContent = '';
  if (voiceConsentCheck) voiceConsentCheck.checked = false;
  btnCloneVoice.disabled = true;
  voiceAudioFileUploaded = false;
  recordedAudioFile = null;
  if (voiceAudioInput) voiceAudioInput.value = '';
}

if (btnCloneVoice) {
  btnCloneVoice.addEventListener('click', () => {
    const credits = getCredits();
    if (credits < 50) {
      showModal('Créditos Insuficientes', 'Requiere al menos 50 créditos para clonar una voz sintética.', false);
      return;
    }

    const name = voiceNameInput.value.trim();
    if (!name) return;

    let fileToClone = null;
    if (voiceAudioInput && voiceAudioInput.files[0]) {
      fileToClone = voiceAudioInput.files[0];
    } else if (recordedAudioFile) {
      fileToClone = recordedAudioFile;
    }

    if (isBackendOnline && backendApiConfigured.elevenLabsConfigured && fileToClone) {
      showToast('Clonando voz...', 'Enviando muestra de audio al servidor neuronal.', 'info');
      btnCloneVoice.disabled = true;

      const formData = new FormData();
      formData.append('name', name);
      formData.append('file', fileToClone);

      fetch('http://localhost:3000/api/clone-voice', {
        method: 'POST',
        body: formData
      })
      .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Cloning failed'); });
        return res.json();
      })
      .then(data => {
        const voiceId = data.voice_id;
        
        const newVoice = {
          id: voiceId,
          name: `${name} (Voz Clonada)`,
          lang: 'Español (ES)',
          gender: 'Personalizado',
          tone: 'Clonado',
          isPremium: true,
          pitch: 1.0,
          rate: 1.0
        };

        const currentVoices = getLocal('sdl_voices') || DEFAULT_VOICES;
        currentVoices.push(newVoice);
        setLocal('sdl_voices', currentVoices);

        setCredits(credits - 50);
        renderClonedVoicesList();
        renderVoicesLibrary();

        showToast('Voz Clonada con Éxito', `El timbre neuronal de "${name}" está listo.`, 'success');
        resetCloningFields();
      })
      .catch(err => {
        console.warn('Real voice cloning failed. Falling back to high-fidelity mock clone.', err);
        createMockClone(name, credits);
      });
    } else {
      createMockClone(name, credits);
    }
  });
}

function createMockClone(name, credits) {
  setCredits(credits - 50);

  const mockVoiceId = 'v-' + Date.now();
  const newVoice = {
    id: mockVoiceId,
    name: `${name} (Voz Clonada - Simulada)`,
    lang: 'Español (ES)',
    gender: 'Personalizado',
    tone: 'Clonado',
    isPremium: true,
    pitch: 0.75 + Math.random() * 0.5,
    rate: 0.85 + Math.random() * 0.3
  };

  const currentVoices = getLocal('sdl_voices') || DEFAULT_VOICES;
  currentVoices.push(newVoice);
  setLocal('sdl_voices', currentVoices);

  renderClonedVoicesList();
  renderVoicesLibrary();

  showToast('Voz Clonada con Éxito', `El timbre neuronal de "${name}" está listo (Modo Simulado).`, 'success');
  resetCloningFields();
}

function renderClonedVoicesList() {
  const container = document.getElementById('clonedVoicesList');
  if (!container) return;

  const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
  const cloned = voices.filter(v => v.tone === 'Clonado');
  container.innerHTML = '';

  if (cloned.length === 0) {
    container.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted)">Aún no tienes voces clonadas.</span>';
    return;
  }

  cloned.forEach(v => {
    const badge = document.createElement('span');
    badge.className = 'mini-voice-badge';
    badge.style.background = 'var(--bg-tertiary)';
    badge.style.border = '1px solid var(--border-color)';
    badge.style.padding = '4px 10px';
    badge.style.borderRadius = '4px';
    badge.style.fontSize = '0.75rem';
    badge.innerHTML = `<i class="fa-solid fa-microphone"></i> ${v.name}`;
    container.appendChild(badge);
  });
}
renderClonedVoicesList();

// --- 5. EDITOR CANVAS WORKSPACE ENGINE (V2 CLONE) ---

// Toggle ratio aspect horizontal / vertical
function setRatio(ratio) {
  selectedRatio = ratio;
  const stage = document.getElementById('videoCanvasStage');
  const btn169 = document.getElementById('btnRatio169');
  const btn916 = document.getElementById('btnRatio916');

  if (!stage) return;

  if (ratio === '16-9') {
    stage.className = 'video-canvas-stage ratio-16-9';
    if (btn169) btn169.classList.add('active');
    if (btn916) btn916.classList.remove('active');
  } else {
    stage.className = 'video-canvas-stage ratio-9-16';
    if (btn169) btn169.classList.remove('active');
    if (btn916) btn916.classList.add('active');
  }
}

const btnRatio169 = document.getElementById('btnRatio169');
const btnRatio916 = document.getElementById('btnRatio916');
if (btnRatio169) btnRatio169.addEventListener('click', () => setRatio('16-9'));
if (btnRatio916) btnRatio916.addEventListener('click', () => setRatio('9-16'));

// Background click presets
document.querySelectorAll('.bg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const bgVal = btn.dataset.bg;
    scenes[currentSceneIndex].bg = bgVal;
    
    const canvasStage = document.getElementById('videoCanvasStage');
    if (canvasStage) applyBackgroundToCanvas(canvasStage, bgVal);
  });
});

function applyBackgroundToCanvas(stage, bg) {
  if (bg === 'dark') stage.style.background = '#050212';
  else if (bg === 'gradient-blue') stage.style.background = 'linear-gradient(135deg, #020010, #001f3f)';
  else if (bg === 'gradient-purple') stage.style.background = 'linear-gradient(135deg, #030012, #1f003f)';
  else if (bg === 'green-screen') stage.style.background = '#00ff00';
}

// Far Left Dock Panel toggling
document.querySelectorAll('.dock-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.dock-item').forEach(d => d.classList.remove('active'));
    item.classList.add('active');

    const panel = item.dataset.panel;
    
    // Slide out drawer
    const drawer = document.getElementById('editorDrawerPanel');
    const sections = document.querySelectorAll('.drawer-section');
    const drawerTitle = document.getElementById('drawerPanelTitle');
    
    drawer.classList.remove('collapsed');
    sections.forEach(sec => sec.classList.remove('active'));

    const activeSec = document.getElementById(`drawer-section-${panel}`);
    if (activeSec) activeSec.classList.add('active');

    if (panel === 'templates') {
      drawerTitle.textContent = 'Plantillas de Video';
      renderEditorDrawerTemplates();
    } else if (panel === 'avatars') {
      drawerTitle.textContent = 'Seleccionar Avatar';
      renderEditorDrawerAvatars();
    } else if (panel === 'text') {
      drawerTitle.textContent = 'Añadir Capa de Texto';
    } else if (panel === 'assets') {
      drawerTitle.textContent = 'Mis Archivos Cargados';
      renderEditorDrawerAssets();
    }
  });
});

// Close drawer button
const btnCloseEditorDrawer = document.getElementById('btnCloseEditorDrawer');
if (btnCloseEditorDrawer) {
  btnCloseEditorDrawer.addEventListener('click', () => {
    const drawer = document.getElementById('editorDrawerPanel');
    if (drawer) drawer.classList.add('collapsed');
    document.querySelectorAll('.dock-item').forEach(d => d.classList.remove('active'));
  });
}

// Render dynamic lists inside editor drawers
function renderEditorDrawerTemplates() {
  const container = document.getElementById('editorDrawerTemplatesGrid');
  if (!container) return;
  container.innerHTML = '';
  
  DEFAULT_TEMPLATES.forEach(temp => {
    const div = document.createElement('div');
    div.className = 'drawer-av-card';
    div.style.aspectRatio = '16/9';
    div.innerHTML = `
      <img src="thumbs/${temp.id.replace('-', '_')}.png" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
      <div class="drawer-av-name">${temp.name}</div>
    `;
    div.addEventListener('click', () => {
      scenes[currentSceneIndex].avatarId = temp.avatar;
      scenes[currentSceneIndex].voiceId = temp.voice;
      scenes[currentSceneIndex].script = temp.script;
      
      // Update scene layers to match the template!
      scenes[currentSceneIndex].layers = [
        {
          id: 'layer-avatar-' + Date.now(),
          type: 'avatar',
          avatarId: temp.avatar,
          top: 50,
          left: 50,
          width: 260,
          height: 260,
          zIndex: 10
        },
        {
          id: 'layer-text-' + (Date.now() + 1),
          type: 'text',
          text: temp.name,
          fontSize: 28,
          fontStyle: "'Inter', sans-serif",
          color: '#ffffff',
          top: 25,
          left: 50,
          width: 320,
          height: 60,
          zIndex: 20
        }
      ];
      loadSceneStateIntoCanvas(currentSceneIndex);
      showToast('Plantilla Aplicada', `Se inyectó en la escena actual.`, 'success');
    });
    container.appendChild(div);
  });
}

// User Assets Inside Drawer
const editorAssetUploadZone = document.getElementById('editorAssetUploadZone');
const editorAssetFileInput = document.getElementById('editorAssetFileInput');
const editorAssetFileName = document.getElementById('editorAssetFileName');

if (editorAssetUploadZone && editorAssetFileInput) {
  editorAssetUploadZone.addEventListener('click', () => editorAssetFileInput.click());
  editorAssetFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      editorAssetFileName.textContent = file.name;
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        const newAsset = {
          name: file.name,
          src: base64,
          type: file.type.startsWith('image') ? 'image' : 'audio'
        };
        const current = getLocal('sdl_user_assets') || [];
        current.push(newAsset);
        setLocal('sdl_user_assets', current);
        renderEditorDrawerAssets();
        showToast('Recurso Subido', `Se cargó "${file.name}"`, 'success');
      };
      reader.readAsDataURL(file);
    }
  });
}

function renderEditorDrawerAssets() {
  const listEl = document.getElementById('editorUserAssetsList');
  if (!listEl) return;
  listEl.innerHTML = '';
  
  const current = getLocal('sdl_user_assets') || [];
  if (current.length === 0) {
    listEl.innerHTML = '<span style="font-size:0.7rem; color:var(--text-muted);">No hay recursos personales.</span>';
    return;
  }

  current.forEach((asset, idx) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.padding = '8px';
    row.style.background = 'var(--bg-tertiary)';
    row.style.borderRadius = '4px';
    row.style.border = '1px solid var(--border-color)';
    row.innerHTML = `
      <span style="font-size:0.7rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; width:150px;">${asset.name}</span>
      <div style="display:flex; gap:5px;">
        <button class="btn-primary-sm btn-use-asset" data-idx="${idx}" style="padding:4px 8px;"><i class="fa-solid fa-check"></i></button>
        <button class="btn-outline-sm btn-del-asset" data-idx="${idx}" style="padding:4px 8px; border-color:var(--accent-red); color:var(--accent-red);"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    listEl.appendChild(row);
  });
}

// User Assets Action handler
document.addEventListener('click', (e) => {
  const btnUse = e.target.closest('.btn-use-asset');
  if (btnUse) {
    const idx = parseInt(btnUse.dataset.idx);
    const assets = getLocal('sdl_user_assets') || [];
    const asset = assets[idx];
    if (asset) {
      if (asset.type === 'image') {
        // Apply image base64 as custom Presenter avatar layer
        const customAvId = 'av-custom-' + Date.now();
        const newAv = {
          id: customAvId,
          name: asset.name.split('.')[0] || 'Carga Personalizada',
          category: 'Talking Photo',
          style: 'Talking Photo',
          lang: 'Español (ES)',
          img: asset.src,
          desc: 'Avatar cargado por el usuario.'
        };
        const avs = getLocal('sdl_avatars') || DEFAULT_AVATARS;
        avs.push(newAv);
        setLocal('sdl_avatars', avs);
        
        scenes[currentSceneIndex].avatarId = customAvId;
        loadSceneStateIntoCanvas(currentSceneIndex);
        showToast('Avatar Cambiado', 'Se aplicó tu imagen cargada.', 'success');
      } else {
        // Audio asset applied
        showToast('Audio Vinculado', 'Se vinculó el recurso de audio a esta escena.', 'success');
      }
    }
  }

  const btnDel = e.target.closest('.btn-del-asset');
  if (btnDel) {
    const idx = parseInt(btnDel.dataset.idx);
    let assets = getLocal('sdl_user_assets') || [];
    assets.splice(idx, 1);
    setLocal('sdl_user_assets', assets);
    renderEditorDrawerAssets();
    showToast('Recurso Eliminado', 'Se quitó de tu lista.', 'info');
  }
});

// Adding Text Preset trigger from drawer
document.querySelectorAll('.btn-add-text-preset').forEach(btn => {
  // Cloning to remove any previous listeners
  const newBtn = btn.cloneNode(true);
  btn.replaceWith(newBtn);
});

document.querySelectorAll('.btn-add-text-preset').forEach(btn => {
  btn.addEventListener('click', () => {
    const size = btn.dataset.size;
    const shape = btn.dataset.shape;
    
    if (shape) {
      const shapeLayer = {
        id: 'layer-shape-' + Date.now(),
        type: 'shape',
        shapeType: shape,
        fillColor: '#7c3aed',
        left: 35 + Math.random() * 15,
        top: 35 + Math.random() * 15,
        width: 100,
        height: 100,
        zIndex: 15 + scenes[currentSceneIndex].layers.length
      };
      scenes[currentSceneIndex].layers.push(shapeLayer);
      renderSceneLayers(currentSceneIndex);
      focusLayer(shapeLayer.id);
      showToast('Figura Insertada', 'Se añadió al lienzo.', 'success');
    } else if (size) {
      const textLayer = {
        id: 'layer-text-' + Date.now(),
        type: 'text',
        text: size === 'title' ? 'Agregar Título' : (size === 'subtitle' ? 'Agregar Subtítulo' : 'Agregar Cuerpo de Texto'),
        fontSize: size === 'title' ? 32 : (size === 'subtitle' ? 22 : 14),
        fontStyle: "'Inter', sans-serif",
        color: '#ffffff',
        left: 30 + Math.random() * 20,
        top: 30 + Math.random() * 20,
        width: 250,
        height: size === 'title' ? 60 : (size === 'subtitle' ? 45 : 35),
        zIndex: 20 + scenes[currentSceneIndex].layers.length
      };
      scenes[currentSceneIndex].layers.push(textLayer);
      renderSceneLayers(currentSceneIndex);
      focusLayer(textLayer.id);
      showToast('Texto Añadido', 'Se insertó el cuadro de texto.', 'success');
    }
  });
});

// --- INTERACTIVE DRAG & RESIZE CANVAS LAYER ENGINE ---
let activeSelectedLayerId = null;

// Normalize scene structure to dynamic layers array if missing
function normalizeScene(scene) {
  if (!scene.layers) {
    scene.layers = [];
    if (scene.avatarId) {
      scene.layers.push({
        id: 'layer-avatar-' + Date.now(),
        type: 'avatar',
        avatarId: scene.avatarId,
        left: 50,
        top: 50,
        width: 200,
        height: 200,
        zIndex: 10
      });
    }
    if (scene.textPos && scene.textPos.display === 'block') {
      scene.layers.push({
        id: 'layer-text-' + (Date.now() + 1),
        type: 'text',
        text: scene.textPos.text || 'Mi Título de Escena',
        fontSize: scene.textPos.fontSize || 28,
        fontStyle: scene.textPos.fontStyle || "'Inter', sans-serif",
        color: scene.textPos.color || '#ffffff',
        left: 50,
        top: 25,
        width: 300,
        height: 60,
        zIndex: 20
      });
    }
  }
  return scene;
}

function focusLayer(layerId) {
  activeSelectedLayerId = layerId;
  
  // Toggle class selected on elements
  document.querySelectorAll('.canvas-layer').forEach(el => {
    if (el.id === layerId) el.classList.add('selected');
    else el.classList.remove('selected');
  });

  const activeLayer = layerId ? scenes[currentSceneIndex].layers.find(l => l.id === layerId) : null;
  
  const bodyAvatar = document.getElementById('inspectorBodyAvatar');
  const bodyText = document.getElementById('inspectorBodyText');
  const bodyShape = document.getElementById('inspectorBodyShape');
  const bodyScene = document.getElementById('inspectorBodyScene');
  const insTitle = document.getElementById('insTabTitleBtn');
  
  // Hide all first
  if (bodyAvatar) bodyAvatar.style.display = 'none';
  if (bodyText) bodyText.style.display = 'none';
  if (bodyShape) bodyShape.style.display = 'none';
  if (bodyScene) bodyScene.style.display = 'none';

  if (!activeLayer) {
    if (bodyScene) bodyScene.style.display = 'block';
    if (insTitle) insTitle.textContent = 'Ajustes de Escena';
    
    // Update scene background selected buttons
    const scene = scenes[currentSceneIndex];
    document.querySelectorAll('.bg-btn').forEach(btn => {
      if (btn.dataset.bg === scene.bg) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    // Update scene duration slider
    const durationSlider = document.getElementById('sceneDurationSlider');
    const valDuration = document.getElementById('valSceneDuration');
    if (durationSlider) durationSlider.value = scene.duration;
    if (valDuration) valDuration.textContent = `${scene.duration}.0s`;
  } 
  else if (activeLayer.type === 'avatar') {
    if (bodyAvatar) bodyAvatar.style.display = 'block';
    if (insTitle) insTitle.textContent = 'Ajustes de Avatar';
    updateInspectorInputs();
  } 
  else if (activeLayer.type === 'text') {
    if (bodyText) bodyText.style.display = 'block';
    if (insTitle) insTitle.textContent = 'Ajustes de Capa Texto';
    
    // Sync text properties to inspector inputs
    const fontSizeSlider = document.getElementById('textFontSize');
    const valFontSize = document.getElementById('valFontSize');
    const fontFamilySelect = document.getElementById('textFontFamily');
    const textColorPicker = document.getElementById('textColorPicker');
    const textColorVal = document.getElementById('textColorVal');
    
    if (fontSizeSlider) fontSizeSlider.value = activeLayer.fontSize;
    if (valFontSize) valFontSize.textContent = `${activeLayer.fontSize}px`;
    if (fontFamilySelect) fontFamilySelect.value = activeLayer.fontStyle;
    if (textColorPicker) textColorPicker.value = activeLayer.color;
    if (textColorVal) textColorVal.value = activeLayer.color;
  } 
  else if (activeLayer.type === 'shape') {
    if (bodyShape) bodyShape.style.display = 'block';
    if (insTitle) insTitle.textContent = 'Ajustes de Figura';
    
    const shapeColorPicker = document.getElementById('shapeColorPicker');
    const shapeColorVal = document.getElementById('shapeColorVal');
    
    if (shapeColorPicker) shapeColorPicker.parentElement.style.display = 'block';
    if (shapeColorPicker) shapeColorPicker.value = activeLayer.fillColor;
    if (shapeColorVal) shapeColorVal.value = activeLayer.fillColor;
  }
  else if (activeLayer.type === 'image') {
    if (insTitle) insTitle.textContent = 'Recurso de Imagen';
    if (bodyShape) bodyShape.style.display = 'block';
    const shapeColorPicker = document.getElementById('shapeColorPicker');
    if (shapeColorPicker) shapeColorPicker.parentElement.style.display = 'none'; // Hide color picker
  }
  
  if (typeof renderInspectorBrandPalettes === 'function') {
    renderInspectorBrandPalettes();
  }
}

// Click on Canvas workspace (but outside active items) selects scene background settings
const canvasStage = document.getElementById('videoCanvasStage');
if (canvasStage) {
  canvasStage.addEventListener('click', (e) => {
    if (e.target.id === 'videoCanvasStage' || e.target.id === 'editorCanvasContainer') {
      focusLayer(null);
    }
  });
}

// Make Layers Draggable using Mouse Listeners
function setupDynamicDraggable(element, layer) {
  let isDragging = false;
  let startX, startY;
  let elemStartX, elemStartY;

  element.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('resize-handle') || e.target.tagName === 'INPUT') return; 
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    elemStartX = element.offsetLeft;
    elemStartY = element.offsetTop;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function onMouseMove(e) {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    
    const newLeft = elemStartX + dx;
    const newTop = elemStartY + dy;
    
    const stage = document.getElementById('videoCanvasStage');
    if (!stage) return;
    
    const limitX = stage.clientWidth - element.clientWidth;
    const limitY = stage.clientHeight - element.clientHeight;
    
    const finalLeft = Math.max(0, Math.min(limitX, newLeft));
    const finalTop = Math.max(0, Math.min(limitY, newTop));

    element.style.left = finalLeft + 'px';
    element.style.top = finalTop + 'px';

    // Save center-anchored percentage coordinates
    layer.left = ((finalLeft + element.clientWidth / 2) / stage.clientWidth) * 100;
    layer.top = ((finalTop + element.clientHeight / 2) / stage.clientHeight) * 100;
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }
}

// Setup Resizable logic
function setupDynamicResizable(element, layer) {
  const handles = element.querySelectorAll('.resize-handle');
  handles.forEach(handle => {
    handle.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      
      const startX = e.clientX;
      const startY = e.clientY;
      const startWidth = element.clientWidth;
      const startHeight = element.clientHeight;
      const startLeft = element.offsetLeft;
      const startTop = element.offsetTop;

      const isRight = handle.classList.contains('rh-ne') || handle.classList.contains('rh-se');
      const isBottom = handle.classList.contains('rh-se') || handle.classList.contains('rh-sw');
      const isLeft = handle.classList.contains('rh-nw') || handle.classList.contains('rh-sw');
      const isTop = handle.classList.contains('rh-nw') || handle.classList.contains('rh-ne');

      function onMouseMove(event) {
        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startLeft;
        let newTop = startTop;

        const dx = event.clientX - startX;
        const dy = event.clientY - startY;

        if (isRight) {
          newWidth = Math.max(30, startWidth + dx);
        } else if (isLeft) {
          newWidth = Math.max(30, startWidth - dx);
          newLeft = startLeft + (startWidth - newWidth);
        }

        if (isBottom) {
          newHeight = Math.max(30, startHeight + dy);
        } else if (isTop) {
          newHeight = Math.max(30, startHeight - dy);
          newTop = startTop + (startHeight - newHeight);
        }

        element.style.width = newWidth + 'px';
        element.style.height = newHeight + 'px';
        element.style.left = newLeft + 'px';
        element.style.top = newTop + 'px';

        const stage = document.getElementById('videoCanvasStage');
        if (!stage) return;
        
        layer.width = newWidth;
        layer.height = newHeight;
        layer.left = ((newLeft + newWidth / 2) / stage.clientWidth) * 100;
        layer.top = ((newTop + newHeight / 2) / stage.clientHeight) * 100;
      }

      function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });
}

// Inspector Inputs Synchronization
function syncEditorPresets() {
  renderEditorVoicesList();
  loadSceneStateIntoCanvas(currentSceneIndex);
  updateInspectorInputs();
}

function renderEditorVoicesList() {
  const select = document.getElementById('editorVoiceSelect');
  if (!select) return;
  select.innerHTML = '';
  
  const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
  voices.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = `${v.name} (${v.lang})`;
    select.appendChild(opt);
  });
}

function updateInspectorInputs() {
  const scene = scenes[currentSceneIndex];
  
  const selectVoice = document.getElementById('editorVoiceSelect');
  const rateSlider = document.getElementById('editorVoiceRate');
  const valRate = document.getElementById('valVoiceRate');
  const textarea = document.getElementById('editorScriptTextarea');
  const durationSlider = document.getElementById('sceneDurationSlider');
  const valDuration = document.getElementById('valSceneDuration');

  if (selectVoice) selectVoice.value = scene.voiceId;
  if (rateSlider) {
    const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    const v = voices.find(vc => vc.id === scene.voiceId) || DEFAULT_VOICES[0];
    rateSlider.value = v.rate || 1.0;
    valRate.textContent = `${rateSlider.value}x`;
  }
  if (textarea) textarea.value = scene.script;
  if (durationSlider) {
    durationSlider.value = scene.duration;
    valDuration.textContent = `${scene.duration}.0s`;
  }
}

// Bind inspector change events to active scene state
const editorVoiceSelect = document.getElementById('editorVoiceSelect');
if (editorVoiceSelect) {
  editorVoiceSelect.addEventListener('change', (e) => {
    scenes[currentSceneIndex].voiceId = e.target.value;
    const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    const v = voices.find(vc => vc.id === e.target.value);
    if (v) {
      const rateSlider = document.getElementById('editorVoiceRate');
      const valRate = document.getElementById('valVoiceRate');
      if (rateSlider) rateSlider.value = v.rate || 1.0;
      if (valRate) valRate.textContent = `${v.rate || 1.0}x`;
    }
  });
}

const editorVoiceRate = document.getElementById('editorVoiceRate');
if (editorVoiceRate) {
  editorVoiceRate.addEventListener('input', (e) => {
    const valRate = document.getElementById('valVoiceRate');
    if (valRate) valRate.textContent = `${e.target.value}x`;
    
    const voiceId = scenes[currentSceneIndex].voiceId;
    let voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    let v = voices.find(vc => vc.id === voiceId);
    if (v) {
      v.rate = parseFloat(e.target.value);
      setLocal('sdl_voices', voices);
    }
  });
}

const editorScriptTextarea = document.getElementById('editorScriptTextarea');
if (editorScriptTextarea) {
  editorScriptTextarea.addEventListener('input', (e) => {
    scenes[currentSceneIndex].script = e.target.value;
  });
}

const sceneDurationSlider = document.getElementById('sceneDurationSlider');
if (sceneDurationSlider) {
  sceneDurationSlider.addEventListener('input', (e) => {
    const valDuration = document.getElementById('valSceneDuration');
    if (valDuration) valDuration.textContent = `${e.target.value}.0s`;
    scenes[currentSceneIndex].duration = parseInt(e.target.value);
    renderTimelineScenes();
  });
}

// Bind inspector text layer updates
const textFontSize = document.getElementById('textFontSize');
if (textFontSize) {
  textFontSize.addEventListener('input', (e) => {
    const valFontSize = document.getElementById('valFontSize');
    if (valFontSize) valFontSize.textContent = `${e.target.value}px`;
    
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer && activeLayer.type === 'text') {
      activeLayer.fontSize = parseInt(e.target.value);
      const el = document.getElementById(activeLayer.id);
      if (el) {
        const span = el.querySelector('span') || el.querySelector('input');
        if (span) span.style.fontSize = activeLayer.fontSize + 'px';
      }
    }
  });
}

const textFontFamily = document.getElementById('textFontFamily');
if (textFontFamily) {
  textFontFamily.addEventListener('change', (e) => {
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer && activeLayer.type === 'text') {
      activeLayer.fontStyle = e.target.value;
      const el = document.getElementById(activeLayer.id);
      if (el) {
        const span = el.querySelector('span') || el.querySelector('input');
        if (span) span.style.fontFamily = activeLayer.fontStyle;
      }
    }
  });
}

const textColorPicker = document.getElementById('textColorPicker');
if (textColorPicker) {
  textColorPicker.addEventListener('input', (e) => {
    const textColorVal = document.getElementById('textColorVal');
    if (textColorVal) textColorVal.value = e.target.value;
    
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer && activeLayer.type === 'text') {
      activeLayer.color = e.target.value;
      const el = document.getElementById(activeLayer.id);
      if (el) {
        const span = el.querySelector('span') || el.querySelector('input');
        if (span) span.style.color = activeLayer.color;
      }
    }
  });
}

const btnMoveTextFront = document.getElementById('btnMoveTextFront');
if (btnMoveTextFront) {
  btnMoveTextFront.addEventListener('click', () => {
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer) {
      const maxZ = Math.max(...scenes[currentSceneIndex].layers.map(l => l.zIndex || 0), 10);
      activeLayer.zIndex = maxZ + 1;
      const el = document.getElementById(activeLayer.id);
      if (el) el.style.zIndex = activeLayer.zIndex;
      showToast('Capa Ajustada', 'Texto traído al frente.', 'info');
    }
  });
}

const btnDeleteTextLayer = document.getElementById('btnDeleteTextLayer');
if (btnDeleteTextLayer) {
  btnDeleteTextLayer.addEventListener('click', () => {
    const idx = scenes[currentSceneIndex].layers.findIndex(l => l.id === activeSelectedLayerId);
    if (idx !== -1) {
      scenes[currentSceneIndex].layers.splice(idx, 1);
      renderSceneLayers(currentSceneIndex);
      focusLayer(null);
      showToast('Capa Eliminada', 'Se quitó el cuadro de texto.', 'info');
    }
  });
}

// Bind inspector shape layer updates
const shapeColorPicker = document.getElementById('shapeColorPicker');
if (shapeColorPicker) {
  shapeColorPicker.addEventListener('input', (e) => {
    const shapeColorVal = document.getElementById('shapeColorVal');
    if (shapeColorVal) shapeColorVal.value = e.target.value;
    
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer && activeLayer.type === 'shape') {
      activeLayer.fillColor = e.target.value;
      const el = document.getElementById(activeLayer.id);
      if (el) el.style.backgroundColor = activeLayer.fillColor;
    }
  });
}

const btnMoveShapeFront = document.getElementById('btnMoveShapeFront');
if (btnMoveShapeFront) {
  btnMoveShapeFront.addEventListener('click', () => {
    const activeLayer = scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId);
    if (activeLayer) {
      const maxZ = Math.max(...scenes[currentSceneIndex].layers.map(l => l.zIndex || 0), 10);
      activeLayer.zIndex = maxZ + 1;
      const el = document.getElementById(activeLayer.id);
      if (el) el.style.zIndex = activeLayer.zIndex;
      showToast('Capa Ajustada', 'Figura traída al frente.', 'info');
    }
  });
}

const btnDeleteShapeLayer = document.getElementById('btnDeleteShapeLayer');
if (btnDeleteShapeLayer) {
  btnDeleteShapeLayer.addEventListener('click', () => {
    const idx = scenes[currentSceneIndex].layers.findIndex(l => l.id === activeSelectedLayerId);
    if (idx !== -1) {
      scenes[currentSceneIndex].layers.splice(idx, 1);
      renderSceneLayers(currentSceneIndex);
      focusLayer(null);
      showToast('Capa Eliminada', 'Se quitó la figura/recurso.', 'info');
    }
  });
}

// Load state into Canvas
function loadSceneStateIntoCanvas(idx) {
  const scene = scenes[idx];
  const stage = document.getElementById('videoCanvasStage');
  if (!stage) return;

  normalizeScene(scene);
  renderSceneLayers(idx);
}

// Render dynamic layers on Canvas stage
function renderSceneLayers(idx) {
  const scene = scenes[idx];
  const stage = document.getElementById('videoCanvasStage');
  if (!stage) return;

  applyBackgroundToCanvas(stage, scene.bg);
  
  // Update scene background buttons active class
  document.querySelectorAll('.bg-btn').forEach(btn => {
    if (btn.dataset.bg === scene.bg) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  // Keep the subtitle container intact
  const overlay = document.getElementById('canvasSubtitleOverlay');
  stage.innerHTML = '';
  if (overlay) stage.appendChild(overlay);

  scene.layers.forEach(layer => {
    const layerEl = document.createElement('div');
    layerEl.className = 'canvas-layer';
    layerEl.id = layer.id;

    if (layer.type === 'avatar') {
      layerEl.classList.add('layer-avatar');
      const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
      const chosenAv = avatars.find(av => av.id === layer.avatarId) || DEFAULT_AVATARS[0];
      
      const img = document.createElement('img');
      img.src = chosenAv.img;
      img.alt = chosenAv.name;
      img.id = 'canvasAvatarImg';
      layerEl.appendChild(img);
      
      if (isSpeakingPreview && idx === currentSceneIndex) {
        layerEl.classList.add('talking');
      }
    } 
    else if (layer.type === 'text') {
      layerEl.classList.add('layer-text');
      const textSpan = document.createElement('span');
      textSpan.textContent = layer.text;
      textSpan.style.fontFamily = layer.fontStyle;
      textSpan.style.fontSize = layer.fontSize + 'px';
      textSpan.style.color = layer.color;
      textSpan.style.width = '100%';
      textSpan.style.display = 'block';
      
      textSpan.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = layer.text;
        input.style.fontFamily = layer.fontStyle;
        input.style.fontSize = layer.fontSize + 'px';
        input.style.color = layer.color;
        input.style.width = '100%';
        input.style.background = 'transparent';
        input.style.border = 'none';
        input.style.outline = 'none';
        
        textSpan.replaceWith(input);
        input.focus();
        
        const saveText = () => {
          layer.text = input.value;
          textSpan.textContent = input.value;
          input.replaceWith(textSpan);
        };
        input.addEventListener('blur', saveText);
        input.addEventListener('keydown', (evt) => {
          if (evt.key === 'Enter') saveText();
        });
      });
      layerEl.appendChild(textSpan);
    } 
    else if (layer.type === 'shape') {
      layerEl.classList.add('layer-shape');
      if (layer.shapeType === 'circle') {
        layerEl.classList.add('layer-shape-circle');
      } else {
        layerEl.classList.add('layer-shape-rectangle');
      }
      layerEl.style.backgroundColor = layer.fillColor;
    }
    else if (layer.type === 'image') {
      layerEl.classList.add('layer-image');
      const img = document.createElement('img');
      img.src = layer.src;
      img.alt = layer.name;
      layerEl.appendChild(img);
    }

    layerEl.style.left = `calc(${layer.left}% - ${layer.width / 2}px)`;
    layerEl.style.top = `calc(${layer.top}% - ${layer.height / 2}px)`;
    layerEl.style.width = layer.width + 'px';
    layerEl.style.height = layer.height + 'px';
    layerEl.style.zIndex = layer.zIndex;

    if (layer.id === activeSelectedLayerId) {
      layerEl.classList.add('selected');
    }

    const handles = ['nw', 'ne', 'se', 'sw'];
    handles.forEach(h => {
      const handle = document.createElement('div');
      handle.className = `resize-handle rh-${h}`;
      layerEl.appendChild(handle);
    });

    layerEl.addEventListener('click', (e) => {
      e.stopPropagation();
      focusLayer(layer.id);
    });

    setupDynamicDraggable(layerEl, layer);
    setupDynamicResizable(layerEl, layer);

    stage.appendChild(layerEl);
  });
}

function selectAvatarForScene(avId) {
  let avatarLayer = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
  if (!avatarLayer) {
    avatarLayer = {
      id: 'layer-avatar-' + Date.now(),
      type: 'avatar',
      avatarId: avId,
      left: 50,
      top: 50,
      width: 200,
      height: 200,
      zIndex: 10
    };
    scenes[currentSceneIndex].layers.push(avatarLayer);
  } else {
    avatarLayer.avatarId = avId;
  }
  scenes[currentSceneIndex].avatarId = avId;
  renderSceneLayers(currentSceneIndex);
  focusLayer(avatarLayer.id);
}

// Override drawer avatar clicks
function renderEditorDrawerAvatars() {
  const container = document.getElementById('editorDrawerAvatarsGrid');
  if (!container) return;
  container.innerHTML = '';

  const list = getLocal('sdl_avatars') || DEFAULT_AVATARS;
  list.forEach(av => {
    const div = document.createElement('div');
    div.className = 'drawer-av-card';
    div.innerHTML = `
      <img src="${av.img}" alt="${av.name}">
      <div class="drawer-av-name">${av.name}</div>
    `;
    div.addEventListener('click', () => {
      selectAvatarForScene(av.id);
      updateInspectorInputs();
    });
    container.appendChild(div);
  });
}

// Override user asset usage click to load Base64 images as custom layers
document.addEventListener('click', (e) => {
  const btnUse = e.target.closest('.btn-use-asset');
  if (btnUse) {
    const idx = parseInt(btnUse.dataset.idx);
    const assets = getLocal('sdl_user_assets') || [];
    const asset = assets[idx];
    if (asset) {
      if (asset.type === 'image') {
        const imageLayer = {
          id: 'layer-image-' + Date.now(),
          type: 'image',
          src: asset.src,
          name: asset.name,
          left: 40 + Math.random() * 10,
          top: 40 + Math.random() * 10,
          width: 120,
          height: 120,
          zIndex: 18 + scenes[currentSceneIndex].layers.length
        };
        scenes[currentSceneIndex].layers.push(imageLayer);
        renderSceneLayers(currentSceneIndex);
        focusLayer(imageLayer.id);
        showToast('Recurso Añadido', 'Se cargó la imagen en el lienzo.', 'success');
      } else {
        showToast('Audio Vinculado', 'Se vinculó el recurso de audio a esta escena.', 'success');
      }
    }
  }
});

// --- TIMELINE MULTIESCENA SLIDES BAR ---
function renderTimelineScenes() {
  const list = document.getElementById('timelineScenesList');
  if (!list) return;

  list.innerHTML = '';
  const listAv = getLocal('sdl_avatars') || DEFAULT_AVATARS;

  scenes.forEach((scene, idx) => {
    const activeAv = listAv.find(a => a.id === scene.avatarId) || DEFAULT_AVATARS[0];
    
    const card = document.createElement('div');
    card.className = `scene-thumbnail-card ${idx === currentSceneIndex ? 'active' : ''}`;
    card.innerHTML = `
      <div class="scene-thumb-preview">
        <img src="${activeAv.img}" alt="Thumb">
      </div>
      <div class="scene-thumb-footer">
        <span>#${idx + 1} (${scene.duration}s)</span>
        ${scenes.length > 1 ? `<button class="btn-delete-scene" data-idx="${idx}"><i class="fa-solid fa-trash"></i></button>` : ''}
      </div>
    `;
    card.addEventListener('click', (e) => {
      if (e.target.closest('.btn-delete-scene')) return; // Handle delete
      currentSceneIndex = idx;
      const avLayer = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
      focusLayer(avLayer ? avLayer.id : null);
      syncEditorPresets();
    });
    list.appendChild(card);
  });
}

// Add timeline scene button click
const btnAddTimelineScene = document.getElementById('btnAddTimelineScene');
if (btnAddTimelineScene) {
  btnAddTimelineScene.addEventListener('click', () => {
    // Duplicate current or make new clean scene
    const active = scenes[currentSceneIndex];
    const newScene = {
      id: 's-' + Date.now(),
      avatarId: active.avatarId,
      voiceId: active.voiceId,
      script: 'Nueva diapositiva de guión.',
      bg: active.bg,
      duration: 5,
      layers: active.layers ? JSON.parse(JSON.stringify(active.layers)) : []
    };
    if (newScene.layers.length > 0) {
      newScene.layers.forEach(l => {
        l.id = 'layer-' + l.type + '-' + Math.random().toString(36).substr(2, 9);
      });
    }
    scenes.push(newScene);
    currentSceneIndex = scenes.length - 1;
    const avLayer = newScene.layers.find(l => l.type === 'avatar');
    focusLayer(avLayer ? avLayer.id : null);
    syncEditorPresets();
    showToast('Escena Añadida', 'Se insertó una nueva diapositiva en el timeline.', 'info');
  });
}

// Scene deletion click listener delegation
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-delete-scene');
  if (btn) {
    const idx = parseInt(btn.dataset.idx);
    if (scenes.length > 1) {
      scenes.splice(idx, 1);
      // Adjust current index selection bounds
      if (currentSceneIndex >= scenes.length) currentSceneIndex = scenes.length - 1;
      const avLayer = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
      focusLayer(avLayer ? avLayer.id : null);
      syncEditorPresets();
      showToast('Escena Eliminada', 'Borrador de escena removido.', 'info');
    }
  }
});

// AI Script generation writer mock
const btnGenerateEditorScript = document.getElementById('btnGenerateEditorScript');
if (btnGenerateEditorScript) {
  btnGenerateEditorScript.addEventListener('click', () => {
    const topic = document.getElementById('aiTopicInput').value.trim();
    const tone = document.getElementById('aiToneSelect').value;

    if (!topic) {
      showToast('Ingresa un Tema', 'La IA requiere una idea clave para redactar.', 'error');
      return;
    }

    let scriptText = '';
    if (tone === 'persuasivo') {
      scriptText = `¡Atención! ¿Buscas potenciar tu alcance sobre ${topic}? Te presentamos la herramienta definitiva para lograrlo en tiempo récord. ¡Contáctanos hoy!`;
    } else if (tone === 'informativo') {
      scriptText = `El día de hoy explicaremos a fondo los fundamentos esenciales de ${topic}. Analizaremos la estructura actual con un enfoque didáctico y directo.`;
    } else if (tone === 'entusiasta') {
      scriptText = `¡Estamos sumamente emocionados de anunciar el lanzamiento de ${topic}! Es un hito tecnológico que transformará por completo la industria.`;
    } else {
      scriptText = `Bienvenidos. Presentamos la guía analítica sobre ${topic}. Evaluaremos el estado del negocio con un criterio ejecutivo y profesional.`;
    }

    document.getElementById('editorScriptTextarea').value = scriptText;
    scenes[currentSceneIndex].script = scriptText;
    showToast('Guión Redactado por IA', 'Se actualizó el cuadro de texto del guión.', 'success');
  });
}

// --- REAL TTS & VIDEOPLAY GENERATION ---

// 1. Text-to-Speech preview
const btnPlayScriptSpeech = document.getElementById('btnPlayScriptSpeech');
const btnStopScriptSpeech = document.getElementById('btnStopScriptSpeech');
const canvasSubtitleOverlay = document.getElementById('canvasSubtitleOverlay');

if (btnPlayScriptSpeech) {
  btnPlayScriptSpeech.addEventListener('click', () => {
    const scriptText = document.getElementById('editorScriptTextarea').value.trim();
    if (!scriptText) {
      showToast('Escribe un texto', 'No hay guión que leer.', 'error');
      return;
    }

    stopTTSPreview();

    const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    const activeVc = voices.find(v => v.id === scenes[currentSceneIndex].voiceId) || DEFAULT_VOICES[0];

    if (isBackendOnline && backendApiConfigured.elevenLabsConfigured) {
      showToast('Sintetizando voz real...', 'Consultando ElevenLabs.', 'info');
      
      fetch('http://localhost:3000/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: scriptText, voiceId: activeVc.id })
      })
      .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'TTS failed'); });
        return res.blob();
      })
      .then(blob => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        activeAudioElement = audio;

        audio.onplay = () => {
          isSpeakingPreview = true;
          if (btnPlayScriptSpeech) btnPlayScriptSpeech.style.display = 'none';
          if (btnStopScriptSpeech) btnStopScriptSpeech.style.display = 'inline-flex';
          
          const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
          if (avL) {
            const el = document.getElementById(avL.id);
            if (el) el.classList.add('talking');
          }
          
          if (canvasSubtitleOverlay) {
            canvasSubtitleOverlay.innerHTML = `<span>"${scriptText.length > 60 ? scriptText.slice(0, 57) + '...' : scriptText}"</span>`;
          }
        };

        audio.onended = () => stopTTSPreview();
        audio.onerror = () => stopTTSPreview();
        audio.play();
      })
      .catch(err => {
        console.warn('Real TTS failed. Falling back to local browser SpeechSynthesis.', err);
        showToast('Modo Simulado', 'Sintetizador local activado como alternativa.', 'info');
        runLocalSpeechSynthesis(scriptText, activeVc);
      });
    } else {
      runLocalSpeechSynthesis(scriptText, activeVc);
    }
  });
}

function runLocalSpeechSynthesis(scriptText, activeVc) {
  if (!('speechSynthesis' in window)) {
    showToast('No soportado', 'La síntesis de voz no es compatible.', 'error');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(scriptText);
  if (activeVc.pitch !== undefined) utterance.pitch = activeVc.pitch;
  if (activeVc.rate !== undefined) utterance.rate = activeVc.rate;

  const match = getSystemVoiceForId(activeVc, window.speechSynthesis.getVoices());
  if (match) utterance.voice = match;

  utterance.onstart = () => {
    isSpeakingPreview = true;
    if (btnPlayScriptSpeech) btnPlayScriptSpeech.style.display = 'none';
    if (btnStopScriptSpeech) btnStopScriptSpeech.style.display = 'inline-flex';
    
    const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
    if (avL) {
      const el = document.getElementById(avL.id);
      if (el) el.classList.add('talking');
    }
    
    if (canvasSubtitleOverlay) {
      canvasSubtitleOverlay.innerHTML = `<span>"${scriptText.length > 60 ? scriptText.slice(0, 57) + '...' : scriptText}"</span>`;
    }
  };

  utterance.onend = () => stopTTSPreview();
  utterance.onerror = () => stopTTSPreview();

  activeSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

if (btnStopScriptSpeech) {
  btnStopScriptSpeech.addEventListener('click', stopTTSPreview);
}

function stopTTSPreview() {
  window.speechSynthesis.cancel();
  if (activeAudioElement) {
    activeAudioElement.pause();
    activeAudioElement.src = '';
    activeAudioElement = null;
  }
  isSpeakingPreview = false;
  
  if (btnPlayScriptSpeech) btnPlayScriptSpeech.style.display = 'inline-flex';
  if (btnStopScriptSpeech) btnStopScriptSpeech.style.display = 'none';
  
  const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
  if (avL) {
    const el = document.getElementById(avL.id);
    if (el) el.classList.remove('talking');
  }

  if (canvasSubtitleOverlay) {
    canvasSubtitleOverlay.innerHTML = `<span>Haz clic en reproducir guion para ver el avatar hablar</span>`;
  }
}

// 2. Play full timeline scenes sequential preview
const btnPlayFullTimelinePreview = document.getElementById('btnPlayFullTimelinePreview');
const btnPlayAllTimeline = document.getElementById('btnPlayAllTimeline');

function startFullTimelinePreview() {
  stopTTSPreview();
  
  let sceneIndex = 0;
  function playNextScene() {
    if (sceneIndex >= scenes.length) {
      showToast('Vista Previa Terminada', 'Línea de tiempo reproducida por completo.', 'success');
      currentSceneIndex = 0;
      syncEditorPresets();
      return;
    }

    currentSceneIndex = sceneIndex;
    syncEditorPresets();
    
    const scene = scenes[sceneIndex];
    const voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    const activeVc = voices.find(v => v.id === scene.voiceId) || DEFAULT_VOICES[0];
    
    if (isBackendOnline && backendApiConfigured.elevenLabsConfigured) {
      fetch('http://localhost:3000/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: scene.script, voiceId: activeVc.id })
      })
      .then(res => res.blob())
      .then(blob => {
        const audio = new Audio(URL.createObjectURL(blob));
        activeAudioElement = audio;

        audio.onplay = () => {
          const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
          if (avL) {
            const el = document.getElementById(avL.id);
            if (el) el.classList.add('talking');
          }
          if (canvasSubtitleOverlay) {
            canvasSubtitleOverlay.innerHTML = `<span>"${scene.script.length > 60 ? scene.script.slice(0, 57) + '...' : scene.script}"</span>`;
          }
        };

        audio.onended = () => {
          const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
          if (avL) {
            const el = document.getElementById(avL.id);
            if (el) el.classList.remove('talking');
          }
          sceneIndex++;
          playNextScene();
        };
        audio.play();
      })
      .catch(() => {
        runLocalTTSForTimeline();
      });
    } else {
      runLocalTTSForTimeline();
    }

    function runLocalTTSForTimeline() {
      const utterance = new SpeechSynthesisUtterance(scene.script);
      if (activeVc.pitch !== undefined) utterance.pitch = activeVc.pitch;
      if (activeVc.rate !== undefined) utterance.rate = activeVc.rate;
      
      const match = getSystemVoiceForId(activeVc, window.speechSynthesis.getVoices());
      if (match) utterance.voice = match;

      utterance.onstart = () => {
        const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
        if (avL) {
          const el = document.getElementById(avL.id);
          if (el) el.classList.add('talking');
        }
        if (canvasSubtitleOverlay) {
          canvasSubtitleOverlay.innerHTML = `<span>"${scene.script.length > 60 ? scene.script.slice(0, 57) + '...' : scene.script}"</span>`;
        }
      };

      utterance.onend = () => {
        const avL = scenes[currentSceneIndex].layers.find(l => l.type === 'avatar');
        if (avL) {
          const el = document.getElementById(avL.id);
          if (el) el.classList.remove('talking');
        }
        sceneIndex++;
        playNextScene();
      };
      
      activeSpeechUtterance = utterance;
      window.speechSynthesis.speak(utterance);
    }
  }

  playNextScene();
}

if (btnPlayFullTimelinePreview) btnPlayFullTimelinePreview.addEventListener('click', startFullTimelinePreview);
if (btnPlayAllTimeline) btnPlayAllTimeline.addEventListener('click', startFullTimelinePreview);

// 3. Generate video with D-ID (Real API with Polling Status / Mock Fallback)
const btnGenerateVideo = document.getElementById('btnGenerateVideo');

function runMockVideoGeneration(scriptCombined, credits) {
  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    icon.className = 'modal-icon';
    icon.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    titleEl.textContent = 'Renderizando Video (Simulado)';
    msgEl.textContent = 'Maquetando escenas y unificando audios neuronales...';
    actionBtn.style.display = 'none';
    overlay.classList.add('active');

    const steps = [
      { text: 'Procesando transiciones de escenas...', delay: 700 },
      { text: 'Sintetizando locución de ElevenLabs...', delay: 1400 },
      { text: 'Alineando lipsync facial fotorrealista...', delay: 2200 },
      { text: 'Generando archivo MP4 HD...', delay: 3000 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        msgEl.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      setCredits(credits - 20);
      
      const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
      const activeAv = avatars.find(a => a.id === scenes[0].avatarId) || DEFAULT_AVATARS[0];

      const newProj = {
        id: 'p-' + Date.now(),
        name: `Video: ${scriptCombined.slice(0, 25)}...`,
        type: 'video',
        date: new Date().toISOString().split('T')[0],
        duration: `${scenes.reduce((acc, curr) => acc + curr.duration, 0)}s`,
        details: `${selectedRatio === '16-9' ? 'Horizontal (16:9)' : 'Vertical (9:16)'} • Avatar ${activeAv.name}`,
        avatarImg: activeAv.img
      };

      const projs = getLocal('sdl_projects') || [];
      projs.push(newProj);
      setLocal('sdl_projects', projs);

      icon.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--accent-green)"></i>';
      titleEl.textContent = '¡Video Listo!';
      msgEl.textContent = 'El render del video de avatar se completó con éxito.';
      actionBtn.style.display = 'block';
      actionBtn.textContent = 'Ver en Biblioteca';

      const redirect = () => {
        overlay.classList.remove('active');
        switchView('library');
        actionBtn.removeEventListener('click', redirect);
      };
      actionBtn.addEventListener('click', redirect);

      showToast('Video Generado', 'Guardado en tu biblioteca.', 'success');
      updateDashboardStats();
    }, 3800);
  }
}

function completeRealVideoGeneration(videoUrl, scriptCombined, credits) {
  setCredits(credits - 20);

  const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
  const activeAv = avatars.find(a => a.id === scenes[0].avatarId) || DEFAULT_AVATARS[0];

  const newProj = {
    id: 'p-' + Date.now(),
    name: `Video: ${scriptCombined.slice(0, 25)}...`,
    type: 'video',
    date: new Date().toISOString().split('T')[0],
    duration: `${scenes.reduce((acc, curr) => acc + curr.duration, 0)}s`,
    details: `${selectedRatio === '16-9' ? 'Horizontal (16:9)' : 'Vertical (9:16)'} • Avatar ${activeAv.name}`,
    avatarImg: activeAv.img,
    videoUrl: videoUrl // D-ID output URL
  };

  const projs = getLocal('sdl_projects') || [];
  projs.push(newProj);
  setLocal('sdl_projects', projs);

  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    icon.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--accent-green)"></i>';
    titleEl.textContent = '¡Video Listo!';
    msgEl.textContent = 'El video fotorrealista de D-ID ha finalizado su procesamiento en la nube.';
    actionBtn.style.display = 'block';
    actionBtn.textContent = 'Ver en Biblioteca';

    const redirect = () => {
      overlay.classList.remove('active');
      switchView('library');
      actionBtn.removeEventListener('click', redirect);
    };
    actionBtn.addEventListener('click', redirect);
  }

  showToast('Video Generado', 'Guardado en tu biblioteca.', 'success');
  updateDashboardStats();
}

function handleVideoGenError(err) {
  console.error('Real video gen failed:', err);
  
  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:var(--accent-red)"></i>';
    titleEl.textContent = 'Error de Renderizado';
    msgEl.textContent = `No se pudo conectar con el servidor de renderizado real: ${err.message || err}. ¿Deseas usar el simulador de alta fidelidad?`;
    actionBtn.style.display = 'block';
    actionBtn.textContent = 'Usar Simulación';

    const useSim = () => {
      overlay.classList.remove('active');
      actionBtn.removeEventListener('click', useSim);
      
      const scriptCombined = scenes.map(s => s.script).join(' ');
      const credits = getCredits();
      runMockVideoGeneration(scriptCombined, credits);
    };
    actionBtn.addEventListener('click', useSim);
  }
}

if (btnGenerateVideo) {
  btnGenerateVideo.addEventListener('click', () => {
    const scriptCombined = scenes.map(s => s.script).join(' ').trim();
    if (!scriptCombined) {
      showToast('Escribe un guión', 'No puedes generar un video vacío.', 'error');
      return;
    }

    const credits = getCredits();
    if (credits < 20) {
      showModal('Créditos Insuficientes', 'Generar un video consume 20 créditos.', false);
      return;
    }

    stopTTSPreview();

    if (isBackendOnline && backendApiConfigured.dIdConfigured) {
      const overlay = document.getElementById('globalModalOverlay');
      const icon = document.getElementById('globalModalIcon');
      const titleEl = document.getElementById('globalModalTitle');
      const msgEl = document.getElementById('globalModalMessage');
      const actionBtn = document.getElementById('globalModalActionBtn');

      if (overlay) {
        icon.className = 'modal-icon';
        icon.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
        titleEl.textContent = 'Llamando a D-ID';
        msgEl.textContent = 'Estableciendo canal seguro e inyectando imagen de presentador...';
        actionBtn.style.display = 'none';
        overlay.classList.add('active');
      }

      fetch('http://localhost:3000/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          avatarId: scenes[0].avatarId,
          script: scriptCombined
        })
      })
      .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'API failed'); });
        return res.json();
      })
      .then(data => {
        const talkId = data.id;
        msgEl.textContent = 'Video inicializado. Procesando sincronización labial...';
        
        let pollCount = 0;
        const interval = setInterval(() => {
          pollCount++;
          if (pollCount > 60) {
            clearInterval(interval);
            handleVideoGenError(new Error('D-ID render timeout.'));
            return;
          }

          fetch(`http://localhost:3000/api/video-status/${talkId}`)
          .then(res => res.json())
          .then(statusData => {
            if (statusData.status === 'done') {
              clearInterval(interval);
              completeRealVideoGeneration(statusData.videoUrl, scriptCombined, credits);
            } else if (statusData.status === 'error' || statusData.error) {
              clearInterval(interval);
              throw new Error(statusData.error || 'Rendering error on D-ID server.');
            } else {
              msgEl.textContent = `Procesando gesticulación de presentador... Estado: ${statusData.status} (${pollCount * 2}s)`;
            }
          })
          .catch(err => {
            clearInterval(interval);
            handleVideoGenError(err);
          });
        }, 2000);
      })
      .catch(err => {
        handleVideoGenError(err);
      });
    } else {
      runMockVideoGeneration(scriptCombined, credits);
    }
  });
}

// --- BIBLIOTECA VIEW ---
function renderLibrary() {
  const videosGrid = document.getElementById('libraryVideosGrid');
  const audiosGrid = document.getElementById('libraryAudiosGrid');
  const clonedGrid = document.getElementById('libraryClonedGrid');
  const avatarsLibGrid = document.getElementById('libraryAvatarsGrid');
  const scriptsGrid = document.getElementById('libraryScriptsGrid');

  const projects = getLocal('sdl_projects') || [];
  const avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
  const voices = getLocal('sdl_voices') || DEFAULT_VOICES;

  // 1. Videos
  if (videosGrid) {
    const vids = projects.filter(p => p.type === 'video');
    videosGrid.innerHTML = '';
    if (vids.length === 0) {
      videosGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay videos renderizados.</p>';
    } else {
      vids.forEach(v => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="proj-thumb-box">
            <img src="${v.avatarImg || 'assets/avatar_sofia.png'}" alt="Thumb">
            <span class="proj-duration">${v.duration}</span>
          </div>
          <div class="proj-info">
            <h4 class="proj-title">${v.name}</h4>
            <span class="proj-date">${v.date} • ${v.details}</span>
            <div class="proj-actions">
              <button class="btn-primary-sm w-full btn-dl-mock" data-name="${v.name}" data-url="${v.videoUrl || ''}"><i class="fa-solid fa-download"></i> Descargar</button>
              ${v.videoUrl ? `<button class="btn-outline-sm btn-play-video" data-url="${v.videoUrl}"><i class="fa-solid fa-play"></i></button>` : ''}
              <button class="btn-outline-sm btn-delete-proj" data-id="${v.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `;
        videosGrid.appendChild(card);
      });
    }
  }

  // 2. Audios
  if (audiosGrid) {
    const auds = projects.filter(p => p.type === 'audio');
    audiosGrid.innerHTML = '';
    if (auds.length === 0) {
      audiosGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay audios guardados.</p>';
    } else {
      auds.forEach(a => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="proj-thumb-box">
            <i class="fa-solid fa-file-audio proj-media-icon"></i>
            <span class="proj-duration">${a.duration}</span>
          </div>
          <div class="proj-info">
            <h4 class="proj-title">${a.name}</h4>
            <span class="proj-date">${a.date} • ${a.details}</span>
            <div class="proj-actions">
              <button class="btn-primary-sm w-full btn-play-audio-mock" data-name="${a.name}" data-url="${a.audioUrl || ''}"><i class="fa-solid fa-play"></i> Escuchar</button>
              <button class="btn-outline-sm btn-delete-proj" data-id="${a.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `;
        audiosGrid.appendChild(card);
      });
    }
  }

  // 3. Cloned
  if (clonedGrid) {
    const cln = voices.filter(v => v.tone === 'Clonado');
    clonedGrid.innerHTML = '';
    if (cln.length === 0) {
      clonedGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay voces clonadas.</p>';
    } else {
      cln.forEach(c => {
        const card = document.createElement('div');
        card.className = 'voice-card';
        card.style.flexDirection = 'column';
        card.style.alignItems = 'flex-start';
        card.style.gap = '10px';
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
            <strong>${c.name}</strong>
            <button class="btn-outline-sm btn-delete-voice-lib" data-id="${c.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
          <span style="font-size:0.75rem; color:var(--text-muted)">Idioma: ${c.lang} • Género: ${c.gender}</span>
        `;
        clonedGrid.appendChild(card);
      });
    }
  }

  // 4. Avatars
  if (avatarsLibGrid) {
    const avs = avatars.filter(a => a.id.startsWith('av-') && a.id !== 'av-sofia-biz' && a.id !== 'av-roberto-biz' && a.id !== 'av-elena-pod' && a.id !== 'av-nova-fut');
    avatarsLibGrid.innerHTML = '';
    if (avs.length === 0) {
      avatarsLibGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay avatares personalizados.</p>';
    } else {
      avs.forEach(av => {
        const card = document.createElement('div');
        card.className = 'avatar-card';
        card.innerHTML = `
          <div class="av-thumb-wrapper">
            <img src="${av.img}" alt="${av.name}">
          </div>
          <div class="av-info-bar">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h4 style="font-size:0.8rem; margin:0;">${av.name}</h4>
              <button class="btn-outline-sm btn-delete-avatar-lib" data-id="${av.id}" style="padding:2px 6px; font-size:0.65rem;"><i class="fa-solid fa-trash"></i></button>
            </div>
            <span>${av.style}</span>
          </div>
        `;
        avatarsLibGrid.appendChild(card);
      });
    }
  }

  // 5. Scripts
  if (scriptsGrid) {
    const scrs = projects.filter(p => p.type === 'guion');
    scriptsGrid.innerHTML = '';
    if (scrs.length === 0) {
      scriptsGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay borradores guardados.</p>';
    } else {
      scrs.forEach(s => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="proj-info">
            <h4 class="proj-title">${s.name}</h4>
            <span class="proj-date">${s.date} • ${s.details}</span>
            <div class="proj-actions" style="margin-top:12px;">
              <button class="btn-primary-sm w-full btn-load-script-editor" data-script="${s.name}"><i class="fa-solid fa-edit"></i> Cargar Editor</button>
              <button class="btn-outline-sm btn-delete-proj" data-id="${s.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
        `;
        scriptsGrid.appendChild(card);
      });
    }
  }
}

// Binds library sub tab triggers
document.querySelectorAll('#view-library .hg-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-library .hg-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const panels = [
      'lib-videos-panel',
      'lib-audios-panel',
      'lib-cloned-panel',
      'lib-avatars-panel',
      'lib-scripts-panel'
    ];

    panels.forEach(p => {
      const el = document.getElementById(p);
      if (el) {
        if (p === tab) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind avatars sub tab triggers
document.querySelectorAll('#view-avatars .hg-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-avatars .hg-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const panels = [
      'avatar-panel-studio',
      'avatar-panel-instant',
      'avatar-panel-photo'
    ];

    panels.forEach(p => {
      const el = document.getElementById(p);
      if (el) {
        if (p === tab) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind voices sub tab triggers
document.querySelectorAll('#view-voices .hg-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-voices .hg-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const panels = [
      'voices-panel-list',
      'voices-panel-clone'
    ];

    panels.forEach(p => {
      const el = document.getElementById(p);
      if (el) {
        if (p === tab) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind policies sub tab triggers
document.querySelectorAll('#view-policies .hg-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-policies .hg-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const panels = [
      'policy-privacy',
      'policy-terms',
      'policy-refund',
      'policy-compliance',
      'policy-ethics'
    ];

    panels.forEach(p => {
      const el = document.getElementById(p);
      if (el) {
        if (p === tab) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Video modal player helper
function showVideoPlayerModal(url) {
  const modalHTML = `
    <div id="videoPlayerModalOverlay" class="global-modal-overlay active" style="z-index: 9999; display: flex; align-items: center; justify-content: center;">
      <div class="global-modal-card" style="max-width: 640px; width: 90%; position: relative;">
        <div class="modal-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <h3>Video Renderizado (D-ID Real)</h3>
          <button id="closeVideoPlayerBtn" class="btn-outline-sm" style="padding: 4px 8px; border:none; background:transparent; font-size:1.2rem; cursor:pointer;"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div class="modal-body" style="text-align:center;">
          <video src="${url}" controls autoplay style="max-width: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);"></video>
        </div>
      </div>
    </div>
  `;
  const container = document.createElement('div');
  container.id = 'videoPlayerModalContainer';
  container.innerHTML = modalHTML;
  document.body.appendChild(container);

  document.getElementById('closeVideoPlayerBtn').addEventListener('click', () => {
    document.getElementById('videoPlayerModalOverlay').classList.remove('active');
    setTimeout(() => container.remove(), 300);
  });
}

// Download/Play button action listeners delegation
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-dl-mock');
  if (btn) {
    const url = btn.dataset.url;
    if (url) {
      window.open(url, '_blank');
      showToast('Enlace Abierto', 'El video se abrió en una pestaña externa.', 'success');
    } else {
      showToast('Descarga iniciada', `Descargando archivo HD: "${btn.dataset.name}"`, 'success');
    }
  }

  const playVidBtn = e.target.closest('.btn-play-video');
  if (playVidBtn) {
    const url = playVidBtn.dataset.url;
    if (url) {
      showVideoPlayerModal(url);
    }
  }

  const playAudioBtn = e.target.closest('.btn-play-audio-mock');
  if (playAudioBtn) {
    const url = playAudioBtn.dataset.url;
    if (url) {
      if (activeAudioElement) {
        activeAudioElement.pause();
        activeAudioElement = null;
      }
      activeAudioElement = new Audio(url);
      activeAudioElement.play();
      showToast('Reproduciendo audio', `Locución real: "${playAudioBtn.dataset.name}"`, 'info');
    } else {
      showToast('Reproduciendo audio', `Locución: "${playAudioBtn.dataset.name}"`, 'info');
    }
  }

  // Delete project
  const delBtn = e.target.closest('.btn-delete-proj');
  if (delBtn) {
    const id = delBtn.dataset.id;
    let projs = getLocal('sdl_projects') || [];
    projs = projs.filter(p => p.id !== id);
    setLocal('sdl_projects', projs);
    renderLibrary();
    updateDashboardStats();
    showToast('Elemento Eliminado', 'Se borró el borrador.', 'info');
  }

  // Delete voice
  const delVoiceBtn = e.target.closest('.btn-delete-voice-lib');
  if (delVoiceBtn) {
    const id = delVoiceBtn.dataset.id;
    let voices = getLocal('sdl_voices') || DEFAULT_VOICES;
    voices = voices.filter(v => v.id !== id);
    setLocal('sdl_voices', voices);
    renderLibrary();
    renderClonedVoicesList();
    renderVoicesLibrary();
    updateDashboardStats();
    showToast('Voz Eliminada', 'Se quitó la voz de tu catálogo.', 'info');
  }

  // Delete avatar
  const delAvBtn = e.target.closest('.btn-delete-avatar-lib');
  if (delAvBtn) {
    const id = delAvBtn.dataset.id;
    let avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
    avatars = avatars.filter(a => a.id !== id);
    setLocal('sdl_avatars', avatars);
    renderLibrary();
    renderAvatarsGrid();
    renderHomeWidgets();
    updateDashboardStats();
    showToast('Avatar Eliminado', 'Se quitó de tu lista.', 'info');
  }

  // Load saved script to editor
  const loadScriptBtn = e.target.closest('.btn-load-script-editor');
  if (loadScriptBtn) {
    const scriptName = loadScriptBtn.dataset.script;
    const projects = getLocal('sdl_projects') || [];
    const found = projects.find(p => p.name === scriptName && p.type === 'guion');
    if (found) {
      const scriptText = found.details.split(' • ')[0] || found.name;
      scenes = [
        {
          id: 's-' + Date.now(),
          avatarId: 'av-sofia-biz',
          voiceId: 'v-sofia',
          script: scriptText,
          bg: 'dark',
          duration: 5,
          layers: [
            {
              id: 'layer-avatar-' + Date.now(),
              type: 'avatar',
              avatarId: 'av-sofia-biz',
              top: 50,
              left: 50,
              width: 260,
              height: 260,
              zIndex: 10
            },
            {
              id: 'layer-text-' + (Date.now() + 1),
              type: 'text',
              text: scriptText,
              fontSize: 28,
              fontStyle: "'Inter', sans-serif",
              color: '#ffffff',
              top: 25,
              left: 50,
              width: 320,
              height: 60,
              zIndex: 20
            }
          ]
        }
      ];
      currentSceneIndex = 0;
      activeSelectedLayerId = null;
      switchView('editor');
      showToast('Borrador Cargado', 'Se cargó el guión en el editor.', 'success');
    }
  }
});

// --- SUBSCRIPTION & PAYMENT PRICING MOCK ---
const btnSelectCreatorPlan = document.getElementById('btnSelectCreatorPlan');
const btnSelectBusinessPlan = document.getElementById('btnSelectBusinessPlan');
const btnSaveCardDetails = document.getElementById('btnSaveCardDetails');

if (btnSelectCreatorPlan) {
  btnSelectCreatorPlan.addEventListener('click', () => {
    showModal('Checkout Suscripción', '¿Deseas suscribirte al Plan Creador Pro por $29/mes?', true, () => {
      setCredits(150);
      showToast('Plan Actualizado', '¡Gracias por tu compra! Tu límite de créditos se incrementó a 150.', 'success');
      
      // Add invoice
      const invoiceTableBody = document.getElementById('invoiceTableBody');
      if (invoiceTableBody) {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border-color)';
        row.innerHTML = `
          <td style="padding:10px 5px;">${new Date().toISOString().split('T')[0]}</td>
          <td style="padding:10px 5px;">Suscripción Plan Creador Pro</td>
          <td style="padding:10px 5px;">$29.00 USD</td>
          <td style="padding:10px 5px; color:var(--accent-green); font-weight:600;">Pagado</td>
        `;
        invoiceTableBody.insertBefore(row, invoiceTableBody.firstChild);
      }
    });
  });
}

if (btnSelectBusinessPlan) {
  btnSelectBusinessPlan.addEventListener('click', () => {
    showModal('Checkout Suscripción', '¿Deseas comprar el Plan Business por $89/mes?', true, () => {
      setCredits(500);
      showToast('Plan Actualizado', '¡Plan Business Activo! Tu límite de créditos se incrementó a 500.', 'success');
    });
  });
}

if (btnSaveCardDetails) {
  btnSaveCardDetails.addEventListener('click', () => {
    const num = document.getElementById('cardNumInput').value;
    if (num) {
      showToast('Tarjeta Actualizada', 'Los datos de facturación se guardaron de forma segura.', 'success');
    }
  });
}

// --- SUPPORT TICKETS MOCK ---
const btnSubmitSupportTicket = document.getElementById('btnSubmitSupportTicket');
if (btnSubmitSupportTicket) {
  btnSubmitSupportTicket.addEventListener('click', () => {
    const sub = document.getElementById('ticketSubject').value.trim();
    const msg = document.getElementById('ticketMessage').value.trim();
    if (!sub || !msg) {
      showToast('Campos vacíos', 'Por favor redacta el asunto y cuerpo del ticket.', 'error');
      return;
    }
    
    showToast('Enviando Ticket', 'Conectando con el panel de soporte...', 'info');
    setTimeout(() => {
      document.getElementById('ticketSubject').value = '';
      document.getElementById('ticketMessage').value = '';
      showToast('Ticket Enviado', 'Nuestro equipo técnico te responderá al correo de tu perfil.', 'success');
    }, 1500);
  });
}

// --- USER SETTINGS SAVING ---
const btnSaveProfileSettings = document.getElementById('btnSaveProfileSettings');
if (btnSaveProfileSettings) {
  btnSaveProfileSettings.addEventListener('click', () => {
    const name = document.getElementById('settingsNameInput').value.trim();
    const email = document.getElementById('settingsEmailInput').value.trim();
    
    if (name && email) {
      safeSetItem('sdl_username', name);
      safeSetItem('sdl_email', email);
      
      document.getElementById('sidebarUserName').textContent = name;
      
      const initial = name.charAt(0).toUpperCase();
      document.getElementById('sidebarAvatarInitial').textContent = initial;

      showToast('Ajustes Guardados', 'Tu perfil se actualizó correctamente.', 'success');
    }
  });
}

// Load initial user settings profile info
function loadUserSettings() {
  const name = safeGetItem('sdl_username', 'Usuario SDL');
  const email = safeGetItem('sdl_email', 'usuario@syntheticdigitallab.com');
  
  const settingsNameInput = document.getElementById('settingsNameInput');
  const settingsEmailInput = document.getElementById('settingsEmailInput');
  const sidebarUserName = document.getElementById('sidebarUserName');
  const sidebarAvatarInitial = document.getElementById('sidebarAvatarInitial');

  if (settingsNameInput) settingsNameInput.value = name;
  if (settingsEmailInput) settingsEmailInput.value = email;
  if (sidebarUserName) sidebarUserName.textContent = name;
  if (sidebarAvatarInitial) sidebarAvatarInitial.textContent = name.charAt(0).toUpperCase();

  updateCreditsDisplay();
}

function updateDashboardStats() {
  const dashValVideos = document.getElementById('dashValVideos');
  const dashValProjects = document.getElementById('dashValProjects');
  
  if (dashValVideos || dashValProjects) {
    const projs = getLocal('sdl_projects') || [];
    const vids = projs.filter(p => p.type === 'video');
    if (dashValVideos) dashValVideos.textContent = vids.length;
    
    const creditsUsed = 150 - getCredits();
    if (dashValProjects) dashValProjects.textContent = `${creditsUsed} Cr.`;
  }
}

// --- INITIALIZE SYSTEM BOOTSTRAP ---
initTheme();
loadUserSettings();
renderHomeWidgets();
updateDashboardStats();

// --- VIDEO TRANSLATE LOGIC ---
const translateVideoUploadZone = document.getElementById('translateVideoUploadZone');
const translateVideoFileInput = document.getElementById('translateVideoFileInput');
const translateVideoFileName = document.getElementById('translateVideoFileName');
const btnTranslateVideoSubmit = document.getElementById('btnTranslateVideoSubmit');
const translatedVideosList = document.getElementById('translatedVideosList');

let uploadedVideoFile = null;

if (translateVideoUploadZone && translateVideoFileInput) {
  translateVideoUploadZone.addEventListener('click', () => translateVideoFileInput.click());
  translateVideoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadedVideoFile = file;
      if (translateVideoFileName) {
        translateVideoFileName.textContent = `Archivo cargado: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
      }
      if (btnTranslateVideoSubmit) {
        btnTranslateVideoSubmit.removeAttribute('disabled');
      }
    }
  });

  // drag and drop events
  ['dragenter', 'dragover'].forEach(eventName => {
    translateVideoUploadZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      translateVideoUploadZone.style.borderColor = 'var(--accent-purple)';
      translateVideoUploadZone.style.background = 'rgba(124, 58, 237, 0.05)';
    }, false);
  });
  ['dragleave', 'drop'].forEach(eventName => {
    translateVideoUploadZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      translateVideoUploadZone.style.borderColor = 'var(--border-color)';
      translateVideoUploadZone.style.background = 'transparent';
    }, false);
  });
  translateVideoUploadZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const file = dt.files[0];
    if (file && file.type.startsWith('video/')) {
      uploadedVideoFile = file;
      if (translateVideoFileName) {
        translateVideoFileName.textContent = `Archivo arrastrado: ${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
      }
      if (btnTranslateVideoSubmit) {
        btnTranslateVideoSubmit.removeAttribute('disabled');
      }
    } else {
      showToast('Archivo inválido', 'Por favor arrastra un archivo de video.', 'error');
    }
  });
}

function renderTranslations() {
  if (!translatedVideosList) return;
  translatedVideosList.innerHTML = '';
  
  const translations = getLocal('sdl_translations') || [];
  if (translations.length === 0) {
    translatedVideosList.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted)">No has traducido ningún video aún.</span>';
    return;
  }
  
  translations.forEach(t => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'space-between';
    card.style.padding = '12px';
    card.style.borderRadius = 'var(--border-radius-md)';
    card.style.border = '1px solid var(--border-color)';
    card.style.background = 'var(--bg-secondary)';
    
    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <div style="font-size:24px; color:var(--accent-purple);"><i class="fa-solid fa-file-video"></i></div>
        <div>
          <h4 style="margin:0; font-size:0.85rem; color:var(--text-color);">${t.name}</h4>
          <span style="font-size:0.75rem; color:var(--text-muted);">${t.source.toUpperCase()} → ${t.target.toUpperCase()} • ${t.date}</span>
        </div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn-primary-sm btn-play-video" data-url="${t.url}" style="padding:6px 10px;"><i class="fa-solid fa-play"></i> Ver</button>
        <button class="btn-outline-sm btn-delete-translation" data-id="${t.id}" style="padding:6px 8px; border-color:var(--accent-red); color:var(--accent-red);"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
    translatedVideosList.appendChild(card);
  });
}

// Delete translation listener
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-delete-translation');
  if (btn) {
    const id = btn.dataset.id;
    let translations = getLocal('sdl_translations') || [];
    translations = translations.filter(t => t.id !== id);
    setLocal('sdl_translations', translations);
    renderTranslations();
    showToast('Traducción Eliminada', 'Se quitó el video traducido del historial.', 'info');
  }
});

if (btnTranslateVideoSubmit) {
  btnTranslateVideoSubmit.addEventListener('click', () => {
    if (!uploadedVideoFile) return;
    
    const credits = getCredits();
    if (credits < 30) {
      showModal('Créditos Insuficientes', 'Traducir un video requiere 30 créditos. Por favor actualiza tu plan en la pestaña de Suscripción.');
      return;
    }
    
    const srcLang = document.getElementById('translateSourceLang').value;
    const tgtLang = document.getElementById('translateTargetLang').value;
    
    setCredits(credits - 30);
    showToast('Procesando traducción', 'Iniciando traducción de video...', 'info');
    
    // Simulate steps in the button
    let step = 0;
    const steps = [
      "Subiendo video...",
      "Analizando audio original...",
      "Clonando voz original...",
      "Traduciendo y sincronizando labios...",
      "Finalizando renderizado..."
    ];
    
    btnTranslateVideoSubmit.setAttribute('disabled', 'true');
    
    const interval = setInterval(() => {
      if (step < steps.length) {
        btnTranslateVideoSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${steps[step]}`;
        step++;
      } else {
        clearInterval(interval);
        btnTranslateVideoSubmit.innerHTML = `<i class="fa-solid fa-globe"></i> Traducir Video (Consume 30 Créditos)`;
        btnTranslateVideoSubmit.removeAttribute('disabled');
        
        // Save to translation list
        const translations = getLocal('sdl_translations') || [];
        const newTrans = {
          id: 'trans-' + Date.now(),
          name: uploadedVideoFile.name,
          source: srcLang === 'auto' ? 'Es' : srcLang,
          target: tgtLang,
          date: new Date().toISOString().split('T')[0],
          url: 'https://www.w3schools.com/html/mov_bbb.mp4' // playable sample video
        };
        translations.push(newTrans);
        setLocal('sdl_translations', translations);
        
        // Reset uploaded file
        uploadedVideoFile = null;
        if (translateVideoFileName) translateVideoFileName.textContent = '';
        btnTranslateVideoSubmit.setAttribute('disabled', 'true');
        if (translateVideoFileInput) translateVideoFileInput.value = '';
        
        renderTranslations();
        updateDashboardStats();
        showToast('Traducción Completada', 'El video traducido se ha añadido al historial.', 'success');
      }
    }, 2000);
  });
}

// --- BRAND KIT LOGIC ---
const brandLogoUploadZone = document.getElementById('brandLogoUploadZone');
const brandLogoFileInput = document.getElementById('brandLogoFileInput');
const brandLogosList = document.getElementById('brandLogosList');
const btnSaveBrandKit = document.getElementById('btnSaveBrandKit');

if (brandLogoUploadZone && brandLogoFileInput) {
  brandLogoUploadZone.addEventListener('click', () => brandLogoFileInput.click());
  brandLogoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        let logos = getLocal('sdl_brand_logos') || [];
        logos.push(base64);
        setLocal('sdl_brand_logos', logos);
        
        // Also inject into user assets so it's directly usable in editor!
        const userAssets = getLocal('sdl_user_assets') || [];
        userAssets.push({
          name: file.name,
          src: base64,
          type: 'image'
        });
        setLocal('sdl_user_assets', userAssets);
        renderEditorDrawerAssets();
        
        renderBrandLogos();
        showToast('Logo Agregado', 'El logo se ha añadido a tu kit de marca y recursos del editor.', 'success');
      };
      reader.readAsDataURL(file);
    }
  });
}

function renderBrandLogos() {
  if (!brandLogosList) return;
  brandLogosList.innerHTML = '';
  
  // default logo
  const defaultDiv = document.createElement('div');
  defaultDiv.style.position = 'relative';
  defaultDiv.innerHTML = `<img src="assets/logo.png" style="height:50px; border:1px solid var(--border-color); padding:4px; border-radius:4px; background:var(--bg-tertiary)">`;
  brandLogosList.appendChild(defaultDiv);
  
  const logos = getLocal('sdl_brand_logos') || [];
  logos.forEach((logo, index) => {
    const div = document.createElement('div');
    div.style.position = 'relative';
    div.style.display = 'inline-block';
    div.innerHTML = `
      <img src="${logo}" style="height:50px; border:1px solid var(--border-color); padding:4px; border-radius:4px; background:var(--bg-tertiary)">
      <button class="btn-delete-brand-logo" data-index="${index}" style="position:absolute; top:-5px; right:-5px; width:18px; height:18px; border-radius:50%; background:var(--accent-red); color:#fff; border:none; font-size:10px; cursor:pointer; display:flex; align-items:center; justify-content:center;"><i class="fa-solid fa-xmark"></i></button>
    `;
    brandLogosList.appendChild(div);
  });
}

// Delete logo event listener
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-delete-brand-logo');
  if (btn) {
    const index = parseInt(btn.dataset.index);
    let logos = getLocal('sdl_brand_logos') || [];
    logos.splice(index, 1);
    setLocal('sdl_brand_logos', logos);
    renderBrandLogos();
    showToast('Logo Eliminado', 'Se quitó el logo del kit de marca.', 'info');
  }
});

// Load saved brand colors
function loadBrandColors() {
  const colors = getLocal('sdl_brand_colors') || {
    primary: '#7c3aed',
    secondary: '#f59e0b',
    dark: '#0c091f'
  };
  
  const cp = document.getElementById('brandColorPrimary');
  const cs = document.getElementById('brandColorSecondary');
  const cd = document.getElementById('brandColorDark');
  
  if (cp) cp.value = colors.primary;
  if (cs) cs.value = colors.secondary;
  if (cd) cd.value = colors.dark;
}

if (btnSaveBrandKit) {
  btnSaveBrandKit.addEventListener('click', () => {
    const primary = document.getElementById('brandColorPrimary').value;
    const secondary = document.getElementById('brandColorSecondary').value;
    const dark = document.getElementById('brandColorDark').value;
    
    setLocal('sdl_brand_colors', { primary, secondary, dark });
    renderInspectorBrandPalettes();
    showToast('Kit de Marca Guardado', 'Los colores de marca y logos se han guardado con éxito.', 'success');
  });
}

// --- BRAND KIT INSPECTOR INTEGRATION ---
function renderInspectorBrandPalettes() {
  const textPal = document.getElementById('textBrandPalette');
  const shapePal = document.getElementById('shapeBrandPalette');
  
  const colors = getLocal('sdl_brand_colors') || {
    primary: '#7c3aed',
    secondary: '#f59e0b',
    dark: '#0c091f'
  };
  
  const paletteHTML = `
    <span style="font-size:0.7rem; color:var(--text-muted); align-self:center; margin-right:4px;">Marca:</span>
    <button class="brand-palette-circle" data-color="${colors.primary}" style="width:20px; height:20px; border-radius:50%; border:1px solid var(--border-color); background:${colors.primary}; cursor:pointer; padding:0;"></button>
    <button class="brand-palette-circle" data-color="${colors.secondary}" style="width:20px; height:20px; border-radius:50%; border:1px solid var(--border-color); background:${colors.secondary}; cursor:pointer; padding:0;"></button>
    <button class="brand-palette-circle" data-color="${colors.dark}" style="width:20px; height:20px; border-radius:50%; border:1px solid var(--border-color); background:${colors.dark}; cursor:pointer; padding:0;"></button>
  `;
  
  if (textPal) textPal.innerHTML = paletteHTML;
  if (shapePal) shapePal.innerHTML = paletteHTML;
}

// Delegate click listener for brand palette circles
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.brand-palette-circle');
  if (btn) {
    const color = btn.dataset.color;
    const activeLayer = activeSelectedLayerId ? scenes[currentSceneIndex].layers.find(l => l.id === activeSelectedLayerId) : null;
    if (activeLayer) {
      if (activeLayer.type === 'text') {
        activeLayer.color = color;
        const picker = document.getElementById('textColorPicker');
        const val = document.getElementById('textColorVal');
        if (picker) picker.value = color;
        if (val) val.value = color;
        const span = document.querySelector(`#${activeLayer.id} .layer-text-span`);
        const input = document.querySelector(`#${activeLayer.id} .layer-text-input`);
        if (span) span.style.color = color;
        if (input) input.style.color = color;
      } else if (activeLayer.type === 'shape') {
        activeLayer.fillColor = color;
        const picker = document.getElementById('shapeColorPicker');
        const val = document.getElementById('shapeColorVal');
        if (picker) picker.value = color;
        if (val) val.value = color;
        const el = document.getElementById(activeLayer.id);
        if (el) el.style.backgroundColor = color;
      }
    }
  }
});

// --- AVATAR CHAT INTERACTIVO LOGIC ---
const chatHistoryBox = document.getElementById('chatHistoryBox');
const chatInputText = document.getElementById('chatInputText');
const btnSendChatMessage = document.getElementById('btnSendChatMessage');
const chatAvatarImg = document.getElementById('chatAvatarImg');
const chatAvatarSpeakingBadge = document.getElementById('chatAvatarSpeakingBadge');

let activeChatCharacter = "Nova";

document.querySelectorAll('.chat-avatar-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.chat-avatar-btn').forEach(b => {
      b.classList.remove('active');
      b.style.borderColor = 'var(--border-color)';
      b.style.fontWeight = 'normal';
    });
    btn.classList.add('active');
    btn.style.borderColor = 'var(--accent-purple)';
    btn.style.fontWeight = '600';
    
    activeChatCharacter = btn.dataset.id;
    if (chatAvatarImg) {
      chatAvatarImg.src = btn.dataset.img;
    }
    
    // Welcome message
    if (chatHistoryBox) {
      chatHistoryBox.innerHTML = '';
      let welcome = "";
      if (activeChatCharacter === 'Nova') {
        welcome = "Hola, soy Nova, tu asistente interactiva. Pregúntame sobre Studio SDL, nuestros servicios o cómo automatizar tus videos.";
      } else if (activeChatCharacter === 'Sofia') {
        welcome = "Hola, soy Sofia. Estoy lista para ayudarte con tus proyectos de negocio, presentaciones corporativas y marketing.";
      } else if (activeChatCharacter === 'Roberto') {
        welcome = "Hola, soy Roberto. ¿En qué puedo colaborar hoy con respecto a tus videos de ventas o campañas de publicidad?";
      } else if (activeChatCharacter === 'Elena') {
        welcome = "Hola, soy Elena. ¿Quieres conversar sobre educación, tutorías o cómo generar contenido dinámico con IA?";
      }
      
      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble agent';
      bubble.style.alignSelf = 'flex-start';
      bubble.style.background = 'var(--bg-secondary)';
      bubble.style.border = '1px solid var(--border-color)';
      bubble.style.padding = '10px 14px';
      bubble.style.borderRadius = 'var(--border-radius-md)';
      bubble.style.maxWidth = '80%';
      bubble.style.fontSize = '0.85rem';
      bubble.style.lineHeight = '1.4';
      bubble.innerHTML = `<strong>${activeChatCharacter} (Asistente):</strong> ${welcome}`;
      chatHistoryBox.appendChild(bubble);
      
      speakChatText(welcome);
    }
  });
});

let chatSpeechUtterance = null;
function speakChatText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    
    chatSpeechUtterance = new SpeechSynthesisUtterance(text);
    chatSpeechUtterance.lang = 'es-ES';
    
    const voices = window.speechSynthesis.getVoices();
    const esVoice = voices.find(v => v.lang.startsWith('es'));
    if (esVoice) chatSpeechUtterance.voice = esVoice;
    
    chatSpeechUtterance.onstart = () => {
      if (chatAvatarSpeakingBadge) chatAvatarSpeakingBadge.style.display = 'flex';
      if (chatAvatarImg) chatAvatarImg.style.filter = 'brightness(1.1) contrast(1.05)';
    };
    
    chatSpeechUtterance.onend = () => {
      if (chatAvatarSpeakingBadge) chatAvatarSpeakingBadge.style.display = 'none';
      if (chatAvatarImg) chatAvatarImg.style.filter = 'none';
    };
    
    chatSpeechUtterance.onerror = () => {
      if (chatAvatarSpeakingBadge) chatAvatarSpeakingBadge.style.display = 'none';
      if (chatAvatarImg) chatAvatarImg.style.filter = 'none';
    };
    
    window.speechSynthesis.speak(chatSpeechUtterance);
  }
}

// Ensure voices are loaded for SpeechSynthesis
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

function handleSendChatMessage() {
  if (!chatInputText || !chatHistoryBox) return;
  const msg = chatInputText.value.trim();
  if (!msg) return;
  
  chatInputText.value = '';
  
  // User bubble
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.style.alignSelf = 'flex-end';
  userBubble.style.background = 'var(--accent-purple)';
  userBubble.style.color = '#fff';
  userBubble.style.padding = '10px 14px';
  userBubble.style.borderRadius = 'var(--border-radius-md)';
  userBubble.style.maxWidth = '80%';
  userBubble.style.fontSize = '0.85rem';
  userBubble.style.lineHeight = '1.4';
  userBubble.innerHTML = `<strong>Tú:</strong> ${msg}`;
  chatHistoryBox.appendChild(userBubble);
  chatHistoryBox.scrollTop = chatHistoryBox.scrollHeight;
  
  // Generate response
  setTimeout(() => {
    let responseText = "";
    const lower = msg.toLowerCase();
    
    if (lower.includes('precio') || lower.includes('plan') || lower.includes('pago') || lower.includes('cost')) {
      responseText = `Nuestros planes en Studio SDL son muy accesibles. El Plan Creador Pro cuesta $29 USD al mes e incluye 150 créditos. El Plan Business cuesta $89 USD al mes e incluye 500 créditos. Puedes administrarlos en la pestaña de Suscripción.`;
    } else if (lower.includes('avatar') || lower.includes('avatares') || lower.includes('cara')) {
      responseText = `Contamos con una amplia variedad de avatares reales e instantáneos de alta definición. Además, puedes ir al Kit de Marca o Recursos para subir tu propia foto y usarla como presentador interactivo (Talking Photo) en tus videos.`;
    } else if (lower.includes('voz') || lower.includes('clon') || lower.includes('habla') || lower.includes('audio')) {
      responseText = `¡Es increíble! Con Studio SDL puedes clonar tu voz original. Solo tienes que ir a la pestaña 'Voces', subir o grabar un audio corto de muestra de 10 segundos, y nuestra IA clonará tu acento y tono usando ElevenLabs.`;
    } else if (lower.includes('tradu') || lower.includes('video') || lower.includes('ingles') || lower.includes('idioma')) {
      responseText = `Nuestro Traductor de Video por IA analiza el archivo original, extrae el audio de voz, lo traduce y clona el tono original de la persona, sincronizando los labios con el nuevo idioma. Puedes probarlo en la sección 'Traductor'.`;
    } else if (lower.includes('hola') || lower.includes('saludos') || lower.includes('buenos dias') || lower.includes('buenas tardes')) {
      responseText = `¡Hola! Un placer saludarte. ¿Cómo va todo? Estoy listo para responder cualquier pregunta que tengas sobre nuestra plataforma Studio SDL.`;
    } else {
      responseText = `¡Interesante pregunta! Como avatar conversacional de Studio SDL, estoy programada para guiarte en la creación de videos con IA, el uso de avatares y la automatización de tus contenidos multilingües de alta calidad.`;
    }
    
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble agent';
    botBubble.style.alignSelf = 'flex-start';
    botBubble.style.background = 'var(--bg-secondary)';
    botBubble.style.border = '1px solid var(--border-color)';
    botBubble.style.padding = '10px 14px';
    botBubble.style.borderRadius = 'var(--border-radius-md)';
    botBubble.style.maxWidth = '80%';
    botBubble.style.fontSize = '0.85rem';
    botBubble.style.lineHeight = '1.4';
    botBubble.innerHTML = `<strong>${activeChatCharacter} (Asistente):</strong> ${responseText}`;
    chatHistoryBox.appendChild(botBubble);
    chatHistoryBox.scrollTop = chatHistoryBox.scrollHeight;
    
    speakChatText(responseText);
  }, 1000);
}

if (btnSendChatMessage) {
  btnSendChatMessage.addEventListener('click', handleSendChatMessage);
}
if (chatInputText) {
  chatInputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSendChatMessage();
  });
}

// Bootstrapped new views
renderTranslations();
renderBrandLogos();
loadBrandColors();
renderInspectorBrandPalettes();

// --- CREAR AVATAR NUEVO MODAL & SELECTION LOGIC ---
const btnOpenCreateAvatarModal = document.getElementById('btnOpenCreateAvatarModal');
const btnCloseCreateAvatarModal = document.getElementById('btnCloseCreateAvatarModal');
const createAvatarModalOverlay = document.getElementById('createAvatarModalOverlay');

const btnChooseInstantAvatar = document.getElementById('btnChooseInstantAvatar');
const btnChoosePhotoAvatar = document.getElementById('btnChoosePhotoAvatar');
const btnChooseVideoAvatar = document.getElementById('btnChooseVideoAvatar');

if (btnOpenCreateAvatarModal && createAvatarModalOverlay) {
  btnOpenCreateAvatarModal.addEventListener('click', () => {
    createAvatarModalOverlay.classList.add('active');
  });
}

if (btnCloseCreateAvatarModal && createAvatarModalOverlay) {
  btnCloseCreateAvatarModal.addEventListener('click', () => {
    createAvatarModalOverlay.classList.remove('active');
  });
}

// Helper to switch main tab and sub tab programmatically
function switchAvatarTab(tabId) {
  switchView('avatars');
  const btn = document.querySelector(`#view-avatars .hg-tab-btn[data-tab="${tabId}"]`);
  if (btn) btn.click();
}

if (btnChooseInstantAvatar && createAvatarModalOverlay) {
  btnChooseInstantAvatar.addEventListener('click', () => {
    createAvatarModalOverlay.classList.remove('active');
    switchAvatarTab('avatar-panel-instant');
  });
}

if (btnChoosePhotoAvatar && createAvatarModalOverlay) {
  btnChoosePhotoAvatar.addEventListener('click', () => {
    createAvatarModalOverlay.classList.remove('active');
    switchAvatarTab('avatar-panel-photo');
  });
}

if (btnChooseVideoAvatar && createAvatarModalOverlay) {
  btnChooseVideoAvatar.addEventListener('click', () => {
    createAvatarModalOverlay.classList.remove('active');
    
    // Create hidden file input dynamically for sample video cloning
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'video/*';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        showToast('Carga Iniciada', `Subiendo video de muestra: "${file.name}"`, 'info');
        let step = 0;
        const steps = [
          "Subiendo video consentido...",
          "Extrayendo fotogramas de rostro...",
          "Modelando geometría facial 3D...",
          "Entrenando modelo neuronal (NeRF)...",
          "Listo! Clon de Estudio Generado."
        ];
        
        showModal("Generando Avatar de Estudio", "Subiendo video...", false);
        const progressInterval = setInterval(() => {
          if (step < steps.length) {
            const title = "Generando Avatar de Estudio";
            const msg = steps[step];
            const overlay = document.getElementById('globalModalOverlay');
            const titleEl = document.getElementById('globalModalTitle');
            const msgEl = document.getElementById('globalModalMessage');
            if (titleEl) titleEl.textContent = title;
            if (msgEl) msgEl.textContent = msg;
            step++;
          } else {
            clearInterval(progressInterval);
            const overlay = document.getElementById('globalModalOverlay');
            if (overlay) overlay.classList.remove('active');
            
            // Add the newly created avatar to local storage!
            const newAv = {
              id: 'av-custom-studio-' + Date.now(),
              name: 'Clon de Estudio - ' + file.name.split('.')[0],
              category: 'Avatar Lite',
              style: 'Studio Avatar',
              lang: 'Español (ES)',
              img: 'assets/avatar_nova.png', // Fallback visual avatar image
              desc: 'Avatar fotorrealista generado por IA.'
            };
            
            let avatars = getLocal('sdl_avatars') || DEFAULT_AVATARS;
            avatars.push(newAv);
            setLocal('sdl_avatars', avatars);
            
            renderAvatarsGrid();
            renderHomeWidgets();
            showToast('Clon de Estudio Creado', 'Tu avatar personalizado está listo en tu biblioteca.', 'success');
          }
        }, 1500);
      }
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
    // remove it from body after a moment
    setTimeout(() => fileInput.remove(), 1000);
  });
}
