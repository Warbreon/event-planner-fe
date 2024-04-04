import { FC } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import { ButtonTitles } from './eventRegistrationButtonTitles';
import EventButtonIcon from './EventButtonIcon';
import EventRegistrationButtonVM from './EventRegistrationButtonVM';

interface EventRegistrationButtonProps {
	onClick: () => void;
	className: ButtonTitles;
}

const EventRegistrationButton: FC<EventRegistrationButtonProps> = ({ onClick, className }) => {
	const { title, theme } = EventRegistrationButtonVM(className);
	return (
		<ThemeProvider theme={theme}>
			<Button startIcon={<EventButtonIcon className={className} />} onClick={onClick}>
				{title(className)}
			</Button>
		</ThemeProvider>
	);
};

export default EventRegistrationButton;
