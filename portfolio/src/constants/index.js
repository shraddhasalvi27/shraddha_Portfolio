export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      title: 'HireSphere - Job Hunting Platform',
      desc:'Secure login and signup for students, recruiters, and admins with robust authentication. Students get a personalized dashboard to explore, apply for, and track job applications. A dedicated recruiter portal simplifies managing job postings and reviewing applications. Job listings come with advanced filters for an efficient search experience.',
      subdesc:
        'Built as a job portal platform using the MERN stack (MongoDB, Express, React, Node.js), Shadcn, and Tailwind CSS, HireSphere delivers a robust, secure, and user-friendly experience.',
      
      
      href:'https://hiresphere-xwm5.onrender.com',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',

        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'CilliBlog - Blog Website',
      desc: 'Cilliblog is an innovative blogging platform designed to provide a seamless and engaging experience for creators and readers alike. While not yet live with real users, it offers powerful features for writing, managing, and exploring blogs, ensuring a user-friendly and scalable foundation for future growth.',
      subdesc:
        'Cilliblog is built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. This combination ensures a robust backend, dynamic frontend, and a responsive, user-friendly design, laying the groundwork for scalability and seamless performance.',
      
      href:'https://blog-website-9tq3.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'ChatApp - Message Communication Platform',
      desc: 'The chat app offers secure login, real-time messaging, and the ability to send and receive text messages instantly. Users can see online presence, type indicators, and view message history. Notifications keep users updated, while profiles allow customization with names and pictures. Messages can be deleted, ensuring a smooth and engaging chatting experience.',
      subdesc:
        'The chat app uses the MERN stack (MongoDB, Express, React, Node.js) for a scalable backend and dynamic frontend. Socket.io enables real-time communication, allowing instant message delivery and typing indicators. Tailwind CSS ensures a responsive, customizable UI for an optimal user experience',
      href:'https://chatapp1-s5vj.onrender.com',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/js.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/mongodb.png',
        },
      ],
    },
    
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [10, -5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 1, 2],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-40, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -5, -10] : isTablet ? [-11, -7, -10] : [-26, -13, -10],
    };
  };
  
