// ==========================================================================
// SYNTHETIC DIGITAL LABS AI STUDIO - CORE JAVASCRIPT
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

// --- IN-MEMORY FALLBACK DATABASE ---
const memoryStorage = {};
const storageAvailable = (() => {
  try {
    localStorage.setItem('__storage_test__', 'test');
    localStorage.removeItem('__storage_test__');
    return true;
  } catch (e) {
    return false;
  }
})();

function safeGetItem(key, fallback = null) {
  if (storageAvailable) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (e) {
      return memoryStorage[key] || fallback;
    }
  } else {
    return memoryStorage[key] || fallback;
  }
}

function safeSetItem(key, val) {
  if (storageAvailable) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {
      memoryStorage[key] = val;
    }
  } else {
    memoryStorage[key] = val;
  }
}

// --- INITIALIZE DATABASE ---
function initLocalStorage() {
  const currentDbVersion = 'v2.3';
  const storedDbVersion = safeGetItem('sdl_db_version');

  if (storedDbVersion !== currentDbVersion) {
    safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
    safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
    safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
    safeSetItem('sdl_credits', '120');
    safeSetItem('sdl_db_version', currentDbVersion);
  } else {
    const avatars = safeGetItem('sdl_avatars');
    if (!avatars) {
      safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
    } else {
      try {
        const parsed = JSON.parse(avatars);
        if (!Array.isArray(parsed) || parsed.length === 0 || !parsed[0] || !parsed[0].hasOwnProperty('id')) {
          safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
        }
      } catch (e) {
        safeSetItem('sdl_avatars', JSON.stringify(DEFAULT_AVATARS));
      }
    }

    const voices = safeGetItem('sdl_voices');
    if (!voices) {
      safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
    } else {
      try {
        const parsed = JSON.parse(voices);
        if (!Array.isArray(parsed) || parsed.length === 0 || !parsed[0] || !parsed[0].hasOwnProperty('id') || !parsed[0].hasOwnProperty('lang')) {
          safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
        }
      } catch (e) {
        safeSetItem('sdl_voices', JSON.stringify(DEFAULT_VOICES));
      }
    }

    const projects = safeGetItem('sdl_projects');
    if (!projects) {
      safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
    } else {
      try {
        const parsed = JSON.parse(projects);
        if (!Array.isArray(parsed) || parsed.length === 0 || !parsed[0] || !parsed[0].hasOwnProperty('id')) {
          safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
        }
      } catch (e) {
        safeSetItem('sdl_projects', JSON.stringify(DEFAULT_PROJECTS));
      }
    }
  }

  if (!safeGetItem('sdl_credits')) safeSetItem('sdl_credits', '120');
  if (!safeGetItem('sdl_username')) safeSetItem('sdl_username', 'Usuario SDL');
  if (!safeGetItem('sdl_email')) safeSetItem('sdl_email', 'usuario@syntheticdigitallab.com');
}
initLocalStorage();

// --- STATE HELPERS ---
function getLocal(key) {
  try {
    const val = safeGetItem(key);
    if (!val) return [];
    const parsed = JSON.parse(val);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error(`Error parsing key "${key}":`, e);
    return [];
  }
}
function setLocal(key, value) {
  safeSetItem(key, JSON.stringify(value));
}
function getCredits() {
  return parseInt(safeGetItem('sdl_credits')) || 120;
}
function setCredits(val) {
  safeSetItem('sdl_credits', Math.max(0, val).toString());
  updateCreditsDisplay();
}

// --- GLOBAL VARIABLES FOR EDITOR STATE ---
let selectedAvatarId = 'av-sofia-biz';
let selectedVoiceId = 'v-sofia';
let selectedRatio = '16-9';
let selectedBg = 'dark';
let activeSpeechUtterance = null;
let isSpeakingPreview = false;
let isBackendOnline = false;
let backendApiConfigured = { elevenLabsConfigured: false, dIdConfigured: false };
let activeAudioElement = null;
let mediaRecorder = null;
let recordedChunks = [];
let recordedAudioFile = null;

async function checkBackendHealth() {
  try {
    const res = await fetch('http://localhost:3000/api/health');
    if (res.ok) {
      const data = await res.json();
      isBackendOnline = data.status === 'online';
      backendApiConfigured.elevenLabsConfigured = data.elevenLabsConfigured;
      backendApiConfigured.dIdConfigured = data.dIdConfigured;
      console.log('Backend connected. Configured APIs:', backendApiConfigured);
    } else {
      isBackendOnline = false;
    }
  } catch (err) {
    isBackendOnline = false;
    console.warn('Backend is offline. Using client-side simulation mocks.', err);
  }
}
checkBackendHealth();

// --- UPDATE INTERFACE COUNTERS ---
function updateCreditsDisplay() {
  const credits = getCredits();
  const fillPct = (credits / 150) * 100;
  
  const fillEl = document.getElementById('headerCreditsFill');
  const textEl = document.getElementById('headerCreditsText');
  const settingsText = document.getElementById('settingsCreditsVal');

  if (fillEl) fillEl.style.width = `${fillPct}%`;
  if (textEl) textEl.textContent = `${credits} / 150`;
  if (settingsText) settingsText.textContent = `${credits} créditos`;
}

// --- TOAST NOTIFICATIONS & MODALS ---
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
  setTimeout(() => toast.classList.add('active'), 50);

  const timer = setTimeout(() => slideOutAndRemove(toast), 4000);

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

const globalModalCloseBtn = document.getElementById('globalModalCloseBtn');
if (globalModalCloseBtn) {
  globalModalCloseBtn.addEventListener('click', () => {
    document.getElementById('globalModalOverlay').classList.remove('active');
  });
}

// --- PART 1: PUBLIC LANDING PAGE INTERACTION ---

// Neural Grid Canvas Animation
const canvas = document.getElementById('neuralCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let points = [];
  const maxPoints = 50;

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  for (let i = 0; i < maxPoints; i++) {
    points.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    });
  }

  function animateNeural() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
    ctx.fillStyle = 'rgba(189, 0, 255, 0.1)';

    points.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fill();

      for (let j = idx + 1; j < points.length; j++) {
        const p2 = points[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animateNeural);
  }
  animateNeural();
}

// Budget Calculator
function calculateBudget() {
  const calcWeb = document.getElementById('calcWeb');
  const calcApp = document.getElementById('calcApp');
  const calcLogo = document.getElementById('calcLogo');
  const calcMarketing = document.getElementById('calcMarketing');
  const calcHosting = document.getElementById('calcHosting');

  let price = 0;
  let days = 0;

  if (calcWeb && calcWeb.checked) { price += 150; days = Math.max(days, 1); }
  if (calcApp && calcApp.checked) { price += 500; days = Math.max(days, 14); }
  if (calcLogo && calcLogo.checked) { price += 80; days = Math.max(days, 2); }
  if (calcMarketing && calcMarketing.checked) { price += 70; days = Math.max(days, 3); }
  if (calcHosting && calcHosting.checked) { price += 50; days = Math.max(days, 1); }

  const priceEl = document.getElementById('calcTotalPrice');
  const timeEl = document.getElementById('calcTotalTime');

  if (priceEl) priceEl.textContent = `$${price} USD`;
  if (timeEl) timeEl.textContent = days === 1 ? '24 Horas' : `${days} Días`;
}

document.querySelectorAll('.calc-checkbox-group input').forEach(box => {
  box.addEventListener('change', calculateBudget);
});
calculateBudget();

const calcRequestBtn = document.getElementById('calcRequestBtn');
if (calcRequestBtn) {
  calcRequestBtn.addEventListener('click', () => {
    showToast('Presupuesto solicitado', 'Hemos pre-cargado tus opciones en el formulario de contacto.', 'info');
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Mobile Menu toggler
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu) mobileMenu.classList.remove('active');
  });
});

// FAQ Accordion
document.querySelectorAll('.faq-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const parent = trigger.parentElement;
    parent.classList.toggle('active');
  });
});

// Contact Form Submit
const contactForm = document.getElementById('contactForm');
const contactFormStatus = document.getElementById('contactFormStatus');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    showModal('Mensaje Enviado', 'Gracias por escribirnos. Uno de nuestros consultores de IA se pondrá en contacto contigo en breve.', true);
  });
}


// --- PART 2: AI STUDIO (HEYGEN WORKSPACE CLONE) ---

const publicLanding = document.getElementById('public-landing');
const studioApp = document.getElementById('ai-studio-app');
const menuItems = document.querySelectorAll('.menu-item');
const studioViews = document.querySelectorAll('.studio-view');
const viewTitle = document.getElementById('studioViewTitle');

// Navigation triggers
function enterStudio(targetView = 'dashboard') {
  if (publicLanding) publicLanding.style.display = 'none';
  if (studioApp) {
    studioApp.style.display = 'flex';
    studioApp.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'instant' });
  switchView(targetView);
  
  // Implicitly load databases
  updateCreditsDisplay();
  renderHomeWidgets();
  renderTemplatesGrid();
  renderAvatarsGrid();
  renderVoicesLibrary();
  renderLibrary();
  
  showToast('¡Bienvenido al AI Studio!', 'Espacio de trabajo listo', 'info');
}

function exitStudio() {
  if (studioApp) studioApp.classList.remove('active');
  if (studioApp) studioApp.style.display = 'none';
  if (publicLanding) publicLanding.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function switchView(viewName) {
  menuItems.forEach(item => {
    if (item.dataset.view === viewName) item.classList.add('active');
    else item.classList.remove('active');
  });

  studioViews.forEach(view => {
    if (view.id === `view-${viewName}`) view.classList.add('active');
    else view.classList.remove('active');
  });

  const formattedTitle = viewName.charAt(0).toUpperCase() + viewName.slice(1);
  if (viewTitle) {
    if (viewName === 'dashboard') viewTitle.textContent = 'Inicio';
    else if (viewName === 'voices') viewTitle.textContent = 'Biblioteca de Voces';
    else if (viewName === 'editor') viewTitle.textContent = 'Editor de Video Canvas';
    else if (viewName === 'library') viewTitle.textContent = 'Biblioteca y Proyectos';
    else if (viewName === 'pricing') viewTitle.textContent = 'Planes y Precios';
    else if (viewName === 'policies') viewTitle.textContent = 'Políticas Legales';
    else if (viewName === 'resources') viewTitle.textContent = 'Ayuda y Recursos';
    else viewTitle.textContent = formattedTitle;
  }
}

// Navigation event bindings
document.querySelectorAll('.btn-enter-studio').forEach(btn => {
  btn.addEventListener('click', () => enterStudio('dashboard'));
});
document.querySelectorAll('.btn-exit-studio').forEach(btn => {
  btn.addEventListener('click', exitStudio);
});
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    switchView(item.dataset.view);
    const sidebar = document.getElementById('studioSidebar');
    if (sidebar) sidebar.classList.remove('open');
  });
});

// Mobile toggle Sidebar
const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
const studioSidebar = document.getElementById('studioSidebar');
if (mobileSidebarToggle && studioSidebar) {
  mobileSidebarToggle.addEventListener('click', () => {
    studioSidebar.classList.toggle('open');
  });
}

// Public tools section CTA buttons
document.querySelectorAll('.btn-go-tool').forEach(btn => {
  btn.addEventListener('click', () => {
    enterStudio(btn.dataset.tool);
  });
});

// Shortcut button helper
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-shortcut');
  if (btn) {
    const target = btn.dataset.target;
    switchView(target);
    
    // Check if aspect ratio is specified (for quick horizontal/vertical start)
    if (btn.dataset.aspect) {
      setRatio(btn.dataset.aspect);
    }
  }
});

// --- RENDER: HOME WIDGETS ---
function renderHomeWidgets() {
  const templatesGrid = document.getElementById('dashTemplatesGrid');
  const avatarsGrid = document.getElementById('dashAvatarsGrid');
  const avatars = getLocal('sdl_avatars') || [];

  // 1. Featured templates
  if (templatesGrid) {
    templatesGrid.innerHTML = '';
    DEFAULT_TEMPLATES.forEach(temp => {
      const card = document.createElement('div');
      card.className = 'template-card';
      card.innerHTML = `
        <div class="temp-thumb-wrapper">
          <img src="${temp.id === 'temp-corp' ? 'thumbs/temp_corp.png' : (temp.id === 'temp-sales' ? 'thumbs/temp_sales.png' : (temp.id === 'temp-edu' ? 'thumbs/temp_edu.png' : 'thumbs/temp_news.png'))}" alt="${temp.name}">
          <span class="temp-aspect-badge">${temp.aspect}</span>
          <div class="temp-play-hover"><i class="fa-solid fa-circle-play"></i></div>
        </div>
        <div class="temp-info">
          <h4>${temp.name}</h4>
          <span>${temp.tag}</span>
        </div>
      `;
      card.addEventListener('click', () => loadTemplate(temp));
      templatesGrid.appendChild(card);
    });
  }

  // 2. Featured avatars
  if (avatarsGrid) {
    avatarsGrid.innerHTML = '';
    avatars.slice(0, 4).forEach(av => {
      const card = document.createElement('div');
      card.className = 'avatar-card';
      card.innerHTML = `
        <div class="av-thumb-wrapper">
          <img src="${av.img}" alt="${av.name}">
          <span class="av-lang-badge">${av.lang}</span>
          <div class="av-play-hover"><i class="fa-solid fa-play"></i></div>
        </div>
        <div class="av-info-bar">
          <h4>${av.name}</h4>
          <span>${av.style}</span>
        </div>
      `;
      card.addEventListener('click', () => selectAvatarForEditor(av.id));
      avatarsGrid.appendChild(card);
    });
  }
}

// --- RENDER: TEMPLATES GRID ---
function renderTemplatesGrid() {
  const grid = document.getElementById('templatesGrid');
  if (!grid) return;

  grid.innerHTML = '';
  DEFAULT_TEMPLATES.forEach(temp => {
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `
      <div class="temp-thumb-wrapper">
        <img src="${temp.id === 'temp-corp' ? 'thumbs/temp_corp.png' : (temp.id === 'temp-sales' ? 'thumbs/temp_sales.png' : (temp.id === 'temp-edu' ? 'thumbs/temp_edu.png' : 'thumbs/temp_news.png'))}" alt="${temp.name}">
        <span class="temp-aspect-badge">${temp.aspect}</span>
        <div class="temp-play-hover"><i class="fa-solid fa-circle-play"></i></div>
      </div>
      <div class="temp-info">
        <h4>${temp.name}</h4>
        <span>${temp.tag}</span>
      </div>
    `;
    card.addEventListener('click', () => loadTemplate(temp));
    grid.appendChild(card);
  });
}

function loadTemplate(temp) {
  selectedAvatarId = temp.avatar;
  selectedVoiceId = temp.voice;
  setRatio(temp.aspect);
  
  // Fill script
  const textarea = document.getElementById('editorScriptTextarea');
  if (textarea) textarea.value = temp.script;

  switchView('editor');
  syncEditorPresets();
  showToast('Plantilla Cargada', `"${temp.name}" cargada en el lienzo.`, 'success');
}

let activeAvatarSubTab = 'all';

// --- RENDER: AVATARS GRID ---
function renderAvatarsGrid() {
  const grid = document.getElementById('studioAvatarsGrid');
  if (!grid) return;

  let avatars = getLocal('sdl_avatars') || [];
  grid.innerHTML = '';

  // Filter based on active sub-tab (Avatar Lite, Avatar Pro, Talking Photo)
  if (activeAvatarSubTab !== 'all') {
    avatars = avatars.filter(av => av.category === activeAvatarSubTab);
  }

  avatars.forEach(av => {
    const card = document.createElement('div');
    card.className = 'avatar-card';
    card.innerHTML = `
      <div class="av-thumb-wrapper">
        <img src="${av.img}" alt="${av.name}">
        <span class="av-lang-badge">${av.lang}</span>
        <div class="av-play-hover"><i class="fa-solid fa-play"></i></div>
      </div>
      <div class="av-info-bar">
        <h4>${av.name}</h4>
        <span>${av.style}</span>
      </div>
    `;
    card.addEventListener('click', () => selectAvatarForEditor(av.id));
    grid.appendChild(card);
  });
}

function selectAvatarForEditor(id) {
  selectedAvatarId = id;
  switchView('editor');
  syncEditorPresets();
  showToast('Avatar Seleccionado', 'Cargado en el lienzo de trabajo.', 'info');
}

// --- PHOTO AVATAR GENERATION ---
const avatarUploadZone = document.getElementById('avatarUploadZone');
const avatarImageInput = document.getElementById('avatarImageInput');
const avatarFileName = document.getElementById('avatarFileName');
const avatarNameInput = document.getElementById('avatarNameInput');
const avatarPreviewImg = document.getElementById('avatarPreviewImg');

let loadedAvatarFileUrl = 'assets/avatar_sofia.png';

if (avatarUploadZone && avatarImageInput) {
  avatarUploadZone.addEventListener('click', () => avatarImageInput.click());
  avatarImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      if (avatarFileName) avatarFileName.textContent = file.name;
      loadedAvatarFileUrl = URL.createObjectURL(file);
      if (avatarPreviewImg) avatarPreviewImg.src = loadedAvatarFileUrl;
    }
  });
}

const photoForm = document.getElementById('avatarCreationForm');
if (photoForm) {
  photoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const credits = getCredits();
    if (credits < 10) {
      showModal('Créditos Insuficientes', 'Requiere al menos 10 créditos para crear un avatar fotográfico.', false);
      return;
    }

    const name = avatarNameInput.value.trim();
    if (!name) return;

    // Deduct and save
    setCredits(credits - 10);
    const newAvatar = {
      id: 'av-' + Date.now(),
      name,
      style: 'Foto de Retrato',
      lang: 'Español (ES)',
      img: loadedAvatarFileUrl,
      desc: 'Avatar animado a partir de fotografía.'
    };

    const list = getLocal('sdl_avatars') || [];
    list.push(newAvatar);
    setLocal('sdl_avatars', list);

    showToast('Avatar Animado Listo', `"${name}" se ha añadido a la biblioteca.`, 'success');
    renderAvatarsGrid();
    renderHomeWidgets();
    photoForm.reset();
    if (avatarFileName) avatarFileName.textContent = '';
  });
}

// --- INSTANT AVATAR WEBCAM SIMULATOR ---
const btnStartInstantAvatar = document.getElementById('btnStartInstantAvatar');
const instantAvatarStartCard = document.getElementById('instantAvatarStartCard');
const instantAvatarRecordingCard = document.getElementById('instantAvatarRecordingCard');
const recordingStatusText = document.getElementById('recordingStatusText');
const recordingProgressFill = document.getElementById('recordingProgressFill');
const recordingTimerVal = document.getElementById('recordingTimerVal');

if (btnStartInstantAvatar) {
  btnStartInstantAvatar.addEventListener('click', () => {
    const credits = getCredits();
    if (credits < 30) {
      showModal('Créditos Insuficientes', 'Requiere al menos 30 créditos para generar un avatar instantáneo con cámara web.', false);
      return;
    }

    if (instantAvatarStartCard && instantAvatarRecordingCard) {
      instantAvatarStartCard.style.display = 'none';
      instantAvatarRecordingCard.style.display = 'flex';
      
      let sec = 0;
      let progress = 0;
      if (recordingStatusText) recordingStatusText.textContent = 'Inicializando cámara y audio...';
      if (recordingProgressFill) {
        recordingProgressFill.style.width = '0%';
        recordingProgressFill.style.background = 'var(--neon-cyan)';
      }
      if (recordingTimerVal) recordingTimerVal.textContent = '0:00';

      // Phase 1: connecting camera (1.5 seconds)
      setTimeout(() => {
        if (recordingStatusText) recordingStatusText.textContent = 'Grabando presentador... Hable de forma natural.';
        
        const interval = setInterval(() => {
          sec += 1;
          progress = (sec / 5) * 100;
          
          if (recordingProgressFill) recordingProgressFill.style.width = `${progress}%`;
          if (recordingTimerVal) recordingTimerVal.textContent = `0:0${sec}`;
          
          if (sec >= 5) {
            clearInterval(interval);
            
            // Phase 2: Processing avatar (2 seconds)
            if (recordingStatusText) recordingStatusText.textContent = 'Procesando gesticulaciones corporales...';
            if (recordingProgressFill) {
              recordingProgressFill.style.width = '100%';
              recordingProgressFill.style.background = 'var(--neon-purple)';
            }
            
            setTimeout(() => {
              // Deduct credits and save
              setCredits(credits - 30);
              
              const newAvatar = {
                id: 'av-' + Date.now(),
                name: 'Mi Avatar Grabado (Webcam)',
                style: 'Instant Avatar',
                lang: 'Español (ES)',
                img: 'assets/avatar_sofia.png',
                desc: 'Clon digital generado a partir de webcam.'
              };

              const list = getLocal('sdl_avatars') || [];
              list.push(newAvatar);
              setLocal('sdl_avatars', list);

              showToast('Avatar Generado', '"Mi Avatar Grabado" listo en biblioteca.', 'success');
              
              // Reset UI views
              instantAvatarStartCard.style.display = 'flex';
              instantAvatarRecordingCard.style.display = 'none';
              
              // Refresh views
              renderAvatarsGrid();
              renderHomeWidgets();
              
              // Take back to the dashboard or update lists
              updateDashboardStats();
            }, 2000);
          }
        }, 1000);
      }, 1500);
    }
  });
}

// --- RENDER: VOICES & PREVIEW SAMPLES ---
let playingAudioVoiceId = null;

function renderVoicesLibrary() {
  const grid = document.getElementById('publicVoicesGrid');
  if (!grid) return;

  const voices = getLocal('sdl_voices') || [];
  grid.innerHTML = '';

  voices.forEach(voice => {
    const card = document.createElement('div');
    card.className = 'voice-card';
    card.innerHTML = `
      <div class="voice-card-left">
        <button class="voice-play-btn" data-voice-id="${voice.id}" title="Escuchar muestra">
          <i class="fa-solid fa-play"></i>
        </button>
        <div class="voice-meta">
          <div class="voice-meta-header">
            <span class="voice-name">${voice.name}</span>
            <span class="voice-flag">${(voice.lang || '').includes('ES') || (voice.lang || '').includes('Español') ? '🇪🇸' : '🇺🇸'}</span>
            ${voice.isPremium ? '<span class="badge-premium" style="font-size:0.55rem; padding:1px 5px;">Pro</span>' : ''}
          </div>
          <div class="voice-tags-row">
            <span class="voice-tag">${voice.gender}</span>
            <span class="voice-tag">${voice.tone}</span>
          </div>
        </div>
        <div class="voice-waves-anim" style="display:none;">
          <span class="voice-wave-bar"></span>
          <span class="voice-wave-bar"></span>
          <span class="voice-wave-bar"></span>
          <span class="voice-wave-bar"></span>
          <span class="voice-wave-bar"></span>
        </div>
      </div>
      <button class="btn-primary-sm btn-select-voice" data-voice-id="${voice.id}">Seleccionar</button>
    `;

    // Play button preview logic
    const playBtn = card.querySelector('.voice-play-btn');
    const waveAnim = card.querySelector('.voice-waves-anim');
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleVoicePreview(voice, playBtn, waveAnim);
    });

    // Select button logic
    card.querySelector('.btn-select-voice').addEventListener('click', () => {
      selectedVoiceId = voice.id;
      switchView('editor');
      syncEditorPresets();
      showToast('Voz Cargada', `Se usará la voz de ${voice.name} para las locuciones.`, 'info');
    });

    grid.appendChild(card);
  });
}

function toggleVoicePreview(voice, button, waveAnim) {
  if (playingAudioVoiceId === voice.id) {
    // Stop
    window.speechSynthesis.cancel();
    button.classList.remove('playing');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
    waveAnim.style.display = 'none';
    playingAudioVoiceId = null;
  } else {
    // Stop any current
    window.speechSynthesis.cancel();
    document.querySelectorAll('.voice-play-btn.playing').forEach(btn => {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    });
    document.querySelectorAll('.voice-waves-anim').forEach(w => w.style.display = 'none');

    // Start
    playingAudioVoiceId = voice.id;
    button.classList.add('playing');
    button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    waveAnim.style.display = 'flex';

    const textSample = (voice.lang || '').includes('ES') || (voice.lang || '').includes('Español')
      ? `Hola, soy ${voice.name.split(' ')[0]}. Esta es una demostración en alta fidelidad de mi clon digital en español.`
      : `Hello, I'm ${voice.name.split(' ')[0]}. This is an ultra realistic preview of my synthetic voice clone.`;

    const utterance = new SpeechSynthesisUtterance(textSample);
    
    if (voice.pitch !== undefined) utterance.pitch = voice.pitch;
    if (voice.rate !== undefined) utterance.rate = voice.rate;

    // Match locale voice
    const sysVoices = window.speechSynthesis.getVoices();
    const match = getSystemVoiceForId(voice, sysVoices);
    if (match) utterance.voice = match;

    utterance.onend = () => {
      button.classList.remove('playing');
      button.innerHTML = '<i class="fa-solid fa-play"></i>';
      waveAnim.style.display = 'none';
      playingAudioVoiceId = null;
    };

    window.speechSynthesis.speak(utterance);
  }
}

// Voice search filter triggers
const voiceSearchInput = document.getElementById('voiceSearchInput');
const voiceGenderFilter = document.getElementById('voiceGenderFilter');
const voiceLangFilter = document.getElementById('voiceLangFilter');

function filterVoicesList() {
  const query = voiceSearchInput ? voiceSearchInput.value.toLowerCase().trim() : '';
  const gender = voiceGenderFilter ? voiceGenderFilter.value : 'all';
  const lang = voiceLangFilter ? voiceLangFilter.value : 'all';

  const cards = document.querySelectorAll('#publicVoicesGrid .voice-card');
  cards.forEach(card => {
    const name = card.querySelector('.voice-name').textContent.toLowerCase();
    const genderTag = card.querySelectorAll('.voice-tag')[0].textContent;
    const langTag = card.querySelector('.voice-flag').textContent === '🇪🇸' ? 'Español' : 'Inglés';

    const matchQuery = name.includes(query);
    const matchGender = gender === 'all' || gender === genderTag;
    const matchLang = lang === 'all' || lang.includes(langTag);

    if (matchQuery && matchGender && matchLang) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

if (voiceSearchInput) voiceSearchInput.addEventListener('input', filterVoicesList);
if (voiceGenderFilter) voiceGenderFilter.addEventListener('change', filterVoicesList);
if (voiceLangFilter) voiceLangFilter.addEventListener('change', filterVoicesList);

// --- VOICE CLONING SIMULATOR ---
const voiceUploadZone = document.getElementById('voiceUploadZone');
const voiceAudioInput = document.getElementById('voiceAudioInput');
const voiceFileName = document.getElementById('voiceFileName');
const voiceNameInput = document.getElementById('voiceNameInput');
const voiceConsentCheck = document.getElementById('voiceConsentCheck');
const btnCloneVoice = document.getElementById('btnCloneVoice');
const btnRecordVoice = document.getElementById('btnRecordVoice');
const recordIndicator = document.getElementById('recordIndicator');

let voiceAudioFileUploaded = false;
let isVoiceRecording = false;

if (voiceUploadZone && voiceAudioInput) {
  voiceUploadZone.addEventListener('click', () => voiceAudioInput.click());
  voiceAudioInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      if (voiceFileName) voiceFileName.textContent = file.name;
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
        // Fallback simulated recording end
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

    // Determine the audio file
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

        const currentVoices = getLocal('sdl_voices') || [];
        currentVoices.push(newVoice);
        setLocal('sdl_voices', currentVoices);

        // Deduct credits only after successful real voice cloning
        setCredits(credits - 50);

        renderClonedVoicesList();
        renderVoicesLibrary();

        showToast('Voz Clonada con Éxito', `El timbre neuronal de "${name}" está listo.`, 'success');
        resetCloningFields();
      })
      .catch(err => {
        console.warn('Real voice cloning failed. Falling back to high-fidelity mock clone.', err);
        showToast('Modo Simulado', 'No se pudo clonar la voz real. Activando voz clonada simulada.', 'info');
        
        // Mock fallback inside catch
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

        const currentVoices = getLocal('sdl_voices') || [];
        currentVoices.push(newVoice);
        setLocal('sdl_voices', currentVoices);

        renderClonedVoicesList();
        renderVoicesLibrary();

        showToast('Voz Clonada con Éxito', `El timbre neuronal de "${name}" está listo (Modo Simulado).`, 'success');
        resetCloningFields();
      });
    } else {
      // Offline mock cloning fallback
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

      const currentVoices = getLocal('sdl_voices') || [];
      currentVoices.push(newVoice);
      setLocal('sdl_voices', currentVoices);

      renderClonedVoicesList();
      renderVoicesLibrary();

      showToast('Voz Clonada con Éxito', `El timbre neuronal de "${name}" está listo (Modo Simulado).`, 'success');
      resetCloningFields();
    }
  });
}

function renderClonedVoicesList() {
  const container = document.getElementById('clonedVoicesList');
  if (!container) return;

  const voices = getLocal('sdl_voices') || [];
  const cloned = voices.filter(v => v.tone === 'Clonado');
  container.innerHTML = '';

  if (cloned.length === 0) {
    container.innerHTML = '<span style="font-size:0.8rem; color:var(--text-muted)">Aún no tienes voces clonadas.</span>';
    return;
  }

  cloned.forEach(v => {
    const badge = document.createElement('span');
    badge.className = 'mini-voice-badge';
    badge.innerHTML = `<i class="fa-solid fa-microphone"></i> ${v.name}`;
    container.appendChild(badge);
  });
}
renderClonedVoicesList();


// --- PART 3: EDITOR DE VIDEO (CANVAS WORKSPACE) ---

// Toggle horizontal / vertical Canvas
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

// Background change triggers
document.querySelectorAll('.bg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.bg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    selectedBg = btn.dataset.bg;
    const canvasStage = document.getElementById('videoCanvasStage');
    if (canvasStage) {
      if (selectedBg === 'dark') canvasStage.style.background = '#050212';
      else if (selectedBg === 'gradient-blue') canvasStage.style.background = 'linear-gradient(135deg, #020010, #001f3f)';
      else if (selectedBg === 'gradient-purple') canvasStage.style.background = 'linear-gradient(135deg, #030012, #1f003f)';
      else if (selectedBg === 'green-screen') canvasStage.style.background = '#00ff00';
    }
  });
});

// Sync presets inside editor sidebar
function syncEditorPresets() {
  const avatars = getLocal('sdl_avatars') || [];
  const voices = getLocal('sdl_voices') || [];

  // 1. Render mini avatars
  const miniAvs = document.getElementById('miniAvatarsGrid');
  if (miniAvs) {
    miniAvs.innerHTML = '';
    avatars.forEach(av => {
      const p = document.createElement('div');
      p.className = `mini-av-preset ${av.id === selectedAvatarId ? 'active' : ''}`;
      p.innerHTML = `<img src="${av.img}" alt="${av.name}" title="${av.name}">`;
      p.addEventListener('click', () => {
        selectedAvatarId = av.id;
        document.querySelectorAll('.mini-av-preset').forEach(box => box.classList.remove('active'));
        p.classList.add('active');
        updateCanvasAvatar();
      });
      miniAvs.appendChild(p);
    });
  }

  // 2. Render mini voices
  const miniVcs = document.getElementById('miniVoicesGrid');
  if (miniVcs) {
    miniVcs.innerHTML = '';
    voices.forEach(vc => {
      const p = document.createElement('div');
      p.className = `mini-voice-preset ${vc.id === selectedVoiceId ? 'active' : ''}`;
      p.textContent = (vc.name || '').split(' ')[0] + ` (${(vc.lang || '').split(' ')[0]})`;
      p.addEventListener('click', () => {
        selectedVoiceId = vc.id;
        document.querySelectorAll('.mini-voice-preset').forEach(box => box.classList.remove('active'));
        p.classList.add('active');
        updateVoiceTagDisplays();
      });
      miniVcs.appendChild(p);
    });
  }

  updateCanvasAvatar();
  updateVoiceTagDisplays();
}

function updateCanvasAvatar() {
  const avatars = getLocal('sdl_avatars') || [];
  const activeAv = avatars.find(a => a.id === selectedAvatarId) || DEFAULT_AVATARS[0];
  const canvasImg = document.getElementById('canvasAvatarImg');
  if (canvasImg) canvasImg.src = activeAv.img;
}

function updateVoiceTagDisplays() {
  const voices = getLocal('sdl_voices') || [];
  const activeVc = voices.find(v => v.id === selectedVoiceId) || DEFAULT_VOICES[0];
  
  const vName = document.getElementById('selectedVoiceNameDisplay');
  const vLang = document.getElementById('selectedVoiceLangDisplay');

  if (vName) vName.textContent = (activeVc.name || '').split(' ')[0];
  if (vLang) vLang.textContent = activeVc.lang;
}

// AI Script Generator within editor panel
const btnGenScript = document.getElementById('btnGenerateEditorScript');
if (btnGenScript) {
  btnGenScript.addEventListener('click', () => {
    const topic = document.getElementById('editorScriptTopic').value.trim();
    const type = document.getElementById('editorScriptType').value;
    const tone = document.getElementById('editorScriptTone').value;

    if (!topic) {
      showToast('Ingresa un Tema', 'Por favor escribe el tema del guión.', 'error');
      return;
    }

    let scriptText = '';
    if (type === 'publicidad') {
      scriptText = `¡Atención! Si buscas revolucionar tu negocio con ${topic}, esta es tu oportunidad. Diseñado para un enfoque ${tone}, nuestro sistema automatiza tus ventas.`;
    } else if (type === 'tutorial') {
      scriptText = `Hola a todos. Hoy veremos los pasos sencillos para dominar ${topic}. De forma práctica y con un tono ${tone}, avanzaremos paso a paso en este video.`;
    } else {
      scriptText = `Bienvenidos. Presentamos la guía definitiva sobre ${topic}. Analizaremos la estructura actual con un enfoque ${tone} y detallado para empresas.`;
    }

    const textarea = document.getElementById('editorScriptTextarea');
    if (textarea) textarea.value = scriptText;

    showToast('Guión Redactado', 'La IA ha escrito tu guión en el cuadro de texto.', 'success');
  });
}

// TTS Script Audio Preview
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

    // Stop current speech and audio
    stopTTSPreview();

    const voices = getLocal('sdl_voices') || [];
    const activeVc = voices.find(v => v.id === selectedVoiceId) || DEFAULT_VOICES[0];

    // Try real ElevenLabs TTS if backend is online and configured
    if (isBackendOnline && backendApiConfigured.elevenLabsConfigured) {
      showToast('Sintetizando voz real...', 'Consultando locución con ElevenLabs.', 'info');
      
      fetch('http://localhost:3000/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: scriptText,
          voiceId: activeVc.id
        })
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
          
          const canvasStage = document.getElementById('videoCanvasStage');
          if (canvasStage) canvasStage.classList.add('speaking');
          
          if (canvasSubtitleOverlay) {
            canvasSubtitleOverlay.innerHTML = `<span>"${scriptText.length > 60 ? scriptText.slice(0, 57) + '...' : scriptText}"</span>`;
          }
        };

        audio.onended = () => {
          stopTTSPreview();
        };

        audio.onerror = () => {
          stopTTSPreview();
        };

        audio.play();
      })
      .catch(err => {
        console.warn('Real TTS failed. Falling back to local browser SpeechSynthesis.', err);
        showToast('Modo Simulado', 'Sintetizador local activado como alternativa.', 'info');
        runLocalSpeechSynthesis(scriptText, activeVc);
      });
    } else {
      // Local SpeechSynthesis fallback
      runLocalSpeechSynthesis(scriptText, activeVc);
    }
  });
}

function runLocalSpeechSynthesis(scriptText, activeVc) {
  if (!('speechSynthesis' in window)) {
    showToast('No soportado', 'La síntesis de voz no es compatible con este navegador.', 'error');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(scriptText);
  
  if (activeVc.pitch !== undefined) utterance.pitch = activeVc.pitch;
  if (activeVc.rate !== undefined) utterance.rate = activeVc.rate;

  const sysVoices = window.speechSynthesis.getVoices();
  const match = getSystemVoiceForId(activeVc, sysVoices);
  if (match) utterance.voice = match;

  utterance.onstart = () => {
    isSpeakingPreview = true;
    if (btnPlayScriptSpeech) btnPlayScriptSpeech.style.display = 'none';
    if (btnStopScriptSpeech) btnStopScriptSpeech.style.display = 'inline-flex';
    
    const canvasStage = document.getElementById('videoCanvasStage');
    if (canvasStage) canvasStage.classList.add('speaking');
    
    if (canvasSubtitleOverlay) {
      canvasSubtitleOverlay.innerHTML = `<span>"${scriptText.length > 60 ? scriptText.slice(0, 57) + '...' : scriptText}"</span>`;
    }
  };

  utterance.onend = () => {
    stopTTSPreview();
  };

  utterance.onerror = () => {
    stopTTSPreview();
  };

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
  
  const canvasStage = document.getElementById('videoCanvasStage');
  if (canvasStage) canvasStage.classList.remove('speaking');

  if (canvasSubtitleOverlay) {
    canvasSubtitleOverlay.innerHTML = `<span>Haz clic en reproducir guion para ver el avatar hablar</span>`;
  }
}

// Script Translator
const btnTranslate = document.getElementById('btnTranslateEditorScript');
if (btnTranslate) {
  btnTranslate.addEventListener('click', () => {
    const textEl = document.getElementById('editorScriptTextarea');
    const lang = document.getElementById('editorTranslateLang').value;
    if (!textEl || !textEl.value.trim()) return;

    let text = textEl.value;
    if (lang === 'en') {
      text = "Hello! Welcome to Synthetic Digital Labs. Today I will show you how to create avatars and clone voices professionally.";
    } else if (lang === 'pt') {
      text = "Olá! Bem-vindo ao Synthetic Digital Labs. Hoje vou mostrar como criar avatares e clonar vozes profissionalmente.";
    } else {
      text = "¡Hola! Bienvenidos a Synthetic Digital Labs. Hoy les mostraré cómo crear avatares y clonar voces de forma profesional.";
    }

    textEl.value = text;
    showToast('Guión Traducido', 'Texto adaptado al idioma elegido.', 'success');
  });
}

// Timeline Scene Duration
const slider = document.getElementById('sceneDurationSlider');
const durationLbl = document.getElementById('timelineDurationLabel');
if (slider && durationLbl) {
  slider.addEventListener('input', () => {
    durationLbl.textContent = `${parseFloat(slider.value).toFixed(1)}s`;
  });
}

// Add scene button trigger
const btnAddScene = document.getElementById('btnAddScene');
if (btnAddScene) {
  btnAddScene.addEventListener('click', () => {
    showToast('Escena Añadida', 'Nueva escena insertada en la línea de tiempo.', 'info');
  });
}

// --- GENERAR VIDEO ACTION ---
const btnGenVideo = document.getElementById('btnGenerateVideo');

function runMockVideoGeneration(script, credits) {
  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    icon.className = 'modal-icon';
    icon.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    titleEl.textContent = 'Renderizando Video (Simulado)';
    msgEl.textContent = 'Maquetando el lienzo 3D y alineando voz neuronal con labios...';
    actionBtn.style.display = 'none';
    overlay.classList.add('active');

    const steps = [
      { text: 'Extrayendo guión de escena...', delay: 600 },
      { text: 'Sintetizando locución de audio...', delay: 1300 },
      { text: 'Alineando movimiento de labios del avatar...', delay: 2100 },
      { text: 'Efectuando render de video Canvas...', delay: 2800 },
      { text: 'Compilando archivo MP4 final...', delay: 3500 }
    ];

    steps.forEach(step => {
      setTimeout(() => {
        msgEl.textContent = step.text;
      }, step.delay);
    });

    setTimeout(() => {
      setCredits(credits - 20);
      
      const avatars = getLocal('sdl_avatars') || [];
      const chosenAv = avatars.find(a => a.id === selectedAvatarId) || DEFAULT_AVATARS[0];
      
      const newProj = {
        id: 'p-' + Date.now(),
        name: `Video: ${script.slice(0, 25)}...`,
        type: 'video',
        date: new Date().toISOString().split('T')[0],
        duration: `${slider ? slider.value : '5.0'}s`,
        details: `${selectedRatio === '16-9' ? 'Horizontal (16:9)' : 'Vertical (9:16)'} • Avatar ${chosenAv.name}`,
        avatarImg: chosenAv.img
      };

      const projs = getLocal('sdl_projects') || [];
      projs.push(newProj);
      setLocal('sdl_projects', projs);

      icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      titleEl.textContent = '¡Video Listo!';
      msgEl.textContent = 'Tu video de avatar simulado ha finalizado la renderización y ha sido añadido a tu biblioteca.';
      actionBtn.style.display = 'inline-block';
      actionBtn.textContent = 'Ver en Biblioteca';

      const libraryRedirect = () => {
        overlay.classList.remove('active');
        switchView('library');
        renderLibrary();
        actionBtn.removeEventListener('click', libraryRedirect);
      };
      actionBtn.addEventListener('click', libraryRedirect);

      showToast('Video Generado', 'Tu video de avatar simulado se guardó correctamente.', 'success');
      renderHomeWidgets();
      updateDashboardStats();
    }, 4200);
  }
}

function completeRealVideoGeneration(videoUrl, script, credits) {
  setCredits(credits - 20);

  const avatars = getLocal('sdl_avatars') || [];
  const chosenAv = avatars.find(a => a.id === selectedAvatarId) || DEFAULT_AVATARS[0];

  const newProj = {
    id: 'p-' + Date.now(),
    name: `Video: ${script.slice(0, 25)}...`,
    type: 'video',
    date: new Date().toISOString().split('T')[0],
    duration: `${slider ? slider.value : '5.0'}s`,
    details: `${selectedRatio === '16-9' ? 'Horizontal (16:9)' : 'Vertical (9:16)'} • Avatar ${chosenAv.name}`,
    avatarImg: chosenAv.img,
    videoUrl: videoUrl // Real D-ID video output url!
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
    icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    titleEl.textContent = '¡Video Listo!';
    msgEl.textContent = 'Tu video de avatar ha finalizado la renderización real en HD y está listo para reproducir.';
    actionBtn.style.display = 'inline-block';
    actionBtn.textContent = 'Ver en Biblioteca';

    const libraryRedirect = () => {
      overlay.classList.remove('active');
      switchView('library');
      renderLibrary();
      actionBtn.removeEventListener('click', libraryRedirect);
    };
    actionBtn.addEventListener('click', libraryRedirect);
  }

  showToast('Video Generado', 'Tu video real se ha renderizado y guardado con éxito.', 'success');
  renderHomeWidgets();
  updateDashboardStats();
}

function handleVideoGenError(err) {
  console.error('Real video generation error:', err);
  
  const overlay = document.getElementById('globalModalOverlay');
  const icon = document.getElementById('globalModalIcon');
  const titleEl = document.getElementById('globalModalTitle');
  const msgEl = document.getElementById('globalModalMessage');
  const actionBtn = document.getElementById('globalModalActionBtn');

  if (overlay) {
    icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:var(--accent-red)"></i>';
    titleEl.textContent = 'Error de Renderizado';
    msgEl.textContent = `Ocurrió un error en la conexión o procesamiento con D-ID: ${err.message || err}. ¿Deseas usar la simulación offline?`;
    actionBtn.style.display = 'inline-block';
    actionBtn.textContent = 'Usar Simulación';

    const useSim = () => {
      overlay.classList.remove('active');
      actionBtn.removeEventListener('click', useSim);
      
      const script = document.getElementById('editorScriptTextarea').value.trim();
      const credits = getCredits();
      runMockVideoGeneration(script, credits);
    };
    actionBtn.addEventListener('click', useSim);
  }

  showToast('Error de Conexión', 'No se pudo completar el render real. Revisa la consola o activa la simulación.', 'error');
}

if (btnGenVideo) {
  btnGenVideo.addEventListener('click', () => {
    const script = document.getElementById('editorScriptTextarea').value.trim();
    if (!script) {
      showToast('Escribe un guión', 'No puedes generar un video vacío.', 'error');
      return;
    }

    const credits = getCredits();
    if (credits < 20) {
      showModal('Créditos Insuficientes', 'Generar un video con avatar consume 20 créditos.', false);
      return;
    }

    // Stop speaking preview
    stopTTSPreview();

    if (isBackendOnline && backendApiConfigured.dIdConfigured) {
      showToast('Iniciando render real...', 'Conectando con D-ID Talks API.', 'info');
      
      const overlay = document.getElementById('globalModalOverlay');
      const icon = document.getElementById('globalModalIcon');
      const titleEl = document.getElementById('globalModalTitle');
      const msgEl = document.getElementById('globalModalMessage');
      const actionBtn = document.getElementById('globalModalActionBtn');

      if (overlay) {
        icon.className = 'modal-icon';
        icon.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
        titleEl.textContent = 'Renderizando Video Real';
        msgEl.textContent = 'Enviando petición de generación labial a D-ID...';
        actionBtn.style.display = 'none';
        overlay.classList.add('active');
      }

      fetch('http://localhost:3000/api/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatarId: selectedAvatarId,
          script: script
        })
      })
      .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error || 'Server error'); });
        return res.json();
      })
      .then(data => {
        const talkId = data.id;
        msgEl.textContent = 'Video creado en D-ID. Renderizando (ID: ' + talkId + ')...';
        
        let pollAttempts = 0;
        const pollInterval = setInterval(() => {
          pollAttempts++;
          if (pollAttempts > 60) {
            clearInterval(pollInterval);
            handleVideoGenError(new Error('D-ID render timeout.'));
            return;
          }

          fetch(`http://localhost:3000/api/video-status/${talkId}`)
          .then(res => {
            if (!res.ok) throw new Error('Failed to fetch video status');
            return res.json();
          })
          .then(statusData => {
            if (statusData.status === 'done') {
              clearInterval(pollInterval);
              completeRealVideoGeneration(statusData.videoUrl, script, credits);
            } else if (statusData.status === 'error' || statusData.error) {
              clearInterval(pollInterval);
              throw new Error(statusData.error || 'D-ID rendering failed on server.');
            } else {
              msgEl.textContent = `Renderizando video en D-ID... Estado: ${statusData.status} (${pollAttempts * 2}s)`;
            }
          })
          .catch(err => {
            clearInterval(pollInterval);
            handleVideoGenError(err);
          });
        }, 2000);
      })
      .catch(err => {
        handleVideoGenError(err);
      });
    } else {
      // Local simulated mock fallback
      runMockVideoGeneration(script, credits);
    }
  });
}


// --- PART 4: LIBRARY & PROJECTS ---

function renderLibrary() {
  const videosGrid = document.getElementById('libraryVideosGrid');
  const audiosGrid = document.getElementById('libraryAudiosGrid');
  const clonedGrid = document.getElementById('libraryClonedGrid');
  const avatarsLibGrid = document.getElementById('libraryAvatarsGrid');
  const scriptsGrid = document.getElementById('libraryScriptsGrid');

  const projects = getLocal('sdl_projects') || [];
  const avatars = getLocal('sdl_avatars') || [];
  const voices = getLocal('sdl_voices') || [];

  // 1. Render Videos generated
  if (videosGrid) {
    const vids = projects.filter(p => p.type === 'video');
    videosGrid.innerHTML = '';
    if (vids.length === 0) {
      videosGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay videos generados.</p>';
    } else {
      vids.forEach(v => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
          <div class="proj-thumb-box">
            <img src="${v.avatarImg || 'assets/avatar_sofia.png'}" alt="Avatar">
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

  // 2. Render Audios generated (TTS)
  if (audiosGrid) {
    const auds = projects.filter(p => p.type === 'audio');
    audiosGrid.innerHTML = '';
    if (auds.length === 0) {
      audiosGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay audios generados.</p>';
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

  // 3. Render Cloned Voices
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
        card.style.gap = '12px';
        card.innerHTML = `
          <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
            <strong style="font-size:0.9rem;">${c.name}</strong>
            <button class="btn-outline-sm btn-delete-voice-lib" data-id="${c.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
          <span style="font-size:0.75rem; color:var(--text-muted)">Idioma: ${c.lang} • Género: ${c.gender}</span>
        `;
        clonedGrid.appendChild(card);
      });
    }
  }

  // 4. Render Created Avatars
  if (avatarsLibGrid) {
    const avs = avatars.filter(a => a.id.startsWith('av-') && a.id !== 'av-sofia' && a.id !== 'av-roberto' && a.id !== 'av-elena' && a.id !== 'av-nova');
    avatarsLibGrid.innerHTML = '';
    if (avs.length === 0) {
      avatarsLibGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay avatares personalizados creados.</p>';
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
            <span style="font-size:0.65rem;">${av.style}</span>
          </div>
        `;
        avatarsLibGrid.appendChild(card);
      });
    }
  }

  // 5. Render Scripts
  if (scriptsGrid) {
    const scrs = projects.filter(p => p.type === 'guion');
    scriptsGrid.innerHTML = '';
    if (scrs.length === 0) {
      scriptsGrid.innerHTML = '<p class="w-full text-center" style="grid-column:1/-1;color:var(--text-muted)">No hay guiones guardados.</p>';
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

// Binds library tab changes
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
        if (p.startsWith(tab)) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind sub-tabs inside Avatars
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
        if (p.endsWith(tab)) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind sub-tabs inside Policies
document.querySelectorAll('#view-policies .hg-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#view-policies .hg-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tab = btn.dataset.tab;
    const panels = [
      'pol-privacy-panel',
      'pol-refund-panel',
      'pol-ethics-panel'
    ];

    panels.forEach(p => {
      const el = document.getElementById(p);
      if (el) {
        if (p.endsWith(tab)) el.classList.add('active');
        else el.classList.remove('active');
      }
    });
  });
});

// Bind payment settings
const paymentForm = document.getElementById('paymentForm');
if (paymentForm) {
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Tarjeta Guardada', 'Tus datos de facturación se han actualizado correctamente.', 'success');
    showModal('Método de Pago Actualizado', 'Tu método de pago principal ha sido actualizado. Las futuras renovaciones automáticas se realizarán a esta tarjeta.', true);
  });
}

const btnManageSubscription = document.getElementById('btnManageSubscription');
if (btnManageSubscription) {
  btnManageSubscription.addEventListener('click', () => {
    showToast('Suscripción Activa', 'Estás suscrito al plan Creador Pro por $29/mes.', 'info');
  });
}

const btnUpgradeEnterprise = document.getElementById('btnUpgradeEnterprise');
if (btnUpgradeEnterprise) {
  btnUpgradeEnterprise.addEventListener('click', () => {
    showModal('Suscripción Empresarial', 'Para mejorar al plan Empresarial de $99/mes, ponte en contacto con soporte técnico a infoweb@syntheticdigitallab.com o al +1 786-872-6865.', true);
  });
}

const studioSupportForm = document.getElementById('studioSupportForm');
if (studioSupportForm) {
  studioSupportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Mensaje Enviado', 'Hemos recibido tu consulta técnica. Nos pondremos en contacto contigo en tu correo de perfil.', 'success');
    document.getElementById('supportMsgText').value = '';
  });
}

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

// Download/Play button action
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-dl-mock');
  if (btn) {
    const url = btn.dataset.url;
    if (url) {
      window.open(url, '_blank');
      showToast('Enlace Abierto', 'El video de D-ID se ha abierto en una nueva pestaña.', 'success');
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

  // Delete project trigger
  const delBtn = e.target.closest('.btn-delete-proj');
  if (delBtn) {
    const id = delBtn.dataset.id;
    let projs = getLocal('sdl_projects') || [];
    projs = projs.filter(p => p.id !== id);
    setLocal('sdl_projects', projs);
    renderLibrary();
    updateDashboardStats();
    showToast('Elemento Eliminado', 'El borrador se eliminó de la biblioteca.', 'info');
  }

  // Delete custom voice trigger
  const delVoiceBtn = e.target.closest('.btn-delete-voice-lib');
  if (delVoiceBtn) {
    const id = delVoiceBtn.dataset.id;
    let voices = getLocal('sdl_voices') || [];
    voices = voices.filter(v => v.id !== id);
    setLocal('sdl_voices', voices);
    renderLibrary();
    renderClonedVoicesList();
    renderVoicesLibrary();
    updateDashboardStats();
    showToast('Voz Eliminada', 'La voz clonada ha sido removida.', 'info');
  }

  // Delete custom avatar trigger
  const delAvBtn = e.target.closest('.btn-delete-avatar-lib');
  if (delAvBtn) {
    const id = delAvBtn.dataset.id;
    let avatars = getLocal('sdl_avatars') || [];
    avatars = avatars.filter(a => a.id !== id);
    setLocal('sdl_avatars', avatars);
    renderLibrary();
    renderAvatarsGrid();
    renderHomeWidgets();
    updateDashboardStats();
    showToast('Avatar Eliminado', 'El avatar se removió de la lista.', 'info');
  }

  // Load saved script to editor
  const loadScriptBtn = e.target.closest('.btn-load-script-editor');
  if (loadScriptBtn) {
    const scriptName = loadScriptBtn.dataset.script;
    const projects = getLocal('sdl_projects') || [];
    const found = projects.find(p => p.name === scriptName && p.type === 'guion');
    if (found) {
      const textarea = document.getElementById('editorScriptTextarea');
      if (textarea) textarea.value = found.details.split(' • ')[0] || found.name;
      switchView('editor');
      showToast('Guión cargado', 'Borrador cargado en el editor.', 'success');
    }
  }
});


// --- PART 5: CONFIGURACIONES (SETTINGS) ---

const settingsForm = document.getElementById('settingsForm');
if (settingsForm) {
  settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('settingsUsername').value.trim();
    if (name) {
      safeSetItem('sdl_username', name);
      
      const sidebarName = document.getElementById('sidebarUsername');
      if (sidebarName) sidebarName.textContent = name;

      showToast('Ajustes Guardados', 'Nombre de perfil actualizado.', 'success');
    }
  });
}

// Simulated Credits Reload
const btnResetCredits = document.getElementById('btnResetCredits');
if (btnResetCredits) {
  btnResetCredits.addEventListener('click', () => {
    setCredits(150);
    showToast('Créditos Recargados', 'Se han restaurado tus 150 créditos mensuales.', 'success');
  });
}

// API Key toggle view
const btnToggleApiKey = document.getElementById('btnToggleApiKey');
const apiKeyVal = document.getElementById('apiKeyVal');
if (btnToggleApiKey && apiKeyVal) {
  btnToggleApiKey.addEventListener('click', () => {
    if (apiKeyVal.type === 'password') {
      apiKeyVal.type = 'text';
      btnToggleApiKey.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
      apiKeyVal.type = 'password';
      btnToggleApiKey.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  });
}

// Update stats initially
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

// Sidebar Profile load name on start
const storedUsername = safeGetItem('sdl_username');
if (storedUsername) {
  const sidebarName = document.getElementById('sidebarUsername');
  if (sidebarName) sidebarName.textContent = storedUsername;
  const settingsUser = document.getElementById('settingsUsername');
  if (settingsUser) settingsUser.value = storedUsername;
}


// ==========================================
// VIRTUAL VOICE AGENT "NOVA" (JARVIS/SIRI STYLE)
// ==========================================
class NovaAssistant {
  constructor() {
    this.agentContainer = document.getElementById('novaAgent');
    this.bubbleText = document.getElementById('novaBubble');
    this.bubbleSpan = document.getElementById('novaBubbleText');
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
          this.updateBubble('Micrófono bloqueado. Di "Hola Nova" al autorizarlo.');
          this.setState('sleep');
        }
      };

      this.recognition.onend = () => {
        // Auto-restart passive background listening
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
      // Ignored if already listening
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
    if (this.closeBannerBtn && this.guideBanner) {
      this.closeBannerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.guideBanner.style.display = 'none';
      });
    }

    if (this.guideBanner) {
      this.guideBanner.addEventListener('click', (e) => {
        if (e.target !== this.closeBannerBtn && e.target.parentElement !== this.closeBannerBtn) {
          this.wakeUp();
        }
      });
    }

    // Accept consent button at startup
    const acceptConsentBtn = document.getElementById('novaConsentAccept');
    const consentPanel = document.getElementById('novaConsentPanel');
    if (acceptConsentBtn && consentPanel) {
      acceptConsentBtn.addEventListener('click', () => {
        consentPanel.style.display = 'none';
        this.wakeUp();
      });
    }

    // Clicking avatar wrapper wakes up or resets timer
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
    if (this.bubbleSpan) {
      this.bubbleSpan.textContent = text;
    }
  }

  wakeUp() {
    this.micPermissionDenied = false;
    this.agentContainer.classList.remove('hidden');
    this.setState('listening');
    this.updateBubble('¿En qué puedo ayudarte?');
    
    this.speak('Hola. Bienvenido a Synthetic Digital Labs. ¿En qué te puedo ayudar hoy?', true);
  }

  goToSleep() {
    this.setState('sleep');
    this.updateBubble('Hasta luego.');
    
    if ('speechSynthesis' in window) {
      this.speak('Entendido. Si me necesitas de nuevo, solo dime "Hola Nova". ¡Que tengas un gran día!', false);
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

    this.stopListening();
    this.setState('speaking');

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Find Spanish voice
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }
    const esVoice = this.voices.find(v => (v.lang || '').includes('es') || (v.lang || '').includes('ES'));
    if (esVoice) {
      utterance.voice = esVoice;
      utterance.lang = esVoice.lang;
    } else {
      utterance.lang = 'es-ES';
    }

    utterance.onstart = () => {
      this.updateBubble(text);
      if (this.sleepTimer) clearTimeout(this.sleepTimer);
    };

    utterance.onend = () => {
      if (keepActive) {
        this.setState('listening');
        this.updateBubble('🎙️ Escuchando...');
        setTimeout(() => {
          if (this.state === 'listening') {
            this.startListening();
            this.resetSleepTimer();
          }
        }, 400);
      } else {
        this.setState('sleep');
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
      this.startListening();
    };

    window.speechSynthesis.speak(utterance);
  }

  resetSleepTimer() {
    if (this.sleepTimer) clearTimeout(this.sleepTimer);
    this.sleepTimer = setTimeout(() => {
      if (this.state === 'listening') {
        this.goToSleep();
      }
    }, 180000); // 180 seconds (3 minutes) silence timer to keep Nova active
  }

  handleSpeechInput(transcript) {
    if (this.state === 'sleep') {
      const wakeWords = ['nova', 'noba', 'hola nova', 'hey nova', 'oye nova', 'despierta', 'hola', 'el nova', 'la nova', 'el noba', 'la noba'];
      const heardWakeWord = wakeWords.some(word => transcript.includes(word));
      if (heardWakeWord) {
        this.wakeUp();
      }
    } else if (this.state === 'listening') {
      this.resetSleepTimer();
      let matched = false;

      // Navigations
      if (transcript.includes('portafolio') || transcript.includes('trabajo') || transcript.includes('páginas') || transcript.includes('proyectos') || transcript.includes('catálogo')) {
        this.speak("Entendido. Llevándote a nuestro portafolio de referencias.", true);
        this.scrollToSection('portafolio');
        matched = true;
      } else if (transcript.includes('beneficios') || transcript.includes('ventaja') || transcript.includes('por qué')) {
        this.speak("Aquí tienes las ventajas clave de usar nuestro AI Studio.", true);
        this.scrollToSection('beneficios');
        matched = true;
      } else if (transcript.includes('contacto') || transcript.includes('correo') || transcript.includes('escribir') || transcript.includes('whatsapp')) {
        this.speak("Abriendo la sección de contacto. Puedes enviarnos un mensaje.", true);
        this.scrollToSection('contacto');
        matched = true;
      } else if (transcript.includes('servicios') || transcript.includes('herramientas') || transcript.includes('hacen')) {
        this.speak("Aquí tienes las herramientas de creación con inteligencia artificial disponibles.", true);
        this.scrollToSection('herramientas');
        matched = true;
      } else if (transcript.includes('cómo funciona') || transcript.includes('pasos') || transcript.includes('funciona')) {
        this.speak("Te desplazo a los tres sencillos pasos para generar tu primer video.", true);
        this.scrollToSection('como-funciona');
        matched = true;
      } else if (transcript.includes('pregunta') || transcript.includes('duda') || transcript.includes('faq')) {
        this.speak("Te desplazo a las preguntas frecuentes resueltas por nuestro equipo.", true);
        this.scrollToSection('faq');
        matched = true;
      } else if (transcript.includes('planes') || transcript.includes('precios') || transcript.includes('costo') || transcript.includes('tarifa')) {
        this.speak("Te muestro nuestros planes de suscripción y créditos mensuales.", true);
        this.scrollToSection('planes');
        matched = true;
      } else if (transcript.includes('panel') || transcript.includes('studio') || transcript.includes('entrar') || transcript.includes('abrir')) {
        this.speak("Abriendo tu panel interactivo de AI Studio.", true);
        enterStudio('dashboard');
        matched = true;
      }

      // Direct Q&A
      if (!matched) {
        // Precios / costo
        if (transcript.includes('precio') || transcript.includes('costo') || transcript.includes('cuesta') || transcript.includes('plan') || transcript.includes('tarifa') || transcript.includes('suscripción') || transcript.includes('gratis') || transcript.includes('dólares')) {
          this.speak("Ofrecemos tres planes en AI Studio. El Demo Gratuito, de cero dólares, que te da diez créditos al mes. El plan Creador Pro, de 29 dólares al mes, que incluye 150 créditos, avatares ilimitados, voces premium y la clonación de hasta 3 voces. Y el plan Empresarial, de 99 dólares al mes, con créditos ilimitados, avatares en 4K y acceso a la API. Puedes revisarlos en la pantalla en la sección de planes.", true);
          matched = true;
        }
        // Reembolso
        else if (transcript.includes('reembolso') || transcript.includes('devolución') || transcript.includes('cancelar') || transcript.includes('devolver') || transcript.includes('política de reembolso')) {
          this.speak("Nuestra política de reembolso te permite solicitar la devolución total de tu dinero dentro de los primeros 14 días de tu suscripción Pro, siempre y cuando no hayas consumido más de 30 créditos de tu plan.", true);
          matched = true;
        }
        // Privacidad
        else if (transcript.includes('privacidad') || transcript.includes('datos') || transcript.includes('guardan') || transcript.includes('gdpr') || transcript.includes('seguro') || transcript.includes('política de privacidad')) {
          this.speak("Synthetic Digital Labs protege estrictamente tu privacidad de acuerdo con el Reglamento General de Protección de Datos. Tus perfiles, rostros y muestras de voz subidos son totalmente privados, se guardan encriptados y nunca son usados para entrenar modelos públicos sin tu permiso.", true);
          matched = true;
        }
        // Seguridad
        else if (transcript.includes('seguridad') || transcript.includes('política de seguridad') || transcript.includes('protección') || transcript.includes('encripta')) {
          this.speak("Nuestra política de seguridad incluye cifrado SSL en toda la plataforma y almacenamiento seguro en servidores en la nube. Además, exigimos una declaración ética firmada y consentimiento por voz antes de clonar cualquier timbre neuronal, evitando suplantaciones de identidad.", true);
          matched = true;
        }
        // Crear página web
        else if (transcript.includes('crear una página') || transcript.includes('crear página') || transcript.includes('cómo crearla') || transcript.includes('hacer una web') || transcript.includes('desarrollar') || transcript.includes('crear la página') || transcript.includes('crear el sitio')) {
          this.speak("Para crear una página web con nosotros, puedes rellenar el formulario al final de la página o contactarnos por correo a infoweb@syntheticdigitallab.com o al WhatsApp +1 786-872-6865. Desarrollamos sitios web y aplicaciones a medida con inteligencia artificial integrada.", true);
          matched = true;
        }
        // Interactuar con la página
        else if (transcript.includes('interactuar') || transcript.includes('cómo funciona') || transcript.includes('cómo se usa') || transcript.includes('qué hacer') || transcript.includes('usar la página') || transcript.includes('botones') || transcript.includes('estudio')) {
          this.speak("Puedes interactuar con nuestra aplicación navegando por las secciones del menú. Al entrar al AI Studio, verás un panel completo donde puedes cambiar de vista, elegir avatares, redactar guiones con IA, previsualizar audios y renderizar videos en Full HD.", true);
          matched = true;
        }
        // Crear avatar
        else if (transcript.includes('crear avatar') || transcript.includes('crear un avatar') || transcript.includes('hacer avatar') || transcript.includes('nuevo avatar') || transcript.includes('avatar fotográfico') || transcript.includes('subir foto')) {
          this.speak("Para crear un avatar, entra al panel lateral en 'Avatares'. En la pestaña 'Photo Avatar' sube una foto de tu rostro de frente, colócale un nombre y presiona 'Crear Presentador'. Para un 'Instant Avatar', puedes grabarte con tu cámara web para clonar tus gestos reales en un avatar digital.", true);
          matched = true;
        }
        // Traducción de texto a voz (TTS)
        else if (transcript.includes('traducción de texto') || transcript.includes('texto a voz') || transcript.includes('sintetizar') || transcript.includes('locución') || transcript.includes('traducir') || transcript.includes('tts') || transcript.includes('idioma') || transcript.includes('voces')) {
          this.speak("Para traducir texto a voz, ve a la sección 'Voces' en la barra lateral para elegir un tono de nuestro catálogo. Luego, en la pestaña 'Editor Video', escribe el guion que desees en el panel derecho y haz clic en 'Escuchar Guion'. También puedes traducirlo usando el menú de idiomas del editor.", true);
          matched = true;
        }
        // Hacer un video / colocar la voz
        else if (transcript.includes('hacer un video') || transcript.includes('cómo se hace un video') || transcript.includes('crear video') || transcript.includes('generar video') || transcript.includes('colocar la voz') || transcript.includes('ponerle la voz') || transcript.includes('colocar voz') || transcript.includes('hacer video')) {
          this.speak("Para crear un video, entra en 'Editor Video' en el panel de control. Elige tu presentador en el menú izquierdo, selecciona una voz, y escribe tu guion en la parte derecha. Presiona 'Escuchar Guion' para previsualizarlo y luego haz clic en 'Generar Video' arriba a la derecha. Tras renderizarse, se guardará en tu Biblioteca.", true);
          matched = true;
        }
        // Clonar una voz
        else if (transcript.includes('clonar') || transcript.includes('clonación') || transcript.includes('clonar voz') || transcript.includes('clonar una voz') || transcript.includes('mi propia voz') || transcript.includes('grabar voz')) {
          this.speak("Para clonar tu voz, dirígete al módulo de 'Voces' en la barra lateral. En la sección 'Clonador de Voz Instantáneo', sube un archivo de audio limpio de diez segundos de duración o grábate en vivo. Acepta los términos de consentimiento legal, asígnale un nombre y presiona 'Clonar Voz'. Estará disponible de inmediato.", true);
          matched = true;
        }
        // Quién eres / Quién es Nova
        else if (transcript.includes('quién eres') || transcript.includes('quien eres') || transcript.includes('tu nombre') || transcript.includes('quién es nova') || transcript.includes('quien es nova') || transcript.includes('qué eres')) {
          this.speak("Hola, soy Nova, el agente inteligente holográfico de Synthetic Digital Labs. Tengo conocimiento de toda la plataforma y te puedo ayudar a navegarla o enseñarte cómo clonar tu voz, crear avatares interactivos y renderizar videos profesionales.", true);
          matched = true;
        }
        // Gracias / adiós
        else if (transcript.includes('gracias') || transcript.includes('adiós') || transcript.includes('chao') || transcript.includes('hasta luego') || transcript.includes('duerme') || transcript.includes('desactívate') || transcript.includes('silencio')) {
          this.speak("Entendido. Estaré aquí en segundo plano. Si me necesitas de nuevo, solo di 'Hola Nova' o haz clic sobre mi avatar. ¡Que tengas un excelente día!", false);
          matched = true;
        }
      }

      if (!matched) {
        this.speak("Lo siento, no tengo una respuesta específica para eso. Puedes preguntarme sobre precios, reembolso, privacidad, seguridad, cómo crear un avatar, clonar tu voz o generar un video.", true);
      }
    }
  }

  scrollToSection(id) {
    if (publicLanding && publicLanding.style.display === 'none') {
      exitStudio();
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

// Theme Toggler Logic
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (!themeToggleBtn) return;

  const currentTheme = safeGetItem('sdl_theme', 'light');
  if (currentTheme === 'dark') {
    document.body.classList.remove('light-theme');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.body.classList.add('light-theme');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggleBtn.addEventListener('click', () => {
    if (document.body.classList.contains('light-theme')) {
      document.body.classList.remove('light-theme');
      safeSetItem('sdl_theme', 'dark');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
      showToast('Tema Cambiado', 'Modo oscuro activado.', 'info');
    } else {
      document.body.classList.add('light-theme');
      safeSetItem('sdl_theme', 'light');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
      showToast('Tema Cambiado', 'Modo claro activado.', 'info');
    }
  });
}

// System voice selection helper to map to distinct browser speakers
function getSystemVoiceForId(voice, sysVoices) {
  const isSpanish = (voice.lang || '').includes('ES') || (voice.lang || '').includes('Español');
  const langKey = isSpanish ? 'es' : 'en';
  const langVoices = sysVoices.filter(v => v.lang.toLowerCase().includes(langKey));
  
  if (langVoices.length === 0) return null;

  const isFemale = voice.gender === 'Femenino';
  const femaleKeywords = ['sabina', 'helena', 'monica', 'juana', 'lucia', 'tessa', 'samantha', 'victoria', 'hazel', 'google', 'zira', 'susan', 'elsy', 'yolanda', 'melina', 'female', 'woman', 'girl'];
  const maleKeywords = ['jorge', 'raul', 'julio', 'david', 'pablo', 'raul', 'mark', 'george', 'stefano', 'paul', 'danny', 'ravi', 'richard', 'male', 'man', 'boy'];

  let candidateVoices = langVoices;
  if (isFemale) {
    candidateVoices = langVoices.filter(v => {
      const name = v.name.toLowerCase();
      return femaleKeywords.some(kw => name.includes(kw)) && !maleKeywords.some(kw => name.includes(kw));
    });
  } else {
    candidateVoices = langVoices.filter(v => {
      const name = v.name.toLowerCase();
      return maleKeywords.some(kw => name.includes(kw)) || !femaleKeywords.some(kw => name.includes(kw));
    });
  }

  if (candidateVoices.length === 0) {
    candidateVoices = langVoices;
  }

  // We map index uniquely based on voice id
  let index = 0;
  if (voice.id === 'v-sofia') index = 0;
  else if (voice.id === 'v-roberto') index = 1 % candidateVoices.length;
  else if (voice.id === 'v-elena') index = 2 % candidateVoices.length;
  else if (voice.id === 'v-lucas') index = 3 % candidateVoices.length;
  else if (voice.id === 'v-john') index = 4 % candidateVoices.length;
  else if (voice.id === 'v-sarah') index = 5 % candidateVoices.length;
  else {
    let hash = 0;
    const testId = voice.id || '';
    for (let i = 0; i < testId.length; i++) {
      hash += testId.charCodeAt(i);
    }
    index = hash % candidateVoices.length;
  }

  return candidateVoices[index] || langVoices[0];
}

// Bind avatar sub-tabs (Lite, Pro, Photo)
document.querySelectorAll('#avatar-panel-studio .sub-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#avatar-panel-studio .sub-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeAvatarSubTab = btn.dataset.sub;
    renderAvatarsGrid();
  });
});

// Window load trigger
window.addEventListener('load', () => {
  window.novaInstance = new NovaAssistant();
  initTheme();
});
