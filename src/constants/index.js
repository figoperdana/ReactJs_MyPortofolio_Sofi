import { mobile, backend, creator, andro, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, avian, petro, antriajaa } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'Software Developer',
    icon: mobile,
  },
  {
    title: 'Database Administrator',
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'PT. Andromedia Surabaya',
    icon: andro,
    iconBg: '#383E56',
    date: 'February 2022 - July 2022',
    points: [
      'Database implementation using PostgreSQL, MySQL.',
      'Developed full stack projects using React.js, Node.js, and Tailwind.',
      'Carry out feature development and UI updates based on design.',
      'Optimization of databases and applications using enterprise frameworks and servers.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'CV. Karunia Jaya Jember',
    icon: creator,
    iconBg: '#E6DEDD',
    date: 'September 2022 - September 2023',
    points: [
      'Design and develop new features for web applications from start to finish.',
      'Build and manage basic data and servers using programming languages ​​such as Node.js on the backend side and integrate with the frontend using Vue.js.',
      'Database implementation using MongoDB.',
      'Ensure data security and privacy at every stage of development.',
    ],
  },
];

const projects = [
  {
    name: 'Avian',
    description: 'Application used for marketing Avian products targeting mobile devices. Avian mobile was created using the BaseJs Framework.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'base.js',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: avian,
  },
  {
    name: 'PMMS',
    description: 'PMMS (Plant Maintenance Management System) website for the PT company admin dashboard. Petrokimia Gresik. PMMS was created using the BaseJS framework.',
    tags: [
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: petro,
  },
  {
    name: 'AntriAjaa',
    description: 'Antriajaa is an application that makes it easier for users to manage and monitor queues efficiently. Users can order, track and manage queues in real-time.',
    tags: [
      {
        name: 'vue.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: antriajaa,
  },
];

export { services, technologies, experiences, projects };
