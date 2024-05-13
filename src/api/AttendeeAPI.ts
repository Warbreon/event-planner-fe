import useAxios from "./axios/Axios";
import { ENDPOINTS } from "./endpoints/Endpoints";

const useAttendeeAPI = () => {
  const axios = useAxios();
  const registerToEvent = (eventId: number | string) =>
    axios.post(ENDPOINTS.registerToEvent, { eventId });
  const unregisterFromEvent = (eventId: number | string) =>
    axios.delete(ENDPOINTS.unregisterFromEvent(eventId));

  return { registerToEvent, unregisterFromEvent };
}

export default useAttendeeAPI