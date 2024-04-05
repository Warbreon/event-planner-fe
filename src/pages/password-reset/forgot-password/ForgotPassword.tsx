import ButtonComponent from "../../../components/buttons/login-password-change/ButtonComponent";
import {Link} from "react-router-dom";
import {forgotPasswordSchema} from "../../../utils/schemas/forgotPassword";
import {ButtonClassName} from "../../../components/buttons/login-password-change/buttonClassName";
import Form from "../../../components/forms/Form";
import FormikTextField from "../../../components/forms/elements/FormikTextField";
import styles from './ForgotPassword.module.css';

const ForgotPassword = () => {
	const onSubmit = () =>{console.log("submitted")}
	return (
		<section className={styles.forgotPasswordSection}>
			<header>
				<p className={styles.forgotPasswordHeaderTitle}>Forgot password?</p>
				<p className={styles.forgotPasswordHeaderText}>Enter your work email address</p>
			</header>
			<Form initialValues={{email:''}} onSubmit={onSubmit} validationSchema={forgotPasswordSchema}>
				<FormikTextField
					name='email'
					type='text'
					title='Email address'
					textFieldClassName={styles.textInput}
					placeholder='e.g., name@cognizant.com'
				/>
				<ButtonComponent styleClassName={ButtonClassName.BLACK} title='Reset Password' />
			</Form>
			<p className={styles.forgotPasswordLinkWrapper}>
				<Link to='/signin' className={styles.forgotPasswordLink}>Sign in</Link>
			</p>
		</section>
	);
};
export default ForgotPassword;
