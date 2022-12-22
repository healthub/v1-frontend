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
          <input type="text" placeholder="다른 핏허브 유저 검색하기" />
        </div>
      </div>
      {/* Center */}
      <div className="navCenter">
        <h2>내 운동 관리하기</h2>
        <h2>팔로우</h2>
        <h2>팔로잉</h2>
        <h2>내일 목표</h2>
        <MdLogout className="logout" onClick={handleLogout} />
      </div>
    </nav>
  );
}

export default Navbar;
