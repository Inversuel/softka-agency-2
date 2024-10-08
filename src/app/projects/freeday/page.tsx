import React from 'react';
import ProjectLayout from '@/components/projects/projectsGrid/ProjectLayout';
import { FreeDayData } from '@/projectData';

const Page = () => {
  return <ProjectLayout {...FreeDayData} />;
};

export default Page;
