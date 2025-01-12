
import {
  developer,
  ux,
  content,
  database,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  php,
  git,
  figma,
  devrabic,
  xpertbotcover,
  todolist,
  ecomphoto,
  totalphoto,
  flutter,
  firebase,
  laravel,
  sass,
  nibalcircel,
  canva1,
  patience,
  communication,
  githubicon,
  instagram,
  tiktok,
  linkedin,
  
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
    title: "Back-End Developement",
    icon: database,
  },
  {
    title: "Mobile App Developement",
    icon: developer,
  },
  {
    title: "Front-End Developement",
    icon: ux,
  },
  {
    title: "Content Creator",
    icon: content,
  },
];


const services2 = [
  {
    title: "Canva",
    icon: canva1,
  },
  {
    title: "Time Management",
    icon: patience,
  },
  {
    title: "Effective Communication",
    icon: communication,
  },
];

const socialmediaiconsbas = [
  {
    name: "Github",
    icon: githubicon,
  },
  {
    name: "Instagram",
    icon: instagram,
  },
  {
    name: "tiktok",
    icon: tiktok,
  },
  {
    name: "LinkedIn",
    icon: linkedin,
  },
]



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS ",
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
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Sass",
    icon: sass,
  },
];



const experiences = [
  {
    title: "Ecommerce-Web",
    company_name: "devrabic",
    icon: devrabic,
    iconBg: "#383E56",
    date: "March 2024 - Aug 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers,and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile App",
    company_name: "XpertBot",
    icon: xpertbotcover,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
     "i'm working on it",
    ],
  },
  {
    title: "Backend",
    company_name: "xpertbot",
    icon: xpertbotcover,
    iconBg: "#ffffff",
    date: "Jan 2022 - Jan 2023",
    points: [
      "i'm working on it",
    ],
  },
  {
    title: "Story-Players",
    company_name: "Freelance",
    icon: nibalcircel,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Developed an interactive web application using ReactJS with a modern, responsive design.",
      "Collaborated with cross-functional teams to delivr a high-quality product. ",
      "Enhanced user expirience and ensured cross-browser compatibility.",
      "Conducted code reviews to maintain efficiency and best practices.",
      "( Better version under development )",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "Nibal has been showing constent effort during his learnings at Devrabic and he showcased his acquired coding skills through an ecom app that he developed using React and Firebase, the future of Nibal as a software engineer is bright! Keep up the good work.",
    name: "Mike Majdalani",
    designation: "Senior Frontend Engineer at USJ ",
    company: "Devrabic",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFuIeeBbv7kWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704402609201?e=1741219200&v=beta&t=BlDlXi3e0C9PjHoSMXHXd6OCTAaUeCF4a8JZx1Qd8a8",
  },

  {
    testimonial:
      "Well done, Nibal! It was an absolute pleasure mentoring you during your internship at XpertBot. Your dedication and eagerness to learn were truly inspiring, and you’ve made significant strides in database management and backend development. I have no doubt that your passion and skills will take you far in your tech journey. Keep aiming high and embracing new challenges! 💪 ",
    name: "Ibrahim Fleifel",
    designation: "Tech Lead / Project Manager",
    company: "Xpertbot Academy",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFSFfI-1M-PPA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694686344121?e=1741219200&v=beta&t=aBaxJPAD1lq07H0FFqYwn6df_n_Grf1c1P-Wu-h8FtQ",
  },

  /*{
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];



const projects = [
  {
    name: "ToDo List",
    description:
      "Developed a dynamic and cross-App ToDo List application using Flutter and Dart. The project included designing an attractive navigation, ensuring a smooth and efficient user experience. Professional planning was implemented to manage the app's dynamics, focusing on seamless task handling across different devices.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/NibalOmar/ToDo_list_App.git",
  },
  {
    name: "Frontend",
    description:
      "Fully functional E-commerce Website was developed using modern technologies, featuring a responsive design to ensure a smooth user experince across all devices. The website includes products management, a dynamic shopping cart, and seamless navigation. Performance optimization and an intuitive user interface design were prioritized to deliver a high-quality and efficient shopping experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecomphoto,
    source_code_link: "https://github.com/NibalOmar/Ecom.git",
  },
  {
    name: "Online Store",
    description:
      "developed a dynamic E-commerce application using Flutter and Dart. featuring a responsive design for smooth user experience across devices. The app including seamless navigation, products and page to explore the Product description, with a focus on perfermance optimization and intuitive interface design.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Design",
        color: "pink-text-gradient",
      },
    ],
    image: totalphoto,
    source_code_link: "https://github.com/NibalOmar/Online-Store.git",
  },
];

export { services, services2, technologies, experiences, testimonials, projects };
