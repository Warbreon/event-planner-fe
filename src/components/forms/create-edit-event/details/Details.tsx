import FormikTextField from "../../elements/FormikTextField";
import FormikDropdown from "../../../dropdown/FormikDropdown";
import Form from "../../Form";
import "./Details.css";
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
    <Container className="container">
      <Typography variant='h2'>Details</Typography>
      <Form
        initialValues={{ eventName: "", eventType: "" }}
        onSubmit={() => {}}
        // validationSchema={eventTagsOptions}
      >
        <FormikTextField
          name="eventName"
          type="text"
          title="Event Name"
          placeholder="Enter short descriptive event title"
          titleClassName={'gray-font'}
        />
        <FormikDropdown
          name="eventType"
          label="Event Type"
          options={eventTagsOptions.map((option) => ({
            value: option.key,
            label: option.label,
          }))}
        />
      </Form>
    </Container>
  );
};

export default Details;
