import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "How It Works",
      path: "/how-it-works",
    },

    {
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  return (
    <footer className="mt-10 px-4 flex flex-col items-center justify-center py-5 bg-white border-t border-yellow-100">
      <div className="flex items-center justify-center mt-8">
        <div className="mr-3 sm:mr-10">
          <Link
            to="/"
            className="text-yellow-500 text-xl font-bold font-pacifico cursor-pointer"
          >
            Recommender
          </Link>
        </div>
        <ul className="flex items-center justify-center font-medium">
          {links.map(({ name, path }) => (
            <li className="px-1 sm:px-3">
              <NavLink
                to={path}
                exact
                className="text-sm font-semibold text-gray-700 hover:text-yellow-500  whitespace-nowrap"
                activeClassName="text-red text-yellow-500"
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 cursor-default text-gray-700 text-sm">
        Made with 💜 by{" "}
        <a
          className="cursor-pointer font-semibold hover:underline hover:text-yellow-500"
          href="https://twitter.com/theesophiyah"
        >
          Sophiyat Sadiq
        </a>
      </div>
    </footer>
  );
};

export default Header;
