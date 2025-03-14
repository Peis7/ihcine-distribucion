import React from "react";

interface HeadlineProps {
  text: string;
  text2: string;
  textColor?: string;
  classes?: string;
}

const Headline: React.FC<HeadlineProps> = ({
  text,
  text2,
  textColor
}) => {
  return (
    <div className="flex items-center mb-4 mt-16">
      <div className="w-full md:w-2/3 xl:w-2/3 border-l-4 border-icred pl-4 h-full">
        <span
          className={`w-full text-${textColor} font-bold text-2xl lg:text-3xl xxl:4xl`}
        >
          {text}
        </span>
        <span
          className={`pl-2 w-full text-icblue font-bold text-2xl lg:text-3xl xxl:4xl`}
        >
          {text2}
        </span>
      </div>
    </div>
  );
};

export default Headline;
