"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UXProject } from '@/data/ux-projects';

interface ProjectCardProps {
  project: UXProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error('Image failed to load:', project.image);
    setImageError(true);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-2 border-[#7cca57] hover:border-[#9fd885]">
      <div className="relative h-48 w-full bg-[#c2e6b3]">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            priority
            onLoadingComplete={() => setIsLoading(false)}
            onError={handleImageError}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#c2e6b3]">
            <p className="text-neutral-600">Failed to load image</p>
          </div>
        )}
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#c2e6b3]">
            <div className="w-8 h-8 border-4 border-[#7cca57] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-neutral-600 mb-2">
          {project.title}
        </h2>
        <p className="text-neutral-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.deliverables.map((deliverable) => (
            <span
              key={deliverable}
              className="px-2 py-1 bg-[#c2e6b3] text-neutral-600 text-sm rounded-md"
            >
              {deliverable}
            </span>
          ))}
        </div>

        {project.caseStudyUrl && (
          <Link
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-[#7cca57] font-medium transition-colors duration-200"
          >
            View Prototype →
          </Link>
        )}
      </div>
    </div>
  );
} 