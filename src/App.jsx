import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Templates from "./components/Templates";
import Main from "./components/Main";
import Flivos from "./components/Flivos"; // Import Flivos component
import Integrations from "./components/Integrations";
import EnvironmentVariables from "./components/Environmentvariables";
import LLMConnections from "./components/LLM";
import ManagementUi from "./components/ManagementUi";
import FlivoStudio from "./components/FlivoStudio";
// import UsagePage from "./components/Usage";

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
        {currentPage === "llm-connections" && <LLMConnections />}
        {currentPage === "management-ui" && <ManagementUi />}
        {currentPage === "crew-studio" && <FlivoStudio />}
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
