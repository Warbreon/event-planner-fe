import classNames from "classnames";
import { useState } from "react";
import styles from '../event-header/EventHeader.module.css';

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const LocationVM = ({ setFieldValue }: Props) => {
    const [placeholder, setPlaceholder] = useState('Search for a venue...');
    const [key, setKey] = useState('physical');

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
        return classNames(styles.tagFilter, { [styles.tagFilterSelected]: isSelected });
    };

    return { placeholder, key, getChipClassName, handleTagChange }
}

export default LocationVM