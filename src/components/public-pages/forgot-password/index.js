import React, { Component } from 'react';
import { Button, Divider, Form, Icon, Input, Row } from 'antd';
import AuthLayout from '../../common/auth-layout';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { withRouter } from 'react-router';
import { login, forgotPassword } from '../../../redux/actions/user';
import { connect } from 'react-redux';

const validationSchema = Yup.object().shape({
	email: Yup.string()
		.label('Email')
		.email()
		.required()
});

class ForgotPasswordForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			submitted: false,
			isBasicModalVisible: false
		};
	}

	handleSubmit = (obj) => {
		this.props.requestForgotPassword(obj)
	};

	handleBasicModalCancel = () => {
		this.setState({
			isBasicModalVisible: false
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { isBasicModalVisible } = this.state;

		return (
			<AuthLayout
				authTitle='Forgot Password?'
				authMessage="Type the address linked to your account and we'll send you password reset instructions. They might end up in your spam folder, so please check there as well."
				authSubText='Don’t worry your account is safe with us.'
				action='Sign up'
				to='/register'
				actionText="Don't have an account?"
			>
				<Formik
					initialValues={{
						email: ''
					}}
					validationSchema={validationSchema}
					onSubmit={(values, {resetForm}) => {
						this.handleSubmit(values);
						resetForm({
							email: ''
						})
					}}
				>
					{({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
						<Form name='basic'>
							<Form.Item
								validateStatus={errors.email ? 'error' : 'success'}
								help={errors.email ? errors.email : null}
							>
								<Input
									className='material-input'
									placeholder='Enter registered email id'
									type='text'
									onChange={handleChange}
									value={values.email}
									name='email'
								/>
							</Form.Item>
							<Form.Item className='mt-4'>
								<Button
									type='primary'
									htmlType='submit'
									disabled={isSubmitting}
									onClick={handleSubmit}
									className='primary-org-button w-100'
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

const ForgotPassword = Form.create({ name: 'forgot-password' })(
	ForgotPasswordForm
);

const mapStateToProps = (state) => {
	return {
		activeStep: state.createEvent.formData.activeStep,
		data: state.createEvent.formData
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		requestForgotPassword: (obj) => dispatch(forgotPassword(obj))
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
);

