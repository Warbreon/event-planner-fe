import { Typography } from '@mui/material';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react'
import styles from './FormikTestField.module.css';

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
                className={meta.touched && meta.error ? styles.textInputError : textFieldClassName}
            />
            {(meta.touched && meta.error) && <p className={styles.errorMessage}>{meta.error}</p>}
        </div>
    )
}

export default FormikTextField;