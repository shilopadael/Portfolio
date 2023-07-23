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
    python,
    android,
    linux,
    C,
    java,
    arknoid,
    algorithem,
    robot
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
    { id: "download-cv",
     title: "Download CV" },
  ];
  
  const services = [
    {
      title: "Programing Languages",
      icon: web,
      items: [
        {
          star1: "Java",
        },
        {
          star1: "C/C++",
        },
        {
          star1: "Python",
        },
        {
          star1: "React",
        }
      ]
    },
    {
      title: "Courses",
      icon: mobile,
      items: [
        {
          star1: "Data Structures",
        },
        {
          star1: "Algorithms",
        },
        {
          star1: "OOP",
        },
        {
          star1: "Design Patterns",
        },
        {
          star1: "Operating Systems",
        },
        {
          star1: "Data Base",
        }]
    },
    {
      title: "Valounteering",
      icon: backend,
      items: [
        {
          star1: `"Simcha layeled"- supporting children with special needs and their families`,
        },
        {
          star1: `"Perach" - Tutorial Project for children from low socio-economic backgrounds`,
        }
      ]
    }
  ];

    
  
  const technologies = [
    {
      name: "java",
      icon: java,
    },
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
      name: "React JS",
      icon: reactjs,
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
      name: "git",
      icon: git,
    },
    {
      name: "linux",
      icon: linux,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "android",
      icon: android,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Arknoid Game",
      description:
        "Arknoid Game is a classic brick-breaking video game where players control a paddle to bounce a ball and destroy bricks.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "green-text-gradient",
        }
      ],
      image: arknoid,
      source_code_link: "https://github.com/shilopadael/Arkanoid-Game/tree/main",
    },
    {
      name: "Vector Classification System",
      description:
        "The project aims to classify vectors using a K-nearest neighbors (Knn) algorithm based on trained data vectors uploaded by clients. The server side handles all calculations and classifications using the client's input files.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Multithreding",
          color: "green-text-gradient",
        },
        {
          name: "Socket",
          color: "pink-text-gradient",
        },
        {
          name: "design patterns",
          color: "blue-text-gradient",
        },
      ],
      image: algorithem,
      source_code_link: "https://github.com/shilopadael/KNN-Server-Classification",
    },
    {
      name: "Robot Navigation Workshop",
      description:
        "The project aims to develop an autonomous robot navigation system using the Player/Stage platform and integrating OMPL algorithms. It involves perception, mapping, path planning, and control components to enable a mobile robot to navigate its environment efficiently and safely.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Player/Stage",
          color: "green-text-gradient",
        },
        {
          name: "Design Patterns",
          color: "pink-text-gradient",
        },
        {
          name: "Algorithm",
          color: "orange-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://github.com/shilopadael/Robot-Navigation-Workshop",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };