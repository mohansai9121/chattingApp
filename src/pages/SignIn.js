import React from "react";
import "../App.css";
import { IconButton } from "rsuite";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { auth } from "../misc/firebase";
import firebase from "firebase/compat/app";
import { signInWithPopup } from "firebase/auth";
//import { app } from "../misc/firebase";

const SignIn = () => {
  const signInWithProvider = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error.message());
    }
  };

  const facebookSignIn = async () => {
    await signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const GoogleSignIn = async () => {
    await signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      <center>
        <br />
        <h2>Chatting Application</h2>
        <h5>A progressive chatting app...</h5>
        <br />
        <IconButton
          appearance="primary"
          color="blue"
          icon={<FaFacebook />}
          onClick={facebookSignIn}
        >
          {" "}
          Connect with FaceBook
        </IconButton>
        <br />
        <br />
        <IconButton
          appearance="primary"
          color="green"
          icon={<FaGoogle />}
          onClick={GoogleSignIn}
        >
          {" "}
          Connect with Google
        </IconButton>
      </center>
    </div>
  );
};

export default SignIn;
