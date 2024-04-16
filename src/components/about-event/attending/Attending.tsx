import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import { Attendee } from '../../../models/Attendee';
import style from './Attending.module.css';
import { IconButton } from '../../buttons/ButtonComponent';
import SectionHeader from '../../shared/section-header/SectionHeader';

interface AttendingProps {
	attendees: Attendee[];
}

const Attending: React.FC<AttendingProps> = ({ attendees }) => {
	const displayedAttendees = attendees.slice(0, 4);

	return (
		<>
			<SectionHeader
				name="Who's attending"
				variableCount={attendees?.length}
				buttonType={IconButton.VIEW_ALL_GUESTS}
				onButtonClick={() => null}
			/>
			<Box className={style.cardContainer}>
				{displayedAttendees.map((attendee) => (
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
		</>
	);
};

export default Attending;
