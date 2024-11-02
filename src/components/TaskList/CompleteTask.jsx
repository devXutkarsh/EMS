import React from "react";

function CompleteTask({ data }) {
  return (
    <div>
      <div className="w-[35vh] h-[35vh] bg-blue-500 flex-shrink-0 rounded-lg pt-3 px-5">
        <div className="flex justify-between  ">
          <p className="bg-red-700 text-sm px-1">{data.category}</p>
          <p>{data.date}</p>
        </div>
        <div className="pt-5">
          <p className="text-xl font-semibold ">{data.title}</p>
          <p>{data.description}</p>
        </div>
        <button className="bg-red-600 p-1 text-sm mt-4">completed task</button>
      </div>
    </div>
  );
}

export default CompleteTask;
