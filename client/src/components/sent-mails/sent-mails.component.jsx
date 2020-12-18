import React, { useEffect } from "react";

import { connect } from "react-redux";

import { setSentMails } from "../../redux/reducers/mails/mail-actions";
import MailItem from "../mail-item/mail-item.component";

import "./sent-mails.styles.scss";

const SentMails = ({ sentMails, user, setSentMails }) => {
  useEffect(() => {
    fetch("http://localhost:5000/sent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gigamail: user.gigamail,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isMails) {
          setSentMails(res.sentMails);
        }
      });
  }, [setSentMails, user.gigamail]);
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

const mapDispatchToProps = (dispatch) => ({
  setSentMails: (sentMails) => dispatch(setSentMails(sentMails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SentMails);
