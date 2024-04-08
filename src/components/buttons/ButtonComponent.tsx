import { Button } from '@mui/material';
import { FC } from 'react';

export enum ButtonTypes {
	submit = 'submit',
	button = 'button',
	reset = 'reset',
}

interface ButtonProps {
	title: string;
	style: string;
	type: ButtonTypes;
	onCLick?: () => void;
}

const GenericButton: FC<ButtonProps> = ({ title, style, type, onCLick }) => {
	return (
		<Button type={type} className={style} onClick={onCLick}>
			{title}
		</Button>
	);
};

export default GenericButton;
