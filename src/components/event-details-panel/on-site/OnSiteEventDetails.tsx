import {FC} from 'react'
import { Address } from '../../../models/address';
import { Typography } from '@mui/material';
import { constructGoogleMapsURL } from '../../../utils/MapsUrlByAddress';
import styles from '../EventDetailsPanel.module.css';

interface Props {
  address: Address
}

const OnSiteEventDetails: FC<Props> = ({address}) => {
	const {venue, city, street, buildingNo, zip} = address;
	return (
		<>
			<Typography className={styles.info}>{venue}</Typography>
			<Typography className={styles.info}>{buildingNo} {street}</Typography>
			<Typography className={styles.info}>{city}</Typography>
			<Typography className={styles.info}>{zip}</Typography>
			<a className={styles.link} href={constructGoogleMapsURL(venue, city, street, buildingNo, zip)} title='This is a link to Google Maps'>
				View map
			</a>
		</>
	);
};

export default OnSiteEventDetails;