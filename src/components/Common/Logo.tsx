import React from 'react';
import { LogoProps } from '../../interfaces/logoprops';



const Logo: React.FC<LogoProps> = ({ src, alt, className = '' }) => {
  return <img src={src} alt={alt} className={`h-10 ${className}`} />;
};

export default Logo;
