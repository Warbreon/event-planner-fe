import * as yup from 'yup';

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').max(255, 'Email cannot exceed 255 characters').required('')
});
