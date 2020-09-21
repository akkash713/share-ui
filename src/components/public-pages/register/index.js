import React, { Component } from "react"
import { connect, useDispatch } from "react-redux"
import { withRouter } from "react-router"

import { Button, Form, Icon, Input, Row, Checkbox, message } from "antd"

import PublicWrapper from "../../common/public-component"
import AuthLayout from "../../common/auth-layout"
import { Formik } from "formik"
import * as Yup from "yup"
import { REQUEST_REGISTER } from "../../../redux/actions/user-actions"
import { login, register } from "../../../redux/actions/user"
import { history } from "../../../redux/store"

// import { login } from '../../../actions/user';
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .label("Full name")
    .required(),
  email: Yup.string()
    .label("Email")
    .email()
    .required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Minimum length is 8")
    .max(16, "Maximum length is 16"),
  acceptTerms: Yup.bool().oneOf(
    [true],
    "You must accept our terms before proceeding further"
  ),
})

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  handleSignUp = async (values) => {
    const { signUpUser } = this.props
    const body = {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
      timeZone: "Asia/Kolkata",
    }
    try {
      await signUpUser(body)
    } catch (err) {
      message.error(err.message)
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form

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
            this.handleSignUp(values)
            resetForm({
              fullName: "",
              email: "",
              password: "",
              acceptTerms: false,
              timeZone: "Asia/Kolkata",
            })
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
              {/* <Form.Item
                label="Currency"
                validateStatus={errors.eventTitle ? "error" : "success"}
                help={errors.eventTitle ? errors.eventTitle : null}
              >
                <InputSelect
                  name={"timeZone"}
                  // label="Format of the event"
                  options={[{

                  }]}
                  value={this.state.currency}
                  onChange={(e) => this.setState({ currency: e })}
                  // error={
                  //   errors.tickets &&
                  //   touched.tickets &&
                  //   touched.tickets[index] &&
                  //   errors.tickets[index] &&
                  //   touched.tickets[index].ticketType &&
                  //   errors.tickets[index].ticketType &&
                  //   errors.tickets[index].ticketType
                  //     ? errors.tickets[index].ticketType
                  //     : null
                  // }
                />
              </Form.Item> */}

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
                  className="primary-org-button w-100"
                  onClick={handleSubmit}
                >
                  Create My Account
                </Button>
              </Form.Item>
            </Form>
          )}
        </Formik>
      </AuthLayout>
    )
  }
}

const WrappedSignUp = Form.create({ name: "signup" })(Register)

const mapStateToProps = (state) => {
  return {
    activeStep: state.createEvent.formData.activeStep,
    data: state.createEvent.formData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (obj) => dispatch(register(obj)),
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WrappedSignUp)
)
