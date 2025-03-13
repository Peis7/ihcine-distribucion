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
      <div className='h-8'></div>
      <CarouselHero items={carouselHeroData}/>
      <Headline text='Work in' text2='Progress'/>
      <CarouselMovies items={carouselMoviesData} />
      <HeroBanner
        imageUrl={isMobile() ? hero4Mobile : hero4 }
        gradientDirection="right-to-left" 
        elements={[
          <a className=' cursor-pointer text-white text-left font-semibold text-xs md:text-2xl'>Catálogo</a>,
          <a className='text-white cursor-pointer  text-left font-semibold text-xs md:text-2xl'>CINELAB</a>,
          <a className=' text-white cursor-pointer  font-semibold text-base md:text-2xl'>Boletín "Fuera de Campo"</a>,
          <a className=' text-white cursor-pointer  font-semibold text-base md:text-2xl'>Cine desde Nuestros Pueblos</a>
        ]}
      />
    </Layout>
  );
};

export default HomePage;
