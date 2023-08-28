import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button 
            style={{backgroundColor: "#96ccff", color: "white", borderColor: "skyblue", borderRadius: 5}}
            onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;