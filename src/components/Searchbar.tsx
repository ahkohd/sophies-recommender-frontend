const Searchbar = () => {
  return (
    <div className="flex items-center justify-center my-10 relative w-11/12 sm:w-11/12 md:w-11/12 lg:w-1/2 group">
      <input
        type="search"
        placeholder="Search for electronics recommendations"
        className="w-full rounded-lg px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />
      <svg
        className="absolute group-focus:text-yellow-500"
        style={{ top: "calc(50% - 24px /2)", right: "20px" }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
};

export default Searchbar;
