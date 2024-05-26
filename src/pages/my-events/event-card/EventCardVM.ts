import { useEffect, useState } from "react"
import { Event } from "../../../models/Event"
import { formatDate, formatDifferenceInDays, isDateInThePast, isNowBetween } from "../../../utils/DateConverter";
import useEventAPI from "../../../api/EventsAPI";
import { useApiRequest } from "../../../api/hooks/ApiHooks";
import { ALERT_SEVERITY } from "../../../components/snackbar/SnackbarComponent";

const EventCardVM = (event: Partial<Event>) => {
    const { name = '', eventStart = '', eventEnd = '', address, inviteUrl, isCancelled } = event;

    const { cancelEvent } = useEventAPI();
    const { request: patchData, error: patchError } = useApiRequest();

    const [isEventCancelled, setIsEventCancelled] = useState<boolean>(isCancelled || false);
    const [eventName, setEventName] = useState<string>(isCancelled ? `[CANCELLED] ${name}` : name);

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

    const formattedEventStart = formatDate(eventStart.toString());
    const location = address ? address.city : inviteUrl ? 'Online' : 'TBD'; 

    const onEditClick = () => {
        //TODO
    }

    const onCancelClick = async (id: number) => {
        if (!isEventCancelled) {
            setIsEventCancelled(true);
            setEventName(`[CANCELLED] ${name}`);
            await patchData(() => cancelEvent(id));
        }
    }

    return {
        isSnackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        handleSnackbarClose,
        isEventCancelled,
        eventName,
        formattedEventStart,
        location,
        onEditClick,
        onCancelClick,
        isDateInThePast: isDateInThePast(eventStart),
        isNowBetween: isNowBetween(eventStart, eventEnd),
        formatDifferenceInDays: formatDifferenceInDays(eventStart)
    }
}

export default EventCardVM;