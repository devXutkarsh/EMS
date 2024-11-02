import React, { useState } from "react";

function CreateTask() {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [taskDisc, settaskDisc] = useState("");
  const [taskCategory, settaskCategory] = useState("");
  const [asignTo, setasignTo] = useState("");

  const [task, settask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    settask({
      taskDate,
      taskTitle,
      taskCategory,
      taskDisc,
      active: false,
      newTask: true,
      failed: true,
      completed: false,
    });

    const data = localStorage.getItem("employees");
    console.log(data);
  };

  return (
    <div className="mt-7">
      <form
        className="bg-gray-950 h-[50%] w-full py-5 px-10 flex justify-between items-center gap-20"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="w-1/2">
          <div className="">
            <p className="text-gray-400">Task Title</p>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder=" Make a ui design"
              className="bg-gray-700 border-gray-600 border-2 w-full py-1 px-5 my-2"
            />
          </div>
          <div className="">
            <p className="text-gray-400">Date</p>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
              className="bg-gray-700 border-gray-600 border-2 w-full py-1 px-5 my-2 "
            />
          </div>
          <div className="">
            <p className="text-gray-400">Asign to</p>
            <input
              value={asignTo}
              onChange={(e) => {
                setasignTo(e.target.value);
              }}
              type="text"
              placeholder=" Employee name"
              className="bg-gray-700 border-gray-600 border-2 w-full py-1 px-5 my-2"
            />
          </div>
          <div className="">
            <p className="text-gray-400"> Category</p>
            <input
              value={taskCategory}
              onChange={(e) => {
                settaskCategory(e.target.value);
              }}
              type="text"
              placeholder="  design dev, etc.."
              className="bg-gray-700 border-gray-600 border-2 w-full py-1 px-5 my-2"
            />
          </div>
        </div>
        <div className="w-1/2  h-full flex flex-col justify-center items-center gap-3">
          <div>
            <p className="text-gray-400 py-2">Discription</p>
            <textarea
              value={taskDisc}
              onChange={(e) => {
                settaskDisc(e.target.value);
              }}
              name="message"
              id=""
              rows={7}
              cols={80}
              className="bg-gray-900"
            ></textarea>
          </div>

          <button className="bg-green-600 py-1 w-[80%] rounded-lg text-xl font-semibold font-serif">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
