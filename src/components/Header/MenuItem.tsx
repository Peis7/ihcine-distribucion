import React from 'react';
import { MenuItemProps } from '../../interfaces/MenuItemProps';


const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="text-xs mx-0 margin-0-important   py-0 px-4 xl:text-base text-clgray
        hover:text-clgray xl:px-6 xl:py-2 md:border-l-2 m-0 border-clightgray hover:border-b-4 
            hover:border-b-cgreen hover:bg-clightgray transition"
    >
      {label}
    </a>
  );
};

export default MenuItem;
