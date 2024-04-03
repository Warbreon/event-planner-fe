import { TextField, TextFieldProps, Typography } from '@mui/material';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react'
import './Input.css'

type FormikTextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    title?: string;
    titleClassName?: string;
    textFieldClassName?: string;
}

const FormikTextField: React.FC<FormikTextFieldProps> = ({
    name,
    title,
    titleClassName,
    textFieldClassName,
    ...props
}) => {
    const [field, meta] = useField(name);
    
    return (
        <div>
            {title && <Typography variant="subtitle1" className={titleClassName}>{title}</Typography>}
            <input
                {...field}
                {...props}
                className={textFieldClassName}
            />
            {(meta.touched && meta.error) && <p className='error-message'>{meta.error}</p>}
        </div>
    )
}

export default FormikTextField;