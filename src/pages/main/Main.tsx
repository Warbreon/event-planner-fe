import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar.tsx';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar.tsx';
import PlannerFooter from '../../components/footer/PlannerFooter.tsx';

const loggedIn = true;

const Main = () => {
	return (
		<>
			<NavigationSideBar drawerWidth={72} loggedIn={loggedIn}>
				{loggedIn && <PlannerAppBar />}
				<Outlet />
				<PlannerFooter loggedIn={loggedIn} />
			</NavigationSideBar>
		</>
	);
};

export default Main;
