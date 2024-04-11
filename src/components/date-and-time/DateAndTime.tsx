import FormikDatePicker from '../forms/elements/DatePicker/FormikDatePicker'
import FormikTimePicker from '../forms/elements/TimePicker/FormikTimePicker'
import styles from './DateAndTime.module.css';
import Title from '../title/Title';

interface DateAndTimeProps {
    title: string;
    name: string;
}

const DateAndTime: React.FC<DateAndTimeProps> = ({ title, name }) => {
    return (
        <div className={styles.container}>
            {title && (
                <Title
                    text={title}
                    typographyTitleProps={{ variant: 'subtitle1' }}
                    titleClassName='event-form-element'
                />
            )}
            <div className={styles.dateTimeContainer}>
                <FormikDatePicker name={`${name}Date`} />
                <FormikTimePicker name={`${name}Time`} />
            </div>
        </div>
    )
}

export default DateAndTime