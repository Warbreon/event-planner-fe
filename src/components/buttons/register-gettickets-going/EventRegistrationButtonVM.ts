import { ButtonTitles } from "./eventRegistrationButtonTitles";
import { eventRegistrationButtonTheme as registerTheme, 
  eventGoingButtonTheme as goingTheme }  from './eventRegistrationButtonThemes';

const EventRegistrationButtonVM = (className: string) => {
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
  return {title, theme}
}

export default EventRegistrationButtonVM;