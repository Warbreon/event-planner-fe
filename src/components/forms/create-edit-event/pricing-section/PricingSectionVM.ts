import {useState} from 'react';
import {SelectChangeEvent} from '@mui/material';
import classNames from 'classnames';
import {TAGS} from '../../../../themes/styles/Tag';

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    isOpen: boolean;
}
const PricingSectionVM = ({setFieldValue, isOpen}:Props) => {
    const defaultTag = isOpen ? 1 : 0;
    const [selectedTag, setSelectedTag] = useState<number>(defaultTag);
    const [inputValue, setInputValue] = useState(0);
    const [currency, setCurrency] = useState('eur');

    const pricingTagOptions = [
        { id: 1, name: 'Paid' },
        { id: 0, name: 'Free of charge' },
    ];
    const handleTagChange = (id: number) => {
        setFieldValue('isOpen', id === 1);
        setSelectedTag(id);
        setInputValue(0);
        setFieldValue('price', 0);
    };
    const disableWheelAndArrowKeys= (e:React.FocusEvent<HTMLInputElement>) => {
        e.target.addEventListener("wheel", function (e) { e.preventDefault() }/*, { passive: false }*/);
        e.target.addEventListener("keydown",function (e:KeyboardEvent) {
            if (e.key == 'ArrowUp') {e.preventDefault();}
            else if (e.key == 'ArrowDown') {e.preventDefault();}
            else if (e.key == '-') {e.preventDefault();}});
    }


    const handleInputChange = (event: any) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    };
    const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
        setFieldValue('currency', event.target.value);
        setCurrency(event.target.value);
    };

    const currencies = [
        { value: 'eur', label: 'EUR' },
        { value: 'usd', label: 'USD' },
        { value: 'gbp', label: 'GBP' },
    ];

    const pricingOption = selectedTag === 1
        ? 'Paid'
        : 'Free of charge';

    const getChipClassName = (isSelected: boolean) => {
        return classNames([TAGS.SELECT_TAG], { [TAGS.TAG_SELECTED]: isSelected });
    };

    return { inputValue, currency, handleInputChange, handleCurrencyChange, currencies, handleTagChange, selectedTag,pricingTagOptions, pricingOption, getChipClassName, disableWheelAndArrowKeys}
}

export default PricingSectionVM