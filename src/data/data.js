export const profile = {
  name: "Tejesh Reddy J",
  role: "Full Stack Developer",
  tagline:
    "I build fast, real-time web and mobile products — from crypto dashboards to live chat.",
  email: "tejeshvit007@gmail.com",
  phone: "+91 7981658453",
  address: "India",
  bio: `I'm a full stack developer who likes shipping things that update in real time — trading
  dashboards, live chat, attendance systems. My comfort zone is the React ecosystem end to end:
  React and React Native on the front, Node and Express behind it, sockets in between. I care about
  interfaces that stay fast and predictable even when the data underneath keeps changing.`,
  resumeFile: "/resume.pdf",
};

export const socials = [
  { name: "Email", url: "mailto:tejeshvit007@gmail.com", icon: "mail" },
  { name: "GitHub", url: "https://github.com/tejesh856", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tejesh-reddy-b3926a296/",
    icon: "linkedin",
  },
];

export const experience = [
  {
    id: "qoto",
    company: "QOTO Technologies",
    role: "Software Engineer Intern",
    period: "Dec 2024 — Feb 2025",
    points: [
      "Built a School Management System covering CRUD-based classroom, employee and department administration.",
      "Shipped an Attendance System, Employee Profiles and a Classroom List to speed up daily admin work.",
      "Added a Leave Application System, Calendar View, Employee Timetable and a Course Module for study materials, exams and assignments.",
      "Rolled out Payroll Management, an Exam Marks Upload System and an Academic Calendar for events and holidays.",
    ],
    stack: ["React Native", "Expo", "Context API", "TypeScript"],
  },
  {
    id: "infosys",
    company: "Infosys",
    role: "Full Stack Developer Intern",
    period: "Mar 2024 — Jun 2024",
    points: [
      "Built a crypto trading platform with secure authentication and real-time price tracking.",
      "Designed a dashboard surfacing 50 trending cryptocurrencies with live search and buy/sell flows.",
      "Implemented profile management, transaction history, portfolio tracking and a leaderboard.",
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];

export const education = [
  {
    id: "amrita",
    school: "Amrita Vishwa Vidyapeetham",
    degree: "MCA — Master of Computer Application",
    period: "2026 — 2028",
    detail: "CGPA: in progress",
  },
  {
    id: "manipal",
    school: "Manipal University",
    degree: "BCA — Bachelor of Computer Application",
    period: "2022 — 2025",
    detail: "CGPA: 8.1",
  },
];

export const skillGroups = [
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "react" },
      { name: "React Native", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Redux", icon: "redux" },
      { name: "Zustand", icon: "zustand" },
      { name: "Node.js", icon: "node" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Material UI", icon: "mui" },
      { name: "WebSocket", icon: "socket" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "GitHub", icon: "github" },
      { name: "Visual Studio", icon: "vscode" },
      { name: "NPM", icon: "npm" },
    ],
  },
];

export const projects = [
  {
    id: "crypto",
    title: "Virtual Crypto Stock Market App",
    summary:
      "OTP-secured crypto trading simulator with live prices and a profit leaderboard.",
    description:
      "A crypto trading platform with secure OTP-based authentication, letting users buy and sell " +
      "crypto against real-time tracking of 50 trending coins. A portfolio view tracks profit, loss " +
      "and balance, and a leaderboard ranks the top 10 users by profit to add a competitive edge.",
    image: "crypto",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    link: "#",
    github: "#",
  },
  {
    id: "eatfood",
    title: "EatFood",
    summary:
      "A food ordering app with a live cart, order history and a mobile-first UI.",
    description:
      "A food ordering system with a dynamic catalog, real-time cart management, secure authentication, " +
      "order history and a fast search bar for finding dishes. The UI is responsive and mobile-friendly, " +
      "built to stay usable across devices without friction.",
    image: "food",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://eat-food-frontend.vercel.app/",
    github: "https://github.com/tejesh856/EatFood_Frontend",
  },
  {
    id: "nexchat",
    title: "NexChat",
    summary:
      "A real-time chat app with JWT auth, image sharing and live presence.",
    description:
      "A real-time chat application with secure JWT authentication, text and image sharing, and online " +
      "user tracking powered by Socket.io. Performance is tuned with lazy loading and efficient socket " +
      "connections, Zustand handles state, and the UI supports theme switching with Tailwind CSS and DaisyUI.",
    image: "chat",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Zustand",
    ],
    link: "https://nexchat-realtime-chat-app.onrender.com",
    github: "https://github.com/tejesh856/NexChat---RealTime-Chat-App",
  },
  {
    id: "clock",
    title: "Clock",
    summary:
      "Clock is a simple web app that displays synchronized analog and digital clocks showing real-time movement.",
    description:
      "Clock is a lightweight web app that displays real-time analog and digital clocks side by side. The analog face features smoothly moving hour, minute, and second hands with numbered markers from 1 to 12, while the digital display shows the exact time in a clean numeric format. Built with HTML, CSS, and JavaScript, the project demonstrates precise time-based animations and DOM updates, offering a simple yet visually engaging way to track time.",
    image: "clock",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    id: "studymateai",
    title: "StudyMate AI",
    summary:
      "An AI-powered platform for personalized course and quiz generation to help students learn smarter.",
    description:
      "StudyMate AI is an AI-powered tutoring platform that helps students learn any subject through personalized, auto-generated courses. Users simply enter a topic, difficulty level, and chapter count to receive a structured learning path, complete with optional video content. The platform also generates custom quizzes — including a built-in coding interface for programming topics — and lets students track progress through a personalized dashboard and detailed answer reviews.",
    image: "study",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Langchain",
      "Hugging Face",
      "Tailwind CSS",
      "redis",
      "Web Sockets",
    ],
    link: "https://studymate-frontend-ilk0.onrender.com",
    github: "https://github.com/tejesh856/StudyMate-AI",
  },
  {
    id: "pdfgene",
    title: "Certificate Generator",
    summary:
      "A student certificate generator that creates PDFs, stores them in Google Drive, and saves certificate details in MongoDB.",
    description:
      "This project creates custom certificates for students using a backend API and React frontend. It validates input, generates a PDF certificate, uploads it to Drive, and stores the link with student data in MongoDB.",
    image: "certificate",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
      "Zustand",
    ],
    link: "https://nexchat-realtime-chat-app.onrender.com",
    github: "https://github.com/tejesh856/NexChat---RealTime-Chat-App",
  },
];
