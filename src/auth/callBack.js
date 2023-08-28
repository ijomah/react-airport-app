import React, { Component } from "react";
import Navigation from "../components/nav/navBar";


class CallbackPage extends Component {
  componentDidMount = () => {
    // Handle authentication if expected values are in the URL.
    if (/access_token|id_token|error/.test(this.props.location.hash)) {
      // this.props.auth.handleAuthentication();
    } else {
      throw new Error("Invalid callback URL.");
    }
  };
  render() {
    return (
      <div className="page-layout">
        <h1>Loading...</h1>
        <Navigation />
      </div>
    )
  }
}

export default CallbackPage;
