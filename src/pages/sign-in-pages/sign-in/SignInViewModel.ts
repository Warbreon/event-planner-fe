import { useNavigate } from 'react-router-dom';
import Routes from '../../../routes/Routes';

const SignInViewModel = () => {
	const onSubmit = (email: string, password: string) => {
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return {
		onSubmit,
	};
};

export default SignInViewModel;
