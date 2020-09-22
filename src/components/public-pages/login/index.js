import React, { Component } from "react";
import AuthLayout from "../../common/auth-layout";
import { Form, Input, Button } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().label("Email").email().required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Minimum length is 8")
    .max(16, "Maximum length is 16"),
});

class Login extends Component {
  render() {
    return (
      <div>
        <AuthLayout
          authTitle="Welcome back!"
          authSubText="Please login...."
          actionText="Don't have an account?"
          action="Sign up"
          to="/register"
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { resetForm }) => {
              this.handleLogin(values);
              resetForm({
                email: "",
                password: "",
              });
            }}
          >
            {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
              <Form name="basic">
                <Form.Item
                  validateStatus={errors.email ? "error" : "success"}
                  help={errors.email ? errors.email : null}
                >
                  <Input
                    className="material-input"
                    placeholder="Enter your Email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />
                </Form.Item>

                <Form.Item
                  validateStatus={errors.password ? "error" : "success"}
                  help={errors.password ? errors.password : null}
                  className="mb-0"
                >
                  <Input.Password
                    className="material-password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                  />
                </Form.Item>

                <Form.Item className="text-right">
                  <a href="/forgot-password" className="fw-500 text-green">
                    Forgot your password?
                  </a>
                </Form.Item>

                <Form.Item className="mt-4">
                  <Button
                    htmlType="submit"
                    className="primary-org-button w-100 btn-lg"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </AuthLayout>
      </div>
    );
  }
}

export default Login;
