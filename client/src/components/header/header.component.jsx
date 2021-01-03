import React, { useEffect, useState } from "react";
import SyncIcon from "@material-ui/icons/Sync";

import "./header.styles.scss";
import { Redirect } from "react-router-dom";
import { Link } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ header, user }) => {
  let h = useHistory();
  useEffect(() => {
    console.log(h);
  }, []);

  return (
    <div className="header">
      <h1>{header}</h1>

      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        <SyncIcon />
      </button>
      {header === "HOME" ? (
        <h2 className="starting">
          Click on options in Sidebar to get started!{" "}
        </h2>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(Header);
