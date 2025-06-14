"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import { CraftingProject } from '@/data/crafting-projects';

interface ProjectCardWrapperProps {
  project: CraftingProject;
}

export default function ProjectCardWrapper({ project }: ProjectCardWrapperProps) {
  return <ProjectCard project={project} />;
} 