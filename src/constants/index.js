import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    ztm,
    threejs,
    dashboard,
    blogai,
    chatapp,
    odin, 
    nextjs,
    mysql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Next Js",
      icon: nextjs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "The Complete Web Developer in 2023: Zero to Mastery",
      company_name: "Zero to Mastery",
      icon: ztm,
      iconBg: "#ffffff",
      date: "December 2022 - February  2023",
      points: [
        "Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer",
        "Use NodeJS to write server-side JavaScript",
        "Use Express, SQL and PostgreSQL to create fullstack applications that scale",
        "Learned React + Redux to build rich front end applications",
      ],
    },
    {
      title: "Three.js and TypeScript",
      company_name: "Udemy: Sean Bradley",
      icon: threejs,
      iconBg: "#ffffff",
      date: "February 2023 - February 2023",
      points: 
      [
        "Learned the Basics of Threejs with many demonstrations and example code",
        "Learned about Webpack, NodeJS, Express and serving ES6 modules to the browser clients.",
        "Learned about Object3D base class, and the Rotation, Position, Scale, Visibility and Matrix properties",
        "Learned about the model loaders such as the OBJ, MTL, GLTF, DRACO and more",
      ],
    },
    {
      title: "The Odin Project",
      company_name: "https://www.theodinproject.com",
      icon: odin,
      iconBg: "#ffffff",
      date: "April 2023 - May 2023",
      points: 
      [
        "HTML and CSS fundamentals",
        "Responsive web design with CSS frameworks (e.g., Bootstrap, Foundation)",
        "Client-side web development with React",
        "Server-side web development with Node.js and Express.js",
        "Databases and data modeling with SQL and MongoDB",
        "Authentication and security in web applications",
        "Git and version control for collaborative coding",
        "Deployment and hosting of web applications on cloud platforms (e.g., Heroku, Vercel)"
      ],
    },
   
  ];
  const projects = [
    {
      name: "Finance Dashboard App",
      description:
        "The Finance Dashboard App is a web application created by Siminder. It provides users with a comprehensive and intuitive platform to manage their personal finances effectively. With this app, users can track their income, expenses, and savings, gain insights through visualizations and reports, and set financial goals.",
      tags: [
        {
          name: "Vite",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/Siminder/Finance-Dashboard-App",
    },
    {
      name: "Blog-Ai-App",
      description:
        "The Blog AI App, is an innovative web application that utilizes artificial intelligence to enhance the blogging experience. This app leverages cutting-edge technologies to provide bloggers with advanced features and capabilities.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blogai,
      source_code_link: "https://github.com/Siminder/blog-ai-app",
    },
    {
      name: "ChatApp",
      description:
        "The ChatApp, developed by Siminder, is an impressive real-time chat application that enables users to communicate seamlessly with each other. This application leverages the power of web technologies to provide a secure and interactive chat platform",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Redis",
          color: "green-text-gradient",
        },
        {
          name: "Next-Auth",
          color: "pink-text-gradient",
        },
        {
          name: "Next-Auth",
          color: "blue-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Siminder/ChatApp",
    },
  ];
  
  export { services, technologies, experiences, projects };