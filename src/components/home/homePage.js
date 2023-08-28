import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../auth/loginButton";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  // render() {
   const { isAuthenticated } = useAuth0();
    return (
      <div>
        <h1 className='f1 pa3'>World Flights Record</h1>
        {isAuthenticated ? (
          // <Link to="/profile">View profile</Link>
          <img className='background-image' style={{width:'67em', height:'29em', margin:'.4em'} } src='dashboard-img.jpg' alt='A landed Aircraft' />
        ) : 
        ( 
          <div>
            <img className='background-image' style={{width:'67em', height:'29em', margin:'.4em'} } src='dashboard-img.jpg' alt='A landed Aircraft' />
          </div>     
        )}
      </div>
    );
  // }
}

export default Home;
