import React from "react";

import { Link } from "react-router-dom";

import "./mail-item.styles.scss";

const MailItem = ({ id, subject, sentBy, timestamp }) => {
  return (
    <Link to={`/inbox/about/${id}`} className="mail-item">
      <div className="mail-subject">
        <h1 className="subject">{subject}</h1>
      </div>
      <div className="mail-item-bottom">
        <span className="mail-sent-by">{sentBy}</span>
        <span className="mail-sent-time">{timestamp}</span>
      </div>
    </Link>
  );
};

export default MailItem;
