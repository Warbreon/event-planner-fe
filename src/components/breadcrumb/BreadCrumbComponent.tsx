import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import styles from './BreadCrumbComponent.module.css';
import BreadCrumbComponentVM from './BreadCrumbComponentVM';

interface BreadCrumbComponentProps {
	eventName: string;
}

const BreadCrumbComponent: FC<BreadCrumbComponentProps> = ({ eventName }) => {
	const {url, previousPage} = BreadCrumbComponentVM();
	return (
		<Breadcrumbs>
			<Typography variant='body2'>
				<Link to={url} className={styles.breadCrumbUrl}>
					{previousPage}
				</Link>
			</Typography>
			<Typography variant='body1'>{eventName ? eventName.substring(0, 30) : 'Loading...'}...</Typography>
		</Breadcrumbs>
	);
};

export default BreadCrumbComponent;
