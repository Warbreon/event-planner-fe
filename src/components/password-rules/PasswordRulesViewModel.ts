import { useEffect, useState } from 'react';
import { useUserInput } from '../../pages/password-reset/create-new-password/context/passwordInputContext';
import ICON_TYPE from './check-mark-icon/iconType';
import { PasswordValidationIconState } from '../../pages/password-reset/create-new-password/resetPasswordInterfaces';

const PasswordRulesViewModel = () => {
	const [checkMarkIconState, setCheckMarkIconState] = useState<PasswordValidationIconState>({
		lengthValidation: ICON_TYPE.NEUTRAL,
		uppcaseValidation: ICON_TYPE.NEUTRAL,
		numberValidation: ICON_TYPE.NEUTRAL,
		symbolValidation: ICON_TYPE.NEUTRAL,
	});

	const { userInput } = useUserInput();

	useEffect(() => {
		setCheckMarkIconState({
			...checkMarkIconState,
			lengthValidation: userInput.length >= 8 ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			uppcaseValidation: /[A-Z]/.test(userInput) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			numberValidation: /[0-9]/.test(userInput) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
			symbolValidation: /[!@#$%^&*(),.?":{}|<>]/.test(userInput) ? ICON_TYPE.CORRECT : ICON_TYPE.NEUTRAL,
		});
	}, [userInput]);

  return {checkMarkIconState}
};

export default PasswordRulesViewModel;
