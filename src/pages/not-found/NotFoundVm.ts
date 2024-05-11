import { useNavigate } from 'react-router';

const useNotFoundViewModel = () => {
	const navigate = useNavigate();

	const onExploreEventsClick = () => {
		navigate('/');
	};

	const onMyEventsClick = () => {
		navigate('/events/my');
	};

	return { onExploreEventsClick, onMyEventsClick };
};

export default useNotFoundViewModel;
