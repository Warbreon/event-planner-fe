import { FC } from 'react';
import { Typography } from '@mui/material';

export enum HeaderVariant {
	CENTERED = 'centered',
	EVENT_PAGE = 'event-header',
}

interface HeaderProps {
	text: string;
	variant?: HeaderVariant;
	subheader?: string;
	className?: string;
}

const PageHeader: FC<HeaderProps> = ({ text, variant, subheader }) => {
	const headerClassName: string | undefined = variant;
	const subHeaderClassName: string | undefined = variant;

	return (
		<header>
			<Typography variant='h1' className={headerClassName}>
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
