import FormikTextField from "../../../../shared/forms/elements/formikElements/TextField/FormikTextField";
import FormikDropdown from "../../../../shared/forms/elements/formikElements/Dropdown/FormikDropdown";
import styles from "./Details.module.css";
import { Container, Divider, Typography } from "@mui/material";

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
        <Divider />
    </Container>
  );
};

export default Details;
