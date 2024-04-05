import { Avatar, AvatarGroup, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Attendee } from '../../interfaces/attendee';
import { setAttendees } from '../../redux/slices/attendeesSlice';
import { RootState } from '../../redux/store/store';
import styles from './GuestList.module.css';

const MAX_DISPLAYED_AVATARS = 5;

const GuestList: React.FC = () => {
    const dispatch = useDispatch();
    const attendees = useSelector((state: RootState) => state.attendees.list);

    const attendeesMock: Attendee[] = [
        { name: 'Guest 1', src: 'https://i.pravatar.cc/150?img=1', email: 'guest1@example.com' },
        { name: 'Guest 2', src: 'https://i.pravatar.cc/150?img=2', email: 'guest2@example.com' },
        { name: 'Guest 3', src: 'https://i.pravatar.cc/150?img=3', email: 'guest3@example.com' },
        { name: 'Guest 4', src: 'https://i.pravatar.cc/150?img=4', email: 'guest4@example.com' },
        { name: 'Guest 5', src: 'https://i.pravatar.cc/150?img=5', email: 'guest5@example.com' },
        { name: 'Guest 6', src: 'https://i.pravatar.cc/150?img=6', email: 'guest6@example.com' },
        { name: 'Guest 7', src: 'https://i.pravatar.cc/150?img=7', email: 'guest7@example.com' },
        { name: 'Guest 8', src: 'https://i.pravatar.cc/150?img=8', email: 'guest8@example.com' },
        { name: 'Guest 9', src: 'https://i.pravatar.cc/150?img=9', email: 'guest9@example.com' },
        { name: 'Guest 10', src: 'https://i.pravatar.cc/150?img=10', email: 'guest10@example.com' },
    ];

    useEffect(() => {
        if (attendees.length === 0) {

            // TODO: make an API call
            dispatch(setAttendees(attendeesMock));
        }
    }, [attendees, attendeesMock, dispatch]);

    const extraGuestCount = attendees.length - MAX_DISPLAYED_AVATARS;

    return (
        <div className={styles.guestListContainer}>
            <AvatarGroup>
                {attendees.slice(0, MAX_DISPLAYED_AVATARS).map((guest: Attendee, index: number) => (
                    <Avatar alt={guest.name} src={guest.src} key={guest.email} sx={{ zIndex: index }} className={styles.avatar} />
                ))}
            </AvatarGroup>
            {extraGuestCount > 0 && (
                <Typography className={styles.extraGuestCount}>
                    +{extraGuestCount} guests
                </Typography>
            )}
        </div>
    )
}

export default GuestList