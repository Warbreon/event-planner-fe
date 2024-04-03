import {Typography } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import React, { InputHTMLAttributes} from 'react'
import './Input.css'
import { useUserInput } from '../../../pages/password-reset/create-new-password/context/passwordInputContext';

type FormikTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    title?: string;
    titleClassName?: string;
    textFieldClassName?: string;
}

const FormikTextFieldWithContext: React.FC<FormikTextFieldProps> = ({
    name,
    title,
    titleClassName,
    textFieldClassName,
    ...props
}) => {
    const [field, meta] = useField(name);
    

    const { setUserInput } = useUserInput();
    const { setFieldValue } = useFormikContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserInput(value);
        setFieldValue(name, value);
    };

    return (
        <div>
            {title && <Typography variant="subtitle1" className={titleClassName}>{title}</Typography>}
            <input
                {...field}
                {...props}
                onChange={handleChange}
                className={textFieldClassName}
            />
            {(meta.touched && meta.error) && <p className='error-message'>{meta.error}</p>}
        </div>
    )

   
}

export default FormikTextFieldWithContext;