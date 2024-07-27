import { useLocation, useNavigate } from 'react-router';
import routes from '../../routes/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { useEffect } from 'react';
import { removeRejectedAttendee, setPrevious } from '../../redux/slices/UrlPathSlice';
import usePaymentAPI from '../../api/PaymentAPI';
import { useApiRequest } from '../../api/hooks/ApiHooks';

const PlannerFooterViewModel = () => {
	const loggedInStatus = useSelector((state: StoreState) => state.user.signedIn);
	const dispatch = useDispatch();
	const previousPath = useSelector((state: any) => state.urlPath.previousPath);
	const attendeeIds = useSelector((state: any) => state.urlPath.rejectedAttendeeIds);
	let location = useLocation();
	let currentPath = location.pathname;
	const { refundPayment } = usePaymentAPI();
	const { request: postData } = useApiRequest();

	useEffect(() => {
		dispatch(setPrevious(currentPath));
		if (previousPath && (previousPath === '/notifications' || previousPath.startsWith('/events/event/'))) {
			attendeeIds.forEach((id: number) => {
				postData(() => refundPayment({ attendeeId: id }));
				dispatch(removeRejectedAttendee(id));
			});
		}
	}, [currentPath, dispatch]);

	const navigate = useNavigate();

	const handleClickCognizant = () => {
		window.location.href = 'https://www.cognizant.com/lt/en';
	};

	const handleClickPrivacy = () => {
		navigate(routes.PRIVACY_POLICY);
	};

	const handleClickTerms = () => {
		navigate(routes.TERMS_OF_SERVICE);
	};

	const handleClickSupport = () => {
		navigate(routes.SUPPORT);
	};

	return {
		handleClickCognizant,
		handleClickPrivacy,
		handleClickTerms,
		handleClickSupport,
		loggedInStatus,
	};
};

export default PlannerFooterViewModel;
