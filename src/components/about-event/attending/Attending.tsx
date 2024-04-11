import React from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import { Attendee } from '../../../models/Attendee';
import style from './Attending.module.css';
import GenericButton, { ButtonTypes, IconButton } from '../../buttons/ButtonComponent';

interface AttendingProps {
	attendees: Attendee[];
}

const Attending: React.FC<AttendingProps> = ({ attendees }) => {
	const displayedAttendees = attendees.slice(0, 4);

	return (
		<>
			<Box className={style.attendeeHeader}>
				<Typography variant='h2'>Who's attending ({attendees?.length})</Typography>
				<GenericButton
					type={ButtonTypes.button}
					styles={BUTTON_STYLES.TEXT_ONLY}
					onClick={() => null}
					icon={IconButton.VIEW_ALL_GUESTS}
					iconAtEnd
				/>
			</Box>
			<Box marginY='25px' className={style.cardContainer}>
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
