import { useEffect, useState } from 'react';
import ICON_TYPE from './check-mark-icon/iconType';

interface PasswordValidationIconState {
	lengthValidation: string;
	uppcaseValidation: string;
	numberValidation: string;
	symbolValidation: string;
}

const PasswordRulesViewModel = (password: string) => {
	const [checkMarkIconState, setCheckMarkIconState] = useState<PasswordValidationIconState>({
		lengthValidation: ICON_TYPE.NEUTRAL,
		uppcaseValidation: ICON_TYPE.NEUTRAL,
		numberValidation: ICON_TYPE.NEUTRAL,
		symbolValidation: ICON_TYPE.NEUTRAL,
	});

	useEffect(() => {
		setCheckMarkIconState({
			...checkMarkIconState,
			lengthValidation: password.length >= 8 ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			uppcaseValidation: /[A-Z]/.test(password) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			numberValidation: /[0-9]/.test(password) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			symbolValidation: /[!@#$%^&*(),.?":{}|<>]/.test(password) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
		});
	}, [password]);

	return { checkMarkIconState };
};

export default PasswordRulesViewModel;
