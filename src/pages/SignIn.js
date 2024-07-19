import React from "react";
import "../App.css";
import { IconButton } from "rsuite";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { auth } from "../misc/firebase";
import { signInWithPopup } from "firebase/auth";
import { database } from "../misc/firebase";
import toast from "react-hot-toast";
import { set, ref } from "firebase/database";
import { Link } from "react-router-dom";

const SignIn = () => {
  const signInWithProvider = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result) {
        let nickname1 = result.user.displayName.split(" ")[0];
        if (!nickname1) {
          nickname1 = result.user.displayName;
        }
        const newRef = ref(database, `profile/${result.user.uid}`);
        set(newRef, {
          name: result.user.displayName,
          CreatedAt: result.user.metadata.creationTime,
          Email: result.user.email,
          recentLogin: result.user.metadata.lastSignInTime,
          nickName: nickname1,
        });
      }
      console.log(result);
      console.log(result.user.displayName.split(" ")[0]);
      toast.success("Signing in...!", {
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { duration: 4000, position: "top-center" });
    }
  };

  const facebookSignIn = async () => {
    await signInWithProvider(new FacebookAuthProvider());
  };

  const GoogleSignIn = async () => {
    await signInWithProvider(new GoogleAuthProvider());
  };

  return (
    <div>
      <center>
        <br />
        <h2>Chatting Application</h2>
        <h5>A progressive chatting app...</h5>
        <br />
        {true ? (
          <>
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
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
          </>
        )}
      </center>
    </div>
  );
};

export default SignIn;
