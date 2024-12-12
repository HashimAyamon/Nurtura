"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const BackButton = () => {
  const router = useRouter();
  return (
    <span
      onClick={() => router.back()}
      className="text-lg text-gray-700 hover:text-pink-500 cursor-pointer transition-colors"
    >
      <i className="bi bi-arrow-left mr-2"></i>Go To Previous Page
    </span>
  );
};
