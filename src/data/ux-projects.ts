export interface UXProject {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  caseStudyUrl?: string;
  featured?: boolean;
}

export const uxProjects: UXProject[] = [
  {
    id: 'moses-lake-food-bank',
    title: 'Moses Lake Food Bank Website Redesign',
    description: 'Design a user-centered website experience focused on simplifying navigation, improving content clarity, and streamlining donation and volunteer pathways.',
    deliverables: ['Hi-Fi Prototype'],
    image: '/images/ux-design/food-bank.png',
    caseStudyUrl: 'https://www.figma.com/proto/oojzBhEx6El5ZfmRX3kjBj/UX-2-Project--1--ML-Food-Bank-Website--AW-?node-id=1215-19703&p=f&t=R16R1gd9P4EjRgUh-1&scaling=scale-down&content-scaling=fixed&page-id=1153%3A3108&starting-point-node-id=1215%3A19703&show-proto-sidebar=1',
    featured: true
  },
  {
    id: 'swing-dance-redesign',
    title: 'Swing Dance Website Redesign',
    description: 'Re-design the mobile site for a nonprofit swing dance group to improve navigation, modernize outdated visuals, and strengthen community engagement with limited resources.',
    deliverables: ['Hi-Fi Prototype'],
    image: '/images/ux-design/swing.png',
    caseStudyUrl: 'https://www.figma.com/proto/ll61vQtfrxreDcMpqVzj6Z/UX-2-Project--5--Choose-Your-Own?node-id=3447-1377&t=bFsETq8oa3uyFK7e-1&scaling=scale-down&content-scaling=fixed&page-id=3447%3A760&starting-point-node-id=3447%3A1377',
    featured: true
  },
  {
    id: 'daily-ui-challenges',
    title: 'Daily UI Challenges',
    description: 'Learn UI design and Figma through quick design challenges.',
    deliverables: ['Lo-Fi Prototype'],
    image: '/images/ux-design/daily-ui.png',
    caseStudyUrl: 'https://www.figma.com/design/cWl4iUcv93sluqUhfprYcq/Daily-UI-Challenge--Copy-?node-id=0-1&t=LhIZ09iaj3eYTiYu-1',
    featured: true
  }
]; 