# Portafolio - Proyectos de Arquitectura y Construcción

Una página web moderna y responsiva para mostrar proyectos de arquitectura y construcción con galerías de fotos, videos y formulario de contacto.

## Características

✨ **Galería de Proyectos** - Galería interactiva de fotos con modal expandible
🎥 **Videos** - Sección de videos integrados de YouTube
📋 **Formulario de Contacto** - Comunicación directa con los clientes
📱 **Diseño Responsivo** - Optimizado para todos los dispositivos
🎨 **Diseño Moderno** - Interfaz limpia y profesional

## Tecnologías Utilizadas

- **React 18** - Librería UI moderna
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultra rápido
- **CSS3** - Estilos modernos y responsivos

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx         - Encabezado con navegación
│   ├── Gallery.tsx        - Galería de fotos
│   ├── VideoShowcase.tsx  - Sección de videos
│   ├── Contact.tsx        - Formulario de contacto
│   └── Footer.tsx         - Pie de página
├── styles/
│   ├── index.css          - Estilos globales
│   ├── App.css            - Estilos de la app
│   ├── Header.css         - Estilos del encabezado
│   ├── Gallery.css        - Estilos de galería
│   ├── VideoShowcase.css  - Estilos de videos
│   ├── Contact.css        - Estilos de contacto
│   └── Footer.css         - Estilos del pie
├── data/
│   └── projects.ts        - Datos de proyectos y videos
├── App.tsx                - Componente raíz
└── main.tsx               - Punto de entrada
```

## Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm run dev
```

3. **Construir para producción:**
```bash
npm run build
```

4. **Vista previa de producción:**
```bash
npm run preview
```

## Cómo Personalizar

### Agregar Proyectos
Edita [src/data/projects.ts](src/data/projects.ts) y añade nuevos proyectos al array `projects`:

```typescript
{
  id: 7,
  title: "Tu Proyecto",
  description: "Descripción del proyecto",
  image: "URL de la imagen"
}
```

### Agregar Videos
Edita [src/data/projects.ts](src/data/projects.ts) y añade nuevos videos al array `videos`:

```typescript
{
  id: 4,
  title: "Tu Video",
  description: "Descripción del video",
  embedUrl: "https://www.youtube.com/embed/VIDEO_ID"
}
```

### Modificar Información de Contacto
Edita el componente [src/components/Contact.tsx](src/components/Contact.tsx) para actualizar:
- Dirección
- Teléfono
- Email
- Comportamiento del formulario

### Cambiar Colores
Edita las variables CSS en [src/styles/index.css](src/styles/index.css):
```css
:root {
  --primary-color: #2c3e50;  /* Color principal */
  --accent-color: #e74c3c;   /* Color de acentos */
  --light-bg: #ecf0f1;       /* Fondo claro */
  --text-color: #333;        /* Color de texto */
}
```

## Scripts Disponibles

| Script | Descripción |
|--------|------------|
| `npm run dev` | Inicia servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Crea build optimizado para producción |
| `npm run preview` | Vista previa local del build de producción |
| `npm run lint` | Verifica código con ESLint |

## Próximas Mejoras Sugeridas

- [ ] Integración con backend para envío de formularios
- [ ] Galería con filtros por categoría
- [ ] Sistema de paginación
- [ ] Animaciones avanzadas
- [ ] SEO optimizado
- [ ] Modo oscuro
- [ ] Múltiples idiomas

## Requisitos

- Node.js 16+ 
- npm o yarn

## Licencia

© 2024 Arquitectura & Construcción HMK. Todos los derechos reservados.

## Contacto

Para preguntas o soporte, contacta a través del formulario en la web.
