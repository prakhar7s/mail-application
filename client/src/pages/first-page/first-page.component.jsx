import React, { useEffect } from "react";
import { connect } from "react-redux";

const First = ({ user, history: { push } }) => {
  useEffect(() => {
    if (user) {
      push(`/users/${user.userid}`);
    } else {
      push(`/signin`);
    }
  }, [user, push]);
  return <div className="mail-app"></div>;
};

const mapStateToProps = ({ user }) => ({
  user: user.user,
});

export default connect(mapStateToProps)(First);
