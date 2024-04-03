import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Routes from '../../../routes/routes';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const LoginViewModel = () => {
    const [email, setEmailValue] = useState('');
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        },
    });

    const handleInputChange = (email: string) => {
        setEmailValue(email);
        formik.handleChange('email')(email);
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
        ...formik,
    };
};

export default LoginViewModel;
