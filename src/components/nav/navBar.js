import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Link } from "react-router-dom";
import LoginButton from './../../auth/loginButton';
// import { LogoutButton } from "./../../auth/logoutButton";
import LogoutButton  from "./../../auth/logoutButton"
import "./navBar.css";
import { useAuth0 } from "@auth0/auth0-react";
// import Home from "../home/homePage";

function Navigation() {
  // render() {  
    const {isAuthenticated} = useAuth0();
    return(
      <Fragment>
        <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
         
          {isAuthenticated && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          
          {!isAuthenticated && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
        </ul>
      </nav>
        <Outlet />
      </Fragment>
    )
  // }
}

  export default Navigation