// import React from "react";
// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";

// function App() {
//   return (
//     <div className="flex h-screen ">
//       <Sidebar />
//       <Main />
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Templates from "./components/Templates";
import Main from "./components/Main";

const App = () => {
  const [currentPage, setCurrentPage] = useState("templates"); // Default page

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar navigate={navigate} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {currentPage === "templates" && <Templates />}
        {currentPage === "main" && <Main />}
        {currentPage === "crews" && <div>Crews Page</div>}
        {currentPage === "integrations" && <div>Integrations Page</div>}
        {currentPage === "environment-variables" && (
          <div>Environment Variables Page</div>
        )}
        {currentPage === "llm-connections" && <div>LLM Connections Page</div>}
        {currentPage === "management-ui" && <div>Management UI Page</div>}
        {currentPage === "crew-studio" && <div>Crew Studio Page</div>}
        {currentPage === "usage" && <div>Usage Page</div>}
        {currentPage === "resources" && <div>Resources Page</div>}
        {currentPage === "settings" && <div>Settings Page</div>}
      </div>
    </div>
  );
};

export default App;
