import React from "react";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import "../styles/navbarAuth.css";
import swal from "sweetalert";

function Navbar() {
  const navigate = useNavigate();

  const navigateToMypage = () => {
    navigate("/mypage");
  };

  const navigateToMain = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear();
    swal("로그아웃 되었습니다.");
    navigateToMain();
  };
  return (
    <nav className="navbarAuth">
      {/* Left */}
      <div className="navLeft">
        <img
          className="logo"
          alt="Fithub"
          src="img/Fithub-logo.png"
          onClick={navigateToMypage}
        />
        <div>
          <input type="text" placeholder="Search or jump to" />
        </div>
      </div>
      {/* Center */}
      <div className="navCenter">
        <h2>Pulls</h2>
        <h2>Issues</h2>
        <h2>Marketplace</h2>
        <h2>Explore</h2>
        <MdLogout className="logout" onClick={handleLogout} />
      </div>
    </nav>
  );
}

export default Navbar;
