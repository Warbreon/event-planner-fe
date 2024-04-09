import React from 'react'
import FormikDatePicker from '../../../components/forms/elements/DatePicker/FormikDatePicker'
import FormikTimePicker from '../../../components/forms/elements/TimePicker/FormikTimePicker'
import styles from './DateAndTime.module.css';

const DateAndTime = () => {
    return (
        <div className={styles.container}>
            <div className={styles.dateTimeContainer}>
                <FormikDatePicker name='startDate' />
                <FormikTimePicker name='startTime' />
            </div>
            <div className={styles.dateTimeContainer}>
                <FormikDatePicker name='endDate' />
                <FormikTimePicker name='endTime' />
            </div>
        </div>
    )
}

export default DateAndTime