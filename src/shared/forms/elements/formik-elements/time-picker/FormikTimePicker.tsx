import { TimePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import styles from './FormikTimePicker.module.css';

interface Props {
    name: string;
    timePickerClassName?: string;
}

const FormikTimePicker: React.FC<Props> = ({ name, timePickerClassName, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    return (
        <TimePicker
            {...field}
            {...props}
            value={field.value || null}
            onChange={(date) => setFieldValue(name, date)}
            className={styles.timePicker}
            ampm={false}
            minutesStep={30}
            skipDisabled
            slotProps={{
                textField: ({ ...params }) => ({
                    helperText: meta.touched && meta.error ? meta.error : params.helperText,
                    error: Boolean(meta.touched && meta.error),
                    className: timePickerClassName ?? 'time-picker-small',
                    inputProps: {
                        className: timePickerClassName ?? 'time-picker-small',
                    }
                }),
                inputAdornment: {
                    position: 'start',
                },
                openPickerButton: {
                    color: 'primary',
                }
            }}
        />
    );
};

export default FormikTimePicker;