import { TextField, TextFieldProps, Typography } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
import styles from './FormikTestField.module.css';

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
		<div className={styles.inputWrapper}>
			{title && (
				<Typography variant='subtitle1' className={styles.titleClassName}>
					{title}
				</Typography>
			)}
			<TextField
				{...field}
				{...props}
				//when re-using component in different forms, adjust
				//class names accordingly and add additional
				//width, padding, margin properties in css module
				className={styles.textInput}
				error={meta.touched && Boolean(meta.error)}
				label={meta.touched && meta.error ? meta.error : null}
                placeholder={!!placeholder ? placeholder : ''}
			/>
		</div>
	);
};

export default FormikTextField;
