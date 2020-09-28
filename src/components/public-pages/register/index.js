import React, { Component } from "react";
import AuthLayout from "../../layout/auth-layout";
import { Form, Input, Button, message, Checkbox } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";

// import { login } from '../../../actions/user';
const validationSchema = Yup.object().shape({
  fullName: Yup.string().label("Full name").required(),
  email: Yup.string().label("Email").email().required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Minimum length is 8")
    .max(16, "Maximum length is 16"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "You must accept our terms before proceeding further"
  ),
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleSignUp = async (values) => {
    const { signUpUser } = this.props;
    const body = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      timeZone: "Asia/Kolkata",
    };
    try {
      await signUpUser(body);
    } catch (err) {
      message.error(err.message);
    }
  };

  render() {
    return (
      <AuthLayout
        authTitle="Hello."
        authSubText="To get started please create an account...."
        action="Login"
        to="/login"
        actionText="Already have an account?"
      >
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            acceptTerms: false,
          }}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values, { resetForm }) => {
            this.handleSignUp(values);
            resetForm({
              fullName: "",
              email: "",
              password: "",
              acceptTerms: false,
              timeZone: "Asia/Kolkata",
            });
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form name="basic">
              <Form.Item
                validateStatus={errors.fullName ? "error" : "success"}
                help={errors.fullName ? errors.fullName : null}
              >
                <Input
                  className="material-input"
                  placeholder="Enter full name"
                  type="text"
                  onChange={handleChange}
                  value={values.fullName}
                  name="fullName"
                />
              </Form.Item>
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

              <Form.Item
                className="mt-3"
                validateStatus={errors.acceptTerms ? "error" : "success"}
                help={errors.acceptTerms ? errors.acceptTerms : null}
              >
                <Checkbox
                  onChange={handleChange}
                  className="checkbox-custom"
                  checked={values.acceptTerms}
                  name="acceptTerms"
                >
                  Accept our{" "}
                  <a
                    href="https://policies.google.com/terms?hl=en-US"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a
                    href="https://policies.google.com/terms?hl=en-US"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item className="mt-4">
                <Button
                  type="primary"
                  disabled={isSubmitting}
                  htmlType="submit"
                  className="primary-org-button w-100 btn-lg"
                  onClick={handleSubmit}
                >
                  Create My Account
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    );
  }
}

export default Register;
