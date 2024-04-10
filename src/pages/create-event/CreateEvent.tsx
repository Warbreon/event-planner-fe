import { Button, Divider } from '@mui/material';
import Form from '../../components/forms/Form';
import { eventFormSchema } from '../../utils/schemas/eventFormSchema';
import DateAndTimeSection from '../../components/forms/create-edit-event/date-and-time-section/DateAndTimeSection';
import styles from './CreateEvent.module.css';

const CreateEvent = () => {
  return (
    <div>
      <Form initialValues={{ startDate: null, startTime: null, endDate: null, endTime: null }} onSubmit={() => { console.log("submit") }} validationSchema={eventFormSchema}>
        <DateAndTimeSection />
        <Divider className={styles.divider}/>
        <Button type="submit">YEY</Button>
      </Form>
    </div>
  )
}

export default CreateEvent