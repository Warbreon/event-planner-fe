import { TextField, InputLabel } from '@mui/material';
import './TextInput.css';
import { ChangeEvent } from 'react';
import React from 'react';

type Props = {
	label?: string;
	type?: string;
	placeholder?: string;
	required?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	fieldName: string;
	value?: string;
};

const TextInput: React.FC<Props> = ({ label, type, placeholder, required, onChange, fieldName, value }) => {
	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(event);
		}
	};

	return (
		<div>
			<InputLabel
				sx={{
					textAlign: 'left',
					color: 'black',
					marginBottom: '10px',
					fontSize: '0.52rem',
					weight: 400,
				}}
			>
				{label}
			</InputLabel>
			<TextField
				className='input-field'
				value={value}
				required={required}
				type={type}
				placeholder={placeholder}
				onChange={handleInputChange}
				name={fieldName}
			></TextField>
		</div>
	);
};

export default TextInput;
