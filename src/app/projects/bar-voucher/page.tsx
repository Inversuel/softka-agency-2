import React from 'react';
import ProjectLayout from '@/components/projects/projectsGrid/ProjectLayout';
import { BarVoucherData } from '@/projectData';

const Page = () => {
  return <ProjectLayout {...BarVoucherData} />;
};

export default Page;
