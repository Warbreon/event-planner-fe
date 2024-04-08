import { IconButtonTitles, Icons } from './ButtonComponent';

const ButtonComponentVM = (icon: Icons | undefined) => {
  let iconButtonTitle;
	switch (icon) {
		case Icons.REGISTER:
			iconButtonTitle = IconButtonTitles.REGISTER;
			break;
		case Icons.GOING:
			iconButtonTitle = IconButtonTitles.GOING;
			break;
		case Icons.GET_TICKETS:
			iconButtonTitle = IconButtonTitles.GET_TICKETS;
			break;
		case Icons.RSVP:
			iconButtonTitle = IconButtonTitles.RSVP;
			break;
		case Icons.ADD:
			iconButtonTitle = IconButtonTitles.ADD_EVENT;
			break;
	}

	return { iconButtonTitle };
};

export default ButtonComponentVM;
