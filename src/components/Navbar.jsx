import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Smart Goal Planner</h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#overview" className="hover:text-teal-400">Overview</a>
          <a href="#create" className="hover:text-teal-400">Add Goal</a>
          <a href="#goals" className="hover:text-teal-400">My Goals</a>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-4">
          <a href="#overview" className="block hover:text-teal-400">Overview</a>
          <a href="#create" className="block hover:text-teal-400">Add Goal</a>
          <a href="#goals" className="block hover:text-teal-400">My Goals</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
