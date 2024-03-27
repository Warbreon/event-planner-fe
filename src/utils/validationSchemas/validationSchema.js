import * as Yup from 'yup';

/** Validation Example. 
 * Many validation schemas should be created to not bloat. 
 * For example signInValidationSchema.js and so on, 
 * then imported specific one when creating form
*/
export const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[0-9]/, 'Password must have at least one number')
    .matches(/[!@#?]/, 'Password must have at least one special character like !, @, #, ?'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
});