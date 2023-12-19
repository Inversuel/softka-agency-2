import React from 'react';
import { FreeDayProjectMobile } from './FreeDayProjectMobile';
import { BarVouchersProjectMobile } from './BarVouchersProjectMobile';
import { CHBProjectMobile } from './CHBProjectMobile';

export const ProjectsListMobile = (): JSX.Element => {
  return (
    <section className="lg:hidden relative w-screen min-h-screen-8/9">
      <FreeDayProjectMobile />
      <BarVouchersProjectMobile />
      <CHBProjectMobile />
    </section>
  );
};
