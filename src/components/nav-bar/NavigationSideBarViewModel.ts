const NavigationSideBarViewModel = () => {
	//Temporary way to indicate on which page the user is on to highlight the correct button.
	const possiblePages = ['Home', 'My events', 'Settings'];
	const currentPage = possiblePages[Math.floor(Math.random() * possiblePages.length)];

	const handleClickOnNavButton = (redirectionName: string) => {
		if (currentPage !== redirectionName) {
			console.log(`Redirecting to ${redirectionName} page.`);
		}
	};

	return {
		currentPage,
		handleClickOnNavButton,
	};
};

export default NavigationSideBarViewModel;
