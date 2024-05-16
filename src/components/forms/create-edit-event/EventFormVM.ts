import { EventFormValues } from "../../../interfaces/EventFormValuesInterface";
import { combineDateTime } from "../../../utils/DateConverter";
import { formatAgendaItems, parseAgendaItems } from "../../../utils/AgendaUtils";
import { useFetch } from "../../../api/hooks/ApiHooks";
import useUserAPI from "../../../api/UserAPI";
import { useCallback } from "react";
import { LocationTags } from "../../../constants/LocationTags";
import { getBase64 } from "../../../utils/Base64Encoder";

const EventFormVM = () => {
    const agenda = ['7:00 am-Introduction', '12:30 pm-Presentations', '8:00 pm-Conclusion'];
    const parsedAgendaItems = parseAgendaItems(agenda);

    // TODO: Fetch from API and get from redux.
    const initialValues: EventFormValues = {
        imageBase64: null,
        eventStartDate: null,
        eventStartTime: null,
        eventEndDate: null,
        eventEndTime: null,
        eventName: '',
        eventTag: [],
        cardImageBase64: null,
        addressId: null,
        inviteUrl: '',
        agenda: parsedAgendaItems,
        isOpen: true,
        registrationStartDate: null,
        registrationStartTime: null,
        registrationEndDate: null,
        registrationEndTime: null,
        attendees: [],
        price: 0,
        currency: 'eur',
        tickets: 0,
        locationKey: LocationTags.PHYSICAL,
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

    const {fetchUsers} = useUserAPI();
    const fetchFuntion = useCallback(() => {
        return fetchUsers();
    }, []);


    const { data: users, isLoading, error } = useFetch(fetchFuntion);
   
    const onSubmit = async (values: EventFormValues) => {
        const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
        const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);
        const formattedAgenda = formatAgendaItems(values.agenda ?? []);
        const registrationStart = combineDateTime(values.registrationStartDate, values.registrationStartTime);
        const registrationEnd = combineDateTime(values.registrationEndDate, values.registrationEndTime);

        const imageBase64 = values.imageBase64 ? await getBase64(values.imageBase64 as unknown as File) : null;
        const cardImageBase64 = values.cardImageBase64 ? await getBase64(values.cardImageBase64 as unknown as File) : null;

        const submitValues = {
            imageBase64,
            cardImageBase64,
            eventStart,
            eventEnd,
            formattedAgenda,
            registrationStart,
            registrationEnd,
            isOpen: values.isOpen,
            addressId: values.addressId,
            inviteUrl: values.inviteUrl,
            attendees: values.attendees,
            price: values.price,
            currency: values.currency,
            tickets: values.tickets,
            eventTag: values.eventTag,
        };

        console.log(submitValues);
    };

    const handleCancelOnClick = () => {
        console.log('Canceled');
    };

    return { initialValues, onSubmit, handleCancelOnClick, users }
}

export default EventFormVM;
