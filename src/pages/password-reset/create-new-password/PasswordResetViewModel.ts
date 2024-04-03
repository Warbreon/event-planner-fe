import { useUserInput } from './context/passwordInputContext';

const PasswordResetVM = () => {
	const { setUserInput } = useUserInput();

	//UPDATE WHEN BACK-END IS IMPLEMENTED
	const onSubmit = () => {
		console.log('SUBMITED');
		setUserInput('');
	};

	return { onSubmit };
};

export default PasswordResetVM;
