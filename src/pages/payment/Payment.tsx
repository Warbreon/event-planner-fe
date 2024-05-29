import { FC } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../components/payment/PaymentForm';
import { PUBLISHABLE_STRIPE_KEY, TEST_PUBLISHABLE_STRIPE_KEY } from '../../constants/PaymentKeys';
import { Container } from '@mui/material';
import PaymentVM from './PaymentVM';
import LoadingIndicator from '../../components/loading-indicator/LoadingIndicator';
import { useNavigate, useParams } from 'react-router';

const stripePromise = loadStripe(TEST_PUBLISHABLE_STRIPE_KEY);

const Payment: FC = () => {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const { price, isLoading, error } = PaymentVM(eventId!);

    if (isLoading) return <LoadingIndicator />;

    return (
        <Container>
            {/* {error ? <ErrorAlert message={error} /> : null} */}
            <Elements stripe={stripePromise}>
                <PaymentForm 
                    eventId={eventId!}
                    price={price!}
                    onSuccess={() => navigate(`/events/event/${eventId}`)}
                />
            </Elements>
        </Container>
    );
};

export default Payment;
