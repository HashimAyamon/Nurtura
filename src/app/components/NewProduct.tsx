import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/BP Monitor.jpg",
    title: "BP Checker",
    desc: "Calculate Your Bp",
    rating: 4.5,
    price: 99.99,
  },
  {
    img: "/Glucometer.jpg",
    title: "Glucometer",
    desc: "Check Your Glucometer",
    rating: 4.8,
    price: 99,
  },
  {
    img: "/Nebulizers.jpg",
    title: "Nebulizers",
    desc: "From Today No More Breathing Issue.",
    rating: 4.3,
    price: 1993.99,
  },
  {
    img: "/Oximeter.jpg",
    title: "Oximeter",
    desc: "High-performance Oximeter.",
    rating: 4.7,
    price: 1299.99,
  },
  {
    img: "/Thermometer.jpg",
    title: "Thermometer",
    desc: "Check Your Temprature.",
    rating: 4.2,
    price: 49.99,
  },
  {
    img: "/Weighing Machine.jpg",
    title: "Weighing Machine",
    desc: "Check Your Weight With Us.",
    rating: 4.6,
    price: 893.99,
  },
  {
    img: "/wheelchair.jpg",
    title: "wheelchair",
    desc: "wheelchairs.",
    rating: 4.4,
    price: 43339.99,
  },{
    img: "/SanitaryPad.jpg",
    title: "Sanitary Pad",
    desc: "Best SanitaryPad.",
    rating: 4.4,
    price: 49.99,
  },
];

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className=" ml-60 font-medium text-2xl pb-4">OUR NEW PRODUCT</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
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
