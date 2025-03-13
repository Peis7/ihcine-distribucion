import React from 'react';
import HeaderMain from '../Header/HeaderMain';
import FooterComponet from '../Footer/FooterComponent';

interface LayoutProps {
  children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="bg-white w-full layout">

        <HeaderMain />
      <div className="min-h-screen block m-auto xl:max-w-7xl">

        <main className={`flex-grow`}>
          {children}
        </main>
        <div className='bg-lightblue bg-lightcoral bg-lightcyan'></div>
        <FooterComponet />
      </div>
    </div>
  );
};

export default Layout;
