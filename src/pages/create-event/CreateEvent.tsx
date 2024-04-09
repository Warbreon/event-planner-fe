import { Button } from '@mui/material';
import Form from '../../components/forms/Form';
import { eventFormSchema } from '../../utils/schemas/eventFormSchema';
import DateAndTime from './date-and-time/DateAndTime';

const CreateEvent = () => {
  return (
    <div>
      <Form initialValues={{ startDate: null, startTime: null, endDate: null, endTime: null }} onSubmit={() => { console.log("submit") }} validationSchema={eventFormSchema}>
        <DateAndTime />
        <Button type="submit">YEY</Button>
      </Form>
    </div>
  )
}

export default CreateEvent