// Image dimension ratios => 1.75
const projects = [
  {
    title: 'CERB',
    note: 'Development of web and mobile interfaces for the Integra System, with the Water Engineering and Sanitation Company of Bahia (CERB) as the end client.',
    image: '/projects/CERB.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Front-end development of web and mobile interfaces for the Integra System, with a focus on usability and performance, optimized to ensure a smooth user experience even on devices with limited resources. Final client: Companhia de Engenharia Hídrica e de Saneamento da Bahia (CERB).',
    stack: ['Figma'],
    linkTextTitle: 'Visitar Projeto Figma',
    links: {
      // github: 'https://github.com/aletanus/k-books',
      // live: 'https://www.youtube.com/watch?v=YDzGxfJ8kVM&t=2s',
      live: 'https://www.figma.com/design/nHG0Bagdeg1NWnukQuwyPU/CERB?m=auto&t=0o1AMt4hLbueShWc-1',
    },
  },
  {
    title: 'Flex Future',
    note: 'Flex Future is a Brazilian platform for the consultation and registration of companies.',
    image: '/projects/FlexFuture.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Technical leadership in the end-to-end development of the platform, encompassing interface design as well as front-end and back-end programming. FlexFuture is a platform designed to map companies in Brazil according to their work models (hybrid, remote, or on-site).',
    stack: ['PostgreSQL', 'Prisma', 'Nest', 'Next'],
    linkTextTitle: 'Visitar Plataforma',
    links: {
      // github: 'https://github.com/aletanus/k-books',
      live: 'https://flexfuture.vercel.app/',
    },
  },
  {
    title: 'EasyMatch',
    note: 'EasyMatch is a mobile app (Android and iOS), developed with React Native, designed for event scheduling and management.',
    image: '/projects/EasyMatch.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Front-end development for EasyMatch, a native mobile application for Android and iOS focused on event scheduling and management. The project was prepared for publication on the official app stores.',
    stack: ['React Native'],
    linkTextTitle: 'Baixar App Teste (Android)',
    links: {
      // github: 'https://github.com/aletanus/k-books',
      live: 'https://portfolio-aletanus.vercel.app/assets/application-1cf17df5-412a-439c-9cb3-eb2271b353c4.apk',
    },
  },
  {
    title: 'K-Books',
    note: 'K-Books: A physical and digital books library management system.',
    image: '/projects/K.Books.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Back-end development of the K-BOOKS API, a system designed for managing both physical and digital books. The project enables loan management, user registration, and catalog administration for academic and public libraries, with integration for digital versions in PDF format.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
    linkTextTitle: 'Visitar Documentação Swagger',
    links: {
      github: 'https://github.com/aletanus/k-books',
      live: 'https://k-books.onrender.com/api/docs/swagger-ui/',
    },
  },
  {
    title: 'BandKamp',
    note: 'BandKamp is a system designed to streamline the management of users, albums, and songs. It enables users to log in, create, update, and delete their own albums and songs in a practical and efficient manner.',
    image: '/projects/BandKamp.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Back-end development of the BandKamp API, a system designed to facilitate the management of users, albums, and songs. It allows users to log in, create, update, and delete their own albums and tracks in a practical and efficient way.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
    linkTextTitle: 'Visitar Documentação Swagger',
    links: {
      github: 'https://github.com/aletanus/bandkamp',
      live: 'https://bandkamp-m5-s5.onrender.com/api/docs/swagger/',
    },
  },
  {
    title: 'K.Hub',
    note: 'K.Hub - A Skills Tracking Tool.',
    image: '/projects/K.Hub.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'K.Hub is a web application that enables developers to register the technologies in which they have expertise or are learning, assisting them in tracking their progress and proficiency levels within each registered technology.'
    ,
    stack: ['React.js', 'TypeScript', 'React-Hook-Form', 'Material-UI'],
    links: {
      github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-aletanus',
      live: 'https://react-entrega-kenzie-hub-aletanus-aletanus.vercel.app/',
    },
  },
  // {
  //   title: 'PokéVerse',
  //   note: 'The future of Pokémon begins in the PokeVerse',
  //   image: '/projects/PokeVerso.webp',
  //   imgDims: { width: '2496 ', height: '1427' },
  //   description: 'The purpose of the PokéVerse is to visually and engagingly showcase the Pokémon universe to both newcomers and enthusiasts. It houses the complete collection of over 1,000 existing Pokémon.',
  //   stack: ['Next.js', 'TypeScript', 'TailWind'],
  //   links: {
  //     github: 'https://github.com/aletanus/pokeverse',
  //     live: 'https://pokeverso.vercel.app/',
  //   },
  // },
  {
    title: 'Burger Shop - V2',
    note: 'Online burger ordering platform.',
    image: '/projects/Burguer Shop-V2.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'This second version of the Burger Shop application not only encompasses the foundational Front End system for product presentation, selection, addition, and order calculation within the shopping cart but also includes customer registration and an exclusive session for each client.',
    stack: ['React.js', 'TypeScript', 'React-Hook-Form'],
    links: {
      github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v2-aletanus',
      live: 'https://react-entrega-hamburgueria-v2-aletanus.vercel.app/',
    },
  },
  // {
  //   title: 'Burger Shop - V1',
  //   note: 'Online burger ordering platform.',
  //   image: '/projects/Burguer Shop-V1.webp',
  //   imgDims: { width: '2496 ', height: '1427' },
  //   description: 'Version I - The objective of this work was to build an application in React.js as well as perfecting stylization, componentization and responsiveness skills.',
  //   stack: ['React.js', 'Styled-Components'],
  //   links: {
  //     github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-da-kenzie-aletanus',
  //     live: 'https://hamburgueria-da-kenzie-aletanus.vercel.app/',
  //   },
  // },
];

export type projectType = typeof projects[0];

export default projects
