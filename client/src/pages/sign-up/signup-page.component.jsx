import React from "react";
import { Link } from "react-router-dom";

import "./signup-page.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      gigamail: "",
      name: "",
      password: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { gigamail, name, password } = this.state;

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gigamail,
        name,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    return (
      <div className="sign-up">
        <form>
          <input
            type="text"
            name="gigamail"
            placeholder="prakhar@gigamail.com"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="name"
            placeholder="Prakhar Shrivastava"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            placeholder="prakhar@123"
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
        <p>
          Already have an account <Link to="/signin">SignIn</Link>
        </p>
      </div>
    );
  }
}

export default SignUp;
