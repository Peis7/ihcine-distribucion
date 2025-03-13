import React from "react";
import { MenuItemProps } from "../../interfaces/FooterMenuItemProps";

const FooterMenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
      <>
        <a
          href={href}
          className="text-xs xl:text-sm  mx-0 py-0 
                      text-clgray hover:text-clgray xl:px-2 
                      xl:py-2 m-0 border-b-4 border-transparent
                        hover:border-cgreen hover:bg-clightgray transition"
          >
            {label}
          </a>
          <div className="border-l border-gray-300 h-[1rem] self-center mr-[4px] ml-[4px]"></div>
        </>
      );

};

export default FooterMenuItem;
