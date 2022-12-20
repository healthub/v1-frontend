import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Left() {
  const SERVER_URL = "http://localhost:3026/user-profile";
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(SERVER_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="left">
      <div className="leftDetails">
        <form className="profileForm">
          <div>
            <span>username: </span>
            <span>{profiles.userName}</span>
          </div>
          <div>
            <span>bio: </span>
            <span>{profiles.bio}</span>
          </div>
          <div>
            <span>mainclub: </span>
            <span>{profiles.mainClub}</span>
          </div>
          <div>
            <span>insta: </span>
            <span>{profiles.instaAccount}</span>
          </div>

          <Link to="/edit/:{id}">
            <button>프로필 관리하기</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Left;
