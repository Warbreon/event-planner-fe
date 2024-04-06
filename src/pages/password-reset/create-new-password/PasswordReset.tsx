import GenericButton from '../../../components/buttons/login-password-change/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetViewModel';
import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/FormikTextField';
import { passwordResetSchema } from '../../../utils/schemas/passwordReset';
import styles from './PasswordReset.module.css';
import { Typography } from '@mui/material';
import PageHeader from '../../../components/headers/page-headers/PageHeader';

const PasswordReset = () => {
	const { onSubmit } = PasswordResetVM();

	return (
		<section className={styles.resetPasswordSection}>
			<PageHeader variant = 'center' text='Reset your password'/>
			<Form
				initialValues={{ newPassword: '', confirmNewPassword: '' }}
				onSubmit={onSubmit}
				validationSchema={passwordResetSchema}
			>
				<FormikTextField
					name='newPassword'
					type='password'
					title='New password'
					placeholder = 'Enter a new password'
					textFieldClassName={styles.textInput}
				/>
				<FormikTextField
					name='confirmNewPassword'
					type='password'
					title='Confirm new password'
					placeholder = 'Confirm your new password'
					textFieldClassName={styles.textInput}
				/>
				<div className={styles.buttonWrapper}>
					<GenericButton title='Reset my password' className={styles.genericButton}/>
				</div>
				<PasswordRules />
			</Form>
		</section>
	);
};

export default PasswordReset;
