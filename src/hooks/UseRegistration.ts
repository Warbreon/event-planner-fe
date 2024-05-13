import { useState, useCallback, useEffect, FC } from 'react';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { usePost } from '../api/hooks/ApiHooks';
import useAttendeeAPI from '../api/AttendeeAPI';

interface Props {
    eventId: number;
    initialRegistrationStatus: REGISTRATION_STATUS | null;
    isOpenEvent: boolean;
}

const useRegistration = ({ eventId, initialRegistrationStatus, isOpenEvent }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(initialRegistrationStatus);
    const { postData, isLoading, error, data } = usePost();
    const { registerToEvent, unregisterFromEvent } = useAttendeeAPI();
    const [lastAction, setLastAction] = useState<'register' | 'unregister' | null>(null);

    const register = useCallback(() => {
        postData(() => registerToEvent(eventId));
        setLastAction('register');
    }, [eventId, postData, registerToEvent]);

    const unregister = useCallback(() => {
        postData(() => unregisterFromEvent(eventId));
        setLastAction('unregister');
    }, [eventId, postData, unregisterFromEvent]);

    useEffect(() => {
        if (!error && !isLoading) {
            if (lastAction === 'register') {
                setRegistrationStatus(isOpenEvent ? REGISTRATION_STATUS.ACCEPTED : REGISTRATION_STATUS.PENDING);
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
