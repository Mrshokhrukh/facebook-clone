import React from "react";
import "./login.scss";
import logo from "../../assets/facebook-logo-png-transparent-background.png";
import { Button } from "@mui/material";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="" width={200} />
        <h1>Facebook</h1>
      </div>

      <button type="submit" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};
export default Login;
