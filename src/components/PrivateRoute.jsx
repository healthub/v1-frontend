import { Navigate } from "react-router-dom";
// import swal from "sweetalert";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("accessToken");
  return isLogin ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
