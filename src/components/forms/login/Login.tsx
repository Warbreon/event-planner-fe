import React from 'react';
import {Box, Typography} from '@mui/material';
import LoginViewModel from './LoginViewModel';
import FormikTextField from '../elements/TextField/FormikTextField';
import './Login.css';
import ButtonComponent from '../../buttons/login-password-change/ButtonComponent';
import {ButtonClassName} from '../../buttons/login-password-change/buttonClassName';
import {emailPasswordSchema} from '../../../utils/schemas/emailPasswordSchema';
import Form from '../Form';

const Login = () => {
    const viewModel = LoginViewModel();

    return (
        <Box id='loginForm'>
            <Typography variant='body1' id='welcomeMessage'>
                Welcome to <span className="welcome-message-bottom">Cognizant events</span>
            </Typography>
            <Typography id='directions' variant='body2'>
                Sign in with your work email address
            </Typography>
            <Form
                initialValues={{email: '', password: ''}}
                validationSchema={emailPasswordSchema}
                onSubmit={(values) => {
                    viewModel.onSubmit(values.email, values.password);
                }}
            >
                <FormikTextField
                    id='email'
                    title='Email address'
                    name='email'
                    placeholder='e.g., name@cognizant.com'
                    type='text'
                    titleClassName={'label-left'}
                />

                <FormikTextField
                    id='password'
                    title='Password'
                    name='password'
                    type='password'
                    titleClassName={'label-left'}
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
