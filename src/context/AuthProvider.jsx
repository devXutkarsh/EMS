import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../pages/utils/LocalStorage";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  localStorage.clear();

  const [userData, setuserData] = useState(null);
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
