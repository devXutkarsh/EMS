import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const authData = useContext(AuthContext);

  console.log(authData.employees);
  return (
    <div
      id="alltask
    "
      className="pt-10 w-full h-60 mt-5  text-white "
    >
      <div className="bg-red-600 w-full  py-1 px-7 rounded-lg flex justify-between items-center mb-2">
        <h1 className="w-1/5 text-white font-serif">Employee Name</h1>
        <p className="w-1/5 text-white font-serif">New Task</p>
        <p className="w-1/5 text-white font-serif">Active Task</p>
        <p className="w-1/5 text-white font-serif">Complted</p>
        <p className="w-1/5 text-white font-serif">Failed</p>
      </div>
      <div className="overflow-auto h-32" id="alltask">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              className="w-full py-1 px-7 rounded-lg flex justify-between items-center mb-2 border-green-400 border-2 capitalize"
              key={idx}
            >
              <h1 className="w-1/5 text-blue-600 font-serif ">
                {elem.firstName}
              </h1>
              <p className="w-1/5 text-red-600 font-serif ">
                {elem.taskCounts.newTask}
              </p>

              <p className="w-1/5 text-yellow-600 font-serif ">
                {elem.taskCounts.active}
              </p>
              <p className="w-1/5 text-green-600 font-serif ">
                {" "}
                {elem.taskCounts.completed}
              </p>
              <p className="w-1/5 text-white font-serif ">
                {" "}
                {elem.taskCounts.failed}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
