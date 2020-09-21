import React, { Component } from "react";
import AuthLayout from "../../common/auth-layout";

class Login extends Component {
  render() {
    return (
      <div>
        <AuthLayout
          authTitle="Welcome back!"
          authSubText="Please login...."
          actionText="Don't have an account?"
        >
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </AuthLayout>
      </div>
    );
  }
}

export default Login;
