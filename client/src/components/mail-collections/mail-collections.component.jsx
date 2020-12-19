import React, { useEffect } from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import InboxMails from "../inbox-mails/inbox-mails.component";
import SentMails from "../sent-mails/sent-mails.component";
import DraftMails from "../draft-mails/draft-mails.component";
import TrashMails from "../trash-mails/trash-mails.component";

import "./mail-collections.styles.scss";
import {
  setInboxMails,
  setSentMails,
} from "../../redux/reducers/mails/mail-actions";

const MailCollections = ({ user, setInboxMails, setSentMails }) => {
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
  }, [user.gigamail, setInboxMails]);

  return (
    <div className="mail-collections">
      <Route path="/user/:userid/inbox" component={InboxMails} />
      <Route path={`/user/:userid/sent`} component={SentMails} />
      <Route exact path="/drafts" component={DraftMails} />
      <Route exact path="/trash" component={TrashMails} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDisptachToProps = (dispatch) => ({
  setInboxMails: (inboxMails) => dispatch(setInboxMails(inboxMails)),
  setSentMails: (sentMails) => dispatch(setSentMails(sentMails)),
});

export default connect(mapStateToProps, mapDisptachToProps)(MailCollections);
