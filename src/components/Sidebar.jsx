import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile devices */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1e293b] text-white p-2 fixed top-4 left-4 z-50 rounded-md md:hidden"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-[#1e293b] text-white w-64 h-full fixed top-0 left-0 shadow-lg z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:h-auto`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-[#0f172a] rounded">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-[#0f172a] rounded">
                Goals
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-[#0f172a] rounded">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
