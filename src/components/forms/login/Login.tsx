import React from 'react';
import {Box, Typography} from '@mui/material';
import LoginViewModel from './LoginViewModel';
import FormikTextField from '../elements/FormikTextField';
import './Login.css';
import ButtonComponent from '../../buttons/login-password-change/ButtonComponent';
import {ButtonClassName} from '../../buttons/login-password-change/buttonClassName';
import {emailPasswordSchema} from '../../../utils/schemas/emailPasswordSchema';
import Form from '../Form';

const Login = () => {
    const viewModel = LoginViewModel();

    return (
        <Box id='loginForm' className='login-main'>
            <Typography variant='body1' id='welcome-message'>
                Welcome to <br/>
                Cognizant events
            </Typography>
            <Typography id='directions' variant='body2'>
                Sign in with your work email address
            </Typography>
            <Form
                initialValues={{email: '', password: ''}}
                validationSchema={emailPasswordSchema}
                onSubmit={(values) => {
                    viewModel.handleClick(values.email, values.password);
                }}
            >
                <label htmlFor='email' className='input-label'>
                    Email
                </label>
                <FormikTextField
                    id='email'
                    name='email'
                    placeholder='e.g., name@cognizant.com'
                    type='text'
                    className='input-field wide-input-field'
                />
                <br/>
                <label htmlFor='password' className='input-label'>
                    Password
                </label>
                <FormikTextField
                    id='password'
                    name='password'
                    type='password'
                    className='input-field'
                />
                <a href='/signin/forgotpassword' className='forgot-password'
                   onClick={viewModel.handleForgotPasswordClick}>
                    Forgot password?
                </a>
                <ButtonComponent title='Sign in' styleClassName={ButtonClassName.BLACK}/>
            </Form>
        </Box>
    );
};

export default Login;
