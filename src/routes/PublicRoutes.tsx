import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../redux/store/PersistentStore';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from './Routes';

interface Props {
	children: ReactNode;
}

const PublicRoutes: FC<Props> = ({children}) => {
	const user = useSelector((state: PersistentStoreRootState) => state.signedIn);
	if (user) {
		return <Navigate to={ROUTES.INDEX}/>
	}

	return <> {children} </> ;
};

export default PublicRoutes;
