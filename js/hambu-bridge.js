(function () {
  const currentPath = window.location.pathname.replaceAll('\\', '/');
  if (!(currentPath.endsWith('/') || currentPath.endsWith('/index.html'))) return;

  const ready = () => {
    const main = document.querySelector('#main-content');
    if (!main || main.dataset.hambuSectionsReady) return;
    main.dataset.hambuSectionsReady = 'true';

    const siteNav = document.querySelector('.site-nav');
    if (siteNav) {
      siteNav.innerHTML = '<a class="nav-link" href="/">Emergencias</a><a class="nav-link" href="/#hambu-juegos">Juegos</a><a class="nav-link" href="/#hambu-informacion">Información</a><a class="nav-link" href="/#hambu-consejos">Consejos</a>';
    }

    const preparationHeading = [...main.querySelectorAll('h2, h3')].find((element) => /prepárate antes de que llueva/i.test(element.textContent));
    preparationHeading?.closest('section')?.remove();

    const footer = document.querySelector('.footer');
    const visitsTag = footer?.querySelector('.visits-tag');
    footer?.classList.add('hambu-footer');
    if (footer) footer.innerHTML = `<div class="hambu-footer-inner"><div class="hambu-footer-brand"><img src="/assets/images/logo_uabc.png" alt="Escudo UABC"><span>Prevención, aprendizaje y comunidad.</span></div><div class="hambu-footer-social"><span>Redes sociales</span><div><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">◎</a><a href="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="YouTube">▶</a><a href="https://www.tiktok.com/" target="_blank" rel="noopener" aria-label="TikTok">♪</a><a href="https://www.facebook.com/" target="_blank" rel="noopener" aria-label="Facebook">f</a></div></div></div><div class="hambu-footer-bottom"><span>© 2026 Cuenca Cimnarrón · Proyecto académico UABC</span><span>Realizado por estudiantes.</span></div>`;

    const wrapper = document.createElement('div');
    wrapper.className = 'hambu-sections';
    wrapper.innerHTML = `
      <nav class="hambu-section-nav" aria-label="Secciones de Cuenca Cimnarrón">
        <a href="#hambu-juegos">Juegos</a><a href="#hambu-informacion">Información</a><a href="#hambu-consejos">Consejos</a>
      </nav>
      <section class="hambu-content-section" id="hambu-juegos" aria-labelledby="hambu-juegos-title">
        <div class="hambu-section-heading"><div><span class="hambu-kicker">APRENDA JUGANDO</span><h2 id="hambu-juegos-title">Juegos y dinámicas</h2><p class="hambu-section-intro">Participe en retos sobre rutas seguras, decisiones y mochila de emergencia.</p></div><a href="/juegos" class="hambu-link">Ver todos los juegos <span>↗</span></a></div>
        <div class="hambu-card-grid hambu-game-grid">
          <a class="hambu-card hambu-game-card" href="/juegos"><img src="/assets/images/game-rally.png" alt="Ruta ilustrada durante una tormenta"><span class="hambu-tag">RALLY · EQUIPOS</span><h3>Escape de la tormenta</h3><p>Resuelva retos sobre rutas seguras y decisiones ante la lluvia.</p><b>Conocer dinámica ↗</b></a>
          <a class="hambu-card hambu-game-card" href="/juegos"><img src="/assets/images/game-decisions.png" alt="Caminos ilustrados que representan decisiones"><span class="hambu-tag blue">DECISIONES · INTERACTIVO</span><h3>Cada decisión cuenta</h3><p>Observe cómo cambia el recorrido al elegir una opción.</p><b>Conocer dinámica ↗</b></a>
          <a class="hambu-card hambu-game-card" href="/juegos"><img src="/assets/images/game-backpack.png" alt="Mochila ilustrada con artículos de emergencia"><span class="hambu-tag green">RETO · 60 SEGUNDOS</span><h3>Arme su mochila</h3><p>Identifique los artículos indispensables para una emergencia.</p><b>Conocer dinámica ↗</b></a>
        </div>
      </section>
      <section class="hambu-content-section" id="hambu-informacion" aria-labelledby="hambu-informacion-title">
        <div class="hambu-section-heading"><div><span class="hambu-kicker">INFORMACIÓN PARA COMPRENDER</span><h2 id="hambu-informacion-title">El Niño, la familia y los riesgos</h2><p class="hambu-section-intro">Consulte información para comprender el fenómeno y prepararse en familia.</p></div><a href="/el-nino" class="hambu-link">Ver información <span>↗</span></a></div>
        <div class="hambu-card-grid hambu-info-grid"><a class="hambu-info-card tone-blue" href="/el-nino"><span class="hambu-info-icon">☼</span><strong>¿Qué es El Niño?</strong><p>Conozca el fenómeno y cómo puede modificar las lluvias de nuestra región.</p><b>Consultar información ↗</b></a><a class="hambu-info-card tone-yellow" href="/plan"><span class="hambu-info-icon">⌖</span><strong>Plan familiar</strong><p>Defina un punto de encuentro, una ruta segura y contactos importantes.</p><b>Ver plan familiar ↗</b></a><a class="hambu-info-card tone-green" href="https://gemelodigital.implantijuana.gob.mx/atlas-de-riesgo-tijuana-2024" target="_blank" rel="noopener"><span class="hambu-info-icon">!</span><strong>Riesgos de Tijuana</strong><p>Identifique zonas de riesgo y consulte el mapa oficial del municipio.</p><b>Abrir mapa ↗</b></a></div>
      </section>
      <section class="hambu-content-section" id="hambu-consejos" aria-labelledby="hambu-consejos-title">
        <div class="hambu-section-heading"><div><span class="hambu-kicker">PARA LLEVAR CONTIGO</span><h2 id="hambu-consejos-title">Consejos para actuar mejor</h2><p class="hambu-section-intro">Recomendaciones claras para antes, durante y después de la lluvia.</p></div><a href="/pages/recursos.html" class="hambu-link">Ver todos los consejos <span>↗</span></a></div>
        <div class="hambu-card-grid hambu-advice-grid"><a class="hambu-advice-card yellow" href="/pages/recursos.html"><span>☂</span><strong>Durante una tormenta</strong><p>Evite cruzar arroyos y siga información oficial.</p></a><a class="hambu-advice-card blue" href="/pages/recursos.html"><span>⌂</span><strong>Después de la lluvia</strong><p>Revise su entorno y reporte riesgos.</p></a><a class="hambu-advice-card green" href="/pages/recursos.html"><span>↗</span><strong>Comparta lo aprendido</strong><p>Ayude a que la prevención llegue a más personas.</p></a></div>
      </section>`;
    visitsTag?.remove();
    main.appendChild(wrapper);
    const socialIcons = ['<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1"></circle></svg>', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.2a2.6 2.6 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.6 2.6 0 0 0 3 8.2 27 27 0 0 0 2.6 12 27 27 0 0 0 3 15.8a2.6 2.6 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6 0 7.2-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-3.8 27 27 0 0 0-.4-3.8Z"></path><path d="m10 15 5-3-5-3v6Z" fill="currentColor" stroke="none"></path></svg>', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4c.3 2.2 1.6 3.5 4 3.7v3.1c-1.4 0-2.7-.4-4-1.1v5.7a5.6 5.6 0 1 1-4.8-5.5v3.1a2.5 2.5 0 1 0 1.7 2.4V4H15Z"></path></svg>', '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.4-.1c-2.4 0-4 1.5-4 4.1V10H8v3h2.4v8h3.1Z"></path></svg>'];
    document.querySelectorAll('.hambu-footer-social a').forEach((link, index) => { if (socialIcons[index]) link.innerHTML = socialIcons[index]; });
  };

  window.addEventListener('load', ready, { once: true });
  setTimeout(ready, 1200);
})();
