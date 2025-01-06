"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";  

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/banner1.png",
    "/banner2.png",
    "/banner4.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <Image
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        layout="responsive"  
        width={1920}  
        height={600}  
        className="object-cover w-full h-auto"  
      />
      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={() =>
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
          }
          className="bg-gray-600 text-white p-2 rounded-full"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() =>
            setCurrentImage((prev) => (prev + 1) % images.length)
          }
          className="bg-gray-600 text-white p-2 rounded-full"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
