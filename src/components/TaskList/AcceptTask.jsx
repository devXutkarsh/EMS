import React from "react";

function AcceptTask({ data }) {
  return (
    <div className="w-[35vh] h-[35vh] bg-green-500 flex-shrink-0 rounded-lg pt-3 px-5">
      <div className="flex justify-between  ">
        <p className="bg-red-700 text-sm px-1">{data.category}</p>
        <p>{data.date}</p>
      </div>
      <div className="pt-5">
        <p className="text-xl font-semibold ">{data.title}</p>
        <p>{data.description}</p>
      </div>
      <div className="flex justify-between mt-4 capitalize">
        <button className="text-[13px] bg-blue-600 py-1 px-1 capitalize ">
          accepted
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
