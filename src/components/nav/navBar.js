import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const Navigation = (props) => {
//    const { isAuthenticated, login, logout, userHasScopes } = props.auth;
    return(
      <Fragment>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          {/* {isAuthenticated() && (
            <li>
              <Link to="/private">Private</Link>
            </li>
          )}
          {isAuthenticated() &&
            userHasScopes(["read:courses"]) && (
              <li>
                <Link to="/courses">Courses</Link>
              </li>
            )}
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log Out" : "Log In"}
            </button>
          </li> */}
        </ul>
      </nav>
        <Outlet />
      </Fragment>
    )
 
}

  export default Navigation