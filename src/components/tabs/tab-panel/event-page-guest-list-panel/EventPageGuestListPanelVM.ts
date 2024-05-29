import { ChangeEvent, useEffect, useState } from 'react';
import { Attendee } from '../../../../models/Attendee';
import { useDebouncedCallback } from 'use-debounce';
import useNotificationActions from '../../../notification/NotificationActions';
import { ALERT_SEVERITY } from '../../../snackbar/SnackbarComponent';

const EventPageGuestListPanelVM = (attendees: Attendee[]) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredAttendees, setFilteredAttendees] = useState<Attendee[]>(attendees);

    const { patchError, handleConfirmOnClick, handleDeclineOnClick, getButtonStyles } = useNotificationActions();

    const [isSnackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SEVERITY.SUCCESS);

    const handleSnackbarClose = () => setSnackbarOpen(false);

    useEffect(() => {
        if (patchError) {
            setSnackbarMessage(patchError);
            setSnackbarSeverity(ALERT_SEVERITY.ERROR);
            setSnackbarOpen(true);
        }
    }, [patchError]);

    const searchAttendees = (value: string) => {
        const term = value.toLowerCase();
        setFilteredAttendees(
            attendees.filter(attendee =>
                `${attendee.user.firstName} ${attendee.user.lastName}`.toLowerCase().includes(term)
            )
        );
    };

    const debouncedSearchAttendees = useDebouncedCallback(searchAttendees, 500);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        debouncedSearchAttendees(value);
    };

    return {
        isSnackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        handleSnackbarClose,
        onInputChange, 
        handleConfirmOnClick, 
        handleDeclineOnClick, 
        getButtonStyles,
        filteredAttendees
    };
};

export default EventPageGuestListPanelVM;
