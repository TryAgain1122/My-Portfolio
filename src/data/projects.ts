export interface Project {
  slug: string;
  title: string;
  desc: string;
  fullDesc: string;
  tech: string[];
  gradient: string;
  delay: string;
  github?: string;
  live?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "staycation",
    title: "Staycation",
    desc: "A full-stack hotel management system with role-based access for CSR, Owners, Partners, and Cleaners. Features comprehensive booking management and multi-role dashboards.",
    fullDesc: "Staycation is an advanced hotel management platform designed for efficient property management with a multi-role architecture. The system supports four distinct user roles: Customer Service Representatives (CSR) for handling guest inquiries and bookings, Property Owners for managing their listings, Partners for business collaborations, and Cleaners for housekeeping task management. Each role has a dedicated dashboard with specific functionalities tailored to their responsibilities.",
    tech: ["Next.js", "Node.js", "Redux", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-teal-600 via-cyan-600 to-blue-600",
    delay: "0s",
    github: "https://github.com/StaycationWebsite/Staycation",
    live: "https://www.staycationhavenph.com",
    features: [
      "Multi-role authentication system (CSR, Owners, Partners, Cleaners)",
      "Role-specific dashboards and functionalities",
      "Property listing and management for owners",
      "Booking management system for CSR",
      "Task assignment for cleaning staff",
      "Partner collaboration portal",
      "Real-time notifications",
      "Comprehensive admin controls"
    ]
  },
  {
    slug: "urban-deca-tower",
    title: "Urban Deca Tower",
    desc: "A hotel management system with payment integration, authentication via NextAuth, room booking and cancellation features, and an admin panel for managing users and bookings.",
    fullDesc: "Urban Deca Tower is a comprehensive hotel management system designed to streamline the booking process for both guests and administrators. The system features secure payment integration, user authentication powered by NextAuth, and a robust admin panel for managing reservations, users, and room availability.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redux"],
    gradient: "from-purple-600 via-pink-600 to-red-600",
    delay: "0s",
    github: "https://github.com/TryAgain1122/URBAN-DECA-WEB-APP",
    live: "https://hotel-deca-website-git-main-tryagain1122s-projects.vercel.app/",
    features: [
      "Secure user authentication with NextAuth",
      "Room booking and cancellation system",
      "Payment integration for seamless transactions",
      "Admin panel for managing users and bookings",
      "Real-time room availability tracking",
      "Responsive design for all devices"
    ]
  },
  {
    slug: "MDB - Movia App",
    title: "MDB - Movie App",
    desc: "Movieland is built with React.js, and the movie listings are fetched from an API.",
    fullDesc: "MovieLand is a dynamic movie discovery application that allows users to browse and search for movies. The app fetches real-time data from a movie API, providing users with up-to-date information about films including ratings, descriptions, and release dates.",
    tech: ["React.js", "Tailwind CSS"],
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    delay: "0.1s",
    github: "https://github.com/TryAgain1122/MDB-Web-App",
    live: "https://mdb-web-app.vercel.app",
    features: [
      "Real-time movie search functionality",
      "API integration for movie data",
      "Responsive grid layout for movie cards",
      "Detailed movie information display",
      "Clean and modern UI design"
    ]
  },
  {
    slug: "guessing my number",
    title: "Guessing my number",
    desc: "A simple web-based guessing game built using HTML, CSS, and JavaScript.",
    fullDesc: "A fun and interactive guessing game that challenges users to guess a randomly generated number. Built with vanilla HTML, CSS, and JavaScript, this project demonstrates fundamental web development concepts including DOM manipulation and event handling.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    delay: "0.2s",
    github: "https://github.com/TryAgain1122/guess-my-number",
    live: "https://guess-my-number-beryl-six.vercel.app",
    features: [
      "Random number generation",
      "User input validation",
      "Score tracking system",
      "Visual feedback for guesses",
      "Restart game functionality"
    ]
  },
  {
    slug: "react-meals",
    title: "React Meals",
    desc: "Static API food ordering application built with ReactJS, featuring a cart system using Context API and useReducer.",
    fullDesc: "React Meals is a food ordering application that simulates a restaurant ordering system. Users can browse a menu, add items to their cart, and manage their orders. The app showcases advanced React patterns including Context API for state management and useReducer for complex state logic.",
    tech: ["React", "CSS"],
    gradient: "from-orange-600 via-red-600 to-pink-600",
    delay: "0.3s",
    github: "https://github.com/TryAgain1122/food-ordering-app",
    live: "https://food-ordering-app-lake.vercel.app/",
    features: [
      "Dynamic menu display",
      "Shopping cart functionality",
      "Context API for global state",
      "useReducer for cart management",
      "Order summary and checkout",
      "Quantity adjustment for items"
    ]
  },
  {
    slug: "le-sserafim-fan-page",
    title: "Le Sserafim Fan Page",
    desc: "My plan is to create a fan page dedicated to introducing them, showcasing their work, and sharing updates. This project also serves as a way for me to practice and enhance my frontend development skills, experiment with new design ideas, and improve my proficiency with modern web technologies.",
    fullDesc: "A dedicated fan page for the K-pop group Le Sserafim, featuring member profiles, discography, and latest updates. This project was created to practice modern frontend development techniques while celebrating one of my favorite music groups.",
    tech: ["React.js", "Typescript", "Tailwind CSS"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    delay: "0.4s",
    github: "https://github.com/TryAgain1122/LE-SSERAFIM-FAN-PAGE",
    live: "https://le-sserafim-fan-page.vercel.app",
    features: [
      "Member profile showcases",
      "Discography section",
      "News and updates feed",
      "Responsive gallery layout",
      "Modern animations and transitions",
      "TypeScript for type safety"
    ]
  },
  {
    slug: "aespa-karina-landing-page",
    title: "AESPA – Karina Landing Page",
    desc: "Fan-made landing page showcasing Karina from AESPA. Built to practice frontend design and interactivity using React and TailwindCSS.",
    fullDesc: "A visually stunning landing page dedicated to Karina from AESPA. This project focuses on creating an engaging user experience with modern design principles, smooth animations, and responsive layouts.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    gradient: "from-pink-600 via-purple-600 to-red-600",
    delay: "0.45s",
    github: "https://github.com/TryAgain1122/Karina-landing-page-",
    live: "https://aespa-world.vercel.app",
    features: [
      "Hero section with parallax effects",
      "Smooth scroll animations",
      "Image gallery with lightbox",
      "Social media integration",
      "Fully responsive design"
    ]
  },
  {
    slug: "couple-monthsary-page",
    title: "Couple/Monthsary Design Page",
    desc: "Front-end design project showcasing an anniversary/monthsary concept for couples, built with HTML, CSS, and JavaScript.",
    fullDesc: "A heartfelt web page designed to celebrate special moments between couples. Features romantic design elements, photo galleries, and interactive components perfect for anniversaries and monthsaries.",
    tech: ["HTML", "CSS", "JavaScript"],
    gradient: "from-rose-600 via-pink-600 to-purple-600",
    delay: "0.46s",
    github: "https://github.com/TryAgain1122/For-Couple-web-page",
    live: "",
    features: [
      "Romantic theme and design",
      "Photo memory gallery",
      "Countdown timer for special dates",
      "Love letter section",
      "Background music integration",
      "Animated heart effects"
    ]
  },
  {
    slug: "social-media-app",
    title: "Social Media App",
    desc: "A full-stack social media platform with user profiles, posts, likes, comments, and real-time chat functionality.",
    fullDesc: "A comprehensive social media application that connects people through posts, interactions, and real-time messaging. Users can create profiles, share posts, like and comment on content, follow other users, and chat with friends in real-time. Built with modern technologies for a seamless social experience.",
    tech: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    gradient: "from-yellow-600 via-orange-600 to-red-600",
    delay: "0.5s",
    github: "https://github.com/TryAgain1122/Softwave",
    live: "",
    features: [
      "User authentication and profiles",
      "Create, edit, and delete posts",
      "Like and comment on posts",
      "Follow/unfollow other users",
      "Real-time chat messaging",
      "News feed with posts from followed users",
      "Responsive design for all devices"
    ]
  },
];
