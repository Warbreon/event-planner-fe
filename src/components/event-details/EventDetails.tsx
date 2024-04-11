import { Typography, Box, Divider, Chip } from '@mui/material';
import { loadEvent } from './EventDataLoader';

import Agenda from './agenda/Agenda';
import Attending from './attending/Attending';

const EventDetails = () => {
	const event = loadEvent();
	return (
		<Box id='allDetailsBox' marginTop='25px'>
			<Typography variant='h2'>Details</Typography>
			<Typography marginTop='25px' variant='body1'>
				{event.description}
			</Typography>
			{event.eventTags && (
				<Box marginTop='25px'>
					<Typography variant='h3'>Tags</Typography>
					<Box marginY='25px'>
						{event.eventTags.map((tag, index) => (
							<Chip key={index} label={tag} />
						))}
					</Box>
					<Divider />
				</Box>
			)}
			{event.agenda && (
				<Box id='agendaBox' marginY='25px'>
					<Agenda agendaItems={event.agenda} />
				</Box>
			)}
			<Divider />
			<Box id='attendeesBox' marginY='25px'>
				<Attending attendees={event.attendees} />
			</Box>
		</Box>
	);
};

export default EventDetails;
