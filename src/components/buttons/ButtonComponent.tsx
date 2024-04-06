import { Button } from '@mui/material';
import { FC } from 'react';

interface ButtonProps {
	title: string;
	style: string;
};

const GenericButton: FC<ButtonProps> = ({ title, style }) => {
	return (
		<Button type='submit' className={style}>
			{title}
		</Button>
	);
};

export default GenericButton;
