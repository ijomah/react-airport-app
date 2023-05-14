import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import LoginButton from './../../auth/loginButton';
import { LogoutButton } from "./../../auth/logoutButton";
import "./navBar.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
    const { isAuthenticated } = useAuth0();
    return(
      <Fragment>
        <nav>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
         
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
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
 
}

  export default Navigation