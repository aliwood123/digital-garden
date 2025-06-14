"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CodingProject } from '@/data/coding-projects';

interface ProjectCardProps {
  project: CodingProject;
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-[#ffc04d] hover:border-[#ffb74d]">
      <div className="relative h-48 w-full bg-[#fff5e6]">
        {!imageError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            priority
            onLoadingComplete={() => setIsLoading(false)}
            onError={handleImageError}
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#fff5e6]">
            <p className="text-neutral-600">Failed to load image</p>
          </div>
        )}
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#fff5e6]">
            <div className="w-8 h-8 border-4 border-[#ffc04d] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-neutral-600">
          {project.title}
        </h2>
        <p className="text-neutral-600">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#fff5e6] text-neutral-600 text-sm rounded-full border border-[#ffc04d]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-[#ffc04d] font-medium transition-colors duration-200"
            >
              GitHub →
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-[#ffc04d] font-medium transition-colors duration-200"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 