import {Box, Tab, Tabs, Typography} from '@mui/material';
import React from 'react';
import TabPanel from "../../../tabs/tab-panel/TabPanel";
import FormikTextField from "../../../../shared/forms/elements/formik-elements/text-field/FormikTextField";
import {TEXTFIELD_STYLES} from "../../../../themes/styles/TextField";
import Dropdown from "../../../dropdown/Dropdown";
import {TYPOGRAPHY_STYLES} from "../../../../themes/styles/Typography";
import styles from "./PricingSection.module.css";
import PricingSectionVM from "./PricingSectionVM";

const PricingSection = () => {
    const { tabValue, inputValue, currency, handleTabChange, handleInputChange, handleCurrencyChange, currencies } = PricingSectionVM();

    return (
        <Box className={styles.container}>
            <Box >
                <Tabs value={tabValue} onChange={handleTabChange} className={'create-event-price-tabs'}>
                    <Tab className={'event-pricing'} label= 'Paid' />
                    <Tab  label= 'Free of charge' />
                </Tabs>
            </Box>
            <TabPanel index={0} value={tabValue} >
                <Box className={styles.tabPanel}>
                    <FormikTextField
                        name='price'
                        title='Price'
                        placeholder='Please enter a price'
                        titleClassName={TYPOGRAPHY_STYLES.EVENT_PRICE_SECTION}
                        textFieldClassName={TEXTFIELD_STYLES.EVENT_PRICE}
                        type='number'
                        value={inputValue}
                        onInput={handleInputChange}
                    />
                    <Box className={styles.dropdown}>
                        <Typography variant='body1' className={TYPOGRAPHY_STYLES.EVENT_PRICE_SECTION}>
                            Currency
                        </Typography>
                        <Dropdown
                            value={currency}
                            options={currencies}
                            onChange={handleCurrencyChange}
                            selectClassName={'create-event-price'}
                        />
                    </Box>
                </Box>
            </TabPanel>
            <FormikTextField
                name='tickets'
                type='number'
                title='Amount of tickets available'
                placeholder='Please a ticket amount'
                titleClassName={TYPOGRAPHY_STYLES.EVENT_PRICE_SECTION}
                textFieldClassName={TEXTFIELD_STYLES.EVENT_TICKETS}
            />
        </Box>
    );
};

export default PricingSection;
