import React from "react";
import "./login.scss";
import logo from "../../assets/facebook-logo-png-transparent-background.png";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import gog from "../../assets/vecteezy_icone-de-recherche-google-illustration-de-produit-google_12871371.png";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((res: any) => {
        localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className="login">
      <div className="logo">
        <img src={logo} alt="" width={200} />
        <h1>Facebook</h1>
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In with Google
        <img src={gog} alt="" width={20} />
      </Button>
    </div>
  );
};
export default Login;
