import { useState } from "react"
import { Event } from "../../../models/Event"
import { formatDate, formatDifferenceInDays, isDateInThePast, isNowBetween } from "../../../utils/DateConverter";
import useEventAPI from "../../../api/EventsAPI";
import { useApiRequest } from "../../../api/hooks/ApiHooks";

const EventCardVM = (event: Partial<Event>) => {
    const { name = '', eventStart = '', eventEnd = '', address, inviteUrl, isCancelled } = event;

    const { cancelEvent } = useEventAPI();
    const { request: patchData } = useApiRequest();

    const [isEventCancelled, setIsEventCancelled] = useState<boolean>(isCancelled || false);
    const [eventName, setEventName] = useState<string>(isCancelled ? `[CANCELLED] ${name}` : name);

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