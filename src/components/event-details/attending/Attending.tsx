import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import { EventAttendee } from '../EventDetailsInterface';

import style from './Attending.module.css';

interface AttendingProps {
	attendees: EventAttendee[] | null;
}

const Attending: React.FC<AttendingProps> = ({ attendees }) => {
	return (
		<>
			<h2>Who's attending {`(${attendees ? attendees.length : 0})`}</h2>
			{attendees && (
				<Box marginY='25px' className={style.cardContainer}>
					{attendees.map((attendee) => (
						<Card key={attendee.id} className='userCard' elevation={0}>
							<CardContent>
								<Avatar
									className='attendeeAvatar'
									alt={`${attendee.user?.firstName} ${attendee.user?.lastName}`}
									src={attendee.user?.imageUrl}
								/>
								<Typography variant='body1' color='text.primary'>
									{attendee.user?.firstName}
									<br />
									{attendee.user?.lastName}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{attendee.user?.jobTitle}
								</Typography>
							</CardContent>
						</Card>
					))}
				</Box>
			)}
		</>
	);
};

export default Attending;
