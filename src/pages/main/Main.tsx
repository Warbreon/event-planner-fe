import React from 'react';
import { Outlet } from 'react-router-dom';
const Main = () => {
	return (
		<>
			<h1>EVENT PLANNER </h1>
			{/* ADD APPBAR HERE */}
			<Outlet />
			{/* ADD FOOTER HERE */}
		</>
	);
};

export default Main;
