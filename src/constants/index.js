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
    freelance,
    starbucks,
    dataChamp,
    school,
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
      title: "React Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "Freelance Project: LearnFinance",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "April 2023 - April 2023",
      points: [
        "Subscription-based Video Course Website.",
        "Implemented user login and signup functionality using Firebase Authentication.",
        "Utilized session-based authentication with session cookies for secure login.",
        "Embedded videos on the site using a secure video hosting service. and deployed the site on render.com",
        "Visit the website at: "
      ],
      url: ["https://learnfinance.co.in/"]
    },
    {
      title: "React.js Developer",
      company_name: "Freelance Project [beCompany and beFrontend]",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "May 2023 - May 2023",
      points: [
        "Improved Styling and Implemented Features in a React.js Web Application.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented a carousel feature to showcase a list of jobs students got placed in, fetching data from an API and displaying it in card format.",
        "Implementing responsive design Worked on styling various pages and elements of the web application, utilizing CSS to achieve the desired visual effects.",
        "GitHub Repository: ",
      ],
      url: [
        "https://github.com/zeus11011/BeFrontend",
        "https://github.com/zeus11011/becompany"
      ]
    },
    {
      title: "Web Developer",
      company_name: "ZeemerQuest",
      icon: school,
      iconBg: "#383E56",
      date: "May 2023 - Jun 2023",
      points: [
        "Developed a Paddy Disease Classification web app as part of a group project for a tech event or competition organized by Zemetrics.",
        "Worked primarily on Paddy Disease Classification, utilizing Python, TensorFlow, FastAPI, React.js, and TensorFlow Serving",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed a paddy disease classification model using TensorFlow and Convolutional Neural Networks (CNN).",
        "Embedded the model into a React.js website, allowing users to drag and drop a paddy leaf image for disease identification.",
        "GitHub Repository: ",
      ],
      url: ["https://github.com/Niranjangkr/paddy-diseases-classificationML"]
    },
    {
      title: "WordPress Developer",
      company_name: "Freelance Project: Job Dashboard Site [datachamp] ",
      icon: dataChamp,
      iconBg: "#E6DEDD",
      date: "Jun 2023 - Jun 2023",
      points: [
        "Developed a job dashboard site using WordPress for data scientists and AI developers.",
        "Utilized plugins and a visually appealing theme to create a functional and attractive website.",
        "Implemented features including job listings, search functionality, and user profiles.",
        "Customized the theme to match the client's requirements and branding.",
        "Visit the website at: ",
      ],
      url: ["http://datachamp.in/"]
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
  
  export { services, technologies, experiences, testimonials, projects };