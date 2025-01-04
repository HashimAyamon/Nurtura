import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: number;
}

export const productsData: Product[] = [
  {
    id: "1",
    img: "/BP Monitor.jpg",
    title: "BP Checker",
    desc: "Calculate Your BP",
    rating: 5,
    price: 199.99,
  },
  {
    id: "2",
    img: "/Glucometer.jpg",
    title: "Glucometer",
    desc: "Check Your Blood Glucose Levels",
    rating: 4,
    price: 299,
  },
  {
    id: "3",
    img: "/Nebulizers.jpg",
    title: "Nebulizers",
    desc: "No More Breathing Issues",
    rating: 3,
    price: 1993.99,
  },
  {
    id: "4",
    img: "/Oximeter.jpg",
    title: "Oximeter",
    desc: "High-Performance Oximeter",
    rating: 5,
    price: 1299.99,
  },
  {
    id: "5",
    img: "/Thermometer.jpg",
    title: "Thermometer",
    desc: "Check Your Temperature",
    rating: 4,
    price: 49.99,
  },
  {
    id: "6",
    img: "/Weighing Machine.jpg",
    title: "Weighing Machine",
    desc: "Monitor Your Weight",
    rating: 2,
    price: 893.99,
  },
  {
    id: "7",
    img: "/wheelchair.jpg",
    title: "Wheelchair",
    desc: "High-Quality Wheelchairs",
    rating: 3,
    price: 43339.99,
  },
  {
    id: "8",
    img: "/SanitaryPad.jpg",
    title: "Sanitary Pad",
    desc: "Best Sanitary Pads",
    rating: 4,
    price: 49.99,
  },
];

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-6 ml-16">
        <h2 className="mb-9 ml-18 font-bold text-7xl pb-4 text-pink-500">
          <hr />
          <br />
          Our Upcoming Products
        </h2>
        <div
          className=" grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-26 xl:gap-y-20"
          aria-label="Product Grid"
        >
          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
