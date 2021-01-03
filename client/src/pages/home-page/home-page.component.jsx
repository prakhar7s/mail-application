import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar.component";
import MailCollections from "../../components/mail-collections/mail-collections.component";
import AboutMail from "../../components/about-mail/about-mail.component";

import "./home-page.styles.scss";
import Header from "../../components/header/header.component";

const Home = ({ user }) => {
  const [header, setHeader] = useState("HOME");

  useEffect(() => {
    if (user.length === 0) {
      window.location.reload();
    }
  }, [user]);

  return (
    <div className="home">
      {user ? (
        <>
          <Header header={header} />
          <Sidebar setHeader={setHeader} />
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
