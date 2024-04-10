import { FC } from 'react';
import { Typography } from '@mui/material';
import styles from './PageHeader.module.css';

interface HeaderProps {
	text: string;
	variant?: string;
	subheader?: string;
	className?: string;
}

const PageHeader: FC<HeaderProps> = ({ text, variant, subheader, className }) => {
	let headerClassName = '';
	let subHeaderClassName = '';

	switch (variant) {
		case 'center':
			headerClassName = styles.headerTitleCentered;
			subHeaderClassName = styles.subHeaderCentered;
			break;
		default:
			headerClassName = styles.headerTitleLeft;
			subHeaderClassName = styles.subHeaderLeft;
			break;
	}

	return (
		<header className={styles.headerWrapper}>
			<Typography variant='h1' className={`${headerClassName} ${className ?? ''} `}>
				{text}
			</Typography>
			{!!subheader && (
				<Typography variant='body1' className={subHeaderClassName}>
					{subheader}
				</Typography>
			)}
		</header>
	);
};

export default PageHeader;
