import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar';

const loggedIn = true;

const Main = () => {
	return (
		<>
			<NavigationSideBar drawerWidth={72} loggedIn={loggedIn}>
				{loggedIn && <PlannerAppBar />}
				<Outlet />
			</NavigationSideBar>
			{/* ADD FOOTER HERE */}
		</>
	);
};

export default Main;
