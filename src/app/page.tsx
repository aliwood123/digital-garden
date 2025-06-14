// bg-brand-blue-200 bg-brand-peach-200 bg-brand-green-200 text-brand-blue-700 text-brand-peach-700 text-brand-green-700
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const categories = [
    {
      title: 'Coding',
      description: 'Explore my coding projects and technical experiments.',
      href: '/coding',
    },
    {
      title: 'UX Design',
      description: 'Discover my UX design work and creative process.',
      href: '/ux-design',
    },
    {
      title: 'Just for Fun',
      description: 'Check out my crafting projects and creative endeavors.',
      href: '/crafting',
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div className="space-y-16 pt-8 md:pt-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Alicia Woodard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="text-center md:text-left space-y-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl" style={{ fontFamily: '"Hey Eloise", serif' }}>
              Welcome to My Digital Garden
            </h1>
            <p className="text-xl text-neutral-600 font-normal">
              A curated collection of my thoughts, projects, and explorations in crafting,
              coding, UX design, and beyond.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Coding card */}
          <Link
            key={categories[0].title}
            href={categories[0].href}
            className="group block p-6 rounded-lg bg-[#ffe0b2] hover:bg-[#ffd180] transition-all duration-300 hover:shadow-lg border-2 border-[#ffc04d] min-w-[320px]"
          >
            <h2 className="text-xl font-semibold text-[#996d38] mb-2">
              {categories[0].title}
            </h2>
            <p className="text-neutral-600 font-normal max-w-[280px]">{categories[0].description}</p>
          </Link>
          {/* UX Design card */}
          <Link
            key={categories[1].title}
            href={categories[1].href}
            className="group block p-6 rounded-lg bg-[#c2e6b3] hover:bg-[#9fd885] transition-all duration-300 hover:shadow-lg border-2 border-[#7cca57] min-w-[320px]"
          >
            <h2 className="text-xl font-semibold text-[#647257] mb-2">
              {categories[1].title}
            </h2>
            <p className="text-neutral-600 font-normal max-w-[280px]">{categories[1].description}</p>
          </Link>
          {/* Just for Fun card */}
          <Link
            key={categories[2].title}
            href={categories[2].href}
            className="group block p-6 rounded-lg bg-[#b3d6ec] hover:bg-[#8abfe0] transition-all duration-300 hover:shadow-lg border-2 border-[#5fa7d3] min-w-[320px]"
          >
            <h2 className="text-xl font-semibold text-[#105179] mb-2">
              {categories[2].title}
            </h2>
            <p className="text-neutral-600 font-normal max-w-[280px]">{categories[2].description}</p>
          </Link>
        </section>
      </div>
    </main>
  );
} 