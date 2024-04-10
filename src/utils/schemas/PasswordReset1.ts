import * as yup from 'yup';

export const passwordResetSchema = yup.object().shape({
	newPassword: yup
		.string()
		.min(8, '')
		.matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, {
			message: 'Password does not meet the requirements',
		})
		.required('This field is required'),
	confirmNewPassword: yup
		.string()
		.oneOf([yup.ref('newPassword'), ''], 'Please enter the same password in both fields')
		.required('This field is required'),
});
