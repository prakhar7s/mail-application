import React, { useEffect } from "react";

import { connect } from "react-redux";
import { setInboxMails } from "../../redux/reducers/mails/mail-actions";

import MailItem from "../mail-item/mail-item.component";

import "./inbox-mails.styles.scss";

const InboxMails = ({ inboxMails, setInboxMails, user }) => {
  useEffect(() => {
    fetch("http://localhost:5000/inbox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gigamail: user.gigamail,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.isMails) {
          setInboxMails(res.inboxMails);
        }
      });
  }, [user.gigamail, setInboxMails]);

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

const mapDispatchToProps = (dispatch) => ({
  setInboxMails: (inboxMails) => dispatch(setInboxMails(inboxMails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InboxMails);
