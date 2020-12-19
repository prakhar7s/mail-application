import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { userSignOut } from "../../redux/reducers/user/user-actions";

import "./sidebar.styles.scss";

const Sidebar = ({ user, userSignOut, inboxMailsCount, sentMailsCount }) => {
  return (
    <div className="sidebar">
      <div className="application-name">
        <span>gigaMail</span>
      </div>
      <div className="sidebar-options">
        <div className="option">
          <Link to={`/user/${user.userid}/inbox`}>Inbox</Link>
          <span className="no-of-mails">{inboxMailsCount}</span>
        </div>
        <div className="option">
          <Link to={`/user/${user.userid}/sent`}>Sent</Link>
          <span className="no-of-mails">{sentMailsCount}</span>
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
  inboxMailsCount: state.mails.inboxMails.length,
  sentMailsCount: state.mails.sentMails.length,
});

const mapDisptachToProps = (dispatch) => ({
  userSignOut: () => dispatch(userSignOut()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Sidebar);
