import React from "react";
import "./BoxWithCorners.css";

interface BoxWithCornersProps {
  children: React.ReactNode;
}

const BoxWithCorners = ({ children }: BoxWithCornersProps) => {
  return (
    <div className="box">
      {[0, 1].map((index) => (
        <div key={index} className={`line line-${index}`} />
      ))}
      <div className="text-[44px] font-black text-[#6D91EE] relative m-auto px-3">
        {children}
      </div>
      {[2, 3].map((index) => (
        <div key={index} className={`line line-${index}`} />
      ))}
    </div>
  );
};

export default BoxWithCorners;
