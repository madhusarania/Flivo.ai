// // // import React, { useState } from "react";

// // // const LLMConnections = () => {
// // //   const [variables, setVariables] = useState([{ key: "", value: "" }]);

// // //   const handleVariableChange = (index, field, value) => {
// // //     const newVariables = [...variables];
// // //     newVariables[index][field] = value;
// // //     setVariables(newVariables);
// // //   };

// // //   const addVariable = () => {
// // //     setVariables([...variables, { key: "", value: "" }]);
// // //   };

// // //   const removeVariable = (index) => {
// // //     setVariables(variables.filter((_, i) => i !== index));
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h1 className="text-2xl font-bold mb-6">LLM Connections</h1>
// // //       <div className="bg-white p-6 rounded-lg shadow">
// // //         <h2 className="text-xl font-semibold mb-4">New LLM Connection</h2>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Connection Name
// // //             </label>
// // //             <input
// // //               type="text"
// // //               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// // //               placeholder="LLM Connection Name"
// // //             />
// // //           </div>
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Provider
// // //             </label>
// // //             <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
// // //               <option>Select Provider</option>
// // //               <option>Provider 1</option>
// // //               <option>Provider 2</option>
// // //             </select>
// // //           </div>
// // //         </div>
// // //         <h3 className="text-lg font-semibold mb-2">Environment Variables</h3>
// // //         {variables.map((variable, index) => (
// // //           <div key={index} className="flex items-center space-x-4 mb-2">
// // //             <input
// // //               type="text"
// // //               className="flex-1 border border-gray-300 rounded-md p-2"
// // //               placeholder="ENV_VAR_KEY"
// // //               value={variable.key}
// // //               onChange={(e) =>
// // //                 handleVariableChange(index, "key", e.target.value)
// // //               }
// // //             />
// // //             <input
// // //               type="text"
// // //               className="flex-1 border border-gray-300 rounded-md p-2"
// // //               placeholder="env-var-value"
// // //               value={variable.value}
// // //               onChange={(e) =>
// // //                 handleVariableChange(index, "value", e.target.value)
// // //               }
// // //             />
// // //             <button
// // //               className="text-red-500"
// // //               onClick={() => removeVariable(index)}
// // //             >
// // //               ✕
// // //             </button>
// // //           </div>
// // //         ))}
// // //         <button className="text-blue-500 mb-4" onClick={addVariable}>
// // //           + Add Variable
// // //         </button>
// // //         <button className="bg-red-500 text-white px-4 py-2 rounded-md">
// // //           Add Connection
// // //         </button>
// // //       </div>

// // //       <div className="mt-8 bg-white p-6 rounded-lg shadow">
// // //         <h2 className="text-xl font-semibold mb-4">Existing LLM Connections</h2>
// // //         <table className="w-full text-left border-collapse">
// // //           <thead>
// // //             <tr>
// // //               <th className="border-b py-2">Name</th>
// // //               <th className="border-b py-2">Provider</th>
// // //               <th className="border-b py-2">Available Models</th>
// // //               <th className="border-b py-2">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             <tr>
// // //               <td className="py-2">No LLM connections found</td>
// // //               <td></td>
// // //               <td></td>
// // //               <td></td>
// // //             </tr>
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LLMConnections;
// // import React, { useState } from "react";

// // const LLMConnections = () => {
// //   const [isTableView, setIsTableView] = useState(true);
// //   const [variables, setVariables] = useState([{ key: "", value: "" }]);
// //   const [bulkInput, setBulkInput] = useState("");

// //   const handleVariableChange = (index, field, value) => {
// //     const newVariables = [...variables];
// //     newVariables[index][field] = value;
// //     setVariables(newVariables);
// //   };

// //   const addVariable = () => {
// //     setVariables([...variables, { key: "", value: "" }]);
// //   };

// //   const removeVariable = (index) => {
// //     setVariables(variables.filter((_, i) => i !== index));
// //   };

// //   const handleBulkInputChange = (e) => {
// //     setBulkInput(e.target.value);
// //   };

// //   const parseBulkInput = () => {
// //     const parsed = bulkInput.split("\n").map((line) => {
// //       const [key, value] = line.split("=");
// //       return { key: key?.trim() || "", value: value?.trim() || "" };
// //     });
// //     setVariables(parsed.filter((v) => v.key));
// //     setIsTableView(true);
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-2xl font-bold mb-6">LLM Connectors</h1>
// //       <div className="bg-white p-6 rounded-lg shadow">
// //         <h2 className="text-xl font-semibold mb-4">New LLM Connection</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Connection Name
// //             </label>
// //             <input
// //               type="text"
// //               className="mt-1 block w-full border border-gray-300 rounded-md p-2"
// //               placeholder="LLM Connection Name"
// //             />
// //           </div>
// //           <div>
// //             <label className="block text-sm font-medium text-gray-700">
// //               Provider
// //             </label>
// //             <select className="mt-1 block w-full border border-gray-300 rounded-md p-2">
// //               <option>Select Provider</option>
// //               <option>Provider 1</option>
// //               <option>Provider 2</option>
// //             </select>
// //           </div>
// //         </div>
// //         <h3 className="text-lg font-semibold mb-2">Environment Variables</h3>
// //         {isTableView ? (
// //           <>
// //             {variables.map((variable, index) => (
// //               <div key={index} className="flex items-center space-x-4 mb-2">
// //                 <input
// //                   type="text"
// //                   className="flex-1 border border-gray-300 rounded-md p-2"
// //                   placeholder="ENV_VAR_KEY"
// //                   value={variable.key}
// //                   onChange={(e) =>
// //                     handleVariableChange(index, "key", e.target.value)
// //                   }
// //                 />
// //                 <input
// //                   type="text"
// //                   className="flex-1 border border-gray-300 rounded-md p-2"
// //                   placeholder="env-var-value"
// //                   value={variable.value}
// //                   onChange={(e) =>
// //                     handleVariableChange(index, "value", e.target.value)
// //                   }
// //                 />
// //                 <button
// //                   className="text-red-500"
// //                   onClick={() => removeVariable(index)}
// //                 >
// //                   ✕
// //                 </button>
// //               </div>
// //             ))}
// //             <button className="text-blue-500 mb-4" onClick={addVariable}>
// //               + Add Variable
// //             </button>
// //             <button
// //               className="text-red-500 underline mb-4"
// //               onClick={() => setIsTableView(false)}
// //             >
// //               ↕ Switch to Bulk View
// //             </button>
// //           </>
// //         ) : (
// //           <>
// //             <textarea
// //               className="w-full border border-gray-300 rounded-md p-2 h-32 mb-4"
// //               placeholder="KEY=value"
// //               value={bulkInput}
// //               onChange={handleBulkInputChange}
// //             />
// //             <button className="text-blue-500 mb-4" onClick={parseBulkInput}>
// //               Apply Bulk Input
// //             </button>
// //             <button
// //               className="text-red-500 underline mb-4"
// //               onClick={() => setIsTableView(true)}
// //             >
// //               ↕ Switch to Table View
// //             </button>
// //           </>
// //         )}
// //         <button className="bg-red-500 text-white px-4 py-2 rounded-md">
// //           Add Connection
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LLMConnections;
// import React, { useState } from "react";

// const LLMConnection = () => {
//   const [variablesView, setVariablesView] = useState("table"); // 'table' or 'bulk'
//   const [envVariables, setEnvVariables] = useState([{ key: "", value: "" }]);

//   const handleVariableChange = (index, field, value) => {
//     const newEnvVariables = [...envVariables];
//     newEnvVariables[index][field] = value;
//     setEnvVariables(newEnvVariables);
//   };

//   const addVariable = () => {
//     setEnvVariables([...envVariables, { key: "", value: "" }]);
//   };

//   const switchView = () => {
//     setVariablesView(variablesView === "table" ? "bulk" : "table");
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6">LLM Connections</h2>

//       {/* New LLM Connection Form */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//         <h3 className="text-xl font-semibold mb-4">New LLM Connection</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block font-medium text-gray-700">
//               Connection Name
//             </label>
//             <input
//               type="text"
//               className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="LLM Connection Name"
//             />
//           </div>
//           <div>
//             <label className="block font-medium text-gray-700">Provider</label>
//             <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
//               <option>Select Provider</option>
//               <option>Provider 1</option>
//               <option>Provider 2</option>
//             </select>
//           </div>
//         </div>
//         <div className="mt-6">
//           <label className="block font-medium text-gray-700">
//             Environment Variables
//           </label>
//           {variablesView === "table" ? (
//             <div>
//               {envVariables.map((variable, index) => (
//                 <div key={index} className="flex items-center space-x-4 mb-2">
//                   <input
//                     type="text"
//                     className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                     placeholder="ENV_VAR_KEY"
//                     value={variable.key}
//                     onChange={(e) =>
//                       handleVariableChange(index, "key", e.target.value)
//                     }
//                   />
//                   <input
//                     type="text"
//                     className="flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                     placeholder="env-var-value"
//                     value={variable.value}
//                     onChange={(e) =>
//                       handleVariableChange(index, "value", e.target.value)
//                     }
//                   />
//                 </div>
//               ))}
//               <button onClick={addVariable} className="text-indigo-600 mt-2">
//                 + Add Variable
//               </button>
//               <button onClick={switchView} className="ml-4 text-indigo-600">
//                 Switch to Bulk View
//               </button>
//             </div>
//           ) : (
//             <div>
//               <textarea
//                 className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
//                 rows="4"
//                 placeholder="KEY=value"
//               ></textarea>
//               <button onClick={switchView} className="mt-2 text-indigo-600">
//                 Switch to Table View
//               </button>
//             </div>
//           )}
//         </div>
//         <button className="mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
//           Add Connection
//         </button>
//       </div>

//       {/* Existing LLM Connections */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h3 className="text-xl font-semibold mb-4">Existing LLM Connections</h3>
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr>
//               <th className="border-b p-4">Name</th>
//               <th className="border-b p-4">Provider</th>
//               <th className="border-b p-4">Available Models</th>
//               <th className="border-b p-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border-b p-4">Sample Connection</td>
//               <td className="border-b p-4">Provider 1</td>
//               <td className="border-b p-4">Model A, Model B</td>
//               <td className="border-b p-4 text-indigo-600 cursor-pointer">
//                 Edit | Delete
//               </td>
//             </tr>
//             <tr>
//               <td
//                 className="border-b p-4"
//                 colSpan="4"
//                 className="text-center text-gray-500"
//               >
//                 No LLM connections found
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LLMConnection;
import React, { useState } from "react";

const LLM = () => {
  const [connectionName, setConnectionName] = useState("");
  const [provider, setProvider] = useState("");
  const [envVariables, setEnvVariables] = useState([{ key: "", value: "" }]);
  const [bulkView, setBulkView] = useState(false);

  const addVariable = () => {
    setEnvVariables([...envVariables, { key: "", value: "" }]);
  };

  const handleEnvChange = (index, field, value) => {
    const newEnvVariables = [...envVariables];
    newEnvVariables[index][field] = value;
    setEnvVariables(newEnvVariables);
  };

  const removeVariable = (index) => {
    setEnvVariables(envVariables.filter((_, i) => i !== index));
  };

  const handleAddConnection = () => {
    console.log({
      connectionName,
      provider,
      envVariables,
    });
    // Reset form
    setConnectionName("");
    setProvider("");
    setEnvVariables([{ key: "", value: "" }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">LLM Connectors</h1>

      {/* New LLM Connection */}
      <div className="border rounded-lg p-6 bg-white mb-8">
        <h2 className="text-lg font-semibold mb-4">New LLM Connection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Connection Name</label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="LLM Connection Name"
              value={connectionName}
              onChange={(e) => setConnectionName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Provider</label>
            <select
              className="w-full border rounded p-2 mt-1"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            >
              <option value="">Select Provider</option>
              <option value="OpenAI">OpenAI</option>
              <option value="Anthropic">Anthropic</option>
              <option value="Cohere">Cohere</option>
            </select>
          </div>
        </div>

        {/* Environment Variables */}
        <div className="mt-4">
          <label className="block text-gray-700">Environment Variables</label>
          {!bulkView ? (
            envVariables.map((variable, index) => (
              <div key={index} className="flex items-center gap-4 mt-2">
                <input
                  type="text"
                  className="w-1/2 border rounded p-2"
                  placeholder="ENV_VAR_KEY"
                  value={variable.key}
                  onChange={(e) =>
                    handleEnvChange(index, "key", e.target.value)
                  }
                />
                <input
                  type="text"
                  className="w-1/2 border rounded p-2"
                  placeholder="env-var-value"
                  value={variable.value}
                  onChange={(e) =>
                    handleEnvChange(index, "value", e.target.value)
                  }
                />
                <button
                  className="text-red-500"
                  onClick={() => removeVariable(index)}
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <textarea
              className="w-full border rounded p-2 mt-2"
              placeholder="KEY=value"
              rows="4"
            ></textarea>
          )}
          <div className="flex items-center gap-4 mt-2">
            <button className="text-blue-500" onClick={addVariable}>
              + Add Variable
            </button>
            <button
              className="text-blue-500"
              onClick={() => setBulkView(!bulkView)}
            >
              ↕ {bulkView ? "Switch to Table View" : "Switch to Bulk View"}
            </button>
          </div>
        </div>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-6"
          onClick={handleAddConnection}
        >
          Add Connection
        </button>
      </div>

      {/* Existing LLM Connections */}
      <div className="border rounded-lg p-6 bg-white">
        <h2 className="text-lg font-semibold mb-4">Existing LLM Connections</h2>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-4">Name</th>
              <th className="border p-4">Provider</th>
              <th className="border p-4">Available Models</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                className="border-b p-4 text-center text-gray-500"
                colSpan="4"
              >
                No LLM connections found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LLM;
