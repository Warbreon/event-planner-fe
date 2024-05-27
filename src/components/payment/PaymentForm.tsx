import { FC, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Formik, Form } from 'formik';
import usePaymentAPI from '../../api/PaymentAPI';
import { ChargeRequest } from '../../models/request/ChargeRequest';
import { useApiRequest } from '../../api/hooks/ApiHooks';
import GenericButton, { ButtonTypes } from '../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';

interface PaymentFormProps {
    attendeeId: string;
    price: number;
}

const PaymentForm: FC<PaymentFormProps> = ({ attendeeId, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { processPayment, refundPayment } = usePaymentAPI();
    const { request: postData, error: apiError } = useApiRequest();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async () => {
        setErrorMessage('');

        if (!stripe || !elements) {
            setErrorMessage('Stripe is not loaded');
            return;
        }

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            setErrorMessage('Card Element is not loaded');
            return;
        }

        const { error, token } = await stripe.createToken(cardElement);

        if (error) {
            setErrorMessage(error.message || 'An error occurred');
            return;
        }

        const chargeRequest: ChargeRequest = {
            token: token.id,
            amount: price,
            attendeeId: parseInt(attendeeId),
        };

        postData(() => processPayment(chargeRequest));

    };

    return (
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <CardElement />
                    </div>
                    <GenericButton
                        title={isSubmitting ? 'Processing...' : `Pay ${price} EUR`}
                        type={ButtonTypes.submit} 
                        styles={BUTTON_STYLES.GRAY}
                        disabled={isSubmitting}
                    />
                    {/* {errorMessage || apiError && <ErrorAlert message={errorMessage || apiError} />} */}
                </Form>
            )}
        </Formik>
    );
};

export default PaymentForm;
