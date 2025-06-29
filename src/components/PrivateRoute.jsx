import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // While auth state is loading, you can render a loader or nothing
    return <p className="text-center mt-10 text-neutral-300">Checking authentication...</p>;
  }

  if (!user) {
    // Use consistent lowercase path for signin
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;
