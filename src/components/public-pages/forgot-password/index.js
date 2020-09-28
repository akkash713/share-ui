import React, { Component } from "react";
import AuthLayout from "../../layout/auth-layout";
import { Form, Input, Button } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().label("Email").email().required(),
});

class ForgotPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitted: false,
      isBasicModalVisible: false,
    };
  }

  handleSubmit = (obj) => {
    this.props.requestForgotPassword(obj);
  };

  render() {
    return (
      <AuthLayout
        authTitle="Forgot Password?"
        authMessage="Type the address linked to your account and we'll send you password reset instructions. They might end up in your spam folder, so please check there as well."
        authSubText="Don’t worry your account is safe with us."
        action="Sign up"
        to="/register"
        actionText="Don't have an account?"
      >
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            this.handleSubmit(values);
            resetForm({
              email: "",
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
                  placeholder="Email"
                  type="text"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
              </Form.Item>
              <Form.Item className="mt-4">
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="primary-org-button w-100 btn-lg"
                >
                  Send instructions
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    );
  }
}

export default ForgotPasswordForm;
