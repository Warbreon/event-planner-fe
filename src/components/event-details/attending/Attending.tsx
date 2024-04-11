import React from 'react';
import { Box, Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import { EventAttendee } from '../EventDetailsInterface';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import style from './Attending.module.css';

interface AttendingProps {
	attendees: EventAttendee[] | null;
}

const Attending: React.FC<AttendingProps> = ({ attendees }) => {
	return (
		<>
			<Box className={style.attendeeHeader}>
				<Typography variant='h2'>Who's attending {`(${attendees ? attendees.length : 0})`}</Typography>
				<Button className={BUTTON_STYLES.TEXT_ONLY} onClick={() => null} variant='text' disableRipple>
					<Typography fontWeight='bold'>View all guests</Typography>
					<KeyboardArrowRightRoundedIcon />
				</Button>
			</Box>
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
