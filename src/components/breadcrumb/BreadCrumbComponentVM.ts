import { useLocation } from 'react-router-dom';

const BreadCrumbComponentVM = () => {
	let url: string = '';
	let previousPage : string = '';
	const currentPage = useLocation();
	const pathname = currentPage.pathname;

	const determineCurrentPage = (pageName: string) => {
		if (pageName.match('/events/event/')) {
			return 'EVENT_PAGE';
		} else if (pageName.match('/events/event/new')) {
			return 'CREATE_EVENT_PAGE';
		} else if (pageName.match('/events/event/edit/')) {
			return 'EDIT_EVENT_PAGE';
		}
	};

	switch (determineCurrentPage(pathname)) {
		case 'EVENT_PAGE':
			url = '/';
			previousPage = 'Home';
			break;
		case 'CREATE_EVENT_PAGE':
		case 'EDIT_EVENT_PAGE':
			url = '/events/my';
			previousPage = 'My events';
			break;
	}

	return { url, previousPage };
};

export default BreadCrumbComponentVM;
