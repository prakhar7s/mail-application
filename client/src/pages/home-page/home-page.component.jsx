import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar.component";
import MailCollections from "../../components/mail-collections/mail-collections.component";
import AboutMail from "../../components/about-mail/about-mail.component";

import "./home-page.styles.scss";

const Home = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <div className="home">
      {user ? (
        <>
          <Sidebar />
          <MailCollections />
          <Route
            exact
            path="/user/:userid/:mailtype/mail/:id"
            component={AboutMail}
          />
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Home);
