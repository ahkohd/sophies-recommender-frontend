import Product from "@/types/Product";
import { truncateOnWord } from "@/utils";
import { Dispatch } from "react";
interface ItemCardProps {
  product: Product;
  setSelectedProduct: Dispatch<React.SetStateAction<Product | undefined>>;
}

const ItemCard = ({ product, setSelectedProduct }: ItemCardProps) => {
  return (
    <div className="bg-white rounded-xl px-10 py-8 cursor-pointer shadow-md hover:shadow-2xl transition-shadow transition-transform transform hover:scale-105">
      <h2 className="text-black text-lg font-semibold mb-5">
        {truncateOnWord(product.title, 30)}
      </h2>
      <img
        alt="item"
        className="rounded-lg h-52 object-contain m-auto"
        src={product.image}
      />
      <button
        type="button"
        className="block mt-3 font-semibold text-yellow-600 hover:text-yellow-400 hover:underline  focus:outline-none  focus:ring-yellow-200 focus:ring-2 rounded-sm"
        onClick={() => setSelectedProduct(product)}
      >
        View &#8594;
      </button>
    </div>
  );
};

export default ItemCard;
