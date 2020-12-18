import React from "react";

import { connect } from "react-redux";

import { userSignIn } from "../../redux/reducers/user/user-actions";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      userMail: "",
      password: "",
      error: "",
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });

    const { gigamail, password } = this.state;

    fetch("http://localhost:5000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gigamail,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.isMatched) {
          this.props.userSignIn(res.user);
        } else {
          this.setState({ error: "Something not matched" });
        }
      });
  }

  render() {
    return (
      <div className="sign-in">
        <form>
          <input
            type="text"
            name="gigamail"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" onClick={(e) => this.handleSubmit(e)} />
        </form>
        {this.state.error}
        <h1>{this.props.user ? this.props.user.name : "sdsd"} </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  userSignIn: (user) => dispatch(userSignIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
