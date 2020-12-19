import React, { useEffect } from "react";

import { connect } from "react-redux";

import MailItem from "../mail-item/mail-item.component";

import "./inbox-mails.styles.scss";

const InboxMails = ({ inboxMails }) => {
  return (
    <div className="inbox-mails">
      {inboxMails.map((mail) => (
        <MailItem
          key={mail.mailid}
          id={mail.mailid}
          {...mail}
          mailtype={"inbox"}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  inboxMails: state.mails.inboxMails,
  user: state.user.user,
});

export default connect(mapStateToProps)(InboxMails);
