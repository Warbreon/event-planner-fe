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
    const [key, setKey] = useState('physical');
    const {values} = useFormikContext<FormValues>(); // Get form values using useFormikContext

    useEffect(() => {
        if (values.inviteUrl) {
            setKey('online');
        } else if (values.addressId) {
            setKey('physical');
        }
    }, [values]);

    const handleTagChange = (newKey: string) => {
        setKey(newKey);

        switch (newKey) {
            case 'physical':
                setPlaceholder('Search for a physical location...');
                setFieldValue('inviteUrl', '');
                break;
            case 'online':
                setPlaceholder('Enter link to Zoom, Hangouts or other platform...');
                setFieldValue('address', '');
                break;
            case 'tbd':
                setPlaceholder('Enter TBD details...');
                break;
            default:
                setPlaceholder('Search for a venue...');
        }
    };

    const getChipClassName = (isSelected: boolean) => {
        return classNames(styles.tagFilter, {[styles.tagFilterSelected]: isSelected});
    };

    return {placeholder, key, getChipClassName, handleTagChange}
}

export default LocationVM