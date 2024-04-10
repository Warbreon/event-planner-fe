import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SignInViewModel from './SignInViewModel';
import PageHeader from '../../../components/headers/page-headers/PageHeader';
import GenericButton, { ButtonTypes } from '../../../components/buttons/ButtonComponent';
import FormikTextField from '../../../components/forms/elements/TextField/FormikTextField';
import Form from '../../../components/forms/Form';
import { emailPasswordSchema } from '../../../utils/schemas/emailPasswordSchema';
import sharedStyles from '../SharedStyles.module.css';
import styles from './SignIn.module.css';
import { BUTTON_STYLES } from '../../../themes/styles/button';

const SignIn = () => {
	const { onSubmit } = SignInViewModel();
	return (
		<div className={sharedStyles.background}>
			<Box className={sharedStyles.formSection}>
				<PageHeader variant='center' text='Welcome to' />
				<PageHeader variant='center' text='Cognizant events' subheader='Sign in with your work email address' />
				<Form
					initialValues={{ email: '', password: '' }}
					validationSchema={emailPasswordSchema}
					onSubmit={(values) => {
						onSubmit(values.email, values.password);
					}}
				>
					<FormikTextField id='email' title='Email address' name='email' placeholder='e.g., name@cognizant.com' />
					<FormikTextField id='password' title='Password' name='password' type='password' />
					<Typography variant='body1' className={styles.forgotPasswordLinkWrapper}>
						<Link to='/signin/forgotpassword' className={styles.forgotPasswordLink}>
							Forgot password?
						</Link>
					</Typography>
					<div className={sharedStyles.buttonWrapper}>
						<GenericButton type={ButtonTypes.submit} title='Sign in' style={BUTTON_STYLES.BLACK} />
					</div>
				</Form>
			</Box>
		</div>
	);
};

export default SignIn;
