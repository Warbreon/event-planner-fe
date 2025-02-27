import { FC } from 'react';
import { Box, Card, CardContent, Avatar, Typography } from '@mui/material';
import { Attendee } from '../../../models/Attendee';
import style from './Attending.module.css';
import { IconButton } from '../../../shared/components/buttons/ButtonComponent';
import SectionHeader from '../../../shared/components/section-header/SectionHeader';
import { AVATAR_STYLES } from '../../../themes/styles/Avatar';

interface AttendingProps {
	attendees: Attendee[];
	handleChangeTab: (newValue: number) => void;
}

const Attending: FC<AttendingProps> = ({ attendees, handleChangeTab }) => {
	const displayedAttendees = attendees.slice(0, 4);
	return (
		<>
			<SectionHeader
				name="Who's attending"
				variableCount={attendees.length}
				buttonType={IconButton.VIEW_ALL_GUESTS}
				onButtonClick={() => handleChangeTab(1)}
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
