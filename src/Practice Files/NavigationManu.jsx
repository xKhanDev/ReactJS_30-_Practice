import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xl">Your Logo</h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white focus:text-white"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          <a href="#" className="text-white px-3 py-2">
            Home
          </a>
          <a href="#" className="text-white px-3 py-2">
            About
          </a>
          <a href="#" className="text-white px-3 py-2">
            Services
          </a>
          {/* Add more navigation links as needed */}
        </div>
      </div>
      {/* Responsive menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center">
            <a href="#" className="text-white py-2">
              Home
            </a>
            <a href="#" className="text-white py-2">
              About
            </a>
            <a href="#" className="text-white py-2">
              Services
            </a>
            {/* Add more navigation links as needed */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
