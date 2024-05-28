import { FC, useState } from 'react';
import {
	CardElement,
	useStripe,
	useElements,
	CardCvcElement,
	CardExpiryElement,
	CardNumberElement,
} from '@stripe/react-stripe-js';
import { Formik, Form } from 'formik';
import usePaymentAPI from '../../api/PaymentAPI';
import { ChargeRequest } from '../../models/request/ChargeRequest';
import { useApiRequest } from '../../api/hooks/ApiHooks';
import GenericButton, { ButtonTypes } from '../../shared/components/buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';
import { styleOptions } from './StripeElementOptions';
import styles from './PaymentForm.module.css';
import { Typography } from '@mui/material';

interface PaymentFormProps {
	eventId: string;
	price: number;
    onSuccess: () => void;
}

const PaymentForm: FC<PaymentFormProps> = ({ eventId, price, onSuccess }) => {
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

		const cardNumberElement = elements.getElement(CardNumberElement);

		if (!cardNumberElement) {
			setErrorMessage('Card Number Element is not loaded');
			return;
		}

		const { error, token } = await stripe.createToken(cardNumberElement);

		if (error) {
			setErrorMessage(error.message || 'An error occurred');
			return;
		}

		const chargeRequest: ChargeRequest = {
			token: token.id,
			amount: price,
			eventId: parseInt(eventId),
		};

		postData(() => processPayment(chargeRequest))
            .then(() => {
                if (!apiError) onSuccess();
            });
	};

	return (
		<section className={styles.wrapperContainer}>
			<Formik initialValues={{}} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Form className={styles.formikForm}>
						<Typography variant='body2'>Enter you card details</Typography>
						<CardNumberElement className={styles.cardInput} options={styleOptions} />
						<section className={styles.oneLine}>
							<Typography variant='body2'>Enter CVC</Typography>
							<CardCvcElement className={styles.cardInput} options={styleOptions} />
                            <Typography variant='body2'>Enter card expiration date</Typography>
							<CardExpiryElement className={styles.cardInput} options={styleOptions} />
						</section>
                        {/* <CardElement className={styles.cardInput} options={styleOptions} /> */}
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
		</section>
	);
};

export default PaymentForm;
