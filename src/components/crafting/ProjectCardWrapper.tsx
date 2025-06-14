"use client";

import React from 'react';
import ClientProjectCard from './ClientProjectCard';
import { CraftingProject } from '@/data/crafting-projects';

interface ProjectCardWrapperProps {
  project: CraftingProject;
}

export default function ProjectCardWrapper({ project }: ProjectCardWrapperProps) {
  return <ClientProjectCard project={project} />;
} 