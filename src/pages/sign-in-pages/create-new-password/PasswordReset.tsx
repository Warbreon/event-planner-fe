import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/FormikTextField';
import GenericButton from '../../../components/buttons/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetViewModel';
import PageHeader from '../../../components/headers/page-headers/PageHeader';
import { passwordResetSchema } from '../../../utils/schemas/passwordReset';
import sharedStyles from '../SharedStyles.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/button';

const PasswordReset = () => {
	const { onSubmit } = PasswordResetVM();

	return (
		<div className={sharedStyles.background}>
			<main className={sharedStyles.formSection}>
				<PageHeader variant='center' text='Reset your password' />
				<Form
					initialValues={{ newPassword: '', confirmNewPassword: '' }}
					onSubmit={onSubmit}
					validationSchema={passwordResetSchema}
				>
					<FormikTextField
						name='newPassword'
						type='password'
						title='New password'
						placeholder='Enter a new password'
						textFieldClassName='sign-in'
					/>
					<FormikTextField
						name='confirmNewPassword'
						type='password'
						title='Confirm new password'
						placeholder='Confirm your new password'
						textFieldClassName='sign-in'
					/>

					<div className={sharedStyles.buttonWrapper}>
						<GenericButton title='Reset my password' style={BUTTON_STYLES.BLACK} />
					</div>
					<PasswordRules />
				</Form>
			</main>
		</div>
	);
};

export default PasswordReset;
