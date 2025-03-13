import React from "react";
import menu from "./menu";
import SocialNetworks from "../Common/SocialNetworks";
import FooterMenuItem from "./FooterMenuItem";
import logo2 from "/svg/ihcine.svg";
import Logo from "../Common/Logo";

const VITE_PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;
const VITE_IS_USING_HTTPS = import.meta.env.VITE_IS_USING_HTTPS;
const PROTOCOL = VITE_IS_USING_HTTPS === "true" ? "https" : "http";

const FooterComponet: React.FC = () => {

  return (
    <footer className="border-t-2 border-t-clightgray border-clgray text-clgray py-8 px-6 mt-32">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="flex items-left flex-col justify-center ">
         <div className="flex items-left">
              <Logo src={logo2} alt="Logo 2" className="h-12" />
          </div>
          <div className="flex pt-2">
            <span className="text-xs">
                Edificio Florezca Plaza, Col. Florencia
                oeste, costado sur Mall Multiplaza, continuo 
                a farmacias siman
            </span>
          </div>
      </div>



        <div className="flex flex-col items-center l:items-end col-span-1 md:col-span-4">
          <nav className="hidden md:flex mb-4">
            <ul className="flex space-x-6">
              {menu.map((item) => (
                <FooterMenuItem
                  key={`tm_${item.key}`}
                  label={item.label}
                  href={`${item.full ? `${PROTOCOL}://${item.link}` : `${VITE_PUBLIC_URL}${item.link}`}`}
                />
              ))}
            </ul>
          </nav>
          <SocialNetworks iconsWidth={24} className="flex" />
        </div>
      </div>

      <div className="mt-8 pt-4 text-center text-xs">
        &copy; {new Date().getFullYear()} IHCINE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterComponet;
