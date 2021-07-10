import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "How It Works",
      path: "/how-it-works",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <header className="px-10 flex items-center  py-4 bg-gray-900">
      <div className="mr-10">
        <Link
          to="/"
          className="text-white text-xl font-bold font-pacifico cursor-pointer"
        >
          Recommender
        </Link>
      </div>
      <ul className="flex items-center justify-center font-medium">
        {links.map(({ name, path }) => (
          <li className="px-3">
            <NavLink
              to={path}
              exact
              className="text-md text-white hover:text-yellow-500"
              activeClassName="text-red text-yellow-500"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
