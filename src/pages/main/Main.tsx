import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar';
import PlannerFooter from '../../components/footer/PlannerFooter';

import './Main.css';

const loggedIn = true;

const Main = () => {
	return (
		<NavigationSideBar drawerWidth={72} loggedIn={loggedIn}>
			<div className='flex-wrap'>
				<div className='content'>
					{loggedIn && <PlannerAppBar />}
					<Outlet />
				</div>
				<div className='footer'>
					<PlannerFooter loggedIn={loggedIn} />
				</div>
			</div>
		</NavigationSideBar>
	);
};

export default Main;
