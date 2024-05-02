import { useCallback } from "react";
import useEventAPI from "../../api/EventsAPI";
import { Event } from "../../models/Event";
import { useFetch } from "../../api/hooks/ApiHooks";
import { useNavigate } from "react-router";
import ROUTES from "../../routes/Routes";

interface Props {
    event: Event | null;
};

const RelatedEventsVM = ({ event }: Props) => {
    const navigate = useNavigate();
    const { fetchEvents } = useEventAPI();

    const fetchFunction = useCallback(() => {
        const tagIds = event?.tags.map(tag => tag.id);
        return fetchEvents(tagIds);
    }, [event, fetchEvents]);

    const { data: relatedEvents, isLoading, error } = useFetch(fetchFunction);

    const handleViewAllEvents = () => (navigate(ROUTES.INDEX));

    return { relatedEvents, isLoading, error, handleViewAllEvents };
};

export default RelatedEventsVM;