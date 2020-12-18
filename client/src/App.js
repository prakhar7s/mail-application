import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import MailCollections from "./components/mail-collections/mail-collections.component";
import AboutMail from "./components/about-mail/about-mail.component";

import SignIn from "./pages/signin-page/signin-page.component";
import SignUp from "./pages/sign-up/signup-page.component";
import MailApp from "./components/mail-app/mail-app.component";
import Home from "./pages/home-page/home-page.component";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        {/* {this.props.user ? ( */}
        {/* <>
            <Sidebar />
            <MailCollections />
            <Route
              exact
              path="/:userid/:mailtype/about/:id"
              component={AboutMail}
            />
          </>
        ) : (
          <>
            <SignUp />
          </> */}
        {/* )} */}
        <Route exact path="/signin" component={SignIn} />
        {/* <SignIn /> */}
        <Route exact path="/" component={MailApp} />
        <Route exact path="/AI9VM53u" component={Home} />
      </div>
    );
  }
}
export default App;
