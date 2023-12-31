import React from 'react';
import ProjectLayout from '@/components/projects/projectsGrid/ProjectLayout';
import { SynlabData } from '@/projectData';

const Page = () => {
  return <ProjectLayout {...SynlabData} />;
};

export default Page;
