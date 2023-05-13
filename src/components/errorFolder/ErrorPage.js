import React from 'react';
import serverError from 'serverError.jpg';

export default function ErrorPage() {
  return (
    <>
      <div>
        <img src={serverError} alt='This describes the error page from the server' />
        <h1>Aw! Apologies, Something went wrong</h1>
        <button onClick={document.location.origin }>Try Again </button>
      </div>
    </>
  )
}