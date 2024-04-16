import { Event } from "../../models/Event";
import { formatDate } from "../../utils/DateConverter";

const EventCardVM = (event: Partial<Event>) => {
  const { eventStart = "", address, inviteUrl } = event;
  const eventDate = formatDate(eventStart);

  let location = "TBD";
  console.log(`inviteUrl: ${inviteUrl}, address:`, address);
  if (inviteUrl && !address) {
    location = "Online";
  } else if (!inviteUrl && address) {
    location = address.city;
  }

  const getEventUrl = (eventId: number | string) => {
    return `/events/event/${eventId}`;
  };

  const onEventRegistrationClick = () => {
    console.log("Registed/Get tickets/ Cancel registration");
  };

  return { getEventUrl, onEventRegistrationClick, eventDate, location };
};

export default EventCardVM;
