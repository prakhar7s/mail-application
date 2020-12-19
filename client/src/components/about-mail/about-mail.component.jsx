import React from "react";

import { connect } from "react-redux";

import { formatTimeLong } from "../../utility/formatTime";

import "./about-mail.styles.scss";

const AboutMail = ({ mail }) => {
  return (
    <div className="about-mail">
      {mail ? (
        <>
          <div className="about-mail-header">
            <div className="mail-subject">{mail.sub}</div>
            <div className="mail-sent-details">
              <span className="sent-by">{mail.sender || mail.receiver}</span>
              <span className="sent-at">{formatTimeLong(mail.at)}</span>
            </div>
          </div>
          <div className="mail-body">
            <span className="body">{mail.body}</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  if (props.match.params.mailtype === "inbox") {
    return {
      mail: state.mails.inboxMails.filter((inboxMail) => {
        return inboxMail.mailid === props.match.params.id;
      })[0],
    };
  } else if (props.match.params.mailtype === "sent") {
    return {
      mail: state.mails.sentMails.filter((sentMail) => {
        return sentMail.mailid === props.match.params.id;
      })[0],
    };
  }
};

export default connect(mapStateToProps)(AboutMail);
