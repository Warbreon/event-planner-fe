import {Box, Typography} from '@mui/material';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import {TEXTFIELD_STYLES} from '../../../../themes/styles/TextField';
import Dropdown from '../../../dropdown/Dropdown';
import {TYPOGRAPHY_STYLES} from '../../../../themes/styles/Typography';
import styles from './PricingSection.module.css';
import PricingSectionVM from './PricingSectionVM';
import ChipSelector from '../../../chip-selector/ChipSelector';
import {useFormikContext} from 'formik';
import {EventFormValues} from '../../../../interfaces/EventFormValuesInterface';
import PageHeader from '../../../headers/page-headers/PageHeader';

const PricingSection = () => {
    const { setFieldValue, values } = useFormikContext<EventFormValues>();
    const {
        currency,
        handleCurrencyChange,
        handleTagChange,
        selectedTag,
        pricingTagOptions,
        pricingOption,
        getChipClassName,
        currencies,
        disableWheelAndArrowKeys,
    } = PricingSectionVM({ setFieldValue, isOpen: values.isOpen });

    return (
        <div className={styles.container}>
            <PageHeader text='Pricing' className='event-form-section' />
            <div className={styles.tagsContainer}>
                <ChipSelector
                    options={pricingTagOptions}
                    selectedKeys={selectedTag}
                    onSelect={handleTagChange}
                    getChipClassName={getChipClassName}
                    multiple={false}
                />
            </div>
            {(pricingOption === 'Paid') && (
                    <Box className={styles.pricing}>
                        <FormikTextField
                            name='price'
                            title='Price'
                            placeholder='Please enter a price'
                            titleClassName={TYPOGRAPHY_STYLES.EVENT_PRICE_SECTION}
                            textFieldClassName={TEXTFIELD_STYLES.EVENT_PRICE}
                            type='number'
                            onFocus={disableWheelAndArrowKeys}
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
                )}
            <FormikTextField
                name='tickets'
                type='number'
                title='Amount of tickets available'
                placeholder='Please a ticket amount'
                titleClassName={TYPOGRAPHY_STYLES.EVENT_PRICE_SECTION}
                textFieldClassName={TEXTFIELD_STYLES.EVENT_TICKETS}
                onFocus={disableWheelAndArrowKeys}
            />
        </div>
    );
};

export default PricingSection;
