import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter(props) {
  let isLoggedIn = "false";
  if (props.isloginUrl) {
    return <>{isLoggedIn ? <Navigate to="/" /> : "Login"}</>;
  } else {
    return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
  }
}

export default PrivateRouter;
