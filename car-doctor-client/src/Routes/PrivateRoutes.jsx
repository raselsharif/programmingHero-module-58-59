import { useContext } from "react";
import { AuthContext } from "../AuthPorvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
};

export default PrivateRoutes;
