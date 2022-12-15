import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const navigateToMypage = () => {
    navigate("mypage");
  };
  return (
    <header className="header">
      <strong>Fithub</strong>
      <ul>
        <li>
          <Button variant="outlined" size="medium" onClick={navigateToMypage}>
            마이페이지
          </Button>
        </li>
        <li>
          <Button variant="outlined" size="medium" onClick={navigateToLogin}>
            로그인
          </Button>
        </li>
        <li>
          <Button variant="outlined" size="medium" onClick={navigateToSignup}>
            회원가입
          </Button>
        </li>
      </ul>
    </header>
  );
}
