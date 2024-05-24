import { useParams } from 'react-router';
import useEventAPI from '../../../api/EventsAPI';
import {useCallback, useEffect, useState} from 'react';
import {useApiRequest, useFetch} from '../../../api/hooks/ApiHooks';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../../redux/store/Store";
import {UserRoles} from "../../../utils/PermissionParser";
import useUserAPI from "../../../api/UserAPI";
import {
    filterAttendees,
    filterAttendeesByRegistationStatusAndFullname,
    UserRegistrationStatus
} from "../../../utils/AttendeeFilter";
import {User} from "../../../models/User";
import {add, removeAll} from "../../../redux/slices/CreateEventPageSlice";
import {areArraysEqual} from "../../../utils/CompareArrays";
import useAttendeeAPI from "../../../api/AttendeeAPI";
import {BUTTON_LABELS} from "../../../themes/styles/Button";

const EventPageGuestsVM = () => {
    const { eventId } = useParams();
    const { fetchEventById } = useEventAPI();
    const { fetchSimpleUsersAndEventAdmins } = useUserAPI();
    const { updateEventAttendees, getEventAttendees } = useAttendeeAPI();
    const dispatch = useDispatch();
    const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
    const fetchEventFunction = useCallback(() => {return fetchEventById(Number(eventId));}, []);
    const fetchUsersFunction = useCallback(() => {return fetchSimpleUsersAndEventAdmins();}, []);
    const fetchAttendeesFunction = useCallback(() => {return getEventAttendees(Number(eventId));}, [currentlySelectedUsers]);
    const { data: event, isLoading, error } = useFetch(fetchEventFunction);
    const { data: users, isLoading : isUsersLoading, error: usersError } = useFetch(fetchUsersFunction);
    const { data: attendeeList, isLoading : isAttendeesLoading, error: attendeesError } = useFetch(fetchAttendeesFunction);
    const { request: updateData, isLoading: dataUpdateIsLoading, error: dataUpdateError } = useApiRequest();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [confirmButtonLabel, setConfirmButtonLabel] = useState<BUTTON_LABELS>(BUTTON_LABELS.ADD_GUESTS);
    const newUserSelection = useSelector((state: StoreState) => state.createEventGuests);
    const [updateTrigger, triggerUpdate] = useState<boolean>(false);

    const isUserCreator = useSelector((state: StoreState) =>
        state.user.role === UserRoles.SYSTEM_ADMIN ||
        event?.creatorId === state.userInfo.userId &&
        state.user.role === UserRoles.EVENT_ADMIN
    );

    const filteredAttendees = isUserCreator
        ? filterAttendeesByRegistationStatusAndFullname(attendeeList!)
        : filterAttendees(attendeeList!);

    const onModalOpen = () => {
        const currentGuests =
            users!.filter(value =>
                attendeeList!.filter(value =>
                    (value.registrationStatus === UserRegistrationStatus.ACCEPTED)).map(value =>
                    value.user.id).includes(value.id)) as User[] || [];
        currentGuests.map(value => !currentlySelectedUsers.includes(value) && dispatch(add(value)));
        triggerUpdate(!updateTrigger);

        if (currentlySelectedUsers.length > 0) {
            currentlySelectedUsers.forEach((user) => dispatch(add(user)));
        }
        setShowModal(!showModal);
    };

    const onModalClose = () => {
        setShowModal(!showModal);
        dispatch(removeAll());
    };

    const onConfirm = async () => {
        setError(false, '');
        if (currentlySelectedUsers.length === 0 && newUserSelection.length === 0) {
            setError(true, 'Select employees you would like to invite to this event!');
            return;
        }

        if (!areArraysEqual(newUserSelection, currentlySelectedUsers)) {
            await updateData(() => updateEventAttendees(event!.id ,newUserSelection.map(value => value.id)));
            setCurrentlySelectedUsers(newUserSelection);
            onModalClose();
        } else {
            setError(true, 'Selected employees are already added to the guest list!');
        }
    };
    const setError = (error: boolean, message: string) => {
        setShowError(error);
        setErrorMessage(message);
    };

    useEffect (() => {
        setCurrentlySelectedUsers(newUserSelection);
    }, [updateTrigger]);

    useEffect(() => {
        setError(false, '');
        if (
            currentlySelectedUsers.length > newUserSelection.length ||
            areArraysEqual(newUserSelection, currentlySelectedUsers)
        ) {
            setConfirmButtonLabel(BUTTON_LABELS.SAVE_CHANGES);
        } else {
            setConfirmButtonLabel(BUTTON_LABELS.ADD_GUESTS);
        }
    }, [currentlySelectedUsers, newUserSelection]);

    return {isUserCreator, onModalClose, onConfirm, setError, onModalOpen, showModal, confirmButtonLabel, showError, errorMessage, users, attendeeList,filteredAttendees};
};

export default EventPageGuestsVM;
