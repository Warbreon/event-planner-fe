import { useState, useCallback, useEffect, FC } from 'react';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { useApiRequest } from '../api/hooks/ApiHooks';
import useAttendeeAPI from '../api/AttendeeAPI';

interface Props {
    eventId: number;
    initialRegistrationStatus: REGISTRATION_STATUS | null;
    isOpenEvent: boolean;
    isCreator: boolean;
}

const useRegistration = ({ eventId, initialRegistrationStatus, isOpenEvent, isCreator }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(initialRegistrationStatus);
    const { request, isLoading, error } = useApiRequest();
    const { registerToEvent, unregisterFromEvent } = useAttendeeAPI();
    const [lastAction, setLastAction] = useState<'register' | 'unregister' | null>(null);

    const register = useCallback(() => {
        request(() => registerToEvent(eventId));
        setLastAction('register');
    }, [eventId, request, registerToEvent]);

    const unregister = useCallback(() => {
        request(() => unregisterFromEvent(eventId));
        setLastAction('unregister');
    }, [eventId, request, unregisterFromEvent]);

    useEffect(() => {
        setRegistrationStatus(initialRegistrationStatus);
        setModalOpen(false);
        setLastAction(null);
    }, [eventId, initialRegistrationStatus, isOpenEvent]);

    useEffect(() => {
        if (!error && !isLoading) {
            if (lastAction === 'register') {
                setRegistrationStatus(isCreator || isOpenEvent ? REGISTRATION_STATUS.ACCEPTED : REGISTRATION_STATUS.PENDING);
                setModalOpen(true);
            } else if (lastAction === 'unregister') {
                setRegistrationStatus(REGISTRATION_STATUS.DEFAULT);
            }
        }
    }, [isLoading, error, lastAction, isOpenEvent]);

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
