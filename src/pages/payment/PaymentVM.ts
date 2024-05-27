import { useEffect, useState } from "react";
import useRegistration from "../../hooks/UseRegistration";
import { Event } from "../../models/Event"
import { PAYMENT_STATUS } from "../../models/PaymentStatus";

interface Props {
    event: Event;
    isCreator: boolean;
}

const PaymentVM = ({ event, isCreator }: Props) => {
    const { register, isLoading, error } = useRegistration({ event, isCreator })

    useEffect(() => {
        if (event.price > 0) {
            register();
        }
    }, []);

    const price = event.price;

    return {
        price,
        isLoading,
        error
    }
}

export default PaymentVM