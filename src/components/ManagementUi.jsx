// import React from "react";

// const ManagementUi = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-2xl font-semibold mb-4">Management UI</h1>
//       <div className="bg-white shadow-md rounded-lg p-8 w-3/4 md:w-1/2">
//         <div className="flex flex-col items-center">
//           <div className="text-6xl text-gray-400 mb-4">⚠️</div>
//           <h2 className="text-2xl font-bold text-gray-700 mb-2">
//             No Crews found
//           </h2>
//           <p className="text-gray-500 text-center">
//             It seems there are no Crews available at the moment. <br />
//             Please check your GitHub integration or try again later.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagementUi;
import React from "react";

const NoCrews = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-lg font-semibold mb-4">Management UI</h1>
      <div className="bg-white rounded-lg shadow-md p-10 flex flex-col items-center">
        <div className="text-gray-400 text-4xl mb-4">ℹ️</div>
        <h2 className="text-xl font-bold mb-2">No Flivos found</h2>
        <p className="text-gray-500 text-center">
          It seems there are no Flivos available at the moment. <br />
          Please check your GitHub integration or try again later.
        </p>
      </div>
    </div>
  );
};

export default NoCrews;
