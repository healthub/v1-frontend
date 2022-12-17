import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
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
    </header>
  );
}
