import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserInfo);
  return <div>
    {
      user ? children : <Navigate to="/"></Navigate>
    }
  </div>;
};

export default PrivateRoute;
