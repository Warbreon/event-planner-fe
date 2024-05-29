import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import PageHeader, { HeaderVariant } from '../../../components/headers/page-headers/PageHeader';
import GenericButton, { ButtonTypes } from '../../../shared/components/buttons/ButtonComponent';
import FormikTextField from '../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import Form from '../../../shared/forms/formik/Form';
import { emailPasswordSchema } from '../../../utils/schemas/EmailPasswordSchema';
import sharedStyles from '../SharedStyles.module.css';
import styles from './SignIn.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import SnackbarComponent from '../../../components/snackbar/SnackbarComponent';
import SignInVM from './SignInVM';

const SignIn = () => {
	const { onSubmit, isLoading, snackbarMessage, snackbarSeverity, isSnackbarOpen, handleSnackbarClose } = SignInVM();

	return (
		<div className={sharedStyles.background}>
			<Box className={sharedStyles.formSection}>
				<PageHeader variant={HeaderVariant.CENTERED} text='Welcome to' />

				<PageHeader
					variant={HeaderVariant.CENTERED}
					text='Cognizant events'
					subheader='Sign in with your work email address'
				/>

				<Form
					initialValues={{ email: '', password: '' }}
					validationSchema={emailPasswordSchema}
					onSubmit={(values) => {
						onSubmit(values.email, values.password);
					}}
				>
					<FormikTextField
						id='email'
						title='Email address'
						name='email'
						placeholder='e.g., name@cognizant.com'
						inputProps={{ maxLength: 255 }}
					/>
					<FormikTextField
						id='password'
						title='Password'
						name='password'
						type='password'
						inputProps={{ maxLength: 64 }}
					/>
					<Typography variant='body1' className={styles.forgotPasswordLinkWrapper}>
						<Link to='/signin/forgotpassword' className={styles.forgotPasswordLink}>
							Forgot password?
						</Link>
					</Typography>
					<div className={sharedStyles.buttonWrapper}>
						<GenericButton
							type={ButtonTypes.submit}
							title='Sign in'
							styles={BUTTON_STYLES.BLACK}
							disabled={isLoading}
						/>
					</div>
				</Form>
			</Box>
			<SnackbarComponent
				open={isSnackbarOpen}
				message={snackbarMessage}
				autoHideDuration={5000}
				handleClose={handleSnackbarClose}
				severity={snackbarSeverity}
			/>
		</div>
	);
};

export default SignIn;
