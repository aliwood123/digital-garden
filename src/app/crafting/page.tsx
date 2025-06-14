import React from 'react';
import ClientProjectCard from '@/components/crafting/ClientProjectCard';
import { craftingProjects } from '@/data/crafting-projects';
import HomeButton from '@/components/shared/BackButton';

export default function CraftingPage() {
  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <HomeButton />
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-[#105179]">Just for Fun</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Explore my creative journey through various projects and tutorials.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {craftingProjects.map((project) => (
            <ClientProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
} 