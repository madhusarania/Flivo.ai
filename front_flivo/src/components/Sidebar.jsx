import React from "react";

const Sidebar = () => {
  const menuItems = [
    "Crews",
    "Templates",
    "Integrations",
    "Environment Variables",
    "LLM Connections",
    "Management UI",
    "Crew Studio",
    "Usage",
    "Resources",
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-between p-6 shadow-lg">
      {/* Logo Section */}
      <div>
        <h2 className="text-3xl font-extrabold text-red-500 mb-10 tracking-wide">
          Flivo<span className="text-white">AI</span>
        </h2>
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li
              key={item}
              className="text-gray-300 text-lg font-medium cursor-pointer hover:text-white transition duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Button Section */}
      <div className="space-y-4">
        <button className="w-full bg-red-500 py-2 rounded-lg text-white font-semibold shadow hover:bg-red-600 transition duration-200">
          Settings
        </button>
        <button className="w-full bg-gray-700 py-2 rounded-lg text-white font-semibold shadow hover:bg-gray-600 transition duration-200">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
