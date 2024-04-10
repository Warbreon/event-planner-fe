import Form from '../../../components/forms/Form';
import FormikTextField from '../../../components/forms/elements/FormikTextField';
import GenericButton, { ButtonTypes } from '../../../components/buttons/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetViewModel';
import PageHeader, { HeaderVariant } from '../../../components/headers/page-headers/PageHeader';
import { passwordResetSchema } from '../../../utils/schemas/PasswordReset1';
import sharedStyles from '../SharedStyles.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button1';

const PasswordReset = () => {
	const { onSubmit } = PasswordResetVM();

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
						<GenericButton type={ButtonTypes.submit} title='Reset my password' styles={BUTTON_STYLES.BLACK} />
					</div>
					<PasswordRules />
				</Form>
			</main>
		</div>
	);
};

export default PasswordReset;
