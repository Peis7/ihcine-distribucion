import React from 'react';
import MenuItem from './MenuItem';
import menu from './menu';
import SocialNetworks from '../Common/SocialNetworks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md z-30"
          onClick={onClose} 
        />
      )}


      <div
        className={`fixed inset-y-0 right-0 w-4/5 bg-white bg-opacity-90 z-40 
            transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >

        

        <nav className="flex flex-col items-start space-y-6 mt-8 px-6">
        {
          menu.map(item => (
            <MenuItem key={`mm_${item.key}`} label={item.label} href={item.link} />
          ))
        }
        </nav>
        <SocialNetworks iconsWidth={18} className='flex justify-center space-x-6 py-4'/>
      </div>
    </>
  );
};

export default MobileMenu;
