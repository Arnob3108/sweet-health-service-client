import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { AuthContext } from "../Context/AuthContext/AuthProvider";

const PrivateRoot = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <HashLoader
        className="w-full mx-auto my-[15%]"
        color="#36d7b7"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoot;
