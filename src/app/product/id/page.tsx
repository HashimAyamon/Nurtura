import { useParams } from "next/navigation";
import { productsData } from "../../components/NewProduct";


const ProductDetail = () => {
  const { id } = useParams(); 
  const product = productsData.find((item: { id: string }) => item.id === id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">{product.title}</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <img src={product.img} alt={product.title} className="w-96 h-auto rounded-lg shadow-md" />
        <div className="mt-6 md:mt-0 md:ml-10">
          <p className="text-lg text-gray-600 mb-4">{product.desc}</p>
          <p className="text-2xl font-bold text-pink-600">₹{product.price.toFixed(2)}</p>
          <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded shadow-md hover:shadow-lg transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
