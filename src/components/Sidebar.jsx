// import React from "react";

// const Sidebar = () => {
//   const menuItems = [
//     "Crews",
//     "Templates",
//     "Integrations",
//     "Environment Variables",
//     "LLM Connections",
//     "Management UI",
//     "Crew Studio",
//     "Usage",
//     "Resources",
//   ];

//   return (
//     <div className="w-64 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-between p-6 shadow-lg">
//       {/* Logo Section */}
//       <div>
//         <h2 className="text-3xl font-extrabold text-red-500 mb-10 tracking-wide">
//           Flivo<span className="text-white">AI</span>
//         </h2>
//         <ul className="space-y-6">
//           {menuItems.map((item) => (
//             <li
//               key={item}
//               className="text-gray-300 text-lg font-medium cursor-pointer hover:text-white transition duration-200"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Button Section */}
//       <div className="space-y-4">
//         <button className="w-full bg-red-500 py-2 rounded-lg text-white font-semibold shadow hover:bg-red-600 transition duration-200">
//           Settings
//         </button>
//         <button className="w-full bg-gray-700 py-2 rounded-lg text-white font-semibold shadow hover:bg-gray-600 transition duration-200">
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React from "react";

// const Sidebar = ({ navigate }) => {
//   return (
//     <div className="sidebar bg-gray-900 text-white h-screen p-4 flex flex-col justify-between">
//       <h1 className="text-2xl font-bold mb-6">FlivoAI</h1>
//       <nav>
//         <ul>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("crews")}
//             >
//               Crews
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("templates")}
//             >
//               Templates
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("integrations")}
//             >
//               Integrations
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("environment-variables")}
//             >
//               Environment Variables
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("llm-connections")}
//             >
//               LLM Connections
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("management-ui")}
//             >
//               Management UI
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("crew-studio")}
//             >
//               Crew Studio
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("usage")}
//             >
//               Usage
//             </button>
//           </li>
//           <li>
//             <button
//               className="w-full text-left p-2 hover:bg-gray-700"
//               onClick={() => navigate("resources")}
//             >
//               Resources
//             </button>
//           </li>
//         </ul>
//       </nav>
//       <div>
//         <button
//           className="w-full p-2 bg-red-600 hover:bg-red-700 mb-2"
//           onClick={() => navigate("settings")}
//         >
//           Settings
//         </button>
//         <button
//           className="w-full p-2 bg-gray-800 hover:bg-gray-700"
//           onClick={() => alert("Logged out")}
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React from "react";
import { FaFolder, FaLink, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BiTestTube } from "react-icons/bi";
import { BsFillBarChartFill, BsFillGridFill } from "react-icons/bs";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { RiFileList2Fill } from "react-icons/ri";

const Sidebar = ({ navigate }) => {
  return (
    <div className="sidebar bg-white text-black shadow h-screen p-4 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="mb-6">
        <img
          src="/path-to-your-logo.png" // Replace with the actual path to your logo
          alt="Logo"
          className="mb-2 w-full h-12 object-contain"
        />
        <h1 className="text-xl font-bold">
          Flivo.ai <span className="text-red-500">enterprise</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("crews")}
            >
              <FaFolder className="mr-3" /> Flivo
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded font-bold text-red-500"
              onClick={() => navigate("templates")}
            >
              <RiFileList2Fill className="mr-3" /> Templates
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("integrations")}
            >
              <MdOutlineIntegrationInstructions className="mr-3" /> Integrations
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("environment-variables")}
            >
              <BiTestTube className="mr-3" /> Environment Variables
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("llm-connections")}
            >
              <FaLink className="mr-3" /> LLM Connections
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("management-ui")}
            >
              <BsFillGridFill className="mr-3" /> Management UI
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("crew-studio")}
            >
              <FaCogs className="mr-3" /> Flivo Studio
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("usage")}
            >
              <BsFillBarChartFill className="mr-3" /> Usage
            </button>
          </li>
          <li>
            <button
              className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
              onClick={() => navigate("resources")}
            >
              <FaFolder className="mr-3" /> Resources
            </button>
          </li>
        </ul>
      </nav>

      {/* Settings and Logout */}
      <div>
        <button
          className="flex items-center w-full text-left p-2 hover:bg-gray-100 rounded"
          onClick={() => navigate("settings")}
        >
          <FiSettings className="mr-3" /> Settings
        </button>
        <button
          className="flex items-center justify-center w-full p-2 bg-red-500 text-white hover:bg-red-600 rounded mt-4"
          onClick={() => alert("Logged out")}
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
