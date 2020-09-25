import React, { Component } from "react";
import { NavigationBar } from "../Layout/NavigationBar";
import { Layout } from "../Layout/Layout";
import Login from "./Login";
import RegisterForm from "./RegisterForm";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loginStatus: false };
  }

  handleLogin = () => {
    this.setState({ loginStatus: !this.state.loginStatus });
  };

  render() {
    const displayLogic = this.state.loginStatus ? (
      <RegisterForm />
    ) : (
      <Login handleLogin={this.handleLogin} />
    );
    return (
      <div>
        <NavigationBar />
        <Layout>{displayLogic}</Layout>
      </div>
    );
  }
}

export default Home;
