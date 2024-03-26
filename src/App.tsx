import React from 'react';
import './App.css';
import NavigationSideBar from './components/nav-bar/NavigationSideBar.tsx';
import PlannerAppBar from './components/app-bar/PlannerAppBar.tsx';

const drawerWidth = 72;
const loggedIn = true;

function App() {
	return (
		<div className='App'>
			<NavigationSideBar drawerWidth={drawerWidth} loggedIn={loggedIn}>
				{loggedIn && <PlannerAppBar />}
			</NavigationSideBar>
		</div>
	);
}

export default App;
