// Image dimension ratios => 1.75
const projects = [
  {
    title: 'Flex Future',
    note: 'Flex Future is a Brazilian platform for the consultation and registration of companies.',
    image: '/projects/FlexFuture.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Flex Future is a Brazilian platform for the consultation and registration of companies. Through Flex Future, it is possible to search for companies and discover information about their work models (hybrid, remote, in-person), location, size, sector, and much more.',
    stack: ['PostgreSQL', 'Prisma', 'Nest', 'Next'],
    links: {
      // github: 'https://github.com/aletanus/k-books',
      live: 'https://flexfuture.vercel.app/',
    },
  },
  {
    title: 'K-Books',
    note: 'K-Books: A physical and digital books library management system.',
    image: '/projects/K.Books.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'K-Books is a system designed to efficiently manage both physical and digital libraries. Through K-Books, it\'s also possible to provide readers access to digital editions of books and various documents in PDF format, enhancing the library experience.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
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
    description: 'BandKamp is a system designed to streamline the management of users, albums, and songs. It enables users to log in, create, update, and delete their own albums and songs in a practical and efficient manner.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
    links: {
      github: 'https://github.com/aletanus/m5-bandkamp-generic-view-aletanus',
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
