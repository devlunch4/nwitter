import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase"; // for provider: login with google, github.
import React from "react";

const Auth = () => {
  // for provider: login with google, github.
  const onSocialClick = async (event) => {
    // console.log(event.target.name);
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      console.log("google login provider");
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      console.log("github login provider");
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
    // console.log(data);
  };
  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Conginue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Conginue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
