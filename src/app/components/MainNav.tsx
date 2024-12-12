import React from "react";
import Link from "next/link";
import { BackButton } from "./BackButton";

const MainNav = () => {
  return (
    <nav className="bg-white shadow-lg py-4">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-all">
          <Link href="/">NURTURA</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <Link
            href="/"
            className="text-lg text-gray-700 hover:text-pink-500 transition-colors duration-300 ease-in-out"
          >
            HOME
          </Link>
          <Link
            href="/blog"
            className="text-lg text-gray-700 hover:text-pink-500 transition-colors duration-300 ease-in-out"
          >
            Blog
          </Link>
          <Link
            href="/about-us"
            className="text-lg text-gray-700 hover:text-pink-500 transition-colors duration-300 ease-in-out"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="text-lg text-gray-700 hover:text-pink-500 transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </Link>

          {/* BackButton */}
          <BackButton />
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
