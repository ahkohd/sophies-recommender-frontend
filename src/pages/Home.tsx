import ItemCard from "@/components/ItemCard";
import Searchbar from "@/components/Searchbar";
import { motion } from "framer-motion";

const Home = () => {
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
            className="text-5xl text-center font-bold mb-2 max-w-2xl text-white"
          >
            Get recommendations for your next Electronics purchase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: 5 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-xl mt-2 text-white"
          >
            An online electronics recommender system made for you
          </motion.p>

          <Searchbar />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 px-10 transform -translate-y-12">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      <div className="w-full flex items-center justify-center py-5">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:ring-yellow-200 focus:ring-4">
          Load more
        </button>
      </div>
    </>
  );
};

export default Home;
