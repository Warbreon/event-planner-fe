import { FC } from 'react';
import { Address } from '../../../models/Address';
import { Typography } from '@mui/material';
import { constructGoogleMapsURL } from '../../../utils/MapsUrlByAddress';
import styles from '../EventDetailsPanel.module.css';

interface Props {
	address: Address;
}

const OnSiteEventDetails: FC<Props> = ({ address }) => {
	const { venueName, city, street, building, zip } = address;
	return (
		<>
			<Typography className={styles.info}>{venueName}</Typography>
			<Typography className={styles.info}>
				{building} {street}
			</Typography>
			<Typography className={styles.info}>{city}</Typography>
			<Typography className={styles.info}>{zip}</Typography>
			<a
				className={styles.link}
				href={constructGoogleMapsURL(venueName, city, street, building, zip)}
				title='This is a link to Google Maps'
			>
				View map
			</a>
		</>
	);
};

export default OnSiteEventDetails;
