"use client";
import React from "react";

const Body = () => {
  return (
    <div className="flex items-center justify-between w-full h-[433px] px-[144px] gap-[32px] opacity-100 mt-8">
      
      {/* Frame 35 Container */}
      <div className="w-[442px] h-[433px] p-[52px 0.47px 52.01px 0px] gap-0">
        <img 
          src="/images/logos/Frame 35.png" 
          alt="Frame 35" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Text Content */}
      <div className="w-[601px] h-[184px] gap-16 bg-gray-400 rounded-lg shadow-md p-6">
        <h2 className="font-inter text-2xl font-semibold leading-10 text-black">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="font-inter text-base leading-6 mt-2 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          condimentum nibh ut justo efficitur, nec malesuada eros blandit. Sed
          fermentum justo eget mauris pharetra, ac ultrices nisi lobortis.
        </p>

        {/* Button */}
        <button className="w-[151px] h-[52px] p-[14px 32px] gap-10 rounded-[4px 0px 0px 0px] bg-[#4CAF4F] text-white opacity-100">
          Learn More
        </button>
      </div>
      
    </div>
  );
};

export default Body;
