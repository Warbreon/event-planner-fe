import { TimePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import { ElementType } from "react";
import styles from './FormikTimePicker.module.css';

interface Props {
    name: string;
    timePickerClassName?: string;
}

interface InputAdornmentProps {
    position: 'start' | 'end';
    children: React.ReactNode;
}

const FormikTimePicker: React.FC<Props> = ({ name, timePickerClassName, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const InputAdornment: ElementType<InputAdornmentProps> = ({ position, children }) => (
        <InputAdornment position={position} children={children} />
    );

    return (
        <TimePicker
            {...field}
            {...props}
            value={field.value || null}
            onChange={(date) => setFieldValue(name, date)}
            className={styles.timePicker}
            ampm={false}
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
            disablePast
        />
    );
};

export default FormikTimePicker;