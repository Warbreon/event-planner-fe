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
	ADD_GUESTS = ' ',
	VIEW_ALL_GUESTS = 'View all guests',
}

interface ButtonProps {
	title?: string;
	styles: string;
	type: ButtonTypes;
	icon?: IconButton;
	iconAtEnd?: boolean;
	onClick?: () => void;
}

const GenericButton: FC<ButtonProps> = ({ title, styles, type, icon, iconAtEnd, onClick }) => {
	const iconButtonTitle: IconButton | undefined = icon;
	return (
		<Button
			type={type}
			className={styles}
			onClick={onClick}
			startIcon={!iconAtEnd && !!icon && <Icon icon={icon} />}
			endIcon={iconAtEnd && !!icon && <Icon icon={icon} />}
		>
			{title || (!!icon && iconButtonTitle)}
		</Button>
	);
};

export default GenericButton;
