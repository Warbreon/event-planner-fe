import React from 'react';
import './LoginPageButton.css';

type Props = {
	title: string;
	onClick: () => void;
};
const LoginPageButton: React.FC<Props> = ({ title, onClick }) => {
	return (
		<button className='loginButton' onClick={onClick}>
			{title}
		</button>
	);
};

export default LoginPageButton;
