import GenericButton, { ButtonTypes } from '../../../components/buttons/ButtonComponent';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../../../utils/schemas/forgotPassword';
import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/FormikTextField';
import styles from './ForgotPassword.module.css';
import PageHeader from '../../../components/headers/page-headers/PageHeader';
import sharedStyles from '../SharedStyles.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/button';

const ForgotPassword = () => {
	const onSubmit = () => {
		console.log('submitted');
	};
	return (
		<div className={sharedStyles.background}>
			<main className={sharedStyles.formSection}>
				<PageHeader variant='center' text='Reset your password' subheader='Enter your work email address' />
				<Form initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={forgotPasswordSchema}>
					<FormikTextField
						name='email'
						type='email'
						title='Email address'
						textFieldClassName={styles.textInput}
						placeholder='e.g., name@cognizant.com'
					/>
					<div className={sharedStyles.buttonWrapper}>
						<GenericButton type={ButtonTypes.submit} title='Reset Password' style={BUTTON_STYLES.BLACK} />
					</div>
				</Form>
				<p className={styles.forgotPasswordLinkWrapper}>
					<Link to='/signin' className={styles.forgotPasswordLink}>
						Sign in
					</Link>
				</p>
			</main>
		</div>
	);
};
export default ForgotPassword;
