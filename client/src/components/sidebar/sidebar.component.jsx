import React from "react";

import { Link } from "react-router-dom";

import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="application-name">
        <span>App Name</span>
      </div>
      <div className="sidebar-options">
        <div className="option">
          <Link to="/inbox">Inbox</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to="/sent">Sent</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to="/drafts">Drafts</Link>
          <span className="no-of-mails">0</span>
        </div>
        <div className="option">
          <Link to="trash">Trash</Link>
          <span className="no-of-mails">0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
