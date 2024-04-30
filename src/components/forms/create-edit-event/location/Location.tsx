import ChipSelector from '../../../chip-selector/ChipSelector';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import { Box } from '@mui/material';
import { useFormikContext } from 'formik';
import LocationVM from './LocationVM';
import FormikAutocomplete from '../../formik-elements/FormikAutocomplete';
import { FormValues } from "../../../../interfaces/FormValues";
import PageHeader from "../../../headers/page-headers/PageHeader";
import styles from './Location.module.css';
import LocationMocks from './LocationMocks';

const locations = LocationMocks();

const Location = () => {

    const { setFieldValue } = useFormikContext<FormValues>();
    const { placeholder, key, getChipClassName, handleTagChange, options } = LocationVM({ setFieldValue });

    return (
        <div className={`${styles.container} ${key === 'tbd' ? styles['tbd-gap'] : ''}`}>
            <div className={styles.title}>
                <PageHeader
                    text='Location'
                    className='event-form-section'
                />
            </div>
            <div className={styles.chipSelectorGroup}>
                <ChipSelector
                    options={options}
                    onSelect={(key) => handleTagChange(key)}
                    selectedKey={key}
                    getChipClassName={getChipClassName}
                />
            </div>
            <Box mt={2}>
                {key === 'physical' && (
                    <FormikAutocomplete
                        name='addressId'
                        options={locations}
                        renderInput={(params) => (
                            <FormikTextField
                                {...params}
                                name='addressId'
                                title='Venue'
                                titleClassName='event-form-element'
                                placeholder={placeholder}
                            />
                        )}
                    />
                )}
                {key === 'online' && (
                    <FormikTextField
                        name='inviteUrl'
                        type='text'
                        title='Link to a virtual event'
                        titleClassName='event-form-element'
                        placeholder={placeholder}
                    />
                )}
            </Box>
        </div>
    );
};
export default Location;
