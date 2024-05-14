import { useNavigate } from 'react-router';
import ROUTES from '../../routes/Routes';

const useNotFoundViewModel = () => {
	const navigate = useNavigate();

	const onExploreEventsClick = () => {
		navigate(ROUTES.INDEX);
	};

	const onMyEventsClick = () => {
		navigate(ROUTES.MY_EVENTS);
	};

	return { onExploreEventsClick, onMyEventsClick };
};

export default useNotFoundViewModel;
