export interface CraftingProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  tutorialUrl?: string;
  materials?: string[];
  techniques?: string[];
  featured?: boolean;
}

export const craftingProjects: CraftingProject[] = [
  {
    id: 'first-quilt',
    title: 'My First Quilt',
    description: 'My first (and only) quilt top. I have so much respect for this art form and expert quilters. I was fortunate enough to have a mentor help me through this project because it was the first time I sat down at a sewing machine, hand-stitched anything, and used a rotary blade. Moral of the story: measure twice, cut once.',
    images: [
      '/images/crafting/at-the-machine.jpg',
      '/images/crafting/quilt-squares.jpg',
      '/images/crafting/quilt-face.jpg'
    ],
    tags: ['Quilting', 'Sewing', 'First Project'],
    materials: ['100% Cotton', 'Batting', 'Flannel', 'Thread'],
    techniques: ['Machine sewing', 'Hand quilting', 'Rotary cutting', 'Piecing'],
    featured: true
  },
  {
    id: 'porch-ceiling',
    title: 'Front Porch Revamp',
    description: 'I noticed the front of my house was incredibly plain, so I decided to paint the door and add a little warmth to the porch ceiling with cedar planks. Did I have any power tools? No, but I couldn\'t let that stop me. I learned A LOT and bonded with my dad, who was a great mentor (and supplier of power saws).',
    images: [
      '/images/crafting/door-before.jpg',
      '/images/crafting/door-after.jpg',
      '/images/crafting/porch-before.jpg',
      '/images/crafting/power-sand.jpg',
      '/images/crafting/final-porch.jpg',
      '/images/crafting/porch-detail.jpg'
    ],
    tags: ['Home Improvement', 'DIY', 'Woodworking'],
    materials: ['Tongue and groove cedar boards', 'Custom wood stain', 'Paint', 'Brad nails'],
    techniques: ['Power tool operation', 'Wood staining', 'Painting'],
    featured: true
  },
  {
    id: 'quiet-book',
    title: 'Creating a Soft Quiet Book',
    description: 'This project is from my UX class, but I had so much fun with it that I created extra pages and went a little overboard. Who has two thumbs and loves their Cricut Joy? This girl!',
    images: [
      '/images/crafting/IMG_7587 3.JPG',
      '/images/crafting/Alicia-book--5.JPG',
      '/images/crafting/Alicia-book--6 2.JPG',
      '/images/crafting/Alicia-book-.JPG',
      '/images/crafting/Alicia-book-04161 2.JPG',
      '/images/crafting/Alicia-book--4.JPG'
    ],
    tags: ['Sewing', 'Cricut', 'Educational', 'Interactive'],
    materials: [
      'Felt',
      'Sequins',
      'Embroidery floss',
      'Pony beads',
      'Seed beads',
      'Ribbon',
      'Velcro',
      'Binder rings',
      'Metal eyelets'
    ],
    techniques: ['Hand sewing', 'Cricut cutting', 'Embroidery', 'Book binding'],
    featured: true
  }
]; 