"use client";

import React from "react";

const Clients = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#4D4D4D] text-white">
      {/* Title and Description Section */}
      <div className="flex flex-col items-center justify-center w-[1110px] h-[76px] gap-2 opacity-100 text-center space-y-2 mb-12">
        <h1 className="font-inter font-semibold text-[36px] leading-[44px]">
          Our Clients
        </h1>
        <p className="font-inter font-normal text-[16px] leading-[24px]">
          Our clients are our top priority. We strive to provide the best service and ensure their satisfaction.
        </p>
      </div>
      
      {/* Client Logos Section */}
      <div className="flex w-full max-w-[1152px] h-[98px] gap-0 justify-between opacity-100 mx-auto">
        <img
          src="/images/logos/Logo (1).png"
          alt="Client Logo 1"
          className="object-contain w-[48px] h-[48px] p-[4px] rounded-tl-[8px] opacity-100"
        />
        <img
          src="/images/logos/Logo (2).png"
          alt="Client Logo 2"
          className="object-contain w-auto h-[98px]"
        />
        <img
          src="/images/logos/Logo (3).png"
          alt="Client Logo 3"
          className="object-contain w-auto h-[98px]"
        />
        <img
          src="/images/logos/Logo (4).png"
          alt="Client Logo 4"
          className="object-contain w-auto h-[98px]"
        />
         <img
          src="/images/logos/Logo (5).png"
          alt="Client Logo 4"
          className="object-contain w-auto h-[98px]"
        />
         <img
          src="/images/logos/Logo (6).png"
          alt="Client Logo 4"
          className="object-contain w-auto h-[98px]"
        />
         <img
          src="/images/logos/Logo (7).png"
          alt="Client Logo 4"
          className="object-contain w-auto h-[98px]"
        />
         
      </div>
    </section>
  );
};

export default Clients;
