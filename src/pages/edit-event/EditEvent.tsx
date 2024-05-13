import { Typography } from "@mui/material";
import EventForm from "../../components/forms/create-edit-event/EventForm";
import LoadingIndicator from "../../components/loading-indicator/LoadingIndicator";
import useEditEventViewModel from "./EditEventVM";

const EditEvent = () => {
  const { event, isLoading, error } = useEditEventViewModel();
  if (isLoading) {
    return <LoadingIndicator/>;
  }

  if (error) {
    return <Typography variant="body1">{error}</Typography>
  }
  return <EventForm headerTitle='Edit an event' event={event}/>;
}

export default EditEvent;