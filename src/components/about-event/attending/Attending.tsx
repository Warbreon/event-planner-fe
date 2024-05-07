import { FC } from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import { Attendee } from '../../../models/Attendee';
import style from './Attending.module.css';
import { IconButton } from '../../../shared/components/buttons/ButtonComponent';
import SectionHeader from '../../../shared/components/section-header/SectionHeader';
import { filterAttendees } from '../../../utils/AttendeeFilter';
import { AVATAR_STYLES } from '../../../themes/styles/Avatar';

interface AttendingProps {
	attendees: Attendee[];
}

const Attending: FC<AttendingProps> = ({ attendees }) => {
	const filteredAttendees = filterAttendees(attendees);
	const displayedAttendees = filteredAttendees.slice(0, 4);

	return (
		<>
			<SectionHeader
				name="Who's attending"
				variableCount={filteredAttendees.length}
				buttonType={IconButton.VIEW_ALL_GUESTS}
				onButtonClick={() => null}
			/>
			<Box className={style.cardContainer}>
				{displayedAttendees.map((attendee) => (
					<Card key={attendee.id} className='userCard' elevation={0}>
						<CardContent>
							<Avatar
								className={AVATAR_STYLES.ATTENDEE_AVATAR}
								alt={`${attendee.user.firstName} ${attendee.user.lastName}`}
								src={attendee.user.imageUrl}
							/>
							<Typography variant='body1' color='text.primary'>
								{attendee.user.firstName}
								<br />
								{attendee.user.lastName}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{attendee.user.jobTitle}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>
		</>
	);
};

export default Attending;
