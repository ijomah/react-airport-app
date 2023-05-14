import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        // returnTo: "/profile",
        returnTo: "/profile",
      },
    });
  };

  return (
    <button className="btn text-white btn-warning btn-block button__login" onClick={handleLogin}>
      Log In
    </button>
  );
};

// import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();
//   return (
//     <button
//       className="btn btn-primary btn-block"
//       onClick={() => loginWithRedirect()}
//     >
//       Log In
//     </button>
//   );
// };

export default LoginButton;
