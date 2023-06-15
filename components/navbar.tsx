import React from "react";
import webLogo from "../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="relative hover:animate-pulse align-top">
        <Image
          className="animate-spin"
          src={webLogo}
          alt="Website Logo"
          width={100}
          height={100}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-black text-xs font-bold tracking-wide">
            ARPIT SINGH
          </p>
        </div>
      </div>
      <div className="text-right text-md font-medium align-top space-y-2">
        <div className="md:hover:-translate-x-2">About</div>
        <div className="md:hover:-translate-x-2">Work</div>
        <div className="hover:-translate-x-2">Project</div>
      </div>
    </div>
  );
};

export default Navbar;
