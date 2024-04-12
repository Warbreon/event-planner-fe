import GenericButton, { ButtonTypes } from '../../../components/buttons/ButtonComponent';
import { Link } from 'react-router-dom';
import { forgotPasswordSchema } from '../../../utils/schemas/ForgotPassword';
import Form from '../../../shared/forms/formik/Form';
import FormikTextField from '../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import styles from './ForgotPassword.module.css';
import PageHeader, { HeaderVariant } from '../../../components/headers/page-headers/PageHeader';
import sharedStyles from '../SharedStyles.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button';

const ForgotPassword = () => {
	const onSubmit = () => {
		console.log('submitted');
	};
	return (
		<div className={sharedStyles.background}>
			<main className={sharedStyles.formSection}>
				<PageHeader
					variant={HeaderVariant.CENTERED}
					text='Reset your password'
					subheader='Enter your work email address'
				/>
				<Form initialValues={{ email: '' }} onSubmit={onSubmit} validationSchema={forgotPasswordSchema}>
					<FormikTextField
						name='email'
						type='email'
						title='Email address'
						textFieldClassName={styles.textInput}
						placeholder='e.g., name@cognizant.com'
					/>
					<div className={sharedStyles.buttonWrapper}>
						<GenericButton type={ButtonTypes.submit} title='Reset Password' styles={BUTTON_STYLES.BLACK} />
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
