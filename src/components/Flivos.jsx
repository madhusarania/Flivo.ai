import React from "react";
import Templates from "./Templates";

const Flivos = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-red-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to FlivoAI Enterprise</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 gap-6">
        {/* Video Section */}
        <div className="lg:w-1/2 w-full">
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://flivo.ai/wp-content/uploads/2024/09/flivo-final.mp4"
              title="Onboarding Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4">
            Welcome to your onboarding session!
          </h2>
          <p className="text-gray-600 mb-2">
            Let's get you started with deploying your first flivo and connecting
            your GitHub account.
          </p>
          <p className="text-gray-600">
            In the video on the left, we'll walk you through the process of
            creating a new flivo, selecting it, and automatically turning it
            into an API endpoint.
          </p>
        </div>
      </div>
      <Templates />
    </div>
  );
};

export default Flivos;
