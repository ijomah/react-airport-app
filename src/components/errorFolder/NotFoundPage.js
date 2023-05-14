import React from 'react';
//import errorPage from 'errorPage.jpg';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <div>
        <h1>Oh Sorry! Page Not Found</h1>
        {/* <img src={errorPage} alt='This signifies not found page'/> */}
        <Link to='/home'>Back to home pag</Link>
      </div>
    </>
  )
}
