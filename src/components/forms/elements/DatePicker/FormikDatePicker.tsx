import { DatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import { CalendarToday } from "@mui/icons-material";
import styles from './FormikDatePicker.module.css';

interface Props {
    name: string;
}

const FormikDatePicker: React.FC<Props> = ({ name, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, helpers] = useField(name);

    return (
        <DatePicker
            {...field}
            {...props}
            value={field.value || null}
            format="YYYY/MM/DD"
            onChange={(date) => setFieldValue(name, date)}
            className={styles.datePicker}
            slots={{
                openPickerIcon: CalendarToday,
            }}
            slotProps={{
                textField: {
                    helperText: meta.touched && meta.error ? meta.error : '',
                    error: Boolean(meta.touched && meta.error),
                    className: 'date-picker',
                    InputProps: {
                        className: 'date-picker',
                    }
                },
                inputAdornment: {
                    position: 'start',
                },
                openPickerButton: {
                    color: 'primary',
                }
            }}
            disablePast
        />
    );
};

export default FormikDatePicker;