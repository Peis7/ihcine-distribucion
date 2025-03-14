import React from 'react';
import Layout from '../Layout/Layout';
import HeroBanner from '../Hero/HeroGeneral';
import Headline from '../Common/Headline';
import CarouselMovies from '../Common/CarouselMovies';
import CarouselHero from '../Common/CarouselHero';
import { isMobile } from '../../utils/device';
import { carouselHeroData, carouselMoviesData } from './data';
const hero4 = "/images/playa_film.jpg";

const hero4Mobile = "/images/playa_crew_mobile.jpg";

const HomePage: React.FC = () => {


  return (
    <Layout>
      <span className='pt-12 mb-12'>
          </span>
      <div></div>
      <CarouselHero items={carouselHeroData}/>
      <Headline text='Work in' text2='Progress'/>
      <CarouselMovies items={carouselMoviesData} />
      <HeroBanner
        imageUrl={isMobile() ? hero4Mobile : hero4 }
        gradientDirection="right-to-left" 
        elements={[
          <a href='https://drive.google.com/file/d/1UfIxY_A0_zx_er6BDUaKJz5yywc5OZ5T/view?usp=drive_link' className=' cursor-pointer text-white text-left font-semibold text-xs md:text-2xl'>Catálogo</a>,
          <a href='https://youtu.be/Eh0hmQHX488' className='text-white cursor-pointer  text-left font-semibold text-xs md:text-2xl'>CINELAB</a>,
          <a href='https://drive.google.com/file/d/15xH20p8hF_UH2GPNFllKjTZ3j6DIr_Js/view?usp=drive_link' className=' text-white cursor-pointer  font-semibold text-base md:text-2xl'>Logros IHCINE</a>,
          <a href='https://youtu.be/yjY3qSVcAmk' className=' text-white cursor-pointer  font-semibold text-base md:text-2xl'>Cine desde Nuestros Pueblos</a>
        ]}
      />
    </Layout>
  );
};

export default HomePage;
