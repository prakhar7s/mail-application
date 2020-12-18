import React from "react";

import "./App.css";

import { Route } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebar.component";
import MailCollections from "./components/mail-collections/mail-collections.component";
import AboutMail from "./components/about-mail/about-mail.component";

import SignIn from "./pages/signin-page/signin-page.component";
import SignUp from "./pages/sign-up/signup-page.component";

import { connect } from "react-redux";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(props);
  //   this.state = {
  //     // user: props.user,
  //   };
  // }

  componentDidMount() {
    // console.log(this.props.user);
    // this.setState({ user: this.props.user });
    // console.log(this.props);
    // console.log("sds");
  }

  render() {
    return (
      <div className="app">
        {this.props.user ? (
          <>
            <Sidebar />
            <MailCollections />
            <Route exact path="/inbox/about/:id" component={AboutMail} />
          </>
        ) : (
          <>
            {/* <Route exact path="/signin" component={SignIn} /> */}
            <SignIn />
            <SignUp />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(App);
