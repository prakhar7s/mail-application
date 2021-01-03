import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { formatTimeShort } from "../../utility/formatTime";

import "./mail-item.styles.scss";

const MailItem = ({ mailid, sub, sender, receiver, at, mailtype, userid }) => {
  return (
    <Link
      to={`/user/${userid}/${mailtype}/mail/${mailid}`}
      className="mail-item"
    >
      <div className="mail-subject">
        <h1 className="subject">{sub}</h1>
      </div>
      <div className="mail-item-bottom">
        <span className="mail-sent-by">{sender || receiver}</span>
        <span className="mail-sent-time">{formatTimeShort(at)}</span>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  userid: state.user.user.userid,
});

export default connect(mapStateToProps)(MailItem);
