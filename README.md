# Cuenca Cimarrona
Sitio web académico de UABC Tijuana sobre El Niño, prevención ante lluvias y aprendizaje mediante juegos. La interfaz está pensada para varias edades: utiliza textos breves, ilustraciones, carruseles y recorridos sencillos.

## Estado actual
- Sitio estático: no usa base de datos, inicio de sesión ni dependencias externas.
- La información, los contadores y las participaciones son demostrativos por ahora.
- Las redes sociales del pie de página son espacios reservados hasta tener las cuentas oficiales.

## Flujo del sitio

```text
Inicio
├── Juegos
│   └── Seleccionar dinámica → detalle dentro de la misma página
├── Aprende
│   └── Seleccionar tema → pages/aprende-detalle.html?tema=...
└── Consejos
    └── Leer consejo → sección correspondiente de Consejos
```

### Recorridos principales

1. En `index.html`, la persona conoce el proyecto y encuentra tres carruseles: Juegos, Aprende y Consejos.
2. “Ver más en Juegos” lleva a `pages/juegos.html`. Los botones de cada tarjeta muestran el detalle sin regresar al inicio.
3. “Ver más en Aprende” lleva a `pages/aprende.html`. Cada tema tiene un enlace de información que abre una subpágina reutilizable; el contenido cambia con el parámetro `tema`.
4. “Ver más en Consejos” lleva a `pages/recursos.html`. Las tarjetas rápidas saltan a las recomendaciones detalladas de la misma página.
5. El encabezado permite cambiar de sección y el pie de página mantiene la identidad del proyecto y los iconos de redes.

## Estructura

```text
CuentaCimarrona/
├── index.html                    # Inicio y tres carruseles
├── css/
│   └── styles.css                # Estilos globales, responsive y componentes
├── js/
│   └── app.js                    # Encabezado, pie, carruseles y detalles estáticos
├── assets/images/
│   ├── logo_uabc.png
│   ├── uabc-mark.svg
│   ├── hero-el-nino.png
│   ├── game-rally.png
│   ├── game-decisions.png
│   └── game-backpack.png
└── pages/
    ├── juegos.html               # Catálogo y detalles de dinámicas
    ├── aprende.html              # Carrusel de aprendizaje
    ├── aprende-detalle.html      # Plantilla de detalle para cada tema
    └── recursos.html             # Consejos rápidos y checklist
```

## Componentes y comportamiento

### Encabezado y pie de página

`js/app.js` genera un encabezado y un pie consistentes en todas las páginas. También identifica la página actual, marca el enlace activo y habilita el menú móvil. Si se modifica la navegación, se debe actualizar principalmente `navItems` en ese archivo.

### Carruseles

- El carrusel de Juegos usa `games` y los controles `prevGame`/`nextGame`.
- El carrusel de Aprende usa `lessons` y los controles `prevLesson`/`nextLesson`.
- Los carruseles del inicio se generan con `setupHomeCarousel()` para evitar duplicar lógica.
- El carrusel de Consejos agrupa dos tarjetas por vista para aprovechar mejor el espacio; actualmente contiene cuatro consejos.
- Los carruseles avanzan automáticamente cada cinco segundos y se pausan al pasar el cursor o enfocarlos con el teclado.
- Cada carrusel muestra un indicador de posición y funciona sin servidor.

### Detalles

- Los detalles de Juegos se muestran en `#gameDetail` mediante `setupGameLibrary()`.
- Los detalles de Aprende se cargan en `pages/aprende-detalle.html` mediante `setupLessonDetail()`.
- Para agregar un nuevo tema de Aprende, agregue su `slug` a `lessons` y su contenido a `content` dentro de `setupLessonDetail()`.

## Próximos pasos

- Reemplazar los contadores demostrativos por datos reales cuando exista una fuente definida.
- Cambiar los enlaces de redes por las cuentas oficiales.
- Integrar los juegos reales de los equipos cuando estén aprobados.
- Revisar el contenido preventivo con fuentes institucionales antes de publicar.
