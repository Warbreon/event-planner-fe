import { useState, useCallback, useEffect } from 'react';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { useApiRequest } from '../api/hooks/ApiHooks';
import useAttendeeAPI from '../api/AttendeeAPI';
import { useDispatch } from 'react-redux';
import { registerToUserEvent, unregisterFromUserEvent } from '../redux/slices/MyEventsSlice';
import { Event } from '../models/Event';

interface Props {
    event: Event;
    isCreator: boolean;
}

const useRegistration = ({ event, isCreator }: Props) => {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(event.currentUserRegistrationStatus);
    const { request, isLoading, error } = useApiRequest();
    const { registerToEvent, unregisterFromEvent } = useAttendeeAPI();
    const [lastAction, setLastAction] = useState<'register' | 'unregister' | null>(null);

    const register = useCallback(() => {
        request(() => registerToEvent(event.id));
        setLastAction('register');
    }, [event.id, request, registerToEvent]);

    const unregister = useCallback(() => {
        request(() => unregisterFromEvent(event.id));
        setLastAction('unregister');
    }, [event.id, request, unregisterFromEvent]);

    useEffect(() => {
        setRegistrationStatus(event.currentUserRegistrationStatus);
        setModalOpen(false);
        setLastAction(null);
    }, [event]);

    useEffect(() => {
        if (!error && !isLoading) {
            if (lastAction === 'register') {
                const newRegistrationStatus = isCreator || event.isOpen ? REGISTRATION_STATUS.ACCEPTED : REGISTRATION_STATUS.PENDING;
                const updatedEvent = { ...event, currentUserRegistrationStatus: newRegistrationStatus };

                setRegistrationStatus(newRegistrationStatus);
                dispatch(registerToUserEvent(updatedEvent));
                setModalOpen(true);
            } else if (lastAction === 'unregister') {
                setRegistrationStatus(REGISTRATION_STATUS.DEFAULT);
                dispatch(unregisterFromUserEvent(event.id));
            }
        }
    }, [isLoading, error, event]);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    return {
        isModalOpen,
        isLoading,
        error,
        registrationStatus,
        register,
        unregister,
        closeModal
    };
};

export default useRegistration;
