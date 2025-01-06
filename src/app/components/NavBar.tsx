"use client";

import React, { useState } from "react";
import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const NavBar = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "India",
  ];

  const languages = ["English"];

  // Specify the event type as React.ChangeEvent<HTMLSelectElement>
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Icons */}

          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wraper">
              <a
                href="https://github.com/HashimAyamon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>

            <div className="header_top__icon_wraper">
              <a
                href="https://www.linkedin.com/in/hashim-a-139a00269/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>

            <div className="header_top__icon_wraper">
              <a
                href="https://github.com/HashimAyamon"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-300 transition duration-300"
              >
                <LuInstagram />
              </a>
            </div>
          </div>

          <div className="text-gray-500 text-[20px]">
            <b>FREE DELIVERY</b> IN THIS WEEK OVER ₹999
          </div>

          <div className="flex gap-4 items-center">
            <div className="country-dropdown">
              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Dropdown */}
            <div className="language-dropdown">
              <select
                id="language"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
              >
                <option value="" disabled>
                  Select Language
                </option>
                {languages.map((language, index) => (
                  <option key={index} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
