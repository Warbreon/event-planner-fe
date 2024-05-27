import { ChangeEvent, useEffect, useState } from 'react';
import { Attendee } from '../../../../models/Attendee';
import { useDebouncedCallback } from 'use-debounce';
import useNotificationActions from '../../../notification/NotificationActions';

const EventPageGuestListPanelVM = (attendees: Attendee[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredAttendees, setFilteredAttendees] = useState<Attendee[]>(attendees);

    const { handleConfirmOnClick, handleDeclineOnClick, getButtonStyles } = useNotificationActions();

    const searchAttendees = (value: string) => {
        const term = value.toLowerCase();
        setFilteredAttendees(
            attendees.filter(attendee =>
                `${attendee.user.firstName} ${attendee.user.lastName}`.toLowerCase().includes(term)
            )
        );
    };

    const debouncedSearchAttendees = useDebouncedCallback(searchAttendees, 500);

    const onPlusButtonClick = () => {
        (console.log("Button clicked"));
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        debouncedSearchAttendees(value);
    };

    return { 
        onPlusButtonClick, 
        onInputChange, 
        handleConfirmOnClick, 
        handleDeclineOnClick, 
        getButtonStyles,
        filteredAttendees
    };
};

export default EventPageGuestListPanelVM;
