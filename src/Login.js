import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && <button onClick={loginWithRedirect}>Log in</button>
  );
}

export default LoginButton;
