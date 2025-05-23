import { IProject } from "@/types";

const techStackLogos = {
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  fontawesome: "https://static-00.iconduck.com/assets.00/font-awesome-icon-512x512-vwz08fde.png",
  reactJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  reactToastify:
    "https://i.ytimg.com/vi/nlCWRL0vQaU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAzzSwEy4jRu5yRvcLZOOrUBLDZZQ",
  reactIcon: "https://raw.githubusercontent.com/react-icons/react-icons/master/react-icons.svg",
  googleFont: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  json: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
  daisyUI: "https://img.daisyui.com/images/daisyui/mark-static.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  reactContextApi: "https://miro.medium.com/v2/resize:fit:800/1*fwbmNnQsCnvDpZO54H0jsw.png",
  reactRouter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
  recharts:
    "https://blog.openreplay.com/images/charting-and-graphing-in-react-with-recharts/images/hero.png",
  headlesUI: "https://logowik.com/content/uploads/images/headless-ui8428.logowik.com.webp",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  swiper: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swiper/swiper-original.svg",
  aos: "https://www.bypeople.com/wp-content/uploads/2017/03/css-animate-scroll.jpg",
  typeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  nodeJs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  expressJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  mongoose:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg",
  jwt: "https://jwt.io/img/pic_logo.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
  nextJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  shadcnUi: "https://refine.ams3.cdn.digitaloceanspaces.com/blog/2024-03-19-ts-shadcn/social.png",
};

export const projects: IProject[] = [
  {
    id: 1,
    title: "Donation Platform",
    description:
      "A user-friendly platform for making donations, tracking transactions, and exploring blog content.",
    content:
      "Developed a responsive donation platform with interactive cards, transaction history, and DOM-focused blog. Features real-time balance updates, input validation, and a clean UI powered by TailwindCSS.",
    tags: ["JavaScript", "TailwindCSS", "DaisyUI", "DOM Manipulation", "Responsive Design"],
    image: "https://i.ibb.co/1f0s6P9j/Screenshot-2025-05-24-012946.png",
    slug: "donation-platform",
    liveUrl: "https://humayun1318.github.io/donation-platform/",
    githubUrl: "https://github.com/Humayun1318/donation-platform",
    features: [
      "Sticky navbar with balance display",
      "Interactive donation cards with amount input",
      "Transaction history tracking",
      "Input validation (balance checks, numeric-only)",
      "Success modal for donations",
      "Active state toggling for sections",
      "Responsive design (mobile/desktop)",
      "Blog page with DOM FAQs",
    ],
    techStack: [
      {
        name: "HTML",
        icon: techStackLogos.html,
      },
      {
        name: "CSS",
        icon: techStackLogos.css,
      },
      {
        name: "JavaScript",
        icon: techStackLogos.javascript,
      },
      {
        name: "TailwindCSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "daisyUI",
        icon: techStackLogos.daisyUI,
      },
    ],
  },
  {
    id: 2,
    title: "Pet Adoption Website",
    description:
      "A responsive web app for browsing and adopting pets with real-time data from external APIs.",
    content: `Developed a pet adoption platform with dynamic pet listings, category filters, like functionality, 
              and adoption features. Uses ES6 features like async/await and Tailwind CSS for a seamless experience.`,
    tags: ["API Integration", "TailwindCSS", "ES6", "Responsive Design", "Pet Adoption"],
    image: "https://i.ibb.co/vp3h7KL/Screenshot-2025-05-24-015251.png",
    slug: "pet-adoption-website",
    liveUrl: "https://humayun1318.github.io/pet-adoption-web/",
    githubUrl: "https://github.com/Humayun1318/pet-adoption-web",
    features: [
      "Dynamic pet listings (breed, gender, price, etc.)",
      "Category-based pet filtering",
      "Like/Adopt buttons with interactive UI",
      "Responsive design (mobile & desktop)",
      "API-driven data fetching",
    ],
    techStack: [
      {
        name: "HTML5",
        icon: techStackLogos.html,
      },
      {
        name: "CSS3",
        icon: techStackLogos.css,
      },
      {
        name: "JavaScript",
        icon: techStackLogos.javascript,
      },
      {
        name: "TailwindCSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "Font Awesome",
        icon: techStackLogos.fontawesome,
      },
      {
        name: "API Integration",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg",
      },
    ],
  },
  {
    id: 3,
    title: "DREAM 11",
    description:
      "A React-based cricket team builder with dynamic player selection and coin management.",
    content: `Developed an interactive cricket team builder where users select players within a coin limit. Features include real-time validation, responsive UI (Figma-based design), and toast notifications. The app prevents duplicate selections, enforces team size limits, and dynamically manages coins. Built with React + Tailwind CSS for seamless styling and React-Toastify for user feedback.`,
    tags: [
      "React",
      "TailwindCSS",
      "JSON",
      "React Icons",
      "React-Toastify",
      "Figma Design",
      "Team Builder",
      "Validation",
    ],
    image: "https://i.ibb.co/XZxPvqbZ/Screenshot-2025-05-24-021538.png",
    slug: "dream-11",
    liveUrl: "https://dream11-humayun1318.netlify.app/",
    githubUrl: "https://github.com/Humayun1318/dream-eleven",
    features: [
      "Coin claim button (required before purchases)",
      "3-column responsive player grid",
      "Real-time selected player list (max 6)",
      "Coin system with auto-deduction on purchases",
      "Duplicate player prevention",
      "React-Toastify success/error notifications",
      "Fully responsive Navbar/Banner/Footer",
      "Player removal functionality",
      "Figma-based UI implementation",
      "Google Fonts integration",
      "JSON-driven player data",
    ],
    techStack: [
      {
        name: "React.js",
        icon: techStackLogos.reactJs,
      },
      {
        name: "Tailwind CSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "React-Toastify",
        icon: techStackLogos.reactToastify,
      },
      {
        name: "React Icons",
        icon: techStackLogos.reactIcon,
      },
      {
        name: "Google Fonts",
        icon: techStackLogos.googleFont,
      },
      {
        name: "Figma",
        icon: techStackLogos.figma,
      },
      {
        name: "JSON",
        icon: techStackLogos.json,
      },
    ],
  },
  {
    id: 4,
    title: "Gadget Heaven",
    description:
      "A React-based e-commerce platform for discovering and purchasing cutting-edge gadgets.",
    content:
      "Developed a responsive gadget marketplace with React and Vite. The platform includes dynamic product filtering, a smart cart system with real-time price sorting and total calculation, and wishlist integration that prevents duplicate items. Features an interactive dashboard with Recharts data visualization, toast notifications for user feedback, and a purchase confirmation modal that works without page reload. The UI is built with Tailwind CSS and DaisyUI for responsive design across all devices. Demonstrates advanced React patterns like Context API for state management and React Router for navigation.",
    tags: [
      "React",
      "Vite",
      "E-commerce",
      "Dashboard Analytics",
      "Context API",
      "Recharts",
      "Tailwind CSS",
      "Responsive Design",
      "Toast Notifications",
      "Product Filtering",
    ],
    image: "https://i.ibb.co/21s9JytB/Screenshot-2025-05-24-024809.png",
    slug: "gadget-heaven",
    liveUrl: "https://gadgetheaven-humayun1318.netlify.app/",
    githubUrl: "https://github.com/Humayun1318/gadget-heaven",
    features: [
      "Homepage with dynamic category filtering",
      "Cart/Wishlist with duplicate prevention",
      "Product details page with add-to-cart/wishlist",
      "Dashboard with price vs. product chart (Recharts)",
      "Sort cart items by price (descending)",
      "Toast notifications for user actions",
      "Purchase confirmation modal",
      "404 page for invalid routes",
    ],
    techStack: [
      {
        name: "React",
        icon: techStackLogos.reactJs,
      },
      {
        name: "Vite",
        icon: techStackLogos.vite,
      },
      {
        name: "Tailwind CSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "DaisyUI",
        icon: techStackLogos.daisyUI,
      },
      {
        name: "Context API",
        icon: techStackLogos.reactContextApi,
      },
      {
        name: "React Router",
        icon: techStackLogos.reactRouter,
      },
      {
        name: "Recharts",
        icon: techStackLogos.recharts,
      },
      {
        name: "React Icons",
        icon: techStackLogos.reactIcon,
      },
      {
        name: "React Toastify",
        icon: techStackLogos.reactToastify,
      },
      {
        name: "Headless UI",
        icon: techStackLogos.headlesUI,
      },
    ],
  },
  {
    id: 5,
    title: "FutureEdge",
    description:
      "A modern career counseling platform with secure authentication and personalized guidance features.",
    content:
      "Developed a responsive career counseling platform using React and Firebase. The system includes multi-factor authentication (email/password and Google), protected service pages with comment functionality, and dynamic user profiles. Implemented password recovery, session persistence, and secure route protection. Features AOS scroll animations, toast notifications, and responsive design for all devices. Uses Firebase and implements strict security measures including environment variables and password validation.",
    tags: [
      "React",
      "Firebase",
      "Authentication",
      "Career Counseling",
      "Responsive Design",
      "Protected Routes",
      "AOS Animations",
      "Toast Notifications",
      "Password Recovery",
    ],
    image: "https://i.ibb.co/CKXLhC3V/Screenshot-2025-05-24-030653.png",
    slug: "futureedge-career-platform",
    liveUrl: "https://futuredge-784af.web.app/",
    githubUrl: "https://github.com/Humayun1318/FuturEdge",
    features: [
      "Email/Password + Google and Github authentication",
      "Protected service details with comments",
      "Editable user profiles",
      "Password recovery via email",
      "Persistent login sessions",
      "Responsive mobile/desktop design",
      "Scroll animations with AOS",
      "Dynamic page titles",
      "Toast notification system",
      "Custom 404 error page",
      "Loading states for async operations",
    ],
    techStack: [
      {
        name: "React",
        icon: techStackLogos.reactJs,
      },
      {
        name: "Firebase",
        icon: techStackLogos.firebase,
      },
      {
        name: "React Router",
        icon: techStackLogos.reactRouter,
      },
      {
        name: "Tailwind CSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "DaisyUI",
        icon: techStackLogos.daisyUI,
      },
      {
        name: "Swiper.js",
        icon: techStackLogos.swiper,
      },
      {
        name: "AOS",
        icon: techStackLogos.aos,
      },
    ],
  },
  {
    id: 6,
    title: "Papyrus",
    description:
      "A full-stack e-commerce platform for stationery products with admin dashboard and payment integration.",
    content:
      "Developed a TypeScript-based stationery marketplace with React frontend and Node.js/Express backend. Features include role-based access control (admin/user), product management, cart functionality, and ShurjoPay payment integration. Admins can manage products, orders, and users while customers can browse, purchase, and track orders. Built with MongoDB for data storage and implements secure authentication with JWT.",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "E-commerce",
      "Admin Dashboard",
      "Payment Gateway",
      "JWT Authentication",
      "Role-Based Access",
    ],
    image: "https://i.ibb.co/V4Gh88W/Screenshot-2025-05-24-032848.png",
    slug: "papyrus-stationery",
    liveUrl: "https://papyrus-client.vercel.app/",
    githubUrl: "https://github.com/Humayun1318/papyrus-stationery-e-commerce",
    liveApi: "https://papyrus-server-lovat.vercel.app/",
    backendUrl: "https://github.com/Humayun1318/papyrus-server.git",
    features: [
      "Admin product management (CRUD operations)",
      "User registration/login with JWT",
      "Shopping cart functionality",
      "Order status tracking (Pending/Processing/Shipped)",
      "ShurjoPay payment integration",
      "User profile management",
      "Admin user management (activate/deactivate)",
      "Product categorization system",
      "Order history tracking",
      "Responsive design for all devices",
    ],
    techStack: [
      {
        name: "TypeScript",
        icon: techStackLogos.typeScript,
      },
      {
        name: "React",
        icon: techStackLogos.reactJs,
      },
      {
        name: "Redux",
        icon: techStackLogos.redux,
      },
      {
        name: "Node.js",
        icon: techStackLogos.nodeJs,
      },
      {
        name: "Express",
        icon: techStackLogos.expressJs,
      },
      {
        name: "MongoDB",
        icon: techStackLogos.mongodb,
      },
      {
        name: "Mongoose",
        icon: techStackLogos.mongoose,
      },
      {
        name: "JWT",
        icon: techStackLogos.jwt,
      },
    ],
  },
  {
    id: 7,
    title: "Trendora",
    description:
      "A Next.js-based marketplace for second-hand goods with full transaction tracking and seller route in dashboard.",
    content:
      "Developed a comprehensive second-hand marketplace with Next.js 15 featuring buying/selling routes dashboards. Users can track purchase history, manage selling history, and perform CRUD operations on their listings. Includes custom authentication, real-time search/filters, and a responsive ShadCN UI. Sellers get dedicated routes in dashboard for product management while buyers can view complete transaction history.",
    tags: [
      "Next.js",
      "TypeScript",
      "ShadCN UI",
      "Tailwind CSS",
      "Purchase History",
      "Selling History",
      "CRUD Operations",
      "JWT Authentication",
      "Responsive Design",
      "framer-mototion",
    ],
    image: "https://i.ibb.co/4ZbNBQcX/Screenshot-2025-05-24-034636.png",
    slug: "trendora-marketplace",
    liveUrl: "https://trendora-black.vercel.app/",
    githubUrl: "https://github.com/Humayun1318/trendora",
    liveApi: "https://swap-nest-server-seven.vercel.app/",
    backendUrl: "https://github.com/Humayun1318/SwapNest-server",
    features: [
      "Purchase history tracking",
      "Selling history management",
      "dashboard with CRUD operations",
      "Product listing creation/editing",
      "Order status tracking",
      "Category-based navigation",
      "Custom authentication system",
      "Real-time search with filters",
      "Mobile-responsive design",
      "Secure JWT implementation",
    ],
    techStack: [
      {
        name: "Next.js",
        icon: techStackLogos.nextJs,
      },
      {
        name: "TypeScript",
        icon: techStackLogos.typeScript,
      },
      {
        name: "Tailwind CSS",
        icon: techStackLogos.tailwind,
      },
      {
        name: "ShadCN UI",
        icon: techStackLogos.shadcnUi,
      },
      {
        name: "JWT",
        icon: techStackLogos.jwt,
      },
      {
        name: "Node.Js",
        icon: techStackLogos.nodeJs,
      },
      {
        name: "Express.js",
        icon: techStackLogos.expressJs,
      },
      {
        name: "MongoDB",
        icon: techStackLogos.mongodb,
      },
      {
        name: "Mongoose",
        icon: techStackLogos.mongoose,
      },
    ],
  },
];
