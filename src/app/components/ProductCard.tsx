import React from "react";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Link from "next/link";  // Link import

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
  id: string;  // Add id prop
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
  id,
}) => {
  const generatedRating = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex items-center gap-1 text-[20px] text-[#FF9529]">
        {[...Array(fullStars)].map((_, i) => (
          <AiFillStar key={`full-${i}`} />
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <AiOutlineStar key={`empty-${i}`} />
        ))}
        <span className="text-sm text-gray-600 ml-2">({rating.toFixed(1)}/5)</span>
      </div>
    );
  };

  return (
    <Link href={`/product/${id}`} passHref>  {/* Using Link with id */}
      <div className="p-4 border border-gray-200 rounded-xl w-[300px] h-[450px] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out bg-white flex flex-col">
        <div className="relative h-48 w-full overflow-hidden rounded-md">
          <Image
            className="object-cover"
            src={img}
            alt={title}
            fill
            sizes="(max-width: 300px) 100vw, 300px"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow py-4 space-y-3">
          <h2 className="text-lg font-semibold uppercase text-gray-800 text-center">{title}</h2>
          <p className="text-sm text-gray-600 text-center">{desc}</p>
          <div className="flex items-center justify-center">{generatedRating(rating)}</div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xl font-bold text-accent">₹{price.toFixed(2)}</span>
            <del className="text-gray-500 text-sm">₹{(price + 99).toFixed(2)}</del>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
