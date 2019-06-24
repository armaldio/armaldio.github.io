import itch from './assets/itch.jpg';
import naturashop from './assets/naturashop.jpg';
import ateliers from './assets/ateliers.png';
import legion from './assets/legion.png';
import npm from './assets/npm.png';
import discord from './assets/discordandc2.png';
import github from './assets/github.png';
import georges from './assets/georges.jpg';
import dn from './assets/dn.jpg';
import da from './assets/da.jpg';

import DiscordLiveBadge from './components/DiscordLiveBadge';

const projects = [
  {
    title: 'Georges.tech',
    description: 'The accountant bot for liberal workers',
    color: '#38B39F',
    link: 'https://georges.tech',
    image: georges,
    pro: true,
    tags: ['web'],
    type: 'website',
  },
  {
    title: 'Direct Nature',
    description: 'Your specialist in organic and natural products, creates, manufactures and distributes natural products of aromatherapy and diffusers of oils',
    color: '#389824',
    link: 'https://directnature.fr',
    image: dn,
    pro: true,
    tags: ['web'],
    type: 'website',
  },
  {
    title: 'Naturashop',
    description: 'E-commerce website about organic and natural products',
    color: '#389824',
    link: 'https://naturashop.fr',
    image: naturashop,
    pro: true,
    tags: ['web'],
    type: 'website',
  },
  {
    title: 'Direct Appart',
    description: 'Vacation apartment rental in Lyon, France',
    color: '#389824',
    link: 'https://directappart.fr',
    image: da,
    pro: true,
    tags: ['web', 'wordpress'],
    type: 'website',
  },
  {
    title: 'Les ateliers du bien être',
    description: 'Simple website for an association',
    color: '#E44A2B',
    link: 'http://www.ateliersdubienetre.org/',
    image: ateliers,
    pro: true,
    tags: ['web', 'wordpress'],
    type: 'website',
  },
  {
    title: 'Legion Handball',
    description: 'Website about Handball team manager tool',
    color: '#2C2B2C',
    link: 'http://legion-handball.com/',
    image: legion,
    pro: true,
    tags: ['web', 'nodejs'],
    type: 'website',
  },
  {
    title: 'Node.js modules',
    description: 'Node.js packages, mostly about Construct and Electron',
    color: '#d01919',
    link: 'https://www.npmjs.com/~armaldio',
    image: npm,
    tags: ['nodejs'],
    type: 'other',
  },
  {
    title: 'Electron For Construct',
    description: 'Bring the power of Electron to your Construct games',
    color: '#16ab39',
    link: 'https://github.com/ElectronForConstruct',
    image: 'https://avatars0.githubusercontent.com/u/24421609?s=200&v=4',
    tags: ['electron', 'construct'],
    type: 'app',
  },
  {
    title: 'Discord',
    description: 'Administrator of the biggest Discord community about Construct',
    color: '#7289da',
    link: 'https://discord.gg/0eLPLj96B4tUr1D3',
    image: discord,
    tags: ['contruct', 'other'],
    type: 'other',
    customComponent: DiscordLiveBadge,
  },
  {
    title: 'Github',
    description: 'Find all of my open sources projects and contributions that are not featured here!',
    color: '#838383',
    link: 'https://github.com/armaldio',
    image: github,
    tags: ['other'],
    type: 'other',
  },
  {
    title: 'Construct plugins',
    description: 'A collection of my Construct plugins',
    color: '#d01919',
    link: 'https://armaldio.itch.io/',
    image: itch,
    tags: ['construct'],
    type: 'other',
  },
  {
    title: 'TIGER',
    description: '<u>T</u>he ult<u>i</u>mate <u>g</u>ame <u>e</u>dito<u>r</u>',
    color: '#f6c757',
    link: 'https://github.com/TIGER-PROJECT/tiger-editor',
    image: 'https://github.com/TIGER-PROJECT/tiger-editor/raw/master/assets/icons/github/icon.png',
    wip: true,
    tags: ['web', 'nodejs', 'electron'],
    type: 'app',
  },
  {
    title: 'Android Messages for desktop',
    description: 'A cross-platform Android Messages desktop app',
    color: '#2C54B8',
    link: 'https://github.com/Android-Messages-For-Desktop/android-messages-for-desktop',
    image: 'https://avatars2.githubusercontent.com/u/40691851?s=200&v=4',
    tags: ['web', 'nodejs', 'electron'],
    type: 'app',
  },
  {
    title: 'Addon Installer',
    description: 'Never worry about installing an addon by hand again 💪',
    color: '#272727',
    link: 'https://github.com/WebCreationClub/AddonInstaller',
    image: 'https://github.com/armaldio/AddonInstaller/raw/develop/store/Addoninstaller%20Icon%20(96).png',
    tags: ['web', 'nodejs', 'electron', 'construct'],
    type: 'app',
  },
  {
    title: 'Awesome Construct',
    description: 'An [Awesome](https://github.com/sindresorhus/awesome) list about Construct',
    color: '#FC60A8',
    link: 'https://github.com/WebCreationClub/awesome-construct',
    image: 'https://raw.githubusercontent.com/github/explore/c304601f028774885ef27f72e6fe2d331729d8bc/topics/awesome/awesome.png',
    tags: ['web', 'construct'],
    type: 'other',
  },
];
export default projects;
