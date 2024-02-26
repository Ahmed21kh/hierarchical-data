import React, { useState, lazy } from "react";
import { data, newData } from "./MocData/MocData";
import "./App.css";
const Tree = lazy(() => import("./components/Tree/Tree"));
const App = () => {
  const [updateData, setupdateData] = useState(false);
  const handleUpdate = () => {
    setupdateData(!updateData);
  };
  return (
    <div className="bg-background   h-screen overflow-auto">
      <h2 className=" text-center mt-10 text-6xl max-md:text-5xl max-sm:text-4xl">Tree Visualization</h2>
      <button
        onClick={handleUpdate}
        className=" block mt-10 m-auto px-6 py-2 rounded-2xl text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Update Data
      </button>
      <div className=" px-16 py-16 !w-full !flex !flex-col justify-start items-start  mt-[100px] m-0">
        {updateData ? <Tree data={newData} /> : <Tree data={data} />}
      </div>
    </div>
  );
};

export default App;
