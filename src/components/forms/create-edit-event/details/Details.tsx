import FormikTextField from "../../elements/FormikTextField";
import FormikDropdown from "../../../dropdown/FormikDropdown";
import Form from "../../Form";
import styles from "./Details.module.css";
import { Container, Typography } from "@mui/material";

const eventTagsOptions = [
  { key: "news", label: "News & Updates" },
  { key: "meetup", label: "Meetup" },
  { key: "demo", label: "Demo sessions" },
  { key: "exhibition", label: "Exhibition" },
  { key: "party", label: "Party" },
];

const Details = () => {
  return (
    <Container className={styles.container}>
      <Typography variant="h2">Details</Typography>
        <FormikTextField
          name="eventName"
          type="text"
          title="Event Name"
          placeholder="Enter short descriptive event title"
          titleClassName={"gray-font"}
        />
        <FormikDropdown
          name="eventType"
          label="Event Type"
          options={eventTagsOptions.map((option) => ({
            value: option.key,
            label: option.label,
          }))}
        />
    </Container>
  );
};

export default Details;
