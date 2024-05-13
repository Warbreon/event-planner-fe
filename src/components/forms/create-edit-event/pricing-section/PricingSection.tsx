import {Box} from '@mui/material';
import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import {TEXTFIELD_STYLES} from '../../../../themes/styles/TextField';
import {TYPOGRAPHY_STYLES} from '../../../../themes/styles/Typography';
import styles from './PricingSection.module.css';
import PricingSectionVM from './PricingSectionVM';
import ChipSelector from '../../../chip-selector/ChipSelector';
import {useFormikContext} from 'formik';
import {EventFormValues} from '../../../../interfaces/EventFormValuesInterface';
import PageHeader from '../../../headers/page-headers/PageHeader';
import FormikDropdown from "../../../../shared/forms/elements/formik-elements/dropdown/FormikDropdown";

const PricingSection = () => {
    const { setFieldValue } = useFormikContext<EventFormValues>();
    const {
        handleTagChange,
        selectedTag,
        pricingTagOptions,
        pricingOption,
        getChipClassName,
        currencies,
        disableWheelAndArrowKeys,
    } = PricingSectionVM({setFieldValue});

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
                            <FormikDropdown
                                name='currency'
                                label='Currency'
                                options={currencies}
                                selectClassName={'create-event-price'}
                                multiple={false}
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
