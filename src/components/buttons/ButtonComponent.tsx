import { Button } from '@mui/material';
import { FC } from 'react';
import ButtonComponentVM from './ButtonComponentVM';
import Icon from './icons/Icon';

export enum ButtonTypes {
	submit = 'submit',
	button = 'button',
	reset = 'reset',
}

export enum Icons {
	REGISTER = 'register',
	GOING = 'going',
	GET_TICKETS = 'tickets',
	RSVP = 'rsvp',
  ADD = 'add'
}

export enum IconButtonTitles {
	REGISTER = 'Register',
	GET_TICKETS = 'Get tickets',
	GOING = 'Going',
	RSVP = 'RSVP',
	ADD_EVENT = 'Add event'
}

interface ButtonProps {
	title?: string;
	style: string;
	type: ButtonTypes;
	icon? : Icons;
	onCLick?: () => void;
}

const GenericButton: FC<ButtonProps> = ({ title, style, type, icon, onCLick }) => {
	const { iconButtonTitle } = ButtonComponentVM(icon);
	return (
		<Button type={type} className={style} onClick={onCLick} startIcon={!!icon && <Icon icon={icon} />}>
			{ (!!icon && iconButtonTitle) || title }
		</Button>
	);
};

export default GenericButton;
