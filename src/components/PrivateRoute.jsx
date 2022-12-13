// import React from "react";
// import { Navigate } from "react-router-dom";

// function PrivateRoute({ authenticated, component: Component }) {
//   return authenticated ? (
//     Component
//   ) : (
//     <Navigate to="/" {...alert("접근할 수 없는 페이지입니다.")} />
//   );
// }

// export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import IsLogin from "./IsLogin";

const PrivateRoute = ({ children }) => {
  return IsLogin ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
