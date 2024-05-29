import * as yup from 'yup';

export const passwordResetSchema = yup.object().shape({
	newPassword: yup
		.string()
		.min(8, 'Password must be at least 8 characters long')
		.max(64, 'Password cannot exceed 64 characters')
		.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {
			message: 'Password does not meet the requirements',
		})
		.required('New password is required'),
	confirmNewPassword: yup
		.string()
		.oneOf([yup.ref('newPassword'), ''], 'Please enter the same password in both fields')
		.required('Confirm new password is required'),
});
