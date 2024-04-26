import { DatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import { CalendarToday } from "@mui/icons-material";
import styles from './FormikDatePicker.module.css';
import ErrorTooltip from "../../../../components/error-tooltip/ErrorTooltip";

interface Props {
    name: string;
    datePickerClassName?: string;
}

const FormikDatePicker: React.FC<Props> = ({ name, datePickerClassName, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

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
                    error: Boolean(meta.touched && meta.error),
                    className: datePickerClassName ?? 'date-picker',
                    InputProps: {
                        className: datePickerClassName ?? 'date-picker',
                        endAdornment: <ErrorTooltip title={meta.error} isVisible={meta.touched && Boolean(meta.error)} />,
                    },
                },
                inputAdornment: {
                    position: 'start',
                },
                openPickerButton: {
                    color: 'primary',
                },
            }}
            disablePast
        />
    );
};

export default FormikDatePicker;