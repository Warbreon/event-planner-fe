import { useSelector } from 'react-redux';
import { StoreState } from '../redux/store/Store';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from './Routes';

interface Props {
	children: ReactNode;
}

const PublicRoutes: FC<Props> = ({ children }) => {
	const isUserSignedIn = useSelector((state: StoreState) => state.user.signedIn);
	if (isUserSignedIn) {
		return <Navigate to={ROUTES.INDEX} />;
	}

	return <> {children} </>;
};

export default PublicRoutes;
