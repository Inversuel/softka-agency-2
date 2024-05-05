'use client';

import React, { useEffect, useState } from 'react';
import { CHBProject } from './CHBProject';
import { BarVouchersProject } from './BarVouchersProject';
import { FreeDayProject } from './FreeDayProject';
import { motion } from 'framer-motion';
import { Baby, Database, Beef, X, MoveDiagonal, Minus } from 'lucide-react';

export const ProjectsList = (): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);
  const projects = [
    { component: <FreeDayProject />, label: 'FreeDay', icon: <Database /> },
    { component: <BarVouchersProject />, label: 'BarVoucher', icon: <Beef /> },
    { component: <CHBProject />, label: 'CHB Project', icon: <Baby /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (selected >= projects.length - 1) {
        setSelected(0);
      } else {
        setSelected((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length, selected]);

  return (
    <div className="h-screen max-h-screen px-10 py-5 container">
      <div className="rounded-lg w-full h-full relative flex flex-col justify-center">
        <div className="rounded-lg flex flex-col border dark:border-white/30 border-black/30">
          <ul className="flex flex-row pt-2 px-8">
            <div className="flex flex-row gap-3 -ml-1 mr-4 justify-center items-center hover-parent-icon">
              <span className="rounded-full bg-red-500 w-4 h-4 grid place-items-center">
                <X size={13} color="black" fontWeight={600} className="hover-show-icon" />
              </span>
              <span className="rounded-full bg-yellow-500 w-4 h-4 grid place-items-center">
                <Minus size={13} color="black" fontWeight={600} className="hover-show-icon" />
              </span>
              <span className="rounded-full bg-green-500 w-4 h-4 grid place-items-center">
                <MoveDiagonal
                  size={13}
                  color="black"
                  fontWeight={600}
                  className="hover-show-icon"
                />
              </span>
            </div>
            {projects.map((item, index) => (
              <li
                key={index}
                className={`w-full flex flex-row gap-4 h-12 rounded-t-md items-center justify-center relative duration-200 hover:transition
                ${index === selected ? 'cursor-default' : 'cursor-pointer'}
                ${index === selected ? 'bg-muted inverter-border' : ''}`}
                onClick={() => setSelected(index)}
              >
                {index !== selected ? (
                  <div className="hover:bg-primary/50 opacity-45 hover:opacity-100 flex flex-row gap-4 rounded-t-md items-center justify-center absolute inset-2 rounded-md">
                    {item.icon} {`${item.label}`}
                  </div>
                ) : (
                  <>
                    {item.icon} {`${item.label}`}
                  </>
                )}
                {index === selected ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
          {/* <AnimatePresence mode="wait"> */}
          <div
            className="bg-muted rounded-lg"
            key={selected !== null ? projects[selected]?.label : 'empty'}
          >
            {selected !== null ? projects[selected]?.component : ''}
          </div>
          {/* </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
};
