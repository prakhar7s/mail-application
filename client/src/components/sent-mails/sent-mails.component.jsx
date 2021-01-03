import React from "react";

import { connect } from "react-redux";

import MailItem from "../mail-item/mail-item.component";

import "./sent-mails.styles.scss";

const SentMails = ({ sentMails }) => {
  return (
    <div className="sent-mails">
      {sentMails.map((sentMail) => (
        <MailItem
          key={sentMail.mailid}
          id={sentMail.mailid}
          {...sentMail}
          mailtype={"sent"}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  sentMails: state.mails.sentMails,
  user: state.user.user,
});

export default connect(mapStateToProps)(SentMails);
