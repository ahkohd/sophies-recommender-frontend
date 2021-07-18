import { storeClient } from "@/axios";
import Product from "@/types/Product";
import { Dispatch, useCallback, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
//@ts-ignore
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import RecommendationCard from "./RecommendationCard";

interface ShowProductModalProps {
  product: Product | undefined;
  handleClose(): void;
  setSelectedProduct: Dispatch<React.SetStateAction<Product | undefined>>;
}

const ShowProductModal = ({
  product,
  handleClose,
  setSelectedProduct,
}: ShowProductModalProps) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[]>();

  const getRecommendations = useCallback(async () => {
    setLoading(true);
    try {
      const { data: fakeProducts } = await storeClient.get(
        `/products/category/${product?.category}`
      );

      setRecommendations(fakeProducts);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [product?.category]);

  useEffect(() => {
    if (product) {
      setModal(true);
    }

    getRecommendations();
  }, [product, getRecommendations]);

  const onClose = () => {
    setModal(false);
    handleClose();
  };

  return (
    <div>
      <Rodal visible={modal} onClose={onClose} className="page-modal">
        <button
          type="button"
          className="absolute right-8 top-5 focus:outline-none  focus:ring-yellow-200 focus:ring-2 rounded-sm"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#e8970b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="block sm:flex h-full p-10 overflow-scroll  sm:overflow-hidden w-full">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-44 w-full object-contain sm:w-2/6 mb-8 sm:mb-0 sm:h-full"
          />
          <div className="flex-1 cursor-default sm:pl-10 w-full sm:w-3/4  overflow-scroll">
            <h2 className="text-black text-3xl font-semibold">
              {product?.title}
            </h2>
            <h2 className="text-black text-2xl font-semibold mb-3 text-yellow-500">
              ₦ {(parseInt(product?.price ?? "0") * 500).toLocaleString()}
            </h2>
            <p className="text-sm">{product?.description}</p>
            <h2 className="text-black text-xl font-semibold mt-5 mb-7">
              Recommendations
            </h2>
            {loading && (
              <div className="h-64 flex w-full">
                <div className="m-auto">
                  <HashLoader color="#f59e0b" />
                </div>
              </div>
            )}

            {error && (
              <div className="h-52 flex flex-col w-full justify-center items-center">
                <h2 className="font-bold text-2xl">Unable to fetch products</h2>
                <p>An error occured while fetching products</p>
                <button
                  className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white text-md font-bold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-yellow-200 focus:ring-4 px-5 w-35"
                  onClick={getRecommendations}
                >
                  Try again
                </button>
              </div>
            )}

            {!loading && recommendations && (
              <div className="flex flex-nowrap overflow-x-scroll overflow-y-hidden w-full px-2 pt-2 pb-8">
                {recommendations.map((r) => (
                  <RecommendationCard
                    key={r.title}
                    product={r}
                    setSelectedProduct={setSelectedProduct}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </Rodal>
    </div>
  );
};

export default ShowProductModal;
