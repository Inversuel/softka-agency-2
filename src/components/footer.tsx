import React from 'react';
import { Typography } from './ui/typography';
import { Earth } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground sm:h-[30dvh] p-2 md:p-8 lg:p-20">
      <div className="flex flex-col md:flex-row mb-5 container">
        {/* <div className="w-1/2 ">
          <Typography variant="h2" type="denike" className="text-background mb-4">
            Services
          </Typography>
          <ul className="flex flex-col gap-2">
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Custom Websites
              </Typography>
            </li>
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Custom E-commerce
              </Typography>
            </li>
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Custom Web Apps
              </Typography>
            </li>
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Custom Mobile Apps
              </Typography>
            </li>
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Bug Fixing
              </Typography>
            </li>
          </ul>
        </div> */}
        <div className="w-full flex flex-col gap-5">
          <ul>
            <li>
              <Typography variant="h2" type="denike" className="text-background mb-4">
                Location base
              </Typography>
            </li>
            <li className="w-fit">
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground cursor-pointer hover:text-background duration-200"
              >
                Poland
              </Typography>
            </li>
          </ul>
          <ul>
            <li>
              <Typography variant="h2" type="denike" className="text-background mb-4">
                Working
              </Typography>
            </li>
            <li>
              <Typography
                variant="p"
                type="denike"
                className="text-muted-foreground flex flex-row gap-4"
              >
                Worldwide <Earth className="w-4 h-4" />
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex">
        <Typography className="text-background" variant="smallText">
          &copy; 2024 Softka – All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
