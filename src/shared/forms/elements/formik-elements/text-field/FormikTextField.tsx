import { TextField, TextFieldProps, Typography } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';
import styles from './FormikTextField.module.css';
import ErrorTooltip from '../../../../components/error-tooltip/ErrorTooltip';

type FormikTextFieldProps = TextFieldProps & {
	name: string;
	title?: string;
	titleClassName?: string;
	textFieldClassName?: string;
};

const FormikTextField: FC<FormikTextFieldProps> = ({
	name,
	title,
	titleClassName,
	textFieldClassName,
	...props
}) => {
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
				className={textFieldClassName}
				InputProps={{
					endAdornment: <ErrorTooltip title={meta.error} isVisible={meta.touched && Boolean(meta.error)} />,
				}}
			/>
		</div>
	);
};

export default FormikTextField;
