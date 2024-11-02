import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./pages/utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App(data) {
  const [user, setuser] = useState(null);
  const authData = useContext(AuthContext);
  const [userLoggedInData, setuserLoggedInData] = useState(null);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setuserLoggedInData(setuser.data);
      console.log("logged in user");
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@xyz.com" && password == "123") {
      setuser("admin");

      const admin = localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setuser("employee");
        setuserLoggedInData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: " employee", data: "employee" })
        );
      }
    } else {
      alert("invailid");
    }
  };

  return (
    <div className="bg-black w-full  text-wh">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setuser} />
      ) : user == "employee" ? (
        <EmployeeDashboard data={userLoggedInData} changeUser={setuser} />
      ) : null}
    </div>
  );
}

export default App;
