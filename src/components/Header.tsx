import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "Home",
      path: "/",
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
    <header className="px-2 sm:px-10 flex items-center py-4 bg-gray-900 overflow-hidden overflow-ellipsis">
      <div className="mr-3 sm:mr-10">
        <Link
          to="/"
          className="text-white text-xl font-bold font-pacifico cursor-pointer"
        >
          Recommender
        </Link>
      </div>
      <ul className="flex items-center justify-center font-medium">
        {links.map(({ name, path }, idx) => (
          <li
            key={idx}
            className="px-1 sm:px-3 overflow-hidden overflow-ellipsis"
          >
            <NavLink
              to={path}
              exact
              className="text-md text-white hover:text-yellow-500 whitespace-nowrap overflow-ellipsis font-semibold"
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
