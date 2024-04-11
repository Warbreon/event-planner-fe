import { useLocation } from 'react-router-dom';

const BreadCrumbComponentVM = () => {
	let url: string = '';
	let previousPage : string = '';
	const currentPage = useLocation();
	const pathname = currentPage.pathname;

	if (pathname.match('/events/event/')) {
		url = '/';
		previousPage = 'Home';
	} else if (pathname.match('/events/event/new') || (pathname.match('/events/event/edit/'))) {
		url = '/events/my';
		previousPage = 'My events';
	} 
	
	return { url, previousPage };
};

export default BreadCrumbComponentVM;
