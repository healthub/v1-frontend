import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../styles/navbarNoAuth.css";

export default function Header() {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <nav className="navbarNoAuth">
      {/* left */}
      <div className="navLeft">
        <img
          className="logo"
          alt="Fithub"
          src="img/Fithub-logo.png"
          onClick={navigateToMain}
        />
      </div>
      {/* right */}
      <div className="navRight">
        <ul>
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
      </div>
    </nav>
  );
}
