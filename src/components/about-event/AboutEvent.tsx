import { Typography, Box, Divider, Chip } from '@mui/material';
import { Attendee } from '../../models/Attendee';
import Agenda from './agenda/Agenda';
import Attending from './attending/Attending';
import SectionHeader from '../../shared/components/section-header/SectionHeader';
import { Tag } from '../../models/Tag';
import { Address } from '../../models/Address';
import { FC } from 'react';
import MapSection from '../map/MapSection';
import styles from './AboutEvent.module.css';

interface EventDetailsProps {
	description: string;
	agenda: string[] | null;
	attendees: Attendee[] | null;
	eventTags: Tag[] | null;
	address: Address | null | undefined;
}

const AboutEvent: FC<EventDetailsProps> = ({ agenda, attendees, eventTags, description, address }) => {
	return (
		<Box id='allDetailsBox'>
			<Box className={styles.sectionContainer}>
				<SectionHeader name='Details' />
				<Typography marginTop='25px' variant='body1'>
					{description}
				</Typography>
			</Box>
			{eventTags && eventTags.length > 0 && (
				<Box className={styles.sectionContainer}>
					<Typography variant='h3'>Tags</Typography>
					<Box marginY='25px'>
						{eventTags.map((tag) => (
							<Chip className='event-page-tag' key={tag.id} label={tag.name} />
						))}
					</Box>
				</Box>
			)}
			{agenda && (
				<Box id='agendaBox' className={styles.sectionContainer}>
					<Divider />
					<Agenda agendaItems={agenda} />
				</Box>
			)}

			{attendees && attendees?.length > 0 && (
				<Box className={styles.sectionContainer}>
					<Divider />
					<Attending attendees={attendees} />
				</Box>
			)}

			{address && (
				<Box className={styles.sectionContainer}>
					<Divider />
					<MapSection address={address} />
				</Box>
			)}
		</Box>
	);
};

export default AboutEvent;
