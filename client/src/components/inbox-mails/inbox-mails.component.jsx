import React from "react";

import { connect } from "react-redux";

import MailItem from "../mail-item/mail-item.component";

import "./inbox-mails.styles.scss";

const InboxMails = ({ inboxMails }) => {
  return (
    <div className="inbox-mails">
      {inboxMails.map((mail) => (
        <MailItem key={mail.id} id={mail.id} {...mail} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  inboxMails: state.inbox.inboxMails,
});

export default connect(mapStateToProps)(InboxMails);
