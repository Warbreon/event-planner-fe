import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { FC } from 'react';
import styles from './BreadCrumbComponent.module.css'

interface BreadCrumbComponentProps {
	eventName: string;
}

const BreadCrumbComponent: FC<BreadCrumbComponentProps> = ({ eventName }) => {
	return (
		<Breadcrumbs>
			<Typography variant='body2'>
				<Link to={'/'} className={styles.breadCrumbUrl}>Home</Link>
			</Typography>
			<Typography variant='body1'>{eventName.substring(0, 30)}...</Typography>
		</Breadcrumbs>
	);
};

export default BreadCrumbComponent;
