import Typography from '@mui/material/Typography';
import ChipSelector from '../chip-selector/ChipSelector';
import styles from '../event-header/EventHeader.module.css';
import FormikTextField from '../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import {Box} from '@mui/material';
import {useFormikContext} from 'formik';
import LocationVM from './LocationVM';
import FormikAutocomplete from '../forms/formik-elements/FormikAutocomplete';
import {FormValues} from "../../interfaces/FormValues";
import PageHeader from "../headers/page-headers/PageHeader";
import styles2 from './Location.module.css';
const mockResponse = [
    {
        id: '1',
        city: 'Kaunas',
        street: 'Juozapaviciaus pr.',
        building: '11D',
        zip: '45252',
        venueName: 'Cognizant office',
    },
    {
        id: '2',
        city: 'Vilnius',
        street: 'Gedimino pr.',
        building: '20',
        zip: '01152',
        venueName: 'TechHub Vilnius',
    },
];

const locations = mockResponse.map((location) => ({
    label: `${location.venueName}, ${location.street} ${location.building}, ${location.city}`,
    id: location.id,
}));

const Location = () => {
    const {setFieldValue} = useFormikContext<FormValues>();
    const {placeholder, key, getChipClassName, handleTagChange} = LocationVM({setFieldValue});

    return (
        <div className={styles2.container}>
            <div className={styles2.title}>
                <PageHeader
                    text='Locations'
                    className='event-form-section'
                />
            </div>
            <div className={`${styles.filters} ${styles2.chipSelectorGroup}`}>
                <ChipSelector
                    options={[
                        {key: 'physical', label: 'Physical location'},
                        {key: 'online', label: 'Online event'},
                        {key: 'tbd', label: 'TBD'},
                    ]}
                    onSelect={(key) => handleTagChange(key)}
                    selectedKey={key}
                    getChipClassName={getChipClassName}
                />
            </div>
            <Box mt={2}>
                {key === 'physical' && (
                    <FormikAutocomplete
                        name='addressId'
                        title='Physical event'
                        titleClassName='event-form-element'
                        textFieldProps={{placeholder}}
                        options={locations}
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
