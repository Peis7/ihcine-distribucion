import React from "react";

interface HeroBannerProps {
  imageUrl: string;
  gradientDirection?: "left-to-right" | "right-to-left";
  elements: React.ReactNode[]; // Array of elements to render over the gradient
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageUrl,
  gradientDirection = "left-to-right", // Default gradient direction
  elements,
}) => {
  const gradientClass =
    gradientDirection === "right-to-left"
      ? "bg-gradient-to-l from-black via-black/70 to-transparent"
      : "bg-gradient-to-r from-black via-black/70 to-transparent";

  const alignmentClass =
    gradientDirection === "right-to-left" ? "justify-end text-right" : "justify-start text-left";

  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center mt-12"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Full-width gradient */}
      <div className={`absolute inset-0 ${gradientClass}`} />
      
      {/* Container for elements */}
      <div className={`absolute inset-0 flex items-center ${alignmentClass} w-full px-10`}>
        <div className="text-left w-2/3 md:w-1/3">
          {elements.map((element, index) => (
            <div key={index} className="pt-4 underline-offset-4 hover:underline decoration-icblue decoration-2">{element}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
