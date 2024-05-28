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
import { loadStripe } from '@stripe/stripe-js';
import { styleOptions } from './StripeElementOptions';
import styles from './PaymentForm.module.css';
import { Typography } from '@mui/material';

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
		<section className={styles.wrapperContainer}>
			<Formik initialValues={{}} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Form className={styles.formikForm}>
						<Typography variant='body2'>Enter you card number</Typography>
						<CardNumberElement className={styles.cardInput} options={styleOptions} />
						<section className={styles.oneLine}>
							<Typography variant='body2'>Enter CVC</Typography>
							<CardCvcElement className={styles.cardInput} options={styleOptions} />
                            <Typography variant='body2'>Enter card expiration date</Typography>
							<CardExpiryElement className={styles.cardInput} options={styleOptions} />
						</section>
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
