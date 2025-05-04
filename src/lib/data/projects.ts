import { IProject } from "@/types";

export const projects: IProject[] = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Platform",
    description: "Modern e-commerce solution with microservices architecture",
    content: `Developed a scalable e-commerce platform featuring real-time inventory management, 
             payment gateway integration, and admin dashboard. Implemented using microservices 
             architecture for improved scalability and maintainability.`,
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Docker"],
    image: "/images/projects/ecommerce.jpg",
    slug: "e-commerce-platform",
    liveUrl: "https://example.com",
    backendUrl: "https://api.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    features: [
      "Real-time inventory updates",
      "JWT authentication",
      "Payment gateway integration",
      "Admin dashboard",
      "Product recommendation engine",
    ],
    techStack: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Social Media Platform",
    description: "A feature-rich social media platform for connecting users",
    content: `Built a social media platform with features like user profiles, real-time chat, 
             and post sharing. Integrated WebSocket for real-time updates and notifications.`,
    tags: ["React", "Express.js", "PostgreSQL", "Socket.IO", "AWS"],
    image: "/images/projects/social-media.jpg",
    slug: "social-media-platform",
    liveUrl: "https://example-social.com",
    githubUrl: "https://github.com/example/social-media",
    features: [
      "User authentication and profiles",
      "Real-time chat and notifications",
      "Post creation and sharing",
      "Follow and unfollow functionality",
      "Media uploads with AWS S3",
    ],
    techStack: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Socket.IO",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Kanban-style task management application",
    content: `Developed a task management app with drag-and-drop functionality, 
             user collaboration, and real-time updates. Designed for teams to manage projects efficiently.`,
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "PWA"],
    image: "/images/projects/task-manager.jpg",
    slug: "task-management-app",
    liveUrl: "https://example-task.com",
    githubUrl: "https://github.com/example/task-manager",
    features: [
      "Drag-and-drop task management",
      "Real-time collaboration",
      "Progress tracking",
      "Offline support with PWA",
      "Customizable boards and tasks",
    ],
    techStack: [
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "PWA",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Online Learning Platform",
    description: "A platform for hosting and managing online courses",
    content: `Created an online learning platform with features like video streaming, 
             quizzes, and progress tracking. Integrated payment gateways for course purchases.`,
    tags: ["Angular", "Node.js", "MySQL", "Stripe", "Cloudinary"],
    image: "/images/projects/online-learning.jpg",
    slug: "online-learning-platform",
    liveUrl: "https://example-learning.com",
    githubUrl: "https://github.com/example/online-learning",
    features: [
      "Video streaming and hosting",
      "Interactive quizzes and assignments",
      "Progress tracking for students",
      "Payment gateway integration",
      "Admin dashboard for course management",
    ],
    techStack: [
      {
        name: "Angular",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Stripe",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
      },
      {
        name: "Cloudinary",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A weather app with real-time data and forecasts",
    content: `Developed a weather app that provides real-time weather updates, 
             forecasts, and location-based weather data. Integrated APIs for accurate data.`,
    tags: ["React Native", "Expo", "OpenWeather API", "Redux"],
    image: "/images/projects/weather-app.jpg",
    slug: "weather-forecast-app",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/example/weather-app",
    features: [
      "Real-time weather updates",
      "7-day weather forecast",
      "Location-based weather data",
      "Interactive weather maps",
      "Dark mode support",
    ],
    techStack: [
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Expo",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
      },
      {
        name: "OpenWeather API",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg",
      },
      {
        name: "Redux",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
    ],
  },
];
