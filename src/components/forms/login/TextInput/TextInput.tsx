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
	return (
		<div>
			<InputLabel id='input-label'>{label}</InputLabel>
			<TextField
				className='input-field'
				value={value}
				required={required}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				name={fieldName}
			></TextField>
		</div>
	);
};

export default TextInput;
