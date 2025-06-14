import React from 'react';
import { uxProjects } from '@/data/ux-projects';
import ProjectCard from '@/components/ux/ProjectCard';
import HomeButton from '@/components/shared/BackButton';

export default function UXDesignPage() {
  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <HomeButton />
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-[#647257]">UX Design</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Discover my approach to user experience design and interface development.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {uxProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
} 