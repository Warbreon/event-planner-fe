import React from 'react';
import { ChangeEvent } from 'react';
import styles from './Input.module.css';

type Props = {
	id: string
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
		<section className={styles.textInputGroup}>
			<label className={styles.textFieldLabel} htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				name={name}
				className={styles[className]}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</section>
	);
};

export default Input;

