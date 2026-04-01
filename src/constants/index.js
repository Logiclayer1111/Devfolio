import {
  mobile,
  backend,
  creator,
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
  git,
  figma,
  docker,
  meta,
  netguru,
  polcode,
  asseco,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologiesFrontend = [
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
    name: "Three JS",
    icon: threejs,
  }
];

const technologiesBackend = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Docker",
    icon: docker,
  }
];

const technologiesDatabase = [
  {
    name: "MongoDB",
    icon: mongodb,
  }
];

const technologiesOthers = [
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company_name: "Asseco Poland.",
    icon: asseco,
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    points: [
      "Architected scalable frontend and backend modules using React, Vue.js, Node.js, and TypeScript, improving application responsiveness by 35% across enterprise platforms.",
      "Designed modular UI component systems that accelerated frontend feature delivery by 40% across multiple product teams.",
      "Implemented optimized RESTful APIs supporting high-traffic enterprise systems handling 150K+ monthly users.",
      "Developed backend microservices using Node.js and NestJS, improving system scalability and reducing latency by 28%.",
      "Optimized database queries and indexing strategies within PostgreSQL, reducing complex query execution time by 45%.",
      "Integrated third-party APIs and internal services to streamline data synchronization across 5 distributed applications.",
      "Engineered secure authentication systems using JWT and OAuth2, strengthening access control for multi-tenant environments.",
      "Automated CI/CD pipelines using GitHub Actions and Docker, reducing deployment time from 45 minutes to 10 minutes.",
      "Refactored legacy frontend components into Vue.js and React modern architectures, improving maintainability and performance."
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "Netguru",
    icon: netguru,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Dec 2023",
    points: [
      "Developed full-stack web applications using React, Vue.js, Node.js, and GraphQL, delivering scalable solutions for international clients.",
      "Constructed modular frontend interfaces using React component architecture, improving UI maintainability and development efficiency.",
      "Implemented backend APIs using Express.js and Node.js, enabling seamless communication between microservices.",
      "Optimized frontend rendering performance through code splitting and lazy loading, improving page load speeds by 38%.",
      "Engineered scalable database structures using PostgreSQL and MongoDB, supporting high-volume transactional systems.",
      "Integrated cloud services within AWS infrastructure, enabling reliable deployments and automated scaling.",
      "Developed reusable frontend UI libraries used across 8 internal projects."
    ],
  },
  {
    title: "Intern & Software Engineer",
    company_name: "Polcode",
    icon: polcode,
    iconBg: "#383E56",
    date: "Oct 2018 - Sep 2020",
    points: [
      "Developed scalable front-end and back-end applications using JavaScript, React, Vue.js, and Node.js for international web platforms.",
      "Constructed dynamic user interfaces with Vue.js and modern JavaScript frameworks, improving user engagement metrics by 25%.",
      "Engineered backend RESTful services that supported high-volume data exchange between enterprise systems.",
      "Designed database schemas and optimized queries across MySQL and PostgreSQL environments.",
      "Delivered API integrations connecting applications with external SaaS platforms and payment systems."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologiesFrontend, technologiesBackend, technologiesDatabase, technologiesOthers, experiences, testimonials, projects };
