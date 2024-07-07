"use client";

import React from "react";
import Image from "next/image";
const Firstsection = () => {
  return (
    <section className="md:py-20 py-16 bg-gradient-to-r from gray-00 to-gray-200 spacey-10">
       
       <div className="flex items-center justify-between gap-[104px]">
            <div>
              <h1 className="text-left font-inter font-semibold text-[64px] leading-[76px]">
                Lessons and insights <br /> <span className="text-green-500"> from 8 years</span>
              </h1>
              <p className="mt-4 text-left text-lg">
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded">
                Register
              </button>
            </div>
            <div>
                <img src="images/Illustration.png" alt="Hero Image" />
            </div>

          </div>
         
    </section>
  );
}

export default Firstsection