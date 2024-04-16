import { Avatar, AvatarGroup, Typography } from "@mui/material";
import { FC } from "react";
import { Attendee } from "../../models/Attendee";
import styles from "./GuestList.module.css";
import { filterAttendees } from "./GuestListVM";

interface GuestListProps {
  attendees: Attendee[];
}

const MAX_DISPLAYED_AVATARS = 5;

const GuestList: FC<GuestListProps> = ({ attendees }) => {
  const filteredAttendees = filterAttendees(attendees);
  const extraGuestCount = filteredAttendees.length - MAX_DISPLAYED_AVATARS;

  return (
    <div className={styles.guestListContainer}>
      <AvatarGroup>
        {filteredAttendees
          .slice(0, MAX_DISPLAYED_AVATARS)
          .map((guest: Attendee, index: number) => (
            <Avatar
              alt={`${guest.user.firstName} ${guest.user.lastName}`}
              src={guest.user.imageUrl}
              key={guest.id}
              sx={{ zIndex: index }}
              className={styles.avatar}
            />
          ))}
      </AvatarGroup>
      {extraGuestCount > 0 && (
        <Typography className={styles.extraGuestCount}>
          +{extraGuestCount} guests
        </Typography>
      )}
    </div>
  );
};

export default GuestList;
