import ButtonComponent from '../../../components/buttons/login-password-change/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetViewModel';
import { ButtonClassName } from '../../../components/buttons/login-password-change/buttonClassName';
import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/TextField/FormikTextField';
import { passwordResetSchema } from '../../../utils/schemas/passwordReset';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
	const { onSubmit } = PasswordResetVM();
	return (
		<section className={styles.resetPasswordSection}>
			<header className={styles.resetPasswordHeader}>
				<p className={styles.headerTitle}>Reset your password</p>
			</header>
			<Form
				initialValues={{ newPassword: '', confirmNewPassword: '' }}
				onSubmit={onSubmit}
				validationSchema={passwordResetSchema}
			>
				<FormikTextField
					name='newPassword'
					type='password'
					title='New password'
					textFieldClassName={styles.textInput}
				/>
				<FormikTextField
					name='confirmNewPassword'
					type='password'
					title='Confirm new password'
					textFieldClassName={styles.textInput}
				/>
				<ButtonComponent styleClassName={ButtonClassName.BLACK} title='Reset my password' />
				<PasswordRules />
			</Form>
		</section>
	);
};

export default PasswordReset;

