// Image dimension ratios => 1.75
const projects = [
  {
    title: 'K-Books',
    note: 'K-Books: A physical and digital books library management system.',
    image: '/projects/K.Books.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'K-Books: A comprehensive management system for both physical and digital libraries. Through K-Books, it is also possible to provide readers with digital versions of books and other documents in PDF format.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
    links: {
      github: 'https://github.com/aletanus/k-books',
      live: 'https://k-books.onrender.com/api/docs/swagger-ui/',
    },
  },
  {
    title: 'BandKamp',
    note: 'BandKamp is a comprehensive system designed for managing users, albums, and songs. It provides users with the ability to log in, create, update, and delete their personal albums and songs.',
    image: '/projects/BandKamp.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'BandKamp is a comprehensive system designed for managing users, albums, and songs. It provides users with the ability to log in, create, update, and delete their personal albums and songs.',
    stack: ['Python', 'PostgreSQL', 'Django-Rest-Framework'],
    links: {
      github: 'https://bandkamp-m5-s5.onrender.com/api/docs/swagger/',
      live: 'https://github.com/aletanus/m5-bandkamp-generic-view-aletanus',
    },
  },
  {
    title: 'PokéVerse',
    note: 'The future of Pokémon begins in the PokeVerse',
    image: '/projects/PokeVerso.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'The future of Pokémon begins in the PokeVerse. \<br>\ A platform for immersive experience in the Pokémon universe.',
    stack: ['Next.js', 'TypeScript', 'TailWind'],
    links: {
      github: 'https://github.com/aletanus/pokeverse',
      live: 'https://pokeverso.vercel.app/',
    },
  },
  {
    title: 'K.Hub',
    note: 'K.Hub - A Skills Tracking Tool.',
    image: '/projects/K.Hub.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'K.Hub enables developers to register the technologies they\'re proficient in or learning, helping them monitor their progress and proficiency levels in each one.'
    ,
    stack: ['React.js', 'TypeScript', 'React-Hook-Form', 'Material-UI'],
    links: {
      github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-aletanus',
      live: 'https://react-entrega-kenzie-hub-aletanus-aletanus.vercel.app/',
    },
  },
  {
    title: 'Burger Shop - V2',
    note: 'Online burger ordering platform.',
    image: '/projects/Burguer Shop-V2.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Version II - Among other added features, this second version of the Online Burger platform includes customer registration and an exclusive session for each individual client.',
    stack: ['React.js', 'TypeScript', 'React-Hook-Form'],
    links: {
      github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v2-aletanus',
      live: 'https://react-entrega-hamburgueria-v2-aletanus.vercel.app/',
    },
  },
  {
    title: 'Burger Shop - V1',
    note: 'Online burger ordering platform.',
    image: '/projects/Burguer Shop-V1.webp',
    imgDims: { width: '2496 ', height: '1427' },
    description: 'Version I - The objective of this work was to build an application in React.js as well as perfecting stylization, componentization and responsiveness skills.',
    stack: ['React.js', 'Styled-Components'],
    links: {
      github: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-da-kenzie-aletanus',
      live: 'https://hamburgueria-da-kenzie-aletanus.vercel.app/',
    },
  },
];

export type projectType = typeof projects[0];

export default projects
