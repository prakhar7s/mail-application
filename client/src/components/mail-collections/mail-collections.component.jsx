import React from "react";

import { Route } from "react-router-dom";

import { connect } from "react-redux";

import InboxMails from "../inbox-mails/inbox-mails.component";
import SentMails from "../sent-mails/sent-mails.component";
import DraftMails from "../draft-mails/draft-mails.component";
import TrashMails from "../trash-mails/trash-mails.component";

import "./mail-collections.styles.scss";

const MailCollections = ({ userid }) => {
  return (
    <div className="mail-collections">
      <Route path={`/${userid}/inbox`} component={InboxMails} />
      <Route path={`/${userid}/sent`} component={SentMails} />
      <Route exact path="/drafts" component={DraftMails} />
      <Route exact path="/trash" component={TrashMails} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userid: state.user.user.userid,
});

export default connect(mapStateToProps)(MailCollections);
