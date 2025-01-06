"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";  // Import Image from next/image

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
    <div className="banner-container">
      <Image
        src={images[currentImage]}
        alt={`Slide ${currentImage + 1}`}
        width={1000}  // Set a width
        height={500}  // Set a height (adjust according to your design)
        className="object-cover"
      />
      <div className="banner-buttons">
        <button
          onClick={() =>
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
          }
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() =>
            setCurrentImage((prev) => (prev + 1) % images.length)
          }
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
