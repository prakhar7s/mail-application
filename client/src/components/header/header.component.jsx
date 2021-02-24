import React from "react";
import SyncIcon from "@material-ui/icons/Sync";

import "./header.styles.scss";

import { connect } from "react-redux";

const Header = ({ header }) => {
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
