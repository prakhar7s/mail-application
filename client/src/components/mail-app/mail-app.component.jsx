import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Home from "../../pages/home-page/home-page.component";
import SignIn from "../../pages/signin-page/signin-page.component";

const MailApp = ({ history, user }) => {
  useEffect(() => {
    console.log(user);
    if (user) {
      //   history.push(`/${user.userid}`);
    } else {
      history.push("/signin");
    }
  }, [user]);

  return (
    <div className="mail-app">
      {/* <Route exact path="/signin" component={SignIn} /> */}
      {/* <Route exact path="/AI9VM53u" component={Home} /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(MailApp);
