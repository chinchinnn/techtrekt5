import React, { Component } from "react";
import { NavigationBar } from "../Layout/NavigationBar";
import { Layout } from "../Layout/Layout";
import Login from "./Login";
import RegisterForm from "./RegisterForm";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loginStatus: false, data: {} };
  }

  handleLogin = (data) => {
    fetch(
      "https://cors-anywhere.herokuapp.com/http://08872c2caafe.ngrok.io/login/",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((body) => {
        this.setState({ loginStatus: !this.state.loginStatus, data: body });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const displayLogic = this.state.loginStatus ? (
      <RegisterForm />
    ) : (
      <Login handleLogin={this.handleLogin} />
    );
    return (
      <div>
        <NavigationBar loginStatus={this.state.loginStatus} />
        <Layout>{displayLogic}</Layout>
      </div>
    );
  }
}

export default Home;
