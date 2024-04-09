import { Button } from '@mui/material';
import { FC } from 'react';
import Icon from './icons/Icon';

export enum ButtonTypes {
	submit = 'submit',
	button = 'button',
	reset = 'reset',
}

export enum IconButton {
	REGISTER = 'Register',
	GET_TICKETS = 'Get tickets',
	GOING = 'Going',
	RSVP = 'RSVP',
	ADD_EVENT = 'Add event',
	ADD = ' ',
}

interface ButtonProps {
	title?: string;
	style: string;
	type: ButtonTypes;
	icon?: IconButton;
	onCLick?: () => void;
}

const GenericButton: FC<ButtonProps> = ({ title, style, type, icon, onCLick }) => {
	const iconButtonTitle: IconButton | undefined = icon;
	return (
		<Button type={type} className={style} onClick={onCLick} startIcon={!!icon && <Icon icon={icon} />}>
			{(!!icon && iconButtonTitle) || title}
		</Button>
	);
};

export default GenericButton;
