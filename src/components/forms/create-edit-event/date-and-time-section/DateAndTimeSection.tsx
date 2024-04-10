import DateAndTime from '../../../date-and-time/DateAndTime';
import PageHeader from '../../../headers/page-headers/PageHeader';
import Title from '../../../title/Title';
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
        />
        <DateAndTime
          title='End time'
        />
      </div>

    </div>
  )
}

export default DateAndTimeSection