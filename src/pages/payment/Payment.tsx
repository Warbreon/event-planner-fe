import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../components/payment/PaymentForm';
import { PUBLISHABLE_STRIPE_KEY, TEST_PUBLISHABLE_STRIPE_KEY } from '../../constants/PaymentKeys';
import { Container } from '@mui/material';
import useRegistration from '../../hooks/UseRegistration';
import PaymentVM from './PaymentVM';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';

const stripePromise = loadStripe(TEST_PUBLISHABLE_STRIPE_KEY);

const Payment: FC = () => {
    const location = useLocation();
    const event = location.state.event;
    const isCreator = location.state.isCreator;
    const attendeeId = location.state.attendeeId

    const { price, isLoading, error } = PaymentVM({ event, isCreator });

    if (isLoading) return <LoadingIndicator />;
    console.log(price, attendeeId)

    return (
        <Container>
            {/* {error ? <ErrorAlert message={error} /> : null} */}
            <Elements stripe={stripePromise}>
                <PaymentForm 
                    attendeeId={attendeeId} 
                    price={price}
                />
            </Elements>
        </Container>
    );
};

export default Payment;
