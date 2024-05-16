import Form from '../../../shared/forms/formik/Form';
import FormikTextField from '../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import GenericButton, { ButtonTypes } from '../../../components/buttons/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetVM';
import PageHeader, { HeaderVariant } from '../../../components/headers/page-headers/PageHeader';
import { passwordResetSchema } from '../../../utils/schemas/PasswordReset';
import sharedStyles from '../SharedStyles.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import SnackbarComponent from '../../../components/snackbar/SnackbarComponent';

const PasswordReset = () => {
	const { onSubmit, isLoading, isSnackbarOpen, handleSnackbarClose, snackbarMessage, snackbarSeverity } = PasswordResetVM();

	return (
		<div className={sharedStyles.background}>
			<main className={sharedStyles.formSection}>
				<PageHeader variant={HeaderVariant.CENTERED} text='Reset your password' />
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
						<GenericButton type={ButtonTypes.submit} title='Reset my password' styles={BUTTON_STYLES.BLACK} disabled={isLoading} />
					</div>
					<PasswordRules />
				</Form>
				<SnackbarComponent
					open={isSnackbarOpen}
					message={snackbarMessage}
					autoHideDuration={5000}
					handleClose={handleSnackbarClose}
					severity={snackbarSeverity}
				/>
			</main>
		</div>
	);
};

export default PasswordReset;
