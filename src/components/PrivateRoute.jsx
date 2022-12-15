import { Navigate } from "react-router-dom";
import swal from "sweetalert";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("accessToken");
  return isLogin ? (
    children
  ) : (
    <Navigate to="/login" {...swal("로그인이 필요합니다.")} />
  );
};

export default PrivateRoute;
