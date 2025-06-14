"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CraftingProject } from '@/data/crafting-projects';

interface ProjectCardProps {
  project: CraftingProject;
}

export default function ClientProjectCard({ project }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setImageError(false);
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-2 border-[#5fa7d3] hover:border-[#8abfe0]">
      <div className="relative aspect-[4/3] bg-[#b3d6ec]">
        {isLoading && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#5fa7d3] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#b3d6ec]">
            <p className="text-neutral-600">Image failed to load</p>
          </div>
        ) : (
          <Image
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={currentImageIndex === 0}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              console.error('Image failed to load:', project.images[currentImageIndex]);
              setIsLoading(false);
              setImageError(true);
            }}
          />
        )}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-600 p-2 rounded-full shadow-md transition-colors duration-200"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-neutral-600 p-2 rounded-full shadow-md transition-colors duration-200"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-neutral-600">{project.title}</h3>
        <p className="text-neutral-600">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#b3d6ec] text-neutral-600 rounded-full text-sm hover:bg-[#8abfe0] transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.materials && project.materials.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-neutral-600">Materials:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {project.materials.map((material) => (
                <div key={material} className="flex items-baseline">
                  <span className="text-neutral-400 mr-2 flex-shrink-0">•</span>
                  <span className="text-neutral-600 text-sm leading-tight break-words">{material}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.techniques && project.techniques.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-neutral-600">Techniques:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              {project.techniques.map((technique) => (
                <div key={technique} className="flex items-baseline">
                  <span className="text-neutral-400 mr-2 flex-shrink-0">•</span>
                  <span className="text-neutral-600 text-sm leading-tight break-words">{technique}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.tutorialUrl && (
          <a
            href={project.tutorialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-neutral-600 hover:text-[#5fa7d3] transition-colors duration-200"
          >
            View Tutorial →
          </a>
        )}
      </div>
    </div>
  );
} 