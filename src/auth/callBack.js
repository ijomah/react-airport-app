import React from "react";
import Navigation from "../components/nav/navBar";

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <Navigation />
      <div className="page-layout__content" />
    </div>
  );
};

export default CallbackPage;