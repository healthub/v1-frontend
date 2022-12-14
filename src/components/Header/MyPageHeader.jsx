import React from "react";
import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";

export default function Header() {
  // const navigate = useNavigate();

  // const navigateToLogin = () => {
  //   navigate("/login");
  // };

  // const navigateToSignup = () => {
  //   navigate("/signup");
  // };
  return (
    <header className="header">
      <strong>Fithub</strong>
      <ul>
        <li>
          <Button variant="outlined" size="medium">
            로그아웃
          </Button>
        </li>
      </ul>
    </header>
  );
}
