import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

interface SocialNetworksProps {
  className?: string;
  iconsWidth?: number;
}

const SocialNetworks: React.FC<SocialNetworksProps> = ({
  className,
  iconsWidth,
}) => {
  return (
    <div className={`${className}`}>
      <a href="https://facebook.com" className="rounded-sm" target="_blank" rel="noopener noreferrer">
       <FaFacebookSquare color="#4A4A4A" size={iconsWidth} />
      </a>

      <a href="https://instagram.com" className="rounded-xs" target="_blank" rel="noopener noreferrer">
      <FaInstagramSquare color="#4A4A4A" size={iconsWidth} />
      </a>
    </div>
  );
};

export default SocialNetworks;
