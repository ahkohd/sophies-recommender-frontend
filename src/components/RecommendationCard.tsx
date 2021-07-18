import Product from "@/types/Product";
import { truncateOnWord } from "@/utils";
import { Dispatch } from "react";
interface RecommendationCardProps {
  product?: Product;
  setSelectedProduct: Dispatch<React.SetStateAction<Product | undefined>>;
}

const RecommendationCard = ({
  product,
  setSelectedProduct,
}: RecommendationCardProps) => {
  return (
    <div className="inline-block mx-3">
      <div className="rounded-xl px-8 py-4 cursor-pointer hover:shadow-lg transition-shadow transition-transform transform hover:scale-105 w-64 h-64 max-w-xs">
        <img
          alt="item"
          className="rounded-lg h-32 object-contain m-auto"
          src={product?.image}
        />
        <h2 className="text-black text-md font-semibold mt-5 mb-2">
          {truncateOnWord(product?.title ?? "", 30)}
        </h2>
        <button
          type="button"
          className="block mb-5 font-semibold text-yellow-600 hover:text-yellow-400 hover:underline  focus:outline-none  focus:ring-yellow-200 focus:ring-2 rounded-sm"
          onClick={() => setSelectedProduct(product)}
        >
          View &#8594;
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;
