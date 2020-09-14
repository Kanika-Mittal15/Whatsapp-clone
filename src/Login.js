import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
//dispatch is like a gun whatever payload is and u shoot it at the data layer to update the data layer
function Login() {
  const [{}, dispatch] = useStateValue(); //it's a hook  //destructure and get the user
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user, //this allows to directly pull out from te data layer
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="w"
        />
        <div className="login_text">
          <h1>Sign in to whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
}
export default Login;
