import React from "react";
import { Link } from "react-router-dom";

function Right() {
  return (
    <div className="right">
      <div>
        <Link to="/board-write">
          <button>게시글 작성하기</button>
        </Link>
      </div>
    </div>
  );
}

export default Right;
