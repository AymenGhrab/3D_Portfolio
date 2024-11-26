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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    esprit,
    Angular,
    amenbank,
    DotNet,
    Python,
    Java,
    C,
 
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
      title: "Angular Developer",
      icon: creator,
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
      name: "Python",
      icon: Python,
    },
    {
      name: "Java",
      icon: Java,
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
      name: "C",
      icon: C,
    },
    {
      name: "dotnet",
      icon: DotNet,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "angular",
      icon: Angular,
    },
  ];
  
  const experiences = [
    {
      title: "Summer Internship",
      company_name: "Amen Bank",
      icon: amenbank,
      iconBg: "#E6DEDD",
      date: "July 2024 - August 2024",
      points: [
        "Design and development of a web application for viewing images of checks and effects, including specimen signature verification.",
        "Keywords: Spring Boot | Oracle | Angular 16 | JBoss | NGINX | Google Authenticator.",
      ],
    },
    {
      title: "Summer Internship",
      company_name: "Amen Bank",
      icon: amenbank,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Development of a web application (batch jobs) with Angular and Spring Boot aimed at facilitating administrative operations for employees within the office.",
        "Keywords: Microservices | Spring Boot | MongoDB | Angular 16.",
      ],
    },
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
      name: "Athlon",
      description:
        "Creation of a web, mobile, and desktop application for managing the Athlon. The frameworks used are Symfony (Web), CodeNameOne ",
      tags: [
        {
          name: "PHP, Java, ",
          color: "blue-text-gradient",
        },
        {
          name: "Symfony ,API,",
          color: "green-text-gradient",
        },
        {
          name: "SQL, UML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Seddiki101/Athlon",
    },
    {
      name: "Spring & Angular Project",
      description:
        "Development of a frontend web application (Angular) and backend (Spring Boot) to facilitate the management of university dormitory rooms.",
      tags: [
        {
          name: "Spring Boot,",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/AyoubHdhili/AngularFrontend",
    },
    {
      name: "PIDEV Project",
      description:
        "Creation of a website tailored to the needs of a real client, aimed at facilitating the management of their conservatory. This site allows for session scheduling, online subscription payments, student assignments, and real-time notifications.",
      tags: [
        {
          name: "ExpressJS",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS,NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MohamedKhalilHermassi/FrontEndReactJs",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };