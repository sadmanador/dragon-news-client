import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
    const location = useLocation();

  if (!user) {
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
  }
  return children;
};

export default PrivateRoutes;
