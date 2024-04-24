import classNames from "classnames";
import { useState } from "react";
import { TAGS } from "../../../../themes/styles/Tag";

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    isOpen: boolean;
}

const RegistrationVM = ({ setFieldValue, isOpen }: Props) => {
    const defaultTag = isOpen ? 'public' : 'private';
    const [selectedTag, setSelectedTag] = useState<string>(defaultTag);

    const registrationTagOptions = [
        { key: 'public', label: 'Public' },
        { key: 'private', label: 'Private' },
    ];

    const handleTagChange = (key: string) => {
        setFieldValue('isOpen', key === 'public');
        setSelectedTag(key);
    };

    const getChipClassName = (isSelected: boolean) => {
        return classNames([TAGS.SELECT_TAG], { [TAGS.TAG_SELECTED]: isSelected });
    };

    const registrationMessage = selectedTag === 'public'
        ? 'All employees will be able to attend this event. No confirmation required.'
        : 'Guest must receive confirmation from event admin or attend.';

    return { registrationMessage, selectedTag, registrationTagOptions, handleTagChange, getChipClassName }
}

export default RegistrationVM