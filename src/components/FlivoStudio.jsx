import React from "react";
import { FiPlusCircle } from "react-icons/fi"; // Using react-icons for the red icon

const StudioChats = () => {
  return (
    <div className="h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg flex h-full">
        {/* Left Panel */}
        <div className="w-1/4 border-r p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Studio Chats</h2>
            <div className="bg-red-500 p-2 rounded-full">
              <FiPlusCircle className="text-white text-2xl" />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search crews..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-gray-500 text-center mt-4">
              No Studio Chats created yet
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-3/4 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">Configure your Crew</h2>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-md font-bold mb-2">Crew Assistant</h3>
              <p className="text-gray-600">
                Hey Madhu, what are you trying to accomplish and what kind of
                automation you want to build?
              </p>
              <p className="text-gray-600 mt-2">
                Keep in mind that the tools available for the agents will take
                into account the environment variables defined, so make sure to
                set those.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex items-center mt-6">
            <textarea
              className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe what you are trying to accomplish and what kind of automation you want to build."
            ></textarea>
            <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded ml-4">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioChats;
