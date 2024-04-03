import {useNavigate} from 'react-router-dom';
import Routes from '../../../routes/routes';

const LoginViewModel = () => {
    const navigate = useNavigate();

    const handleInputChange = (email: string) => {
        console.log("handling input change")
    };

    const handleClick = (email: string, password: string) => {
        console.log('Email:', email);
        console.log('Password:', password);
    };
    const handleForgotPasswordClick = () => {
        navigate(Routes.FORGOT_PASSWORD);
    };

    return {
        handleClick,
        handleInputChange,
        handleForgotPasswordClick,
    };
};

export default LoginViewModel;
