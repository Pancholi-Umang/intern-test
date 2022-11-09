import React, { useState } from "react";
import "./form.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";

function Form() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Successsfully Created An Account");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // const errorMessage = error.message;
        // ..
      });
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("This User Has Successfully Signed In")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
        // const errorMessage = error.message;
      });
  };

  return (
    <div className="overbody">
      <form className="middleSection" action="">
        <div className="midSection">
          <input
            type="text"
            className="innn"
            placeholder="Please Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="innn"
            placeholder="Please Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btnss" onClick={signUp}>
            Create Account
          </button>
          <button className="btnss" onClick={signIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
