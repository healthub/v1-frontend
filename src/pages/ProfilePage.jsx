import React from "react";
import { AiOutlineInbox } from "react-icons/ai";
import { TbBook, TbBook2 } from "react-icons/tb";
import { FiBox, FiStar } from "react-icons/fi";
import Left from "../components/Left";
import Board from "../components/Board";
import Right from "../components/Right";
import "../styles/profile.css";

function ProfilePage() {
  return (
    <div className="profile">
      <nav>
        <div className="profileIcon">
          <TbBook />
          <h2>운동 기록하기 </h2>
        </div>
        <div className="profileIcon">
          <TbBook2 />
          <h2>운동 폴더</h2>
        </div>
        <div className="profileIcon">
          <AiOutlineInbox />
          <h2>함께 운동하기</h2>
        </div>
        <div className="profileIcon">
          <FiBox />
          <h2>식단관리</h2>
        </div>
        <div className="profileIcon">
          <FiStar />
          <h2>구독</h2>
        </div>
      </nav>

      <div className="lineFour" />

      <div className="sectionCenter">
        <Left />
        <Board />
        <Right />
      </div>
    </div>
  );
}

export default ProfilePage;
