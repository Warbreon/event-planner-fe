import FormikTextField from "../../../../shared/forms/elements/formik-elements/text-field/FormikTextField";
import FormikDropdown from "../../../../shared/forms/elements/formikElements/Dropdown/FormikDropdown";
import PageHeader from "../../../headers/page-headers/PageHeader";
import styles from "./Details.module.css";
import { Typography } from "@mui/material";

const eventTagsOptions = [
  { key: "news", label: "News & Updates" },
  { key: "meetup", label: "Meetup" },
  { key: "demo", label: "Demo sessions" },
  { key: "exhibition", label: "Exhibition" },
  { key: "party", label: "Party" },
];

const Details = () => {
  return (
    <div className={styles.container}>
      <PageHeader
        text="Details"
        className="event-form-section"
      />
        <div className={styles.textField}>
        <FormikTextField
          name="eventName"
          type="text"
          title="Event Name"
          placeholder="Enter short descriptive event title"
          titleClassName="gray-font"
        />
        </div>
        <div className={styles.dropdown}>
        <FormikDropdown
          name="eventTag"
          label="Event Type"
          options={eventTagsOptions.map((option) => ({
            value: option.key,
            label: option.label,
          }))}
        />
        </div>
    </div>
  );
};

export default Details;
