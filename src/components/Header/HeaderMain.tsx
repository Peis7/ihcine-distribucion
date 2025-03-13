import React, { useState } from "react";
import Logo from "../Common/Logo";
import MenuItem from "./MenuItem";
import MobileMenu from "./MobileMenu";
import logo1 from "/svg/hn_gov.svg";
import logo2 from "/svg/ihcine.svg";
import logo3 from "/svg/cinehonduras_gray.svg";
import menu from "./menu";

const VITE_PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;
const VITE_IS_USING_HTTPS = import.meta.env.VITE_IS_USING_HTTPS;
const PROTOCOL = VITE_IS_USING_HTTPS === "true" ? "https" : "http";


const HeaderPrimary: React.FC = ({ }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
     <header className="block w-full bg-white shadow-md z-50 flex justify-center items-center px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl">

                <div className="flex items-center gap-x-4">
                  <Logo src={logo1} alt="Logo 1" className="h-12" />
                  <div className="border-l border-gray-300 h-6 self-center"></div>
                  <Logo src={logo2} alt="Logo 2" />
                  <div className="border-l border-gray-300 h-6 self-center"></div>
                  <Logo src={logo3} alt="Logo 3" />
                </div>

                <nav className="hidden l:flex">
                  {menu.map((item) => (
                    <MenuItem
                      key={`pm_${item.key}`}
                      label={item.label}
                      href={`${item.full ? `${PROTOCOL}://${item.link}` : `${VITE_PUBLIC_URL}${item.link}`}`}
                    />
                  ))}
                </nav>

                <button
                  className="l:hidden focus:outline-hidden"
                  onClick={handleMobileMenuToggle}
                >
                </button>
          </div>
      </header>


      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleMobileMenuToggle} />
    </>
  );
};

export default HeaderPrimary;
