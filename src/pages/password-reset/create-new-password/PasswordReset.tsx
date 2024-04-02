import Input from '../../../components/input-fields/login-change-password/Input';
import ButtonComponent from '../../../components/buttons/login-password-change/ButtonComponent';
import PasswordRules from '../../../components/password-rules/PasswordRules';
import PasswordResetVM from './PasswordResetViewModel';
import './PasswordReset.css';

const PasswordReset = () => {
	const { values, errors, touched, handleChange, handleSubmit, handleBlur, checkMarkIconState } = PasswordResetVM();
	return (
		<section className='reset-password-section'>
			<header className='reset-password-header'>
				<p className='header-title'>Reset your password</p>
			</header>
			<form onSubmit={handleSubmit}>
				<Input
					id='newPassword'
					label='New password'
					placeholder='Enter a new password'
					name='newPassword'
					type='password'
					value={values.newPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					className={errors.newPassword && touched.newPassword ? 'text-input-error' : 'text-input'}
				/>

				{errors.newPassword && touched.newPassword && <p className='error-message'>{errors.newPassword}</p>}

				<Input
					id='confirmNewPassword'
					label='Confirm new password'
					placeholder='Confirm your new password'
					name='confirmNewPassword'
					type='password'
					value={values.confirmNewPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					className={errors.confirmNewPassword && touched.confirmNewPassword ? 'text-input-error' : 'text-input'}
				/>

				{errors.confirmNewPassword && touched.confirmNewPassword && (
					<p className='error-message'>{errors.confirmNewPassword}</p>
				)}

				<ButtonComponent title='Reset my password' onClick={() => {}} />
			</form>
			<PasswordRules iconState={checkMarkIconState} />
		</section>
	);
};

export default PasswordReset;
