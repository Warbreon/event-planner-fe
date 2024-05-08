import { useState, useCallback, useEffect, FC } from 'react';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { usePost } from '../api/hooks/ApiHooks';
import useEventAPI from '../api/EventsAPI';

interface Props {
    eventId: number;
    initialRegistrationStatus: REGISTRATION_STATUS | null;
    isEventOpen: boolean;
}

const useRegistration = ({ eventId, initialRegistrationStatus, isEventOpen }: Props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(initialRegistrationStatus);
    const { postData, isLoading, error, data } = usePost();
    const { registerToEvent } = useEventAPI();

    const register = useCallback(async () => {
        await postData(() => registerToEvent(eventId));
    }, [eventId, postData]);

    useEffect(() => {
        setRegistrationStatus(initialRegistrationStatus);
    }, [initialRegistrationStatus]);

    useEffect(() => {
        if (!isLoading && !error && data) {
            const newStatus = isEventOpen ? REGISTRATION_STATUS.ACCEPTED : REGISTRATION_STATUS.PENDING;
            setRegistrationStatus(newStatus);
            setModalOpen(true);
        }
    }, [isLoading, error, data]);

    const closeModal = useCallback(() => {
        setModalOpen(false);
    }, []);

    return {
        isModalOpen,
        isLoading,
        error,
        registrationStatus,
        register,
        closeModal
    };
};

export default useRegistration;
