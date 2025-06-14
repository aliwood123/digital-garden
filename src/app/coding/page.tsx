import React from 'react';
import { codingProjects } from '@/data/coding-projects';
import ProjectCard from '@/components/coding/ProjectCard';
import HomeButton from '@/components/shared/BackButton';

export default function CodingPage() {
  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        <HomeButton />
        
        <header className="space-y-4">
          <h1 className="text-4xl font-bold text-[#e67e22]">Coding</h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Dive into my coding adventures, projects, and technical explorations.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {codingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
} 