/* ptblog — personal developer blog data */
var SITE_DATA = {
  brand: 'ptblog',
  author: 'PT',
  hero: {
    greeting: "Hi, I'm PT 👋",
    intro: 'I document my learning in C#/.NET & WPF industrial applications, Go and Node.js backends, MySQL / Redis, OpenCV computer vision, and industrial protocols such as Modbus TCP — and showcase my software development projects here.',
    about: 'This is my personal, non-commercial technical blog and project portfolio. I use it to document my learning in C#/.NET, WPF, Go, Linux, OpenCV computer vision and industrial protocols, and to showcase my software development projects and research experiments.',
    stack: ['C# / .NET', 'WPF', 'Go', 'Java · Android', 'Vue / uni-app', 'Node.js', 'MySQL', 'Redis', 'Nginx', 'Kafka', 'OpenCV', 'Modbus TCP']
  },
  notes: [
    {
      id: 'n1',
      icon: '🖥️',
      title: '.NET & WPF Industrial Development',
      summary: 'MVVM architecture, the AntControl component library, Prism modularity and high-fidelity industrial HMI design.',
      link: '#projects'
    },
    {
      id: 'n2',
      icon: '🗄️',
      title: 'Backend & Databases',
      summary: 'MySQL 8.0 performance tuning, Redis caching, Nginx reverse proxy, Kafka message queues and Go / Gin microservices.',
      link: '#projects'
    },
    {
      id: 'n3',
      icon: '👁️',
      title: 'Computer Vision & Industrial Protocols',
      summary: 'OpenCV defect detection, Hikvision / DAHENG camera SDKs, Modbus TCP / RS485 and serial communication.',
      link: '#projects'
    },
    {
      id: 'n4',
      icon: '📱',
      title: 'Mobile & Frontend',
      summary: 'Android (Java) hardware SDK integration, Vue3 / uni-app multi-platform apps and ASP.NET MVC Razor pages.',
      link: '#projects'
    }
  ],
  projects: [
    {
      id: 'p1',
      title: 'Industrial HMI Host (.NET 8 + WPF + AntControl)',
      summary: 'MVVM + Ant Design style components, Modbus TCP / serial communication, 3D configuration visualization and alarm dashboard.',
      stack: ['C#', 'WPF', 'AntControl', 'Modbus TCP', 'SQLite'],
      status: 'maintaining'
    },
    {
      id: 'p2',
      title: 'Industrial Vision Inspection Host',
      summary: 'Hikvision / DAHENG camera SDK capture, image preprocessing, OpenCV defect detection and result reporting.',
      stack: ['C#', 'OpenCV', 'Hikvision SDK', 'DAHENG SDK'],
      status: 'maintaining'
    },
    {
      id: 'p3',
      title: 'Modbus TCP / RS485 Debug Tool',
      summary: 'A desktop client for reading / writing holding registers and coils, with frame analysis and packet capture.',
      stack: ['C#', 'WPF', 'Modbus', 'Serial'],
      status: 'developing'
    },
    {
      id: 'p4',
      title: 'TechShare Learning Platform',
      summary: 'Full-stack learning-resources platform: Node.js + MySQL backend, H5 / WeChat mini-program / Douyin mini-program clients and an admin console.',
      stack: ['Node.js', 'MySQL', 'H5', 'Mini Program'],
      status: 'open-source'
    },
    {
      id: 'p5',
      title: 'Go + Gin Microservice Scaffold',
      summary: 'Production-ready Go microservice template with JWT auth, structured logging, tracing and Docker orchestration.',
      stack: ['Go', 'Gin', 'JWT', 'Docker'],
      status: 'template'
    },
    {
      id: 'p6',
      title: 'Vue3 + Element Plus Admin Template',
      summary: 'RBAC permissions, dynamic routes, dark mode and multi-tab layout built with Vite.',
      stack: ['Vue3', 'Vite', 'Element Plus', 'Pinia'],
      status: 'template'
    }
  ]
};
