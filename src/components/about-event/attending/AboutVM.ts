import { useEffect, useState } from "react";
import { Attendee } from "../../../models/Attendee";

const useAboutViewModel = (attendees: Attendee[]) => {
  const [acceptedAttendees, setAcceptedAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    setAcceptedAttendees(attendees.filter(a => a.registrationStatus === 'ACCEPTED'))
  }, [attendees]);

  return  {acceptedAttendees}

}

export default useAboutViewModel;