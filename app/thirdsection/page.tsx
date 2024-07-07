"use client";

import React from "react";

const Community = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#4D4D4D] text-white">
      {/* Container for the whole section */}
      <div className="flex flex-col items-center justify-center w-[1440px] h-[416px] gap-4 opacity-100 bg-[#4D4D4D] text-center p-8 mx-auto">
        {/* Title and Description Section */}
        <div className="w-[542px] h-[88px] gap-0 opacity-100">
          <h1 className="font-inter font-semibold text-[36px] leading-[44px] text-center">
            Manage your entire community in a single system
          </h1>
        </div>
        
        {/* New Typography Section */}
        <div className="w-[1440px] h-[24px] gap-0 opacity-100 mt-4">
          <p className="font-inter font-normal text-[16px] leading-[24px] text-center">
            Who is Nextcent suitable for?
          </p>
        </div>
      </div>
       
      
      {/* Row Section: Membership Organizations, National Association, National Associations */}
      <div className="flex justify-between w-[1440px] h-[280px] px-[144px] gap-[32px] opacity-100 mt-8">
        
        {/* Section: Membership Organizations */}
        <div className="flex flex-col items-center justify-between w-[299px] h-[260px] p-[24px 32px] gap-8 bg-white rounded-[8px 0px 0px 0px] shadow-md">
          <img
            src="/images/logos/Membership Organizatios.png"
            alt="Membership Organizations"
            className="object-contain w-full h-full"
          />
        </div>
        
        {/* Section: National Association */}
        <div className="flex flex-col items-center justify-between w-[299px] h-[260px] p-[24px 32px] gap-8 bg-white rounded-[8px 0px 0px 0px] shadow-md">
        <img
            src="/images/logos/National Associations.png"
            alt="Membership Organizations"
            className="object-contain w-full h-full"
          />
        </div>
        
        {/* Section: National Associations */}
        <div className="flex flex-col items-center justify-between w-[299px] h-[260px] p-[24px 32px] gap-8 bg-white rounded-[8px 0px 0px 0px] shadow-md">
        <img
            src="/images/logos/National Associations (1).png"
            alt="Membership Organizations"
            className="object-contain w-full h-full"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Community;
