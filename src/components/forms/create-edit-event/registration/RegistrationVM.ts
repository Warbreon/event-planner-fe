import classNames from "classnames";
import { useState } from "react";
import { TAGS } from "../../../../themes/styles/Tag";

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    isOpen: boolean;
}

const RegistrationVM = ({ setFieldValue, isOpen }: Props) => {
    const defaultTag = isOpen ? 1 : 0;
    const [selectedTag, setSelectedTag] = useState<number[]>([defaultTag]);

    const registrationTagOptions = [
        { id: 1, name: 'Public' },
        { id: 0, name: 'Private' },
    ];

    const handleTagChange = (id: number) => {
        setFieldValue('isOpen', id === 1);
        setSelectedTag([id]);
    };

    const getChipClassName = (isSelected: boolean) => {
        return classNames([TAGS.SELECT_TAG], { [TAGS.TAG_SELECTED]: isSelected });
    };

    const registrationMessage = selectedTag[0] === 1
        ? 'All employees will be able to attend this event. No confirmation required.'
        : 'Guest must receive confirmation from event admin or attend.';

    return { registrationMessage, selectedTag, registrationTagOptions, handleTagChange, getChipClassName }
}

export default RegistrationVM