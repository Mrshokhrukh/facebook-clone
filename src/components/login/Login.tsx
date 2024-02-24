import React from "react";
import "./login.scss";
import logo from "../../assets/facebook-logo-png-transparent-background.png";
import { Button } from "@mui/material";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import gog from "../../assets/vecteezy_icone-de-recherche-google-illustration-de-produit-google_12871371.png";
import { ToastContainer, toast } from "react-toastify";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const signIn = async () => {
    signInWithPopup(auth, provider)
      .then((res: any) => {
        toast.success(`Successfully Logged In`, { position: "bottom-center" });
        localStorage.setItem("user", JSON.stringify(res));
        console.log("asdas");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <>
      <ToastContainer />

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
    </>
  );
};
export default Login;
