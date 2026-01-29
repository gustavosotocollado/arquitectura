export interface Project {
  id: number
  title: string
  description: string
  image: string
}

export interface Video {
  id: number
  title: string
  description: string
  embedUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Centro Comercial Moderno",
    description: "Complejo comercial con diseño contemporáneo",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Residencial de Lujo",
    description: "Desarrollo residencial de alta gama",
    image: "https://images.unsplash.com/photo-1512207736139-7e9e6b2c9e31?w=500&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Oficinas Corporativas",
    description: "Edificio de oficinas con tecnología verde",
    image: "https://images.unsplash.com/photo-1486518146859-8ad7db5d6c09?w=500&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Centro Educativo",
    description: "Institución educativa con espacios modernos",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Restaurante Boutique",
    description: "Local gastronómico de diseño arquitectónico",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Complejo Deportivo",
    description: "Instalaciones deportivas de clase mundial",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=400&fit=crop"
  }
]

export const videos: Video[] = [
  {
    id: 1,
    title: "Tour Virtual - Centro Comercial",
    description: "Recorrido completo por las instalaciones del centro comercial moderno",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Construcción Residencial",
    description: "Timelapse del proceso constructivo del complejo residencial",
    embedUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
  {
    id: 3,
    title: "Diseño de Interiores",
    description: "Presentación del diseño de interiores innovador",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
  }
]
