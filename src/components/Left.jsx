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
            <label for="username">username</label>
            <p>{profiles.userName}</p>
          </div>
          <div>
            <label for="bio">bio</label>
            <p>{profiles.bio}</p>
          </div>
          <div>
            <label for="mainclub">mainclub</label>
            <p>{profiles.mainClub}</p>
          </div>
          <div>
            <label for="insta">insta</label>
            <p>{profiles.instaAccount}</p>
          </div>

          <Link to="/edit/:{id}">
            <button>프로필 생성하기</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Left;
