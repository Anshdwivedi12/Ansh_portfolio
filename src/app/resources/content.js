const person = {
  firstName: "Ansh",
  lastName: "Dwivedi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Development & Engineering",
  avatar: "/images/avatar.jpg",
  location: "Asia/India",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Contact with {person.firstName} {person.lastName}</>,
  description: (
    <>
      Feel free to reach out for collaboration, questions, or just a friendly tech chat.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Anshdwivedi12",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/anshdwivedi-/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:anshdubeyjii@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Development & Engineering</>,
  subline: (
    <>
      I'm an aspiring engineering candidate, I possess a strong academic foundation in Programming, Problem-Solving Ability, Mathematics, and Computer Science.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://drive.google.com/file/d/1tphrSES4qg2VC5pZsSwoSVKd-nyyVwJN/view?usp=sharing",
    text: "Resume"
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Software Development Engineer driven by a passion for solving real-world problems through clean, efficient code — focused on designing robust systems that deliver seamless user experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Web GIS Developer Intern at Terra Aqua (IIT Kanpur)",
        achievements: [
          <>
            Selected as a Web GIS Intern under IIT Kanpur's DORA/20223508E project supervised by Prof. Rajiv Sinha.
          </>,
          <>
            Developed interactive GIS web applications using Leaflet.js, Mapbox, and CesiumJS.
          </>,
          <>
            Integrated geospatial APIs and worked with real-world terrain and satellite data.
          </>,
          <>
            Collaborated with IIT researchers to build spatial data visualizations and UI tools using React and Tailwind CSS.
          </>
        ],
        images: [
          {
            src: "/images/projects/project-01/WhatsApp Image 2025-07-12 at 14.01.59_8c43aaf8.jpg",
            alt: "Internship at Terra Aqua (IIT Kanpur)",
            width: 16,
            height: 9,
          },
        ],
      },
      
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Dr. APJ Abdul Kalam Technical university",
        description: <>Studied Computer Science & Engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied Competitive Programming and Development.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "DSA",
        description: <>Mastering Data Structures and Algorithms to build optimized and efficient solutions for real-world problems.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js</>,
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My Projects",
  description: `Projects by ${person.name}`,
  projects: [
    {
      title: "Lifecalc-A daily life calculator ",
      description: "A real-time cryptocurrency tracking application with live market data and interactive charts",
      image: "/images/projects/project-01/proj-07.jpg.png",
      link: "https://lifecals.netlify.app/",
      achievements: [
        "Developed a comprehensive suite of over 12 daily life calculators for finance, health, and utility needs.",
        "Built a fully responsive, mobile-first interface with dynamic search and category filtering for an intuitive user experience.",
        "Engineered a fast and modern web application using Next.js, React, and TypeScript for robust performance and type safety.",
        "Created a clean and visually appealing UI with a cohesive design system implemented with Tailwind CSS."
      ]
    },
    {
      title: "Crypto Tracker",
      description: "A real-time cryptocurrency tracking application with live market data and interactive charts",
      image: "/images/projects/project-01/proj-5.jpg",
      link: "https://cryptotrackergs.netlify.app/",
      achievements: [
        "Built a responsive crypto tracking platform with real-time market data",
        "Implemented interactive charts and detailed coin information",
        "Created a modern UI with dynamic price updates and market trends",
        "Integrated cryptocurrency APIs for accurate and up-to-date information"
      ]
    },
    {
      title: "Snake Game",
      description: "A classic Snake Game built using HTML, CSS, and JavaScript with smooth gameplay mechanics.",
      image: "/images/projects/project-01/proj-6.png",
      link: "https://visionary-gaufre-1ca654.netlify.app/",
      achievements: [
        "Developed a responsive and smooth Snake Game using HTML, CSS, and JavaScript",
        "Implemented core gameplay logic including collision detection and food generation",
        "Demonstrated clean code practices and JavaScript animations",
        "Enhanced the user experience with responsive controls and a clean UI"
      ]
    },
    {
      title: "Tic Tac Toe",
      description: "A responsive Tic-Tac-Toe game built with HTML, CSS, and JavaScript",
      image: "/images/projects/project-01/proj-1.png",
      link: "https://tictactoegs.netlify.app/",
      achievements: [
        "Built a responsive Tic-Tac-Toe game using HTML, CSS, and JavaScript",
        "Implemented game logic for turns, win detection, and reset",
        "Demonstrated front-end development and DOM manipulation skills"
      ]
    },
    {
      title: "Currency Converter",
      description: "A currency converter with real-time exchange rates using APIs",
      image: "/images/projects/project-01/proj-2.png",
      link: "https://currencyconvertergs.netlify.app/",
      achievements: [
        "Developed a currency converter with real-time exchange rates using APIs",
        "Integrated country flag APIs for an enhanced user experience",
        "Ensured efficient performance and reliable data handling"
      ]
    },
    {
      title: "Focus on Today",
      description: "A minimal, day-focused to-do list app built with HTML, CSS, and JavaScript",
      image: "/images/projects/project-01/proj-3.png",
      link: "https://focusontodaygs.netlify.app/",
      achievements: [
        "Built a clean, distraction-free interface for task management",
        "Implemented real-time task updates and intuitive UX",
        "Created a productivity-focused design that helps users stay organized",
        "Developed features for organizing and prioritizing daily tasks"
      ]
    },
    {
      title: "Password Generator",
      description: "A sleek and responsive web app built using React.js and styled with Tailwind CSS",
      image: "/images/projects/project-01/proj-4.png",
      link: "https://passwordgeneratorgs.netlify.app/",
      achievements: [
        "Built a secure password generator with customizable options",
        "Implemented features for length, symbols, and numbers control",
        "Created a modern UI with Tailwind CSS for enhanced user experience",
        "Ensured responsive design and user-friendly interface"
      ]
    }
  ]
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/img-12.png", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-13.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-14.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-15.png", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-16.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-01.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-02.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-03.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-04.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-05.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-06.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-07.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-08.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/img-09.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-10.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/img-11.jpg", alt: "image", orientation: "vertical" },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
