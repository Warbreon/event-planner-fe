import {useState} from 'react';
import {SelectChangeEvent} from '@mui/material';
import classNames from 'classnames';
import {TAGS} from '../../../../themes/styles/Tag';

interface Props {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    isOpen: boolean;
}
const PricingSectionVM = ({setFieldValue, isOpen}:Props) => {
    const [selectedTag, setSelectedTag] = useState<number>(1);
    const [currency, setCurrency] = useState('eur');

    const pricingTagOptions = [
        { id: 1, name: 'Paid' },
        { id: 0, name: 'Free of charge' },
    ];
    const handleTagChange = (id: number) => {
        setSelectedTag(id);
        setFieldValue('price', 0);
    };
    const disableWheelAndArrowKeys= (e:React.FocusEvent<HTMLInputElement>) => {
        e.target.addEventListener("wheel", function (e) { e.preventDefault() }/*, { passive: false }*/);
        e.target.addEventListener("keydown",function (e:KeyboardEvent) {
            if (e.key == 'ArrowUp') {e.preventDefault();}
            else if (e.key == 'ArrowDown') {e.preventDefault();}
            else if (e.key == '-') {e.preventDefault();}});
    }

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

    return { currency, handleCurrencyChange, currencies, handleTagChange, selectedTag,pricingTagOptions, pricingOption, getChipClassName, disableWheelAndArrowKeys}
}

export default PricingSectionVM