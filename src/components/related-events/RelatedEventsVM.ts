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
    const EVENTS_DISPLAY_COUNT = 4;
    const FIRST_PAGE = 0;
    const navigate = useNavigate();
    const { fetchPaginatedEvents } = useEventAPI();

    const fetchFunction = useCallback(() => {
        const tagIds = event?.tags.map(tag => tag.id);
        return fetchPaginatedEvents({tagIds, excludeEventId: event?.id, page: FIRST_PAGE, size: EVENTS_DISPLAY_COUNT});
    }, [event]);

    const { data: relatedEvents, isLoading, error } = useFetch(fetchFunction);

    const handleViewAllEvents = () => (navigate(ROUTES.INDEX));

    return { relatedEvents, isLoading, error, handleViewAllEvents };
};

export default RelatedEventsVM;