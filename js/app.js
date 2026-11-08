function renderSiteShell() {
  const isSubpage = window.location.pathname.replaceAll('\\', '/').includes('/pages/');
  const root = isSubpage ? '../' : '';
  const currentPath = window.location.pathname;
  const navItems = [
    { label: 'Inicio', href: `${root}index.html`, path: 'index.html' },
    { label: 'Emergencias', href: `${root}pages/emergencias.html`, path: 'emergencias.html' },
    { label: 'Juegos', href: `${root}pages/juegos.html`, path: 'juegos.html' },
    { label: 'Aprende', href: `${root}pages/aprende.html`, path: 'aprende.html' },
    { label: 'Consejos', href: `${root}pages/recursos.html`, path: 'recursos.html' }
  ];
  const activeItem = navItems.find((item) => currentPath.endsWith(item.path)) || (currentPath.endsWith('aprende-detalle.html') ? navItems[2] : navItems[0]);
  const navMarkup = navItems.map((item) => `<a class="${item === activeItem ? 'active' : ''}" href="${item.href}"${item === activeItem ? ' aria-current="page"' : ''}>${item.label}</a>`).join('');
  const header = document.querySelector('.site-header');
  if (header) {
    header.outerHTML = `<header class="site-header"><div class="header-inner"><a class="brand" href="${root}index.html" aria-label="Cuenca Cimarrona, inicio"><img src="${root}assets/images/logo_uabc.png" alt="UABC"><span><strong>CUENCA</strong><b>CIMARRONA</b></span></a><button class="menu-toggle" id="menuToggle" type="button" aria-expanded="false" aria-controls="siteNav">Menú <span>☰</span></button><nav class="site-nav" id="siteNav" aria-label="Navegación principal">${navMarkup}</nav></div></header>`;
  }
  const footer = document.querySelector('.site-footer, .simple-footer');
  if (footer) {
    footer.outerHTML = `<footer class="site-footer" id="redes"><div class="footer-main"><div class="footer-brand"><img src="${root}assets/images/logo_uabc.png" alt="UABC"><div><strong>CUENCA CIMARRONA</strong><span>Prevención, aprendizaje y comunidad.</span></div></div><div class="social-block"><p>Síguenos y comparte</p><div class="social-links"><a href="#redes" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg></a><a href="#redes" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.6 2.6 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.6 2.6 0 0 0 3 8.2 27 27 0 0 0 2.6 12 27 27 0 0 0 3 15.8a2.6 2.6 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6-.0 7.2-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-3.8 27 27 0 0 0-.4-3.8Z"></path><path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none"></path></svg></a><a href="#redes" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.3 2.2 1.6 3.5 4 3.7v3.1c-1.4 0-2.7-.4-4-1.1v5.7a5.6 5.6 0 1 1-4.8-5.5v3.1a2.5 2.5 0 1 0 1.7 2.4V4H15Z"></path></svg></a><a href="#redes" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z"></path></svg></a></div></div></div><div class="footer-bottom"><span>© 2026 Cuenca Cimarrona · Proyecto académico UABC</span><span>Hecho por estudiantes para estudiantes.</span></div></footer>`;
  }
}

renderSiteShell();
document.querySelectorAll('.brand b').forEach((element) => element.remove());
document.title = document.title.replace(/Cuencia/gi, 'Cuenca');
document.querySelectorAll('.brand strong, .footer-brand strong').forEach((element) => { element.textContent = 'CUENCA CIMARRONA'; });
document.querySelectorAll('.footer-bottom span').forEach((element) => { element.textContent = element.textContent.replace(/Cuencia/gi, 'Cuenca'); });
document.querySelector('.footer-bottom span:last-child')?.replaceChildren(document.createTextNode('Realizado por estudiantes.'));
document.querySelector('.social-block>p')?.replaceChildren(document.createTextNode('Redes sociales'));
document.querySelector('.intro-strip strong')?.replaceChildren(document.createTextNode('Cuenca Cimarrona reúne propuestas elaboradas de manera colaborativa.'));

const games = [
  { tag: 'JUEGO · RALLY · EQUIPOS', title: 'Escape de la tormenta', text: 'Resuelva retos y encuentre una ruta segura durante la lluvia.', image: 'assets/images/game-rally.png', tagClass: '' },
  { tag: 'JUEGO · DECISIONES', title: 'Cada decisión cuenta', text: 'Seleccione qué hacer y descubra cómo cambia la historia.', image: 'assets/images/game-decisions.png', tagClass: 'blue-tag' },
  { tag: 'JUEGO · RETO · 60 SEGUNDOS', title: 'Arme su mochila', text: 'Reconozca los objetos que sí son indispensables.', image: 'assets/images/game-backpack.png', tagClass: 'green-tag' }
];

const resources = [
  { className: 'card-yellow', icon: '☂', title: 'Antes de la lluvia', text: 'Revise coladeras, rutas y objetos importantes antes de que comience.', action: '', href: '#antes' },
  { className: 'card-blue', icon: '⌁', title: 'Durante una tormenta', text: 'Evite cruzar arroyos y siga la información de fuentes confiables.', action: '', href: '#durante' },
  { className: 'card-green', icon: '♧', title: 'Comparta lo aprendido', text: 'Invite a su equipo y comparta una acción de prevención en redes.', action: 'Participar', href: '#redes' },
  { className: 'card-blue', icon: '⌂', title: 'Después de la lluvia', text: 'Revise su entorno, reporte riesgos y conserve las recomendaciones útiles.', action: '', href: '#despues' }
];

const lessons = [
  { number: '01', slug: 'conozca', title: 'Conozca', text: 'El Niño es un fenómeno climático que puede modificar las lluvias y las condiciones del clima en nuestra región.', image: '../assets/images/hero-el-nino.png', tone: 'lesson-green' },
  { number: '02', slug: 'preparese', title: 'Prepárese', text: 'Identifique riesgos cercanos, organice una mochila de emergencia y acuerde una ruta segura con su familia.', image: '../assets/images/game-backpack.png', tone: 'lesson-yellow' },
  { number: '03', slug: 'comparta', title: 'Comparta', text: 'Una recomendación útil puede llegar más lejos cuando se comparte con la comunidad.', image: '../assets/images/game-decisions.png', tone: 'lesson-blue' }
];

const gameCarousel = document.querySelector('#gameCarousel');
const counter = document.querySelector('#gameCounter');
let currentSlide = 0;

function renderGames() {
  if (!gameCarousel) return;
  gameCarousel.innerHTML = games.map((game, index) => `<article class="game-slide${index === 0 ? ' active' : ''}" aria-hidden="${index !== 0}">
    <div class="game-copy"><span class="game-tag ${game.tagClass}">${game.tag}</span><h3>${game.title}</h3><p>${game.text}</p><a href="pages/juegos.html" class="outline-button">Ver dinámica <span>↗</span></a></div>
    <div class="game-visual game-image" aria-hidden="true"><img src="${game.image}" alt=""></div>
  </article>`).join('');
}

function showGame(index) {
  currentSlide = (index + games.length) % games.length;
  document.querySelectorAll('.game-slide').forEach((slide, i) => { slide.classList.toggle('active', i === currentSlide); slide.setAttribute('aria-hidden', String(i !== currentSlide)); });
  if (counter) counter.textContent = `${String(currentSlide + 1).padStart(2, '0')} / ${String(games.length).padStart(2, '0')}`;
}

function setupAutoAdvance({ next, container, interval = 5000 }) {
  if (!container) return;
  let timer;
  const start = () => { clearInterval(timer); timer = setInterval(next, interval); };
  const stop = () => clearInterval(timer);
  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);
  container.addEventListener('focusin', stop);
  container.addEventListener('focusout', (event) => { if (!container.contains(event.relatedTarget)) start(); });
  start();
}

function renderResources() {
  const grid = document.querySelector('#resourceGrid');
  if (!grid) return;
  const adviceBase = document.body.classList.contains('subpage') ? '' : 'pages/recursos.html';
  grid.innerHTML = resources.map((item) => `<article class="resource-card ${item.className}"><span class="resource-icon" aria-hidden="true">${item.icon}</span><div><h3>${item.title}</h3><p>${item.text}</p>${item.action ? `<a href="${adviceBase}${item.href}">${item.action} <span>→</span></a>` : ''}</div></article>`).join('');
}

const learningCarousel = document.querySelector('#learningCarousel');
const lessonCounter = document.querySelector('#lessonCounter');
let currentLesson = 0;

function renderLessons() {
  if (!learningCarousel) return;
  learningCarousel.innerHTML = lessons.map((lesson, index) => `<article class="lesson-slide ${lesson.tone}${index === 0 ? ' active' : ''}" aria-hidden="${index !== 0}"><div class="lesson-copy"><span class="lesson-number">${lesson.number}</span><h3>${lesson.title}</h3><p>${lesson.text}</p><a class="text-link lesson-more" href="aprende-detalle.html?tema=${lesson.slug}">Ver información <span>→</span></a></div><div class="lesson-image"><img src="${lesson.image}" alt=""></div></article>`).join('');
}

function showLesson(index) {
  currentLesson = (index + lessons.length) % lessons.length;
  document.querySelectorAll('.lesson-slide').forEach((slide, i) => { slide.classList.toggle('active', i === currentLesson); slide.setAttribute('aria-hidden', String(i !== currentLesson)); });
  if (lessonCounter) lessonCounter.textContent = `${String(currentLesson + 1).padStart(2, '0')} / ${String(lessons.length).padStart(2, '0')}`;
}

function setupHomeCarousel({ containerId, prevId, nextId, counterId, items, renderItem }) {
  const container = document.querySelector(`#${containerId}`);
  if (!container) return;
  const counter = document.querySelector(`#${counterId}`);
  let current = 0;
  container.innerHTML = items.map((item, index) => renderItem(item, index)).join('');
  const show = (index) => { current = (index + items.length) % items.length; container.querySelectorAll('.home-slide').forEach((slide, i) => { slide.classList.toggle('active', i === current); slide.setAttribute('aria-hidden', String(i !== current)); }); if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`; };
  document.querySelector(`#${prevId}`)?.addEventListener('click', () => show(current - 1));
  document.querySelector(`#${nextId}`)?.addEventListener('click', () => show(current + 1));
  setupAutoAdvance({ next: () => show(current + 1), container });
  show(0);
}

function renderHomeCarousels() {
  const assetRoot = document.body.classList.contains('subpage') ? '../assets' : 'assets';
  setupHomeCarousel({ containerId: 'homeLessonCarousel', prevId: 'prevHomeLesson', nextId: 'nextHomeLesson', counterId: 'homeLessonCounter', items: lessons, renderItem: (lesson, index) => `<article class="home-slide ${lesson.tone}${index === 0 ? ' active' : ''}" aria-hidden="${index !== 0}"><div class="home-slide-copy"><span class="lesson-number">${lesson.number}</span><h3>${lesson.title}</h3><p>${lesson.text}</p><a class="text-link lesson-more" href="pages/aprende-detalle.html?tema=${lesson.slug}">Ver información <span>→</span></a></div><div class="home-slide-image"><img src="${lesson.image.replace('../assets', assetRoot)}" alt=""></div></article>` });
  const adviceSlides = Array.from({ length: Math.ceil(resources.length / 2) }, (_, index) => resources.slice(index * 2, index * 2 + 2));
  setupHomeCarousel({ containerId: 'homeAdviceCarousel', prevId: 'prevHomeAdvice', nextId: 'nextHomeAdvice', counterId: 'homeAdviceCounter', items: adviceSlides, renderItem: (items, index) => `<article class="home-slide advice-pair${index === 0 ? ' active' : ''}" aria-hidden="${index !== 0}">${items.map((item) => `<div class="advice-card ${item.className}"><span class="resource-icon" aria-hidden="true">${item.icon}</span><div><h3>${item.title}</h3><p>${item.text}</p>${item.action ? `<a class="text-link" href="pages/recursos.html${item.href}">${item.action} <span>→</span></a>` : ''}</div></div>`).join('')}</article>` });
}

function normalizeFormalCopy() {
  const replacements = new Map([
    ['Síguenos y comparte', 'Redes sociales'],
    ['Avanza por las ideas principales y aprende a tu ritmo.', 'Avance por las ideas principales y aprenda a su ritmo.'],
    ['Encuentra ideas rápidas y recomendaciones para antes, durante y después de una lluvia.', 'Encuentre ideas rápidas y recomendaciones para antes, durante y después de una lluvia.'],
    ['Elige una dinámica', 'Elija una dinámica'],
    ['Tu camino cuenta', 'Cada decisión cuenta'],
    ['Arma tu mochila', 'Arme su mochila'],
    ['Selecciona una opción', 'Seleccione una opción'],
    ['Conoce dinámica', 'Conozca la dinámica'],
    ['Comparte', 'Comparta'],
    ['Ideas rápidas para prepararte', 'Ideas rápidas para prepararse']
  ]);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => { if (node.parentElement?.closest('script,style')) return; replacements.forEach((value, key) => { node.nodeValue = node.nodeValue.replaceAll(key, value); }); });
}

function setupGameLibrary() {
  const panel = document.querySelector('#gameDetail');
  if (!panel) return;
  const details = {
    rally: { title: 'Escape de la tormenta', text: 'Recorra estaciones, resuelva retos breves y elija decisiones que ayuden a mantenerse seguro durante una lluvia intensa.', steps: ['Forme un equipo de 2 a 5 jugadores.', 'Complete las estaciones y reúna las pistas.', 'Compare la ruta elegida y explique por qué es segura.'] },
    decisiones: { title: 'Cada decisión cuenta', text: 'Elija qué hacer ante una situación de lluvia y observe cómo cada decisión cambia el recorrido.', steps: ['Lea la situación inicial.', 'Seleccione una de las opciones disponibles.', 'Revise la consecuencia y aprenda de la decisión.'] },
    mochila: { title: 'Arme su mochila', text: 'Identifique en 60 segundos los artículos que realmente necesita para una emergencia.', steps: ['Tome los objetos disponibles.', 'Separe los artículos indispensables de los innecesarios.', 'Revise sus respuestas y comparta un consejo.'] }
  };
  const title = panel.querySelector('h2');
  const text = panel.querySelector('.game-detail-text');
  const steps = panel.querySelector('ol');
  document.querySelectorAll('.game-action').forEach((button) => button.addEventListener('click', () => {
    const detail = details[button.dataset.game];
    if (!detail) return;
    title.textContent = detail.title;
    text.textContent = detail.text;
    steps.innerHTML = detail.steps.map((step) => `<li>${step}</li>`).join('');
    panel.hidden = false;
    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }));
}

function setupLessonDetail() {
  const detail = document.querySelector('#lessonDetail');
  if (!detail) return;
  const content = {
    conozca: { title: 'Conozca El Niño', intro: 'El Niño es un fenómeno climático que puede modificar las lluvias, la temperatura y las condiciones del clima en nuestra región.', body: 'Conocer el fenómeno ayuda a interpretar mejor los avisos y a prepararse con anticipación. Sus efectos no son iguales en todos los lugares, por eso es importante consultar información oficial y observar las condiciones locales.', points: ['Puede modificar los patrones de lluvia.', 'Sus efectos pueden sentirse en diferentes regiones.', 'La prevención comienza con información confiable.'] },
    preparese: { title: 'Prepárese ante la lluvia', intro: 'Una preparación sencilla permite responder con más calma cuando las condiciones cambian.', body: 'Revise coladeras, techos, cables y rutas cercanas. Prepare una mochila con agua, linterna, documentos protegidos, botiquín y cargador portátil. Acuerde con su familia un punto de encuentro.', points: ['Identifique riesgos cercanos.', 'Prepare una mochila de emergencia.', 'Defina una ruta y un punto de encuentro.'] },
    comparta: { title: 'Comparta lo aprendido', intro: 'La prevención se fortalece cuando las recomendaciones útiles llegan a más personas.', body: 'Comparta una acción concreta con su equipo, familia o comunidad. Una publicación, una conversación o una dinámica pueden ayudar a que más personas reconozcan qué hacer antes y durante una tormenta.', points: ['Explique una recomendación con claridad.', 'Invite a otras personas a participar.', 'Utilice información de fuentes confiables.'] }
  };
  const selected = content[new URLSearchParams(window.location.search).get('tema')] || content.conozca;
  detail.querySelector('h1').textContent = selected.title;
  detail.querySelector('.detail-intro').textContent = selected.intro;
  detail.querySelector('.detail-body').textContent = selected.body;
  detail.querySelector('.detail-points').innerHTML = selected.points.map((point) => `<li>${point}</li>`).join('');
}

renderGames();
renderResources();
renderLessons();
renderHomeCarousels();
normalizeFormalCopy();
setupGameLibrary();
setupLessonDetail();
document.querySelector('#nextGame')?.addEventListener('click', () => showGame(currentSlide + 1));
document.querySelector('#prevGame')?.addEventListener('click', () => showGame(currentSlide - 1));
document.querySelector('#nextLesson')?.addEventListener('click', () => showLesson(currentLesson + 1));
document.querySelector('#prevLesson')?.addEventListener('click', () => showLesson(currentLesson - 1));
setupAutoAdvance({ next: () => showGame(currentSlide + 1), container: gameCarousel });
setupAutoAdvance({ next: () => showLesson(currentLesson + 1), container: learningCarousel });
document.querySelectorAll('.site-nav a[href$="recursos.html"]').forEach((link) => { link.textContent = 'Consejos'; });
const socialUrls = ['https://www.instagram.com/', 'https://www.youtube.com/', 'https://www.tiktok.com/', 'https://www.facebook.com/'];
document.querySelectorAll('.social-links a').forEach((link, index) => { if (socialUrls[index]) { link.href = socialUrls[index]; link.target = '_blank'; link.rel = 'noopener'; } });

const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#siteNav');
menuToggle?.addEventListener('click', () => { const open = siteNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { siteNav.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false'); }));

const navLinks = [...document.querySelectorAll('.site-nav a:not(.nav-cta)')];
const sections = navLinks.map((link) => link.getAttribute('href').startsWith('#') ? document.querySelector(link.getAttribute('href')) : null).filter(Boolean);
navLinks.forEach((link) => { if (link.pathname === window.location.pathname) link.classList.add('active'); });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); } }), { rootMargin: '-35% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}
