import { TextField, TextFieldProps, Typography } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
import styles from './FormikTextField.module.css';

type FormikTextFieldProps = TextFieldProps & {
	name: string;
	title?: string;
	titleClassName?: string;
	textFieldClassName?: string;
    placeholder?: string;
};

const FormikTextField: FC<FormikTextFieldProps> = ({ name, title, titleClassName, textFieldClassName, placeholder, ...props }) => {
	const [field, meta] = useField(name);
	return (
		<div className={styles.inputGroupWrapper}>
			{title && (
				<Typography variant='body1' className={titleClassName}>
					{title}
				</Typography>
			)}
			<TextField
				{...field}
				{...props}
				error={meta.touched && Boolean(meta.error)}
				label={meta.touched && meta.error ? meta.error : null}
                placeholder={!!placeholder ? placeholder : ''}
			/>
		</div>
	);
};

export default FormikTextField;
