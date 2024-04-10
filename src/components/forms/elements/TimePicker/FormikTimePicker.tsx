import { TimePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import { AccessTime } from "@mui/icons-material";
import { ElementType } from "react";
import styles from './FormikTimePicker.module.css';

interface Props {
    name: string;
}

interface InputAdornmentProps {
    position: 'start' | 'end';
    children: React.ReactNode;
}

const FormikTimePicker: React.FC<Props> = ({ name, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta, helpers] = useField(name);

    const InputAdornment: ElementType<InputAdornmentProps> = ({ position, children }) => (
        <InputAdornment position={position} children={children} />
    );

    return (
            <TimePicker
                {...field}
                {...props}
                value={field.value || null}
                format="hh:mm"
                onChange={(date) => setFieldValue(name, date)}
                className={styles.timePicker}
                slotProps={{
                    textField: ({ ...params }) => ({
                        helperText: meta.touched && meta.error ? meta.error : params.helperText,
                        error: Boolean(meta.touched && meta.error),
                        className: 'time-picker-smaller',
                        inputProps: {
                            className: 'time-picker-smaller',
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