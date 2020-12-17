import React from "react";

const SignIn = () => (
  <div className="sign-in">
    <form action="http://localhost:5000/signin" method="POST">
      <input type="text" />
      <input type="text" />
      <input type="submit" />
    </form>
  </div>
);

export default SignIn;
