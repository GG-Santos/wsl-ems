"use client";

import React from "react";
import Image from "next/image";

const StackedSVGs: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Image
          src="/assets/svg/License/1.svg"
          alt="SVG 1"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[2]">
        <Image
          src="/assets/svg/License/2.svg"
          alt="SVG 2"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[3]">
        <Image
          src="/assets/svg/License/3.svg"
          alt="SVG 3"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[4]">
        <Image
          src="/assets/svg/License/4.svg"
          alt="SVG 4"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[5]">
        <Image
          src="/assets/svg/License/5.svg"
          alt="SVG 5"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[6]">
        <Image
          src="/assets/svg/License/6.svg"
          alt="SVG 6"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[7]">
        <Image
          src="/assets/svg/License/7.svg"
          alt="SVG 7"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[8]">
        <Image
          src="/assets/svg/License/8.svg"
          alt="SVG 8"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[9]">
        <Image
          src="/assets/svg/License/9.svg"
          alt="SVG 9"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[10]">
        <Image
          src="/assets/svg/License/10.svg"
          alt="SVG 10"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[11]">
        <Image
          src="/assets/svg/License/11.svg"
          alt="SVG 11"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[12]">
        <Image
          src="/assets/svg/License/12.svg"
          alt="SVG 12"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[13]">
        <Image
          src="/assets/svg/License/13.svg"
          alt="SVG 13"
          fill
          sizes="100vw"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[14]">
        <Image
          src="/assets/svg/License/14.svg"
          alt="SVG 14"
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default StackedSVGs;
