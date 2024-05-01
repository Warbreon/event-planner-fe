import { TimePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import styles from './FormikTimePicker.module.css';
import { TIME_PICKER_STYLES } from "../../../../../themes/styles/TimePicker";
import Title from "../../../../../components/title/Title";
import ErrorTooltip from "../../../../components/error-tooltip/ErrorTooltip";

interface Props {
    title?: string;
    name: string;
    timePickerClassName?: string;
}

const FormikTimePicker: React.FC<Props> = ({ title, name, timePickerClassName, ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    return (
        <ErrorTooltip
            title={meta.error}
            isVisible
        >
            <div className={styles.inputGroupWrapper}>
                {title && (
                    <Title
                        text={title}
                        titleClassName='gray-font'
                    />
                )}
                <TimePicker
                    {...field}
                    {...props}
                    value={field.value || null}
                    onChange={(date) => setFieldValue(name, date)}
                    className={styles.timePicker}
                    ampm={false}
                    minutesStep={5}
                    skipDisabled
                    slotProps={{
                        textField: () => ({
                            error: Boolean(meta.touched && meta.error),
                            className: timePickerClassName ?? TIME_PICKER_STYLES.SMALL,
                            InputProps: {
                                className: timePickerClassName ?? TIME_PICKER_STYLES.SMALL,
                            },
                        }),
                        inputAdornment: {
                            position: 'start',
                        },
                        openPickerButton: {
                            color: 'primary',
                        }
                    }}
                />
            </div>
        </ErrorTooltip>
    );
};

export default FormikTimePicker;