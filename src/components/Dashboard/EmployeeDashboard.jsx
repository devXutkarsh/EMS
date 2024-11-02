import React from "react";
import Header from "../others/Header";
import TaskListNUm from "../others/TaskListNUm";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard(props) {

  return (
    <div className="w-full h-screen bg-black text-white pt-6 px-10 ">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNUm data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeeDashboard;
