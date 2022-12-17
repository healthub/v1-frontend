import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Header() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    swal("로그아웃 되었습니다.");
    navigateToMain();
  };
  return (
    <header className="header">
      <img
        className="FithubLogo"
        alt="Fithub"
        src="img/Fithub-logo.png"
        style={{ width: "80px" }}
        onClick={navigateToMain}
      />
      <ul>
        <li>
          <Button onClick={handleLogout} variant="outlined" size="medium">
            로그아웃
          </Button>
        </li>
      </ul>
    </header>
  );
}
