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

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS (Intersection Observer)
// ==========================================
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // Trigger only once
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
  revealOnScroll.observe(element);
});

// ==========================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary-sm)');

window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100; // offset for navbar
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ==========================================
// PORTFOLIO CAROUSEL MECHANICS
// ==========================================
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.carousel-dot');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
let currentIndex = 0;
const totalSlides = 4;

function updateCarousel(index) {
  // Clamp index
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  
  currentIndex = index;
  
  // Slide transition
  track.style.transform = `translateX(-${currentIndex * 25}%)`;
  
  // Update dots
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

if (btnLeft && btnRight && track) {
  btnLeft.addEventListener('click', () => {
    updateCarousel(currentIndex - 1);
  });
  
  btnRight.addEventListener('click', () => {
    updateCarousel(currentIndex + 1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      updateCarousel(index);
    });
  });
}

// ==========================================
// COMMENTS / TESTIMONIALS (localStorage)
// ==========================================
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Initial template comments if storage is empty
const defaultComments = [
  {
    name: "Jorge Díaz",
    company: "Apex Systems",
    rating: 5,
    body: "¡Excelente servicio! Nos crearon una landing page para nuestra startup tecnológica en tiempo récord (literalmente en 24 horas). El diseño de resplandor neón es muy atractivo y los leads han subido un 40%.",
    date: "Hace 3 días"
  },
  {
    name: "Alicia Morales",
    company: "NovaMarket",
    rating: 5,
    body: "La aplicación móvil híbrida que desarrollaron para nuestro e-commerce superó nuestras expectativas. Tiene una velocidad increíble y un diseño responsivo impecable que parece app nativa. Muy recomendados.",
    date: "Hace 1 semana"
  }
];

function getComments() {
  const stored = localStorage.getItem('sdl_comments');
  if (stored) {
    return JSON.parse(stored);
  } else {
    localStorage.setItem('sdl_comments', JSON.stringify(defaultComments));
    return defaultComments;
  }
}

function saveComment(comment) {
  const comments = getComments();
  comments.unshift(comment); // Add to the top
  localStorage.setItem('sdl_comments', JSON.stringify(comments));
}

function renderComments() {
  if (!commentsList) return;
  const comments = getComments();
  commentsList.innerHTML = '';
  
  comments.forEach(comment => {
    // Generate avatar initials
    const initials = comment.name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
      
    // Generate stars string
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= comment.rating) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
      } else {
        starsHtml += '<i class="fa-regular fa-star"></i>';
      }
    }
    
    const card = document.createElement('div');
    card.className = 'comment-card';
    card.innerHTML = `
      <div class="cc-header">
        <div class="cc-avatar">${initials}</div>
        <div class="cc-meta">
          <span class="cc-name">${escapeHtml(comment.name)}</span>
          <span class="cc-company">${comment.company ? escapeHtml(comment.company) : 'Cliente Particular'}</span>
        </div>
        <div class="cc-stars">${starsHtml}</div>
      </div>
      <p class="cc-body">"${escapeHtml(comment.body)}"</p>
      <div class="cc-date">${comment.date}</div>
    `;
    
    commentsList.appendChild(card);
  });
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('commentName');
    const companyInput = document.getElementById('commentCompany');
    const ratingInput = document.querySelector('input[name="rating"]:checked');
    const bodyInput = document.getElementById('commentBody');
    
    if (!nameInput.value.trim() || !bodyInput.value.trim()) return;
    
    const newComment = {
      name: nameInput.value.trim(),
      company: companyInput.value.trim(),
      rating: parseInt(ratingInput ? ratingInput.value : 5),
      body: bodyInput.value.trim(),
      date: "Hace unos momentos"
    };
    
    saveComment(newComment);
    renderComments();
    
    // Reset Form
    commentForm.reset();
  });
}

// Initial Comments Render
renderComments();

// ==========================================
// CONTACT FORM SUBMISSION SIMULATION
// ==========================================
const contactForm = document.getElementById('contactForm');
const contactFormStatus = document.getElementById('contactFormStatus');

if (contactForm && contactFormStatus) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    
    // Simulate API call
    contactFormStatus.className = 'form-status-message success';
    contactFormStatus.style.display = 'block';
    contactFormStatus.innerHTML = `<strong>¡Muchas gracias, ${escapeHtml(name)}!</strong> Tu solicitud para el servicio de <em>${escapeHtml(service)}</em> ha sido recibida. Nos comunicaremos contigo a <strong>${escapeHtml(email)}</strong> en menos de 24 horas.`;
    
    // Reset Form
    contactForm.reset();
    
    // Auto-hide status message after 8 seconds
    setTimeout(() => {
      contactFormStatus.style.display = 'none';
    }, 8000);
  });
}

// ==========================================
// NEURAL NETWORK INTERACTIVE CANVAS BACKGROUND
// ==========================================
const canvas = document.getElementById('neuralCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 60;
  const connectionDistance = 110;
  const mouse = { x: null, y: null, radius: 150 };

  // Set Canvas Size
  function resizeCanvas() {
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = parent.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Mouse move tracking
  window.addEventListener('mousemove', (e) => {
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
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 1.5 + 1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      // Theme colors matching the accents
      const accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--neon-purple').trim() || '#bd00ff';
      ctx.fillStyle = accentColor;
      ctx.shadowBlur = 4;
      ctx.shadowColor = accentColor;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset
    }

    update() {
      // Move
      this.x += this.vx;
      this.y += this.vy;

      // Bounce
      if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
      if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

      // Mouse gravity (subtle pull)
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 0.4;
          this.y += (dy / dist) * force * 0.4;
        }
      }
    }
  }

  // Initialize Particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          const accentColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--neon-blue').trim() || '#00d2ff';
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.globalAlpha = alpha;
          ctx.stroke();
          ctx.globalAlpha = 1.0; // Reset
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
}

// ==========================================
// INTERACTIVE BUDGET CALCULATOR
// ==========================================
const checkboxes = document.querySelectorAll('.calc-checkbox-label input');
const totalPriceEl = document.getElementById('calcTotalPrice');
const totalTimeEl = document.getElementById('calcTotalTime');
const calcRequestBtn = document.getElementById('calcRequestBtn');

function calculateEstimates() {
  if (checkboxes.length === 0) return;
  
  let price = 0;
  let maxTime = 0;
  let selectedCount = 0;
  
  checkboxes.forEach(cb => {
    if (cb.checked) {
      price += parseInt(cb.dataset.price);
      const time = parseInt(cb.dataset.time);
      if (time > maxTime) maxTime = time;
      selectedCount++;
    }
  });

  // Display Total Price
  if (totalPriceEl) {
    totalPriceEl.textContent = `$${price} USD`;
  }
  
  // Display Delivery Time
  if (totalTimeEl) {
    if (selectedCount === 0) {
      totalTimeEl.textContent = '0 Días';
    } else if (selectedCount === 1 && document.getElementById('calcWeb').checked) {
      totalTimeEl.textContent = '24 Horas';
    } else {
      totalTimeEl.textContent = `${maxTime} Días aprox.`;
    }
  }
}

if (checkboxes.length > 0) {
  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculateEstimates);
  });
  
  // Run initial calculation
  calculateEstimates();
}

// "Solicitar Presupuesto" action filling forms
if (calcRequestBtn) {
  calcRequestBtn.addEventListener('click', () => {
    const selectedServices = [];
    checkboxes.forEach(cb => {
      if (cb.checked) {
        // Get service name from parent label
        const labelText = cb.parentElement.querySelector('strong').textContent;
        selectedServices.push(labelText);
      }
    });

    const priceText = totalPriceEl ? totalPriceEl.textContent : '';
    const timeText = totalTimeEl ? totalTimeEl.textContent : '';
    
    // Auto-select option in contact dropdown
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
      if (document.getElementById('calcApp').checked) {
        serviceSelect.value = 'app';
      } else if (document.getElementById('calcWeb').checked) {
        serviceSelect.value = 'web-express';
      } else {
        serviceSelect.value = 'web-ia';
      }
    }

    // Auto-fill message textarea
    const messageArea = document.getElementById('message');
    if (messageArea) {
      messageArea.value = `Hola, he utilizado la calculadora web y me interesa cotizar un proyecto que incluya:\n${selectedServices.map(s => `- ${s}`).join('\n')}\n\nPresupuesto Estimado: ${priceText}\nTiempo Estimado: ${timeText}`;
    }

    // Smooth Scroll to Contact Section
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ==========================================
// AI LANDING PAGE GENERATION SIMULATOR
// ==========================================
const simBtn = document.getElementById('simBtn');
const simConsole = document.getElementById('simConsole');
const simRenderWrapper = document.getElementById('simRenderWrapper');

if (simBtn && simConsole && simRenderWrapper) {
  simBtn.addEventListener('click', () => {
    const name = document.getElementById('simName').value.trim() || 'TechLab Pro';
    const industry = document.getElementById('simIndustry').value.trim() || 'Consultoría Tecnológica';
    const theme = document.getElementById('simTheme').value;

    // Reset UI state
    simBtn.disabled = true;
    simRenderWrapper.style.display = 'none';
    simConsole.style.display = 'block';
    simConsole.innerHTML = '';

    // Logs sequence simulation
    const logs = [
      { text: `[SYSTEM] Inicializando maquetador web de IA...`, delay: 100, color: 'text-blue' },
      { text: `[SYSTEM] Cargando modelo semántico e interpretando inputs...`, delay: 500, color: '' },
      { text: `[IA] Industria analizada: "${industry}". Estructurando copys óptimos de conversión...`, delay: 1100, color: '' },
      { text: `[IA] Nombre corporativo registrado: "${name}". Generando dominio virtual...`, delay: 1700, color: '' },
      { text: `[IA] Paleta de diseño seleccionada: Estilo "${theme.toUpperCase()}". Cargando tokens CSS...`, delay: 2400, color: 'text-purple' },
      { text: `[SEO] Configurando microdatos schema.org, robots.txt y sitemaps...`, delay: 3000, color: 'text-blue' },
      { text: `[SYSTEM] Compilando recursos, comprimiendo imágenes de fondo y limpiando dependencias...`, delay: 3600, color: '' },
      { text: `[SYSTEM] ¡PROCESO DE GENERACIÓN COMPLETADO CON ÉXITO! Renderizando vista previa...`, delay: 4200, color: 'text-red' }
    ];

    logs.forEach(log => {
      setTimeout(() => {
        const line = document.createElement('div');
        line.className = `console-line ${log.color}`;
        line.textContent = log.text;
        simConsole.appendChild(line);
        simConsole.scrollTop = simConsole.scrollHeight;
      }, log.delay);
    });

    // Renders the simulated browser mockup
    setTimeout(() => {
      simConsole.style.display = 'none';
      simRenderWrapper.style.display = 'block';

      // Update Rendered texts
      document.getElementById('simUrl').textContent = `${name.toLowerCase().replace(/\s+/g, '')}.com`;
      document.getElementById('simRenderLogo').textContent = name;
      document.getElementById('simRenderHero').textContent = `${industry} del Futuro`;

      // Set styles class based on theme
      const browserBody = document.getElementById('simBrowserBody');
      browserBody.className = 'mini-browser-body';
      
      if (theme === 'cyberpunk') browserBody.classList.add('theme-cyberpunk');
      else if (theme === 'quantum') browserBody.classList.add('theme-quantum');
      else if (theme === 'vulcan') browserBody.classList.add('theme-vulcan');
      else if (theme === 'emerald') browserBody.classList.add('theme-emerald');

      // Re-enable button
      simBtn.disabled = false;
    }, 4800);
  });
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

      // Close all other accordion items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        // Setting maxHeight dynamically based on scrollHeight makes height transition smooth
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
});

// ==========================================
// ACCENT THEME PANEL SELECTOR
// ==========================================
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themePanel = document.getElementById('themePanel');
const themeOptions = document.querySelectorAll('.theme-opt');

if (themeToggleBtn && themePanel) {
  // Toggle theme panel options view
  themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themePanel.classList.toggle('active');
  });

  // Hide theme options panel on body click
  document.addEventListener('click', () => {
    themePanel.classList.remove('active');
  });

  // Switch Theme Accents
  themeOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      themeOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      const selectedTheme = opt.dataset.theme;
      
      // Update HTML theme attribute
      if (selectedTheme === 'purple') {
        document.documentElement.removeAttribute('data-theme-choice');
      } else {
        document.documentElement.setAttribute('data-theme-choice', selectedTheme);
      }

      // Save user configuration to localStorage
      localStorage.setItem('sdl_accent_theme', selectedTheme);
    });
  });

  // Load persistent theme preference on reload
  const savedAccent = localStorage.getItem('sdl_accent_theme');
  if (savedAccent && savedAccent !== 'purple') {
    const matchingBtn = document.querySelector(`.theme-opt[data-theme="${savedAccent}"]`);
    if (matchingBtn) {
      themeOptions.forEach(o => o.classList.remove('active'));
      matchingBtn.classList.add('active');
      document.documentElement.setAttribute('data-theme-choice', savedAccent);
    }
  }
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

    if (!this.agentContainer) return;

    // Apply transparent background to avatar dynamically via canvas
    if (this.avatarImg) {
      this.processAvatarTransparency();
    }

    this.initSpeechSynthesis();
    this.initSpeechRecognition();
    this.bindEvents();
  }

  processAvatarTransparency() {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.avatarImg.src;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      
      const thresholdMin = 8;
      const thresholdMax = 35;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i+1];
        const b = data[i+2];
        
        // Calculate max brightness
        const brightness = Math.max(r, Math.max(g, b));
        
        if (brightness <= thresholdMin) {
          data[i+3] = 0; // Fully transparent
        } else if (brightness < thresholdMax) {
          // Soft blending transition
          const ratio = (brightness - thresholdMin) / (thresholdMax - thresholdMin);
          data[i+3] = Math.floor(ratio * 255);
        }
      }
      
      ctx.putImageData(imgData, 0, 0);
      this.avatarImg.src = canvas.toDataURL();
    };
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
      this.recognition.continuous = false; // Phrase-by-phrase recognition is far more stable
      this.recognition.interimResults = false;
      this.recognition.lang = 'es-ES';

      this.recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        console.log('[Nova Speech]:', transcript);
        this.handleSpeechInput(transcript);
      };

      this.recognition.onerror = (event) => {
        console.error('[Nova Error]:', event.error);
        if (event.error === 'not-allowed') {
          this.updateBubble('Micrófono bloqueado. Tócame para activarlo.');
          this.setState('sleep');
        }
      };

      this.recognition.onend = () => {
        // Auto-restart if we are in listening or sleep state
        if (this.state === 'sleep' || this.state === 'listening') {
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
    this.agentContainer.className = `nova-siri-container state-${newState}`;
  }

  updateBubble(text) {
    if (this.bubbleText) {
      this.bubbleText.textContent = text;
    }
  }

  wakeUp() {
    if (this.state === 'speaking') {
      window.speechSynthesis.cancel();
    }
    
    // Slide up robot from bottom center
    this.agentContainer.classList.remove('hidden');
    this.setState('listening');
    this.updateBubble('¿En qué puedo ayudarte?');
    
    this.speak('Hola. Bienvenido a Synthetic Digital Labs. ¿En qué te puedo ayudar hoy?', true);
  }

  goToSleep() {
    this.setState('sleep');
    this.updateBubble('Hasta luego.');
    
    // Soft voice goodbye if possible
    if ('speechSynthesis' in window) {
      this.speak('Hasta luego.', false);
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
      if (keepActive) {
        this.setState('listening');
        this.resetSleepTimer();
      } else {
        this.setState('sleep');
        this.agentContainer.classList.add('hidden');
      }
      return;
    }

    window.speechSynthesis.cancel();
    this.stopListening();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }
    const esVoice = this.voices.find(v => v.lang.includes('es') || v.lang.includes('ES'));
    if (esVoice) utterance.voice = esVoice;

    utterance.onstart = () => {
      this.setState('speaking');
      this.updateBubble(text);
      if (this.sleepTimer) clearTimeout(this.sleepTimer);
    };

    utterance.onend = () => {
      if (keepActive) {
        this.setState('listening');
        this.updateBubble('🎙️ Escuchando...');
        // 300ms guard to prevent hearing own voice residual echo
        setTimeout(() => {
          if (this.state === 'listening') {
            this.startListening();
            this.resetSleepTimer();
          }
        }, 300);
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
      if (keepActive) {
        this.setState('listening');
        this.startListening();
        this.resetSleepTimer();
      } else {
        this.setState('sleep');
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
    }, 5000); // 5 seconds of silence countdown
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
        this.speak("Entendido. Llevándote a nuestro portafolio de páginas web y marcas activas.", true);
        this.scrollToSection('portafolio');
        matched = true;
      } else if (transcript.includes('presupuesto') || transcript.includes('calculadora') || transcript.includes('cotizar') || transcript.includes('calcular')) {
        this.speak("Abriendo la calculadora de presupuesto dinámico.", true);
        this.scrollToSection('presupuesto');
        matched = true;
      } else if (transcript.includes('contacto') || transcript.includes('correo') || transcript.includes('teléfono') || transcript.includes('escribir') || transcript.includes('dirección') || transcript.includes('llamar') || transcript.includes('whatsapp')) {
        this.speak("Abriendo la sección de contacto. Puedes enviarnos un mensaje o chatear por WhatsApp.", true);
        this.scrollToSection('contacto');
        matched = true;
      } else if (transcript.includes('servicios') || transcript.includes('hacen') || transcript.includes('ofrecen')) {
        this.speak("Aquí tienes el listado de nuestros servicios de desarrollo web y aplicaciones móviles.", true);
        this.scrollToSection('servicios');
        matched = true;
      } else if (transcript.includes('pregunta') || transcript.includes('duda') || transcript.includes('faq') || transcript.includes('frecuente')) {
        this.speak("Te desplazo a la sección de preguntas frecuentes resueltas por nuestro equipo.", true);
        this.scrollToSection('faq');
        matched = true;
      }
      
      // Jarvis Q&A Direct Knowledge Intents
      if (!matched) {
        if (transcript.includes('precio') || transcript.includes('costo') || transcript.includes('cuesta') || transcript.includes('tarifas') || transcript.includes('valor')) {
          this.speak("Nuestras páginas web express en 24 horas cuestan desde 150 dólares, y las avanzadas con inteligencia artificial desde 350 dólares.", true);
          matched = true;
        } else if (transcript.includes('tiempo') || transcript.includes('tardan') || transcript.includes('días') || transcript.includes('demoran') || transcript.includes('entrega')) {
          this.speak("Las páginas express se entregan en solo 24 horas. Los proyectos complejos como aplicaciones móviles toman aproximadamente 14 días.", true);
          matched = true;
        } else if (transcript.includes('avatar') || transcript.includes('avatara') || transcript.includes('muñeco') || transcript.includes('personaje')) {
          this.speak("Ofrecemos el desarrollo de avatares interactivos 3D con IA para tu sitio web, como yo. Contáctanos para cotizar el tuyo.", true);
          this.scrollToSection('contacto');
          matched = true;
        } else if (transcript.includes('quiénes son') || transcript.includes('empresa') || transcript.includes('quien eres') || transcript.includes('creadores')) {
          this.speak("Somos Synthetic Digital Labs, el mejor lugar para crear tus páginas web y aplicaciones móviles nativas utilizando Inteligencia Artificial.", true);
          matched = true;
        } else if (transcript.includes('dónde están') || transcript.includes('ubicados') || transcript.includes('oficina') || transcript.includes('país')) {
          this.speak("Nuestras oficinas están en Miami, Florida, pero ofrecemos servicios de desarrollo web y móvil de forma remota a todo el mundo.", true);
          matched = true;
        } else if (transcript.includes('pago') || transcript.includes('pagar') || transcript.includes('métodos') || transcript.includes('formas')) {
          this.speak("Aceptamos transferencias bancarias, PayPal, tarjetas de crédito y criptomonedas. Solicitamos el 50% de anticipo y el 50% al finalizar.", true);
          matched = true;
        } else if (transcript.includes('responsivo') || transcript.includes('móvil') || transcript.includes('celular') || transcript.includes('diseño')) {
          this.speak("Todos nuestros diseños son 100% responsivos y adaptados a teléfonos móviles, tabletas y computadoras.", true);
          matched = true;
        } else if (transcript.includes('wordpress') || transcript.includes('tecnologías')) {
          this.speak("Desarrollamos con código limpio en HTML, CSS, JavaScript y React. Esto garantiza una velocidad de carga ultra rápida.", true);
          matched = true;
        } else if (transcript.includes('hola') || transcript.includes('saludo') || transcript.includes('buenos días') || transcript.includes('buenas tardes')) {
          this.speak("¡Hola! Soy Nova, tu asistente virtual tipo Jarvis. ¿En qué te puedo servir hoy?", true);
          matched = true;
        } else if (transcript.includes('gracias') || transcript.includes('adiós') || transcript.includes('chao') || transcript.includes('hasta luego')) {
          this.speak("De nada. Si necesitas algo más, solo dime 'Hey Nova'. ¡Que tengas un gran día!", false);
          matched = true;
        }
      }

      if (!matched) {
        this.speak("Lo siento, no he entendido ese comando. Puedes pedirme información sobre precios, tiempos de entrega, portafolio o contacto.", true);
      }
    }
  }

  scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Initialize Assistant
new NovaAssistant();



