import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserInfo } from "../../UserContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { userId } = useContext(UserInfo);
  return <div>{userId ? children : <Navigate to="/"></Navigate>}</div>;
};

export default PrivateRoute;
