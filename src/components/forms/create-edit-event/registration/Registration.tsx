import { useFormikContext } from "formik";
import ChipSelector from "../../../chip-selector/ChipSelector"
import DateAndTime from "../../../date-and-time/DateAndTime"
import PageHeader from "../../../headers/page-headers/PageHeader"
import RegistrationVM from "./RegistrationVM";
import { Typography } from "@mui/material";
import styles from './Registration.module.css';
import { EventFormValues } from "../../../../interfaces/EventFormValuesInterface";

const Registration = () => {
    const { setFieldValue, values } = useFormikContext<EventFormValues>();
    const {
        registrationMessage,
        selectedTag,
        registrationTagOptions,
        handleTagChange,
        getChipClassName
    } = RegistrationVM({ setFieldValue, isOpen: values.isOpen });

    return (
        <div className={styles.container}>
            <PageHeader text='Registration' className='event-form-section' />
            <div className={styles.tagsContainer}>
                <ChipSelector
                    options={registrationTagOptions}
                    selectedKey={selectedTag}
                    onSelect={handleTagChange}
                    getChipClassName={getChipClassName}
                />
            </div>
            <Typography className={styles.registrationMessage}>{registrationMessage}</Typography>
            <div className={styles.dateAndTimeContainer}>
                <DateAndTime title='Registration starts' name='registrationStart' />
                <DateAndTime title='Registration ends' name='registrationEnd' />
            </div>
        </div>
    )
}

export default Registration