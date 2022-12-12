import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

export default function NotFoundPage() {
  return (
    <div id="NotFound" align="center">
      <h3>잘못된 페이지입니다.</h3>
      <Link to="/">
        <button>메인으로 가기</button>
      </Link>
    </div>
  );
}
