import GenericButton from '../../../components/buttons/login-password-change/ButtonComponent';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../../../utils/schemas/forgotPassword';
import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/FormikTextField';
import styles from './ForgotPassword.module.css';
import PageHeader from '../../../components/headers/page-headers/PageHeader';

const ForgotPassword = () => {
	const onSubmit = () => {
		console.log('submitted');
	};
	return (
		<section className={styles.forgotPasswordSection}>
			<PageHeader variant = 'center' text='Reset your password' subheader='Enter your work email address'/>
			<Form initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={forgotPasswordSchema}>
				<FormikTextField
					name='email'
					type='email'
					title='Email address'
					textFieldClassName={styles.textInput}
					placeholder='e.g., name@cognizant.com'
				/>
				<div className={styles.buttonWrapper}>
					<GenericButton title='Reset Password' />
				</div>
			</Form>
			<p className={styles.forgotPasswordLinkWrapper}>
				<Link to='/signin' className={styles.forgotPasswordLink}>
					Sign in
				</Link>
			</p>
		</section>
	);
};
export default ForgotPassword;
