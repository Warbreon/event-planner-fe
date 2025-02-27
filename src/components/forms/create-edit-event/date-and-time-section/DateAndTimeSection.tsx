import DateAndTime from '../../../date-and-time/DateAndTime';
import PageHeader from '../../../headers/page-headers/PageHeader';
import styles from './DateAndTimeSection.module.css';

const DateAndTimeSection = () => {
  return (
    <div className={styles.container}>
      <PageHeader
        text='Date and time'
        className='event-form-section'
      />
      <div className={styles.dateAndTimeContainer}>
        <DateAndTime
          title='Start time'
          name='eventStart'
        />
        <DateAndTime
          title='End time'
          name='eventEnd'
        />
      </div>
    </div>
  )
}

export default DateAndTimeSection