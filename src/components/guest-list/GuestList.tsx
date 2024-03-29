import { Avatar, AvatarGroup, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import './GuestList.css'

const MAX_DISPLAYED_AVATARS = 5;

const GuestList: React.FC = () => {

    /**
     * TODO: Redux Implementation to get guests list
     */
    const guests = [
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

    const extraGuestCount = guests.length - MAX_DISPLAYED_AVATARS;

    return (
        <List>
            <ListItem>
                <AvatarGroup className='avatarGroup'>
                    {guests.slice(0, MAX_DISPLAYED_AVATARS).map((guest, index) => (
                        <Avatar alt={guest.name} src={guest.src} key={guest.email} sx={{ zIndex: index }} />
                    ))}
                </AvatarGroup>
                {extraGuestCount > 0 && (
                    <Typography className='extraGuestCount'>
                        +{extraGuestCount} guests
                    </Typography>
                )}
            </ListItem>
        </List>
    )
}

export default GuestList