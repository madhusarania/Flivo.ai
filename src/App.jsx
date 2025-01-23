// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Templates from "./components/Templates";
// import Main from "./components/Main";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("templates"); // Default page

//   const navigate = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <Sidebar navigate={navigate} />

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         {currentPage === "templates" && <Templates />}
//         {currentPage === "main" && <Main />}
//         {currentPage === "crews" && <div>Crews Page</div>}
//         {currentPage === "integrations" && <div>Integrations Page</div>}
//         {currentPage === "environment-variables" && (
//           <div>Environment Variables Page</div>
//         )}
//         {currentPage === "llm-connections" && <div>LLM Connections Page</div>}
//         {currentPage === "management-ui" && <div>Management UI Page</div>}
//         {currentPage === "crew-studio" && <div>Crew Studio Page</div>}
//         {currentPage === "usage" && <div>Usage Page</div>}
//         {currentPage === "resources" && <div>Resources Page</div>}
//         {currentPage === "settings" && <div>Settings Page</div>}
//       </div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Templates from "./components/Templates";
import Main from "./components/Main";
import Flivos from "./components/Flivos"; // Import Flivos component
import Integrations from "./components/Integrations";
import EnvironmentVariables from "./components/Environmentvariables";

const App = () => {
  const [currentPage, setCurrentPage] = useState("flivos"); // Default page

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar navigate={navigate} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {currentPage === "flivos" && <Flivos />}
        {currentPage === "templates" && <Templates />}{" "}
        {currentPage === "main" && <Main />}
        {currentPage === "crews" && <div>Crews Page</div>}
        {/* {currentPage === "integrations" && <div>Integrations Page</div>} */}
        {currentPage === "environment-variables" && <EnvironmentVariables />}
        {currentPage === "llm-connections" && <div>LLM Connections Page</div>}
        {currentPage === "management-ui" && <div>Management UI Page</div>}
        {currentPage === "crew-studio" && <div>Crew Studio Page</div>}
        {currentPage === "usage" && <div>Usage Page</div>}
        {currentPage === "resources" && <div>Resources Page</div>}
        {currentPage === "settings" && <div>Settings Page</div>}
        {currentPage === "integrations" && <Integrations />}
        {/* Render Flivos when currentPage is flivos */}
      </div>
    </div>
  );
};

export default App;
