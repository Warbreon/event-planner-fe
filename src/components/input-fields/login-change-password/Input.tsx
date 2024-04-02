import React from 'react';
import './Input.css';
import { ChangeEvent } from 'react';

type Props = {
  id:string
	label: string;
	name: string;
	placeholder: string;
	type: string;
	value: string;
	className: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({ id, name, label, placeholder, type, className, onChange, onBlur }) => {
	return (
		<section className='text-input-group'>
			<label className='text-field-label' htmlFor={id}>
				{label}
			</label>
			<input 
        id={id}
        name={name}
        className={className} 
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        onBlur={onBlur}
      />
		</section>
	);
};

export default Input;
