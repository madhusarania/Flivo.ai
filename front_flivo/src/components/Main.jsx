import React from "react";
// import VideoSection from "./VideoSection";
import Templates from "./Templates";

const Main = () => {
  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div className="bg-gray-50 p-4 rounded shadow border">
        <h1 className="text-xl font-bold text-gray-800">
          Welcome to FlivoAI Enterprise
        </h1>
        <p className="text-gray-600">Welcome to your onboarding session!</p>
      </div>

      {/* Video Section */}
      {/* <VideoSection /> */}

      {/* Templates Section */}
      <Templates />
    </div>
  );
};

export default Main;
