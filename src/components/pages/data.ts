import { CarouselItem } from "../../interfaces/CarouselProps";
import { isMobile } from "../../utils/device";

  
  
  const hero1 = "/images/cine_desde_nuestros_pueblos.jpg";
  const hero1_mobile = "/images/cine_desde_nuestros_pueblos_mobile.png";
  const hero4 = "/images/playa_film_p.jpg";
  const hero4_mobile = "/images/playa_crew_mobile.jpg";
  const hero2 = "/images/cinelab.jpg";
  const hero2_mobile = "/images/cinelab_mobile.jpg";
  const hero3 = "/images/formacion.jpg";
  const hero3_mobile = "/images/formacion_mobile.png";
  const peli1 = "/images/eva.jpg";
  const peli2 = "/images/donde_nace_el_sol.jpg";
  const peli3 = "/images/homo_deus.jpg";
  const peli4 = "/images/whitney.jpg";
  const peli5 = "/images/helena.jpg";
  
  export const carouselMoviesData: CarouselItem[] =  [
    {
      id: 1,
      image: { url: peli1  },
      title: "Eva",
      subtitle: "Eva",
      url: "https://www.youtube.com/watch?v=Q4ODYc6eddM",
      credits: "",
    },
    {
      id:2,
      image: { url: peli2 },
      title: "Alla donde nace el sol",
      subtitle: "Alla donde nace el sol",
      url: "https://drive.google.com/file/d/1-Act7Yr089GAf58Kog0WvJxGPs0GkBZV/view",
      credits: "",
    },
    {
      id: 3,
      image: { url: peli3 },
      title: "Home Deus",
      subtitle: "Home Deus",
      url: "https://drive.google.com/file/d/1WpXZm6H_fJxk4suS0SlpkKhv-b7el-UV/view",
      credits: "",
    },
    {
      id: 4,
      image: { url: peli4},
      title: "Whitney",
      subtitle: "Whitney",
      url: "https://drive.google.com/file/d/1HA1pPCOcAJXOiLKcjzr6Y6wCCAVVAHbI/view",
      credits: "",
    },
    {
      id: 5,
      image: { url: peli5 },
      title: "Helena",
      subtitle: "Helena",
      url: "https://www.youtube.com/watch?v=Wy25_N60cZk",
      credits: "",
    }

  ];

  export const carouselHeroData: CarouselItem[] =  [
    {
      id: 1,
      image: { url:  isMobile() ? hero4_mobile : hero4   },
      title: "",
      title2: "IHCINE",
      subtitle: `Ente gubernamental encargado de desarrollar políticas y 
                   adoptar decisiones que apoyen el desarrollo cultural, artístico, industrial y comercial
                   de la cinematografía hondureña.`,
      url: "url",
      credits: "",
    },

    {
      id: 2,
      image: { url: isMobile() ? hero2_mobile : hero2 },
      title: "",
      title2: "Cinelab",
      subtitle: `Espacio de encuentro para cineastas con proyectos en desarrollo donde reciben asesorías y
       capacitación técnica por parte de connotados cineastas del ambiente nacional e internacional`,
      url: "url",
      credits: "",
    },
    {
      id: 3,
      image: { url: isMobile() ? hero3_mobile : hero3  },
      title: "Programa de",
      title2: "Producción y Formación",
      subtitle: `Busca fomentar la capacitación constante de los cineastas,
                    para la obtención de obras de calidad, aumentando las oportunidades laborales
                     y con ello el sostenimiento solido de nuestra creciente industria
                      cinematográfica nacional.`,
      url: "url",
      credits: "",
    },
    {
      id: 4,
      image: { url: isMobile() ? hero1_mobile  : hero1 },
      title: "Cine desde",
      title2: "nuestros pueblos",
      subtitle: `Busca democratizar los recursos cinematográficos para que los pueblos 
                  originarios y afrodescendientes cuenten sus historias en sus lenguas. 
                  Asegurándole a nuestras etnias un sitial en la creciente industria cinematográfica hondureña.`,
      url: "url",
      credits: "",
    },]


    const shuffleArray = (array: CarouselItem[]): CarouselItem[] => {
      return array.sort(() => Math.random() - 0.5);
    };
    
    const randomizedCarouselMoviesData = shuffleArray(carouselMoviesData);

    export { randomizedCarouselMoviesData };