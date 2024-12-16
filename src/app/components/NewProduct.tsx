import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/BP Monitor.jpg",
    title: "BP Checker",
    desc: "Calculate Your Bp",
    rating: 5,
    price: 99.99,
  },
  {
    img: "/Glucometer.jpg",
    title: "Glucometer",
    desc: "Check Your Glucometer",
    rating: 4,
    price: 99,
  },
  {
    img: "/Nebulizers.jpg",
    title: "Nebulizers",
    desc: "From Today No More Breathing Issue.",
    rating: 3,
    price: 1993.99,
  },
  {
    img: "/Oximeter.jpg",
    title: "Oximeter",
    desc: "High-performance Oximeter.",
    rating: 5,
    price: 1299.99,
  },
  {
    img: "/Thermometer.jpg",
    title: "Thermometer",
    desc: "Check Your Temprature.",
    rating: 4,
    price: 49.99,
  },
  {
    img: "/Weighing Machine.jpg",
    title: "Weighing Machine",
    desc: "Check Your Weight With Us.",
    rating: 2,
    price: 893.99,
  },
  {
    img: "/wheelchair.jpg",
    title: "wheelchair",
    desc: "wheelchairs.",
    rating: 3,
    price: 43339.99,
  },{
    img: "/SanitaryPad.jpg",
    title: "Sanitary Pad",
    desc: "Best SanitaryPad.",
    rating: 4,
    price: 49.99,
  },
];

const NewProduct = () => {
  return (
    <div>
      <div className="container pt-6">
        <h2 className="mb-9 ml-14 font-bold text-7xl pb-4 text-pink-500"><hr /><br />Our Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
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
