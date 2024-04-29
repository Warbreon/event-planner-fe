import React from 'react';

function createData(
	avatarUrl: string,
	firstName: string,
	lastName: string,
	jobTitle: string,
	homeOfficeLocation: string,
	permission: string
) {
	return { avatarUrl, firstName, lastName, jobTitle, homeOfficeLocation, permission };
}

const rows = [
	createData(
		'https://avatar.iran.liara.run/public/82',
		'Jolyne',
		'Cujoh',
		'HR Manage',
		'Miami, USA',
		'System administrator'
	),
	createData(
		'http://placebear.com/250/250',
		'Jotaro',
		'Cujoh',
		'Operations Manager',
		'Kairo, Egypt',
		'System administrator'
	),
	createData(
		'http://placebeard.it/250/250',
		'Josuke',
		'Higashikata',
		'HR Intern',
		'Morioh, Japan',
		'System administrator'
	),
	createData('http://placebacon.net/400/300', 'Joseph', 'Joestar', 'CFO', 'London, UK', 'Admin'),
	createData('https://avatar.iran.liara.run/public/20', 'Giorno', 'Giovanna', 'CEO', 'Rome, Italy', 'Admin'),
];

const SettingsVM = () => {
	const handleDeleteClick = () => {};

	return { handleDeleteClick, rows };
};

export default SettingsVM;
