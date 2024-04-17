import Typography from '@mui/material/Typography';
import ChipSelector from '../chip-selector/ChipSelector';
import styles from '../event-header/EventHeader.module.css';
import FormikTextField from '../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';
import { useFormikContext } from 'formik';
import { FormValues } from '../forms/create-edit-event/EventFormVM';
import LocationVM from './LocationVM';

const mockResponse = [
    {
        'city': 'Kaunas',
        'street': 'Juozapaviciaus pr.',
        'building': '11D',
        'zip': '45252',
        'venueName': 'Cognizant office'
    },
    {
        'city': 'Vilnius',
        'street': 'Gedimino pr.',
        'building': '20',
        'zip': '01152',
        'venueName': 'TechHub Vilnius'
    },
];

const locations = mockResponse.map((location) => location.venueName + ', ' + location.street + ' ' + location.building + ', ' + location.city);

const Location = () => {
    const { values, setFieldValue } = useFormikContext<FormValues>();
    const { address } = values;
    const { placeholder, key, getChipClassName, handleTagChange } = LocationVM({ setFieldValue });

    return (
        <div>
            <Typography variant='h6' mb={2}>Locations</Typography>
            <div className={styles.filters}>
                <ChipSelector
                    options={[
                        { key: 'physical', label: 'Physical location' },
                        { key: 'online', label: 'Online event' },
                        { key: 'tbd', label: 'TBD' }
                    ]}
                    onSelect={(key) => handleTagChange(key)}
                    selectedKey={key}
                    getChipClassName={getChipClassName}
                />
            </div>
            <Box mt={2}>
                {key === 'physical' && (
                    <Autocomplete
                        options={locations}
                        freeSolo
                        renderInput={(params) => (
                            <FormikTextField
                                {...params}
                                name='address'
                                type='text'
                                title='Venue'
                                placeholder={placeholder}
                                titleClassName='gray-font'
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                        value={address}
                        onChange={(_, value) => setFieldValue('address', value)}
                    />
                )}
                {(key === 'online') && (
                    <FormikTextField
                        name='inviteUrl'
                        type='text'
                        title='Link to a virtual event'
                        placeholder={placeholder}
                        titleClassName='gray-font'
                    />
                )}
            </Box>
        </div>
    );
};
export default Location;