const EventPageVM = () => {
	//get event from useNavigate props

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = () => {
		console.log('Registed/Get tickets/ Cancel registration');
	};

	return { onAddGuestsClick, onEventRegistrationClick };
};

export default EventPageVM;
