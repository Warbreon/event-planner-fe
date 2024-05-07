import FormikDatePicker from '../../shared/forms/elements/formik-elements/date-picker/FormikDatePicker'
import FormikTimePicker from '../../shared/forms/elements/formik-elements/time-picker/FormikTimePicker'
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
                    titleClassName='gray-font'
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