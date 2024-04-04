import { FC } from 'react';
import { Button, ThemeProvider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { eventRegistrationButtonTheme as registerTheme, 
  eventGoingButtonTheme as goingTheme }  from './eventRegistrationButtonThemes';
import { ButtonTitles } from './eventRegistrationButtonTitles';

interface EventRegistrationButtonProps {
	onClick: () => void;
  className: ButtonTitles
}

const EventRegistrationButton: FC<EventRegistrationButtonProps> = ({ onClick, className }) => {

  const title = (name: string): string => {
    switch(name) {
      case ButtonTitles.REGISTER:
        return 'Register'
      case  ButtonTitles.GOING:
        return 'Going'
      case  ButtonTitles.GET_TICKETS:
        return 'Get tickets'
      default:
         return ''
    }
  };

  const theme = (className === ButtonTitles.GOING) ? goingTheme : registerTheme;
  const icon = (className === ButtonTitles.GOING) ? <CheckCircleIcon/> : 
          (className === ButtonTitles.REGISTER) ? <CheckCircleOutlineIcon/> : <ConfirmationNumberIcon/>

	return (
		<ThemeProvider theme={theme}>
			<Button startIcon={icon} onClick={onClick}>
				{title(className)}
			</Button>
		</ThemeProvider>
	);
};

export default EventRegistrationButton;
