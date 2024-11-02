import React, { useState } from "react";

function Header(props) {
  const logOutUser = () => {
    // console.log("log out user");

    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    <h1>{props.id}</h1>;
    props.changeUser("");
  };
  return (
    <div className="flex justify-between items-center">
      <p>
        hello..<br></br>{" "}
        <span className="text-2xl font-semibold ">userName👋</span>
      </p>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
        onClick={logOutUser}
      >
        Log in
      </button>
    </div>
  );
}

export default Header;
