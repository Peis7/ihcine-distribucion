import React from "react";

interface HeroBannerWithImageProps {
  imageUrl: string;
  title: string;
  title1: string;
  excerpt: string;
}

const HeroBannerWithImage: React.FC<HeroBannerWithImageProps> = ({
  imageUrl,
  title,
  title1,
  excerpt,
}) => {
  return (
    <div className="relative w-full h-full">
  <img src={imageUrl} alt="Hero Banner" className="w-full h-full object-cover" />
  
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 lg:bg-gradient-to-r  to-transparent w-full"></div>

  <div className="absolute  bottom-0 h-1/2 w-full flex items-end lg:items-center px-10 text-white lg:h-full lg:w-1/2 pb-5 lg:pb-0">
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h1>
      <h1 className="text-icblue text-2xl md:text-3xl lg:text-4xl font-bold">{title1}</h1>
      <p className="text-xs md:text-base lg:text-lg mt-2">{excerpt}</p>
    </div>
  </div>
</div>

  );
};

export default HeroBannerWithImage;
