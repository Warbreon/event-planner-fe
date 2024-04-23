import classNames from "classnames";
import {useEffect, useState} from "react";
import {FormValues} from "../../interfaces/FormValues";
import styles from '../event-header/EventHeader.module.css';
import {useFormikContext} from 'formik'; // Import useFormikContext

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;

}

const LocationVM = ({setFieldValue}: Props) => {
    const [placeholder, setPlaceholder] = useState('Search for a venue...');
    const {values} = useFormikContext<FormValues>(); // Get form values using useFormikContext
    const {setFieldTouched} = useFormikContext<FormValues>();
    const defaultKey = values.inviteUrl ? 'online' : 'physical';
    const [key, setKey] = useState(defaultKey);
    const handleTagChange = (newKey: string) => {
        setKey(newKey);

        switch (newKey) {
            case 'physical':
                setPlaceholder('Search for a venue...');
                setFieldValue('inviteUrl', '');
                setFieldTouched('inviteUrl', false, false);
                break;
            case 'online':
                setPlaceholder('Enter link to Zoom, Hangouts or other platform');
                setFieldValue('address', '');
                setFieldTouched('addressId', false, false);
                break;
            case 'tbd':
                setPlaceholder('Enter TBD details...');
                setFieldTouched('inviteUrl', false, false);
                setFieldTouched('addressId', false, false);
                break;
            default:
                setPlaceholder('Search for a venue...');
        }
    };

    const options = [
        {key: 'physical', label: 'Physical location'},
        {key: 'online', label: 'Online event'},
        {key: 'tbd', label: 'TBD'},
    ];

    const getChipClassName = (isSelected: boolean) => {
        return classNames(styles.tagFilter, {[styles.tagFilterSelected]: isSelected});
    };

    return {placeholder, key, getChipClassName, handleTagChange, options}
}

export default LocationVM