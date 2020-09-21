import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button,  Form,Input } from 'antd';
import AuthLayout from "../../common/auth-layout";
import * as Yup from "yup";
import { Formik } from "formik";
import { login, resetPassword, checkMailToken } from '../../../redux/actions/user';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .label("Password")
    .required()
    .min(8, "Minimum 8 characters")
    .max(16, "Maximum 16 characters"),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').label('Confirm password').required()
});



class ResetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			submitted: false,
		}
	}


  componentDidMount = () => {
    const res = this.props.checkToken(this.props.match.params.id)
   
  }


	handleSubmit = (obj) => {
    const data = {
      password: obj.password,
      encryptedId: this.props.match.params.id
    }
    this.props.resetUserPassword(data);
  }
  
 

	render() {
    const { isTokenValid } = this.props
		return (
			<AuthLayout
        authSubText="Reset Password?"
        action='Sign up'
				to='/register'
				actionText="Don't have an account?"
			>
				{ isTokenValid? <Formik
          initialValues={{
            password: "",
            confirmPassword : ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values, {resetForm}) => {
            this.handleSubmit(values)
            resetForm({
              password: "",
            confirmPassword : ""
            })
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form name="basic">
              <Form.Item
                validateStatus={errors.password ? "error" : "success"}
                help={errors.password ? errors.password : null}
              >
                <Input.Password
                  className="material-password"
                  placeholder="New password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                />
              </Form.Item>

              <Form.Item
                validateStatus={errors.confirmPassword ? "error" : "success"}
                help={errors.confirmPassword ? errors.confirmPassword : null}
              >
                <Input.Password
                  className="material-password"
                  placeholder="Confirm new password"
                  type="password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="primary-org-button w-100"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  Update Password
                </Button>
              </Form.Item>

            </Form>
          )}
        </Formik> : <h3>Token is invalid</h3>}
			</AuthLayout>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		activeStep: state.createEvent.formData.activeStep,
    data: state.createEvent.formData,
    isTokenValid: state.user.isMailTokenValid
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
    resetUserPassword: (obj) => dispatch(resetPassword(obj)),
    checkToken: (token) => dispatch(checkMailToken(token))
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
);

