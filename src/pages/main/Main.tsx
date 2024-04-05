import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar';
import PlannerFooter from '../../components/footer/PlannerFooter';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

import styles from './Main.module.css';

const Main = () => {
	const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

	return (
		<NavigationSideBar drawerWidth={72}>
			<div className={styles.contentContainer}>
				<div className='main-content'>
					{loggedIn && <PlannerAppBar />}
					<Outlet />
				</div>
				<div className={styles.footer}>
					<PlannerFooter />
				</div>
			</div>
		</NavigationSideBar>
	);
};

export default Main;
