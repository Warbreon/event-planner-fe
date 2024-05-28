import { useCallback, useState } from "react"
import useEventAPI from "../../api/EventsAPI"
import { useFetch } from "../../api/hooks/ApiHooks";

const PaymentVM = (eventId: string) => {

    const { fetchEventById } = useEventAPI();
    const fetchFunction = useCallback(() => fetchEventById(Number(eventId)), [eventId]);
	const { data, isLoading, error } = useFetch(fetchFunction);

    const price = data?.price;

    return {
        price,
        isLoading,
        error
    }
}

export default PaymentVM;