export interface CarouselItem {
    id: number;
    image: { url: string };
    title: string;
    title2?: string;
    subtitle: string;
    url: string;
    credits?: string;
  }
  
  export interface CarouselProps {
    items: CarouselItem[];
  }
  