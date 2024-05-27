import { useState, useCallback, useEffect } from 'react';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { useApiRequest } from '../api/hooks/ApiHooks';
import useAttendeeAPI from '../api/AttendeeAPI';
import { useDispatch } from 'react-redux';
import { registerToUserEvent, unregisterFromUserEvent } from '../redux/slices/MyEventsSlice';
import { Event } from '../models/Event';
import { PAYMENT_STATUS } from '../models/PaymentStatus';

interface Props {
    event: Event;
    isCreator: boolean;
}

const useRegistration = ({ event, isCreator }: Props) => {
    const dispatch = useDispatch();
    const [isModalOpen, setModalOpen] = useState(false);
    const [registrationStatus, setRegistrationStatus] = useState(event.currentUserRegistrationStatus);
    const [paymentStatus, setPaymentStatus] = useState(event.currentUserPaymentStatus)
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
        setPaymentStatus(event.currentUserPaymentStatus);
        setModalOpen(false);
        setLastAction(null);
    }, [event]);

    useEffect(() => {
        if (!error && !isLoading) {
            if (lastAction === 'register') {
                const newRegistrationStatus = (isCreator || event.isOpen) && event.price === 0 ? REGISTRATION_STATUS.ACCEPTED : REGISTRATION_STATUS.PENDING;
                const newPaymentStatus = isCreator || event.price === 0 ? PAYMENT_STATUS.PAID : PAYMENT_STATUS.PENDING;
                const updatedEvent = { ...event, currentUserRegistrationStatus: newRegistrationStatus, currentUserPaymentStatus: newPaymentStatus };

                setRegistrationStatus(newRegistrationStatus);
                setPaymentStatus(newPaymentStatus);
                dispatch(registerToUserEvent(updatedEvent));
                setModalOpen(true);
            } else if (lastAction === 'unregister') {
                setRegistrationStatus(REGISTRATION_STATUS.DEFAULT);
                setPaymentStatus(PAYMENT_STATUS.DEFAULT);
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
        paymentStatus,
        register,
        unregister,
        closeModal
    };
};

export default useRegistration;
