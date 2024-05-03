import {SyntheticEvent, useState} from "react";
import {useFormikContext} from "formik";
import {SelectChangeEvent} from "@mui/material";

const PricingSectionVM = () => {

    const [tabValue, setValue] = useState(0);
    const [inputValue, setInputValue] = useState(0);
    const [currency, setCurrency] = useState('eur');
    const {setFieldValue} = useFormikContext();
    const handleTabChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setInputValue(0);
        setFieldValue('price', 0);
    };
    const handleInputChange = (event: any) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    };
    const handleCurrencyChange = (event: SelectChangeEvent<string>) => {
        setCurrency(event.target.value);
    };

    const currencies = [
        { value: 'eur', label: 'EUR' },
        { value: 'usd', label: 'USD' },
        { value: 'gbp', label: 'GBP' },
    ];

    return { tabValue, inputValue, currency, handleTabChange, handleInputChange, handleCurrencyChange, currencies}
}

export default PricingSectionVM