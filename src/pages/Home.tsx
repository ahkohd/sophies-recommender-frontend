import ItemCard from "@/components/ItemCard";
import Searchbar from "@/components/Searchbar";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { storeClient } from "@/axios";
import Product from "@/types/Product";
import HashLoader from "react-spinners/HashLoader";
import ShowProductModal from "@/components/ShowProductModal";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data: fakeProducts } = await storeClient.get(`products?limit=10`);

      setProducts(fakeProducts);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, products]
  );

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const resetSearch = () => {
    setQuery("");
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1587749091716-f7b291a87f87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)",
        }}
      >
        <div
          className="flex flex-col items-center justify-center w-full cursor-default"
          style={{ background: "rgba(0,0,0,.45)", height: "35rem" }}
        >
          <motion.h1
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl sm:text-5xl text-center font-bold mb-2 max-w-sm sm:max-w-2xl text-white"
          >
            Get recommendations for your next purchase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-xl mt-2 text-white max-w-sm sm:max-w-2xl"
          >
            An online recommender system made for you
          </motion.p>

          <Searchbar onChange={handleOnSearch} inputRef={inputRef} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-8 px-10 transform -translate-y-16">
        {filteredProducts.map((p) => (
          <ItemCard
            key={p.id}
            product={p}
            setSelectedProduct={setSelectedProduct}
          />
        ))}
      </div>

      {error && (
        <div className="h-52 flex flex-col w-full justify-center items-center">
          <h2 className="font-bold text-2xl">Unable to fetch products</h2>
          <p>An error occured while fetching products</p>
          <button
            className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white text-md font-bold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-yellow-200 focus:ring-4 px-5 w-35"
            onClick={fetchProducts}
          >
            Try again
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && products.length > 0 && (
        <div className="h-52 flex flex-col w-full justify-center items-center">
          <h2 className="font-bold text-2xl">"{query}" not found</h2>
          <p>Unable to find products, please try a new keyword...</p>
          <button
            className="mt-5 bg-yellow-500 hover:bg-yellow-600 text-white text-md font-bold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-yellow-200 focus:ring-4 px-5 w-35"
            onClick={resetSearch}
          >
            Clear search
          </button>
        </div>
      )}

      {loading && (
        <div className="h-52 flex w-full">
          <div className="m-auto">
            <HashLoader color="#f59e0b" />
          </div>
        </div>
      )}
      {/* 
      {!error && products.length > 0 && (
        <div className="w-full flex items-center justify-center py-5">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-md font-bold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-yellow-200 focus:ring-4 px-5">
            Load more
          </button>
        </div>
      )} */}

      <ShowProductModal
        product={selectedProduct}
        handleClose={() => setSelectedProduct(undefined)}
        setSelectedProduct={setSelectedProduct}
      />
    </>
  );
};

export default Home;
