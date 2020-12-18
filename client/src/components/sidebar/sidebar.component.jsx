import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { userSignOut } from "../../redux/reducers/user/user-actions";

import "./sidebar.styles.scss";

const Sidebar = ({ user, userSignOut }) => {
  return (
    <div className="sidebar">
      <div className="application-name">
        <span>App Name</span>
      </div>
      <div className="sidebar-options">
        <div className="option">
          <Link to={`/${user.userid}/inbox`}>Inbox</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to={`/${user.userid}/sent`}>Sent</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to="/drafts">Drafts</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to="trash">Trash</Link>
          <span className="no-of-mails">0</span>
        </div>
      </div>
      <div className="user-informations">
        <h1>{user.gigamail}</h1>
        <button
          onClick={() => {
            sessionStorage.removeItem("user");

            userSignOut();
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDisptachToProps = (dispatch) => ({
  userSignOut: () => dispatch(userSignOut()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Sidebar);
