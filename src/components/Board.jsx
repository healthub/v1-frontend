import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Board() {
  const [boards, setBoards] = useState([]);
  const SERVER_URL = "http://localhost:3026/boards";

  useEffect(() => {
    axios
      .get(SERVER_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setBoards(res.data);
        // console.log(boards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="boards">
      <h1>{boards.title}</h1>
      <p>{boards.createdAt}</p>
      <div className="contents">
        <p>{boards.contents}</p>
      </div>
    </div>
  );
}

export default Board;
