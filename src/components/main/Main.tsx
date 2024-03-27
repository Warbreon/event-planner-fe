import React from 'react';
import NavigationSideBar from '../nav-bar/NavigationSideBar.tsx';
import PlannerAppBar from '../app-bar/PlannerAppBar.tsx';

const drawerWidth = 72;
const loggedIn = true;

const Main = () => {
	return (
		<>
			<NavigationSideBar drawerWidth={drawerWidth} loggedIn={loggedIn}>
				{loggedIn && <PlannerAppBar />}
			</NavigationSideBar>
		</>
	);
};

export default Main;
