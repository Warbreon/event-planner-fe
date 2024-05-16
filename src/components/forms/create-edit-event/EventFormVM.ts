import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { parseAgendaItems } from "../../../utils/AgendaUtils";
import { useApiRequest, useFetch } from "../../../api/hooks/ApiHooks";
import useUserAPI from "../../../api/UserAPI";
import { useCallback, useEffect } from "react";
import { LocationTags } from "../../../constants/LocationTags";
import { mapEventFormValuesToEvent } from "../../../utils/mappings/EventMappings";
import useEventAPI from "../../../api/EventsAPI";
import { useNavigate } from "react-router";
import { Currency } from "../../../constants/Currency";
import { getBase64 } from "../../../utils/Base64Encoder";

const EventFormVM = () => {
    const agenda = ['7:00 am-Introduction', '12:30 pm-Presentations', '8:00 pm-Conclusion'];
    const parsedAgendaItems = parseAgendaItems(agenda);
    const { request, isLoading: isCreateEventLoading, error: createEventError, data } = useApiRequest();
    const { createEvent } = useEventAPI();
    const navigate = useNavigate();

    // TODO: Fetch from API and get from redux.
    const initialValues: EventFormValues = {
        imageBase64: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        eventName: '',
        eventTagIds: [],
        cardImageBase64: null,
        addressId: null,
        inviteUrl: '',
        agenda: parsedAgendaItems,
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
        attendeeIds: [],
        locationKey: LocationTags.PHYSICAL,
        currency: Currency.USD,
        price: 0,
        tickets: 0,
        description: '',
    };

    const determineLocationKey = (values: EventFormValues) => {
        if (values.inviteUrl) {
            return LocationTags.ONLINE;
        } else if (values.addressId) {
            return LocationTags.PHYSICAL;
        } else {
            return LocationTags.TBD;
        }
    };

    initialValues.locationKey = determineLocationKey(initialValues);

    const { fetchUsers } = useUserAPI();
    const fetchFuntion = useCallback(() => {
        return fetchUsers();
    }, []);


    const { data: users, isLoading, error } = useFetch(fetchFuntion);

    const onSubmit = async (formValues: EventFormValues) => {
        const eventValues = mapEventFormValuesToEvent(formValues);
        await request(() => createEvent(eventValues));
        console.log(eventValues);
    };

    useEffect(() => {
        if (!isCreateEventLoading && !createEventError && data) {
            navigate(`/events/event/${data.id}`);
        }
    }, [isCreateEventLoading, createEventError, data]);

    const handleCancelOnClick = () => {
        console.log('Canceled');
    };

    return { initialValues, onSubmit, handleCancelOnClick, users, isCreateEventLoading }
}

export default EventFormVM;
