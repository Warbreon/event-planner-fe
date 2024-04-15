import React, {useState} from 'react';
import Typography from "@mui/material/Typography";
import ChipSelector from '../chip-selector/ChipSelector';
import classNames from "classnames";
import styles from '../event-header/EventHeader.module.css';
import {EventFiltersState} from "../../pages/explore-events/eventFiltersInterface";
import {LocationTypeInterface} from "./locationTypeInterface";
import FormikTextField from "../../shared/forms/elements/formik-elements/text-field/FormikTextField";
import Autocomplete from '@mui/material/Autocomplete';
import {Box} from "@mui/material";
import useLocationVM from './LocationsVm';
import {useField} from "formik";

interface Props {
    handleFiltersChange: (filters: Partial<EventFiltersState>) => void;
    filters: LocationTypeInterface;
}

const mockResponse = [
    {
        "city": "Kaunas",
        "street": "Juozapaviciaus pr.",
        "building": "11D",
        "zip": "45252",
        "venueName": "Cognizant office"
    },
    {
        "city": "Vilnius",
        "street": "Gedimino pr.",
        "building": "20",
        "zip": "01152",
        "venueName": "TechHub Vilnius"
    },
];

const locations = mockResponse.map(location => location.venueName + ', ' + location.street + ' ' + location.building + ', ' + location.city);

const Location: React.FC<Props> = ({handleFiltersChange, filters}) => {

    const {handleSearchInputChange} = useLocationVM();
    const [placeholder, setPlaceholder] = useState("Search for a venue...");
    const [searchText, setSearchText] = useState('');
    const [key, setKey] = useState('physical');

    const handleTagChange = (newKey: string) => {
        console.log("New key:", newKey);
        setKey(newKey);
        handleFiltersChange({type: newKey});

        switch (newKey) {
            case 'physical':
                setPlaceholder("Search for a physical location...");
                break;
            case 'online':

                setPlaceholder("Enter link to Zoom, Hangouts or other platform...");
                setSearchText('')
                break;
            case 'tbd':
                setPlaceholder("Enter TBD details...");
                break;
            default:
                setPlaceholder("Search for a venue...");
        }
    };

    const getChipClassName = (isSelected: boolean) => {
        return classNames(styles.tagFilter, {[styles.tagFilterSelected]: isSelected});
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
        handleSearchInputChange(event);
    };
    return (
        <div>
            <Typography variant={'h6'} mb={2}>Locations</Typography>
            <div className={styles.filters}>
                <ChipSelector
                    options={[
                        {key: 'physical', label: 'Physical location'},
                        {key: 'online', label: 'Online event'},
                        {key: 'tbd', label: 'TBD'}
                    ]}
                    onSelect={(key) => handleTagChange(key)}
                    selectedKey={filters.type}
                    getChipClassName={getChipClassName}
                />
            </div>
            <Box mt={2} >
                {key === 'physical' && (
                    <Autocomplete
                        options={locations}
                        renderInput={(params) => (
                            <FormikTextField
                                {...params}
                                name="physical"
                                type="text"
                                title="Venue"
                                placeholder={placeholder}
                                value={searchText}
                                titleClassName={"gray-font"}
                                onChange={handleSearchInputChange}
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        )}
                        value={searchText}
                        onChange={(event, value) => setSearchText(value || '')}
                    />
                )}
                {(key === 'online') && (
                    <FormikTextField
                        name="physical"
                        type="text"
                        title="Link to a virtual event"
                        placeholder={placeholder}
                        value={searchText}
                        titleClassName={"gray-font"}
                        onChange={handleInputChange}
                    />
                )}
            </Box>
        </div>
    );
};
export default Location;