import { Typography, Box, Divider, Chip } from '@mui/material';

import { Attendee } from '../../models/Attendee';
import Agenda from './agenda/Agenda';
import Attending from './attending/Attending';

interface EventDetailsProps {
	description: string;
	agenda: string[] | null;
	attendees: Attendee[] | null;
	eventTags: string[] | null;
}

const AboutEvent: React.FC<EventDetailsProps> = ({ agenda, attendees, eventTags, description }) => {
	return (
		<Box id='allDetailsBox' marginTop='25px'>
			<Typography variant='h2'>Details</Typography>
			<Typography marginTop='25px' variant='body1'>
				{description}
			</Typography>
			{eventTags && (
				<Box marginTop='25px'>
					<Typography variant='h3'>Tags</Typography>
					<Box marginY='25px'>
						{eventTags.map((tag, index) => (
							<Chip key={index} label={tag} />
						))}
					</Box>
				</Box>
			)}
			{agenda && (
				<Box>
					<Divider />
					<Box id='agendaBox' marginY='25px'>
						<Agenda agendaItems={agenda} />
					</Box>
				</Box>
			)}
			{attendees && (
				<Box>
					<Divider />
					<Box id='attendeesBox' marginY='25px'>
						<Attending attendees={attendees} />
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default AboutEvent;
