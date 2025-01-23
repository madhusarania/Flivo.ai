import React, { useState } from "react";

const EnvironmentVariables = () => {
  const [variables, setVariables] = useState([{ key: "", value: "" }]);

  const handleInputChange = (index, event) => {
    const values = [...variables];
    values[index][event.target.name] = event.target.value;
    setVariables(values);
  };

  const handleAddField = () => {
    setVariables([...variables, { key: "", value: "" }]);
  };

  const handleRemoveField = (index) => {
    const values = [...variables];
    values.splice(index, 1);
    setVariables(values);
  };

  const handleSave = () => {
    // Handle saving variables
    console.log("Saved Variables: ", variables);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* New Environment Variables Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">New Environment Variables</h1>
        {variables.map((variable, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="text"
              name="key"
              value={variable.key}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Key"
              className="border border-gray-300 rounded px-4 py-2 mr-4 flex-1"
            />
            <input
              type="text"
              name="value"
              value={variable.value}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Value (not shown for security)"
              className="border border-gray-300 rounded px-4 py-2 mr-4 flex-1"
            />
            <button
              onClick={() => handleRemoveField(index)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex space-x-4">
          <button
            onClick={handleAddField}
            className="bg-white text-black border-2 px-4 py-2 rounded hover:bg-slate-200"
          >
            Add Another
          </button>
          <button
            onClick={handleSave}
            className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Save Variables
          </button>
        </div>
      </div>

      {/* Environment Variables Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
        {variables.length === 0 ? (
          <p className="text-gray-600">No environment variables found.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  KEY
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  VALUE
                </th>
                <th className="border-b border-gray-300 px-4 py-2 text-left">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {variables.map((variable, index) => (
                <tr key={index}>
                  <td className="border-b border-gray-300 px-4 py-2">
                    {variable.key}
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    ********
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleRemoveField(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EnvironmentVariables;
