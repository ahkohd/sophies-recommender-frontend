import { Link } from "react-router-dom";

const ItemCard = () => {
  return (
    <div className="bg-white rounded-xl px-10 py-8 cursor-pointer shadow-md hover:shadow-2xl transition-shadow transition-transform transform hover:scale-105">
      <h2 className="text-black text-lg font-semibold mb-5">Item name</h2>
      <img
        alt="item"
        className="rounded-lg"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY608_CB432517900_.jpg"
      />
      <Link
        className="block pt-3 font-semibold text-yellow-600 hover:text-yellow-400 hover:underline"
        to="/view/id"
      >
        View &#8594;
      </Link>
    </div>
  );
};

export default ItemCard;
