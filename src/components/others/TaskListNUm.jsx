import React from "react";

function NewTask({ data }) {
  console.log(data);
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="w-1/4 h-20  bg-blue-700 rounded-lg pl-4 pt-4 mt-10">
        <p className=" text-black  text-2xl font-bold">
          {data.taskCounts.newTask}
        </p>
        <p className="font-semibold pt-1 ">New Task</p>
      </div>
      <div className="w-1/4 h-20  bg-yellow-600 rounded-lg pl-4 pt-4 mt-10">
        <p className=" text-black  text-2xl font-bold">
          {data.taskCounts.active}
        </p>
        <p className="font-semibold pt-1 text-black">Accepted</p>
      </div>
      <div className="w-1/4 h-20  bg-green-600 rounded-lg pl-4 pt-4 mt-10">
        <p className=" text-black  text-2xl font-bold">
          {data.taskCounts.completed}
        </p>
        <p className="font-semibold pt-1">completed</p>
      </div>
      <div className="w-1/4 h-20  bg-red-600 rounded-lg pl-4 pt-4 mt-10">
        <p className=" text-black  text-2xl font-bold">
          {" "}
          {data.taskCounts.failed}
        </p>
        <p className="font-semibold pt-1">failed</p>
      </div>
    </div>
  );
}

export default NewTask;
