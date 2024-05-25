import { useState } from "react";
import { Attendee } from "../../../models/Attendee";

const useAboutViewModel = (attendees: Attendee[]) => {
  const [acceptedAttendees, setAcceptedAttendees] = useState<Attendee[]>(attendees.filter(a => a.registrationStatus === 'ACCEPTED'));

  return  {acceptedAttendees}

}

export default useAboutViewModel;