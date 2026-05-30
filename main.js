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
// VIRTUAL VOICE AGENT "NOVA"
// ==========================================
class NovaAssistant {
  constructor() {
    this.agentContainer = document.getElementById('novaAgent');
    this.bubbleText = document.getElementById('novaBubbleText');
    this.speechActive = false;
    this.recognition = null;
    this.voices = [];
    this.sleepTimer = null;
    this.state = 'sleep'; // 'sleep', 'listening', 'speaking'
    this.firstInteractionDone = false;

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
      this.recognition.continuous = true;
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
          this.updateBubble('Micrófono desactivado. Haz clic en mi icono para hablar.');
          this.setState('sleep');
        }
      };

      this.recognition.onend = () => {
        if (this.state === 'sleep') {
          try {
            this.recognition.start();
          } catch (e) {}
        }
      };

      try {
        this.recognition.start();
      } catch (e) {
        console.log('[Nova Passive Listen Failed]:', e);
      }
    } else {
      console.log('[Nova]: Speech Recognition not supported in this browser.');
      this.updateBubble('Control por voz no soportado. Tócame para ver comandos.');
    }
  }

  bindEvents() {
    this.agentContainer.querySelector('.nova-avatar-circle').addEventListener('click', (e) => {
      e.stopPropagation();
      this.activateListeningManually();
    });

    const welcomeTrigger = () => {
      if (!this.firstInteractionDone) {
        this.firstInteractionDone = true;
        setTimeout(() => {
          this.speak("Hola. Bienvenido a Synthetic Digital Labs. Soy Nova, tu asistente virtual. Di hola Nova o tócame si necesitas ayuda.");
        }, 1000);
        window.removeEventListener('click', welcomeTrigger);
      }
    };
    window.addEventListener('click', welcomeTrigger);
  }

  setState(newState) {
    this.state = newState;
    this.agentContainer.className = `nova-agent-container state-${newState}`;
  }

  updateBubble(text) {
    if (this.bubbleText) {
      this.bubbleText.textContent = text;
    }
  }

  speak(text) {
    if (!('speechSynthesis' in window)) {
      this.updateBubble(text);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-US';
    
    const esVoice = this.voices.find(v => v.lang.includes('es') || v.lang.includes('ES'));
    if (esVoice) utterance.voice = esVoice;

    utterance.onstart = () => {
      this.setState('speaking');
      this.updateBubble(text);
    };

    utterance.onend = () => {
      this.setState('sleep');
      this.updateBubble('Di "Hola Nova"');
      if (this.recognition) {
        try {
          this.recognition.start();
        } catch (e) {}
      }
    };

    utterance.onerror = () => {
      this.setState('sleep');
      this.updateBubble('Di "Hola Nova"');
    };

    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {}
    }

    window.speechSynthesis.speak(utterance);
  }

  activateListeningManually() {
    if (this.state === 'speaking') {
      window.speechSynthesis.cancel();
    }
    
    this.setState('listening');
    this.updateBubble('Te escucho... Dime qué necesitas');
    this.speakResponseWithRecognitionRestart('¿Sí? Dime en qué puedo ayudarte.');
  }

  speakResponseWithRecognitionRestart(responseSpeech) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(responseSpeech);
      utterance.lang = 'es-US';
      const esVoice = this.voices.find(v => v.lang.includes('es') || v.lang.includes('ES'));
      if (esVoice) utterance.voice = esVoice;

      utterance.onstart = () => {
        this.setState('speaking');
        this.updateBubble(responseSpeech);
      };

      utterance.onend = () => {
        this.setState('listening');
        this.updateBubble('Escuchando...');
        
        if (this.recognition) {
          try {
            this.recognition.start();
          } catch (e) {}
        }
        
        this.resetSleepTimer();
      };

      if (this.recognition) {
        try {
          this.recognition.stop();
        } catch (e) {}
      }
      window.speechSynthesis.speak(utterance);
    } else {
      this.setState('listening');
      this.updateBubble('Escuchando...');
      this.resetSleepTimer();
    }
  }

  resetSleepTimer() {
    if (this.sleepTimer) clearTimeout(this.sleepTimer);
    this.sleepTimer = setTimeout(() => {
      if (this.state === 'listening') {
        this.speak("Volviendo a reposo.");
      }
    }, 4000);
  }

  handleSpeechInput(transcript) {
    if (this.state === 'sleep') {
      if (transcript.includes('nova') || transcript.includes('hola nova') || transcript.includes('oye nova')) {
        this.resetSleepTimer();
        this.speakResponseWithRecognitionRestart('¿Sí? Te escucho.');
      }
    } else if (this.state === 'listening') {
      this.resetSleepTimer();
      
      let matched = false;

      if (transcript.includes('portafolio') || transcript.includes('trabajo') || transcript.includes('páginas') || transcript.includes('proyectos')) {
        this.speak("Entendido. Llevándote a nuestro portafolio de trabajos realizados.");
        this.scrollToSection('portafolio');
        matched = true;
      } else if (transcript.includes('presupuesto') || transcript.includes('calculadora') || transcript.includes('precio') || transcript.includes('costo') || transcript.includes('cuánto cuesta') || transcript.includes('cuesta')) {
        if (transcript.includes('precio') || transcript.includes('costo') || transcript.includes('cuánto cuesta') || transcript.includes('cuesta')) {
          this.speak("Nuestras páginas express en 24 horas comienzan desde 150 dólares. Te llevaré a la calculadora para estimar tu presupuesto.");
        } else {
          this.speak("Abriendo la calculadora de presupuesto dinámico.");
        }
        this.scrollToSection('presupuesto');
        matched = true;
      } else if (transcript.includes('contacto') || transcript.includes('correo') || transcript.includes('teléfono') || transcript.includes('escribir') || transcript.includes('dirección') || transcript.includes('llamar')) {
        this.speak("Abriendo la sección de contacto. Puedes escribirnos un correo o chatear por WhatsApp.");
        this.scrollToSection('contacto');
        matched = true;
      } else if (transcript.includes('servicios') || transcript.includes('hacen') || transcript.includes('ofrecen')) {
        this.speak("Aquí tienes el listado de nuestros servicios de desarrollo web y aplicaciones móviles.");
        this.scrollToSection('servicios');
        matched = true;
      } else if (transcript.includes('pregunta') || transcript.includes('duda') || transcript.includes('faq') || transcript.includes('frecuente')) {
        this.speak("Mostrándote las preguntas frecuentes resueltas por nuestro equipo.");
        this.scrollToSection('faq');
        matched = true;
      }
      
      if (!matched) {
        if (transcript.includes('tiempo') || transcript.includes('tardan') || transcript.includes('días') || transcript.includes('demoran')) {
          this.speak("Nuestras páginas express se entregan en solo 24 horas. Para aplicaciones móviles complejas, tardamos aproximadamente 14 días.");
          matched = true;
        } else if (transcript.includes('quiénes son') || transcript.includes('empresa') || transcript.includes('quien eres')) {
          this.speak("Somos Synthetic Digital Labs, una agencia enfocada en la creación de páginas web rápidas y aplicaciones nativas potenciadas por Inteligencia Artificial.");
          matched = true;
        } else if (transcript.includes('hola') || transcript.includes('saludo')) {
          this.speak("¡Hola de nuevo! Dime qué comando deseas realizar o qué información necesitas.");
          matched = true;
        }
      }

      if (!matched) {
        this.updateBubble(`Comando no reconocido: "${transcript}"`);
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


