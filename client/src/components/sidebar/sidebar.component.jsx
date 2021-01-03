import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { userSignOut } from "../../redux/reducers/user/user-actions";

import AddIcon from "@material-ui/icons/Add";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./sidebar.styles.scss";

const Sidebar = ({
  user,
  userSignOut,
  inboxMailsCount,
  sentMailsCount,
  setHeader,
}) => {
  return (
    <div className="sidebar">
      <div className="application-name">
        <span>gigaMail</span>
      </div>
      <div className="sidebar-options">
        <div className="option">
          <Link
            to={`/user/${user.userid}/inbox`}
            onClick={() => setHeader("INBOX")}
          >
            Inbox
          </Link>
          <span className="no-of-mails">{inboxMailsCount}</span>
        </div>
        <div className="option">
          <Link
            to={`/user/${user.userid}/sent`}
            onClick={() => setHeader("SENT")}
          >
            Sent
          </Link>
          <span className="no-of-mails">{sentMailsCount}</span>
        </div>
        <div className="option">
          <Link
            to={`/user/${user.userid}/drafts`}
            onClick={() => setHeader("DRAFTS")}
          >
            Drafts
          </Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link
            to={`/user/${user.userid}/trash`}
            onClick={() => setHeader("TRASH")}
          >
            Trash
          </Link>
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
          className="logout-btn"
        >
          <ExitToAppIcon />
          <span>Logout</span>
        </button>
      </div>

      <div className="create-mail-button">
        <Link to={`/user/${user.userid}/create-mail`}>
          <AddIcon />
        </Link>
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
