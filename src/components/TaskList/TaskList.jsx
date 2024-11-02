import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FaildedTask from "./FaildedTask";
import CompleteTask from "./CompleteTask";

function TaskList({ data }) {
  return (
    <div
      id="taskList"
      className=" h-[50%] mt-20 px-10 py-10 flex  gap-5  overflow-x-auto "
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FaildedTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          <CompleteTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
}

export default TaskList;
