import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { passwordResetSchema } from '../../../utils/schemas/passwordReset';
import ICON_TYPE from '../../../components/password-rules/check-mark-icon/iconType';
import { PasswordEntries, PasswordValidationIconState } from './resetPasswordInterfaces';

const PasswordResetVM = () => {
	//UPDATE WHEN BACK-END IS IMPLEMENTED
	const onSubmit = () => {
		console.log('SUBMITED');
	};

	const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik<PasswordEntries>({
		initialValues: {
			newPassword: '',
			confirmNewPassword: '',
		},
		onSubmit,
		validationSchema: passwordResetSchema,
	});

	const [checkMarkIconState, setCheckMarkIconState] = useState<PasswordValidationIconState>({
		lengthValidation: ICON_TYPE.NEUTRAL,
		uppcaseValidation: ICON_TYPE.NEUTRAL,
		numberValidation: ICON_TYPE.NEUTRAL,
		symbolValidation: ICON_TYPE.NEUTRAL,
	});

	useEffect(() => {
		setCheckMarkIconState({
			...checkMarkIconState,
			lengthValidation: values.newPassword.length >= 8 ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			uppcaseValidation: /[A-Z]/.test(values.newPassword) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			numberValidation: /[0-9]/.test(values.newPassword) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			symbolValidation: /[!@#$%^&*(),.?":{}|<>]/.test(values.newPassword) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
		});
	}, [values.newPassword]);

	return { values, errors, touched, handleChange, handleSubmit, handleBlur, checkMarkIconState };
};

export default PasswordResetVM;
