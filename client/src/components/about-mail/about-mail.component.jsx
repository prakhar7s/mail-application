import React from "react";

import { connect } from "react-redux";

import "./about-mail.styles.scss";

const AboutMail = ({ mail }) => {
  return (
    <div className="about-mail">
      <div className="about-mail-header">
        <div className="mail-subject">{mail.subject}</div>
        <div className="mail-sent-details">
          <span className="sent-by">{mail.sentBy}</span>
          <span className="sent-at">{mail.timestamp}</span>
        </div>
      </div>
      <div className="mail-body">
        <span className="body">{mail.body}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  mail: state.inbox.inboxMails[props.match.params.id - 1],
});

export default connect(mapStateToProps)(AboutMail);
