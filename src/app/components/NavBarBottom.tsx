'use client';  // Add this to mark the component as a client component

import React from "react";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import { useRouter } from "next/navigation";  

const NavBarBottom = () => {
  const router = useRouter();  

 

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Image
            src="/LOGO.png"
            alt="Logo"
            width={140}
            height={100}
            className="mx-auto"
          />
        </div>
        <div className="w-full sm:w-[300px] md:w-[72%] relative">
          <div className="relative">
            <input
              className="border-gray-200 border p-2 pl-4 pr-10 rounded-lg w-full"
              type="text"
              placeholder="Enter Product Name"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <BsSearch />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {/* Notification badge for wishlist */}
            </div>
          </div>
          <div className="relative" >  
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
        

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarBottom;
