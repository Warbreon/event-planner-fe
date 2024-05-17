import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { useApiRequest } from "../../../api/hooks/ApiHooks";
import { useEffect } from "react";
import { LocationTags } from "../../../constants/LocationTags";
import { mapEventFormValuesToEvent } from "../../../utils/mappings/EventMappings";
import useEventAPI from "../../../api/EventsAPI";
import { useNavigate } from "react-router";
import { Currency } from "../../../constants/Currency";
import { parseAgendaItems } from "../../../utils/AgendaUtils";
import ROUTES from "../../../routes/Routes";

const EventFormVM = () => {

    const { request, isLoading: isCreateEventLoading, error: createEventError, data: event } = useApiRequest();
    const { createEvent } = useEventAPI();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isCreateEventLoading && !createEventError && event) {
            navigate(ROUTES.EVENT.replace(':eventId', event.id));
        }
    }, [isCreateEventLoading, createEventError, event, navigate]);

    const initialValues: EventFormValues = {
        imageBase64: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        eventName: '',
        eventTagIds: [],
        cardImageBase64: null,
        addressId: 0,
        inviteUrl: '',
        agenda: parseAgendaItems([]),
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
        attendeeIds: [],
        locationKey: LocationTags.PHYSICAL,
        currency: Currency.EUR,
        price: 0,
        tickets: 0,
        description: ''
    };

    const onSubmit = async (formValues: EventFormValues) => {
        console.log(formValues)


        const eventValues = await mapEventFormValuesToEvent(formValues);
        await request(() => createEvent(eventValues));
        console.log(eventValues)
    };


    const handleCancelOnClick = () => {
        navigate(ROUTES.MY_EVENTS);
    };

    return { initialValues, onSubmit, handleCancelOnClick, isCreateEventLoading }
}

export default EventFormVM;
