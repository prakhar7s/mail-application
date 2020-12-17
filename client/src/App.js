import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import MailCollections from "./components/mail-collections/mail-collections.component";
import AboutMail from "./components/about-mail/about-mail.component";

import SignIn from "./pages/signin-page/signin-page.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: "",
    };
  }
  render() {
    return (
      <div className="app">
        {this.state.user ? (
          <>
            <Sidebar />
            <MailCollections />
            <Route exact path="/inbox/about/:id" component={AboutMail} />
          </>
        ) : (
          <Route exact path="/signin" component={SignIn} />
        )}
      </div>
    );
  }
}

export default App;
