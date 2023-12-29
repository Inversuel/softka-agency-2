import React from 'react';
import ProjectLayout from '@/components/projects/projectsGrid/ProjectLayout';
import { CHBData } from '@/projectData';

const Page = () => {
  return <ProjectLayout {...CHBData} />;
};

export default Page;
