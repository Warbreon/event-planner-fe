import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Address } from '../../models/Address';
import styles from './EventDetailsPanel.module.css';
import OnSiteEventDetails from './on-site/OnSiteEventDetails';
import OnlineEventDetails from './online/OnlineEventDetails';
import { convertCurrencyToSymbol } from '../../constants/Currency';

interface EventDetailsPanelProps {
	eventDate: string;
	startTime: string;
	endTime: string;
	duration: string;
	address?: Address | null;
	inviteUrl?: string | null;
	price: number;
	currency: string;
}

const EventDetailsPanel: FC<EventDetailsPanelProps> = ({
	eventDate,
	startTime,
	endTime,
	duration,
	price,
	currency,
	address,
	inviteUrl,
}) => {
	return (
		<Box className={styles.rightDetailsPanel}>
			<Box className={styles.infoSection}>
				<Typography variant='body2'>When</Typography>
				<Typography>{eventDate}</Typography>
				<Typography>
					From {startTime} to {endTime}, {duration}
				</Typography>
			</Box>
			<Box className={styles.infoSection}>
				<Typography variant='body2'>Where</Typography>
				{!!inviteUrl && <OnlineEventDetails inviteUrl={inviteUrl} />}
				{!!address && <OnSiteEventDetails address={address} />}
				{!address && !inviteUrl && <Typography>TBD</Typography>}
			</Box>
			<Box className={styles.infoSection}>
				<Typography variant='body2'>Price</Typography>
				<Typography>{price > 0 ? `${convertCurrencyToSymbol(currency)} ` + price : 'Free of charge'} </Typography>
			</Box>
		</Box>
	);
};

export default EventDetailsPanel;
