import React from "react";

import "./App.css";

import { Redirect, Route } from "react-router-dom";

import SignIn from "./pages/signin-page/signin-page.component";
import Home from "./pages/home-page/home-page.component";

import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          path="/"
          render={() =>
            this.props.userid ? (
              <Redirect to={`/user/${this.props.userid}`} />
            ) : (
              <Redirect to={`/signin`} />
            )
          }
        />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/user/:userid" component={Home} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  userid: user.user.userid,
});

export default connect(mapStateToProps)(App);
