import { Navigate } from "react-router-dom";
import { AuthContext } from "./state/AuthContext/AuthContext";
import { useContext } from "react";

const PublicRoute = ({ element }) => {
  const { token } = useContext(AuthContext);

  if (token) {
    return <Navigate to="/user" />;
  }

  return element;
};

export default PublicRoute;
