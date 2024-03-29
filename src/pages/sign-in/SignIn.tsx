import React from 'react';
import Login from '../../components/forms/login/Login.tsx';
import './SignIn.css';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar.tsx';
const SignIn = () => {
	return (
		<div className='background'>
			<NavigationSideBar drawerWidth={72} loggedIn={false} children={undefined}></NavigationSideBar>
			<Login />
		</div>
	);
};

export default SignIn
