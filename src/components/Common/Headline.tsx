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
    <div className="flex items-center my-8">
      <div className="w-full md:w-2/3 xl:w-2/3 border-l-4 border-cgreen pl-4 h-full">
        <span
          className={`w-full text-${textColor} font-bold text-2xl l:text-2xl xxl:4xl`}
        >
          {text}
        </span>
        <span
          className={`pl-2 w-full text-icblue font-bold text-2xl l:text-2xl xxl:4xl`}
        >
          {text2}
        </span>
      </div>
    </div>
  );
};

export default Headline;
