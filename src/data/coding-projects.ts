export interface CodingProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const codingProjects: CodingProject[] = [
  {
    id: 'jelly-belly',
    title: 'Jelly Belly Flavor Finder',
    description: 'A fun web application that helps users discover and explore Jelly Belly flavors. Features include flavor search, filtering by category, and a random flavor generator.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/images/coding/jelly-belly.png',
    githubUrl: 'https://github.com/yourusername/jelly-belly-finder',
    liveUrl: 'https://jelly-belly-finder.vercel.app',
    featured: true,
  },
  {
    id: 'google-clone',
    title: 'Google Search Clone',
    description: 'A responsive clone of the Google search interface, featuring the iconic search bar, voice search, and search results layout.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/coding/google.png',
    githubUrl: 'https://github.com/yourusername/google-clone',
    liveUrl: 'https://google-clone-demo.vercel.app',
    featured: true,
  },
  {
    id: 'codepen-clone',
    title: 'CodePen Clone',
    description: 'A simplified version of CodePen that allows users to write and preview HTML, CSS, and JavaScript code in real-time.',
    technologies: ['React', 'CSS', 'JavaScript'],
    image: '/images/coding/codepen.png',
    githubUrl: 'https://github.com/yourusername/codepen-clone',
    liveUrl: 'https://codepen-clone-demo.vercel.app',
    featured: true,
  },
]; 