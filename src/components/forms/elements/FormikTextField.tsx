import { TextField, TextFieldProps, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

type FormikTextFieldProps = TextFieldProps & {
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
            <TextField
                {...field}
                {...props}
                className={textFieldClassName}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error ? meta.error : ''}
            />
        </div>
    )
}

export default FormikTextField