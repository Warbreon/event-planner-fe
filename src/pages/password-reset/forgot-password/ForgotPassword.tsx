import React from 'react';
import  "./ForgotPassword.css"
import ButtonComponent from "../../../components/buttons/login-password-change/ButtonComponent";
import {Link} from "react-router-dom";
import {forgotPasswordSchema} from "../../../utils/schemas/forgotPassword";
import {ButtonClassName} from "../../../components/buttons/login-password-change/buttonClassName";
import Form from "../../../components/forms/Form";
import FormikTextField from "../../../components/forms/elements/FormikTextField";

const ForgotPassword = () => {
	const onSubmit = () =>{console.log("submitted")}
	return (
		<section className='forgot-password-section'>
			<header>
				<p className='forgot-password-header-title'>Forgot password?</p>
				<p className='forgot-password-header-text'>Enter your work email address</p>
			</header>
			<Form initialValues={{email:''}} onSubmit={onSubmit} validationSchema={forgotPasswordSchema}>
				<FormikTextField
					name='email'
					type='text'
					title='Email address'
					textFieldClassName='text-input'
					placeholder='e.g., name@cognizant.com'
				/>
				<ButtonComponent styleClassName={ButtonClassName.BLACK} title='Reset Password' />
			</Form>
			<p className='forgot-password-link-wrapper'>
				<Link to='/signin' className='forgot-password-link'>Sign in</Link>
			</p>
		</section>
	);
};
export default ForgotPassword;
