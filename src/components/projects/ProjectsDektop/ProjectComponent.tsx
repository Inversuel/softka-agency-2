'use client';

import React, { useState } from 'react';
import { SynLabProject, MayonesProject } from '@/components/projects/ProjectsDektop/ProjectsData';
import { CHBProject } from './CHBProject';
import { BarVouchersProject } from './BarVouchersProject';
import { FreeDayProject } from './FreeDayProject';
import { AnimatePresence, motion } from 'framer-motion';
import { Baby, Database, Beer } from 'lucide-react';
import { MovingBorder } from '@/components/ui/moving-border';
import { cn } from '@/lib/utils';

export const ProjectsList = (): JSX.Element => {
  const [selected, setSelected] = useState<number | null>(null);
  const projects = [
    { component: <FreeDayProject />, label: 'FreeDay', icon: <Database /> },
    { component: <BarVouchersProject />, label: 'BarVoucher', icon: <Beer /> },
    { component: <CHBProject />, label: 'CHB Project', icon: <Baby /> },
  ];

  return (
    <div className="w-screen h-screen px-10 py-5 shadow-xl">
      <div className="rounded-lg w-full h-full relative">
        <MovingBorder duration={5000} rx="5%" ry="5%">
          <div
            className={cn(
              'h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]'
            )}
          />
        </MovingBorder>
        <div className="rounded-t-lg flex flex-col">
          <ul className="flex flex-row pt-2 px-2">
            {projects.map((item, index) => (
              <li
                key={index}
                className={`w-full flex flex-row gap-4 h-12 items-center justify-center cursor-pointer hover:bg-muted/50 ${
                  index === selected ? 'bg-muted' : ''
                } ${index === 0 && 'rounded-tl-md'} ${
                  index === projects.length - 1 && 'rounded-tr-md'
                }`}
                onClick={() => setSelected(index)}
              >
                {item.icon} {`${item.label}`}
                {index === selected ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.div
              key={selected !== null ? projects[selected].label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selected !== null ? projects[selected].component : ''}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* <FreeDayProject /> */}
        {/* <BarVouchersProject /> */}
        {/* <CHBProject /> */}
        {/* <SynLabProject /> */}
        {/* <MayonesProject /> */}
      </div>
    </div>
  );
};
