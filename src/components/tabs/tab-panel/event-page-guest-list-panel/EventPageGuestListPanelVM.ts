import { ChangeEvent, useEffect, useState } from 'react';
import useAttendeeAPI from '../../../../api/AttendeeAPI';
import { BUTTON_STYLES } from '../../../../themes/styles/Button';
import { useApiRequest } from '../../../../api/hooks/ApiHooks';
import { Attendee } from '../../../../models/Attendee';

const EventPageGuestListPanelVM = (attendees: Attendee[]) => {
    const [lastClicked, setLastClicked] = useState<Record<number, string>>({});
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredAttendees, setFilteredAttendees] = useState<Attendee[]>(attendees);
    const { confirmPendingRegistration, declinePendingRegistration } = useAttendeeAPI();
    const { request: patchData } = useApiRequest();

    useEffect(() => {
        const term = searchTerm.toLowerCase();
        setFilteredAttendees(
            attendees.filter(attendee => 
                `${attendee.user.firstName} ${attendee.user.lastName}`.toLowerCase().includes(term)
            )
        )
    }, [searchTerm, attendees]);

    const onPlusButtonClick = () => {
        (console.log("Button clicked"));
    };
    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        console.log("New input", event.target.value);
    };
    const onConfirmClick = async (attendeeId: number) => {
        if (lastClicked[attendeeId] !== 'confirm') {   
            setLastClicked(prevState => ({ ...prevState, [attendeeId]: 'confirm' }));
            //console.log("Confirmed", attendeeId);
            //await patchData(() => confirmPendingRegistration(attendeeId));
        }
    };

    const onDeclineClick = async (attendeeId: number) => {
        if (lastClicked[attendeeId] !== 'decline') {    
            setLastClicked(prevState => ({ ...prevState, [attendeeId]: 'decline' }));
            //console.log("Declined", attendeeId);
            //await patchData(() => declinePendingRegistration(attendeeId));
        }
    };

    const getConfirmButtonStyles = (attendeeId: number) => {
        return lastClicked[attendeeId] === 'confirm'
            ? BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION_CONFIRMED 
            : BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION
    }

    const getDeclinedButtonStyles = (attendeeId: number) => {
        return lastClicked[attendeeId] === 'decline'
            ? BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION_DECLINED 
            : BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION
    }

    return { 
        onPlusButtonClick, 
        onInputChange, 
        onConfirmClick, 
        onDeclineClick, 
        getConfirmButtonStyles, 
        getDeclinedButtonStyles,
        filteredAttendees
    };
};

export default EventPageGuestListPanelVM;
