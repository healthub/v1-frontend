import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const IsLogin = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  if (!localStorage.getItem("accessToken")) {
    swal("로그인이 필요합니다.");
    navigateToLogin();
  }
};

export default IsLogin;
