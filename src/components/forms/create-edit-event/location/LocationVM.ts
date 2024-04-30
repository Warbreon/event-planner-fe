import classNames from "classnames";
import { useState } from "react";
import { useFormikContext } from 'formik';
import { TAGS } from "../../../../themes/styles/Tag";
import { EventFormValues } from "../../../../interfaces/EventFormValuesInterface";

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

interface State {
    placeholder: string;
    inviteUrl: string | null;
    addressId: string | null;
    locationKey: string;
}

const LocationVM = ({ setFieldValue }: Props) => {
    const [placeholder, setPlaceholder] = useState('Search for a venue...');
    const { values } = useFormikContext<EventFormValues>();
    const { setFieldTouched } = useFormikContext<EventFormValues>();
    const key = values.locationKey;

    const stateChanges: Record<string, State> = {
        physical: {
            placeholder: 'Search for a venue...',
            inviteUrl: '',
            addressId: null,
            locationKey: 'physical',
        },
        online: {
            placeholder: 'Enter link to Zoom, Hangouts or other platform',
            inviteUrl: '',
            addressId: null,
            locationKey: 'online',
        },
        tbd: {
            placeholder: 'Enter TBD details...',
            inviteUrl: '',
            addressId: null,
            locationKey: 'tbd',
        },
    };

    const handleTagChange = (newKey: string) => {
        const newState = stateChanges[newKey];

        setPlaceholder(newState.placeholder);
        setFieldValue('inviteUrl', newState.inviteUrl);
        setFieldValue('addressId', newState.addressId);
        setFieldValue('locationKey', newState.locationKey);
        setFieldTouched('inviteUrl', false, false);
        setFieldTouched('addressId', false, false);
    };

    const options = [
        { key: 'physical', label: 'Physical location' },
        { key: 'online', label: 'Online event' },
        { key: 'tbd', label: 'TBD' },
    ];

    const getChipClassName = (isSelected: boolean) => {
        return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
    };

    return { placeholder, key, getChipClassName, handleTagChange, options }
}

export default LocationVM