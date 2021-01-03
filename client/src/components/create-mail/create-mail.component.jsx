import React from "react";

import "./create-mail.styles.scss";

import { connect } from "react-redux";

class CreateMail extends React.Component {
  state = {
    to: "",
    subject: "",
    body: "",
  };

  componentDidMount() {
    console.log(this.props.user);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCompose = () => {
    const { to, subject, body } = this.state;
    if (to !== "" && subject !== "" && body !== "") {
      fetch("http://localhost:5000/create-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to,
          subject,
          body,
          user: this.props.user.gigamail,
        }),
      }).then((res) => console.log(res));
    }
  };

  render() {
    return (
      <div className="create-mail">
        <div className="generate-mail">
          <p>Compose a mail</p>
          <div className="cp-mail">
            <span>To</span>
            <input name="to" type="text" onChange={this.handleChange} />
          </div>
          <div className="cp-mail">
            <span>Subject</span>{" "}
            <input name="subject" type="text" onChange={this.handleChange} />
          </div>
          <div className="cp-mail">
            <span>Body</span>{" "}
            <textarea
              name="body"
              type="text"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button className="compose-button" onClick={this.handleCompose}>
            Compose
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(CreateMail);
