import React from "react";

import { Route } from "react-router-dom";

import InboxMails from "../inbox-mails/inbox-mails.component";
import SentMails from "../sent-mails/sent-mails.component";
import DraftMails from "../draft-mails/draft-mails.component";
import TrashMails from "../trash-mails/trash-mails.component";

import "./mail-collections.styles.scss";

const MailCollections = () => {
  return (
    <div className="mail-collections">
      <Route path="/inbox" component={InboxMails} />
      <Route exact path="/sent" component={SentMails} />
      <Route exact path="/drafts" component={DraftMails} />
      <Route exact path="/trash" component={TrashMails} />
    </div>
  );
};

export default MailCollections;
