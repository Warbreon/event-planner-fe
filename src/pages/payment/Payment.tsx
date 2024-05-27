import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../components/payment/PaymentForm';
import { PUBLISHABLE_STRIPE_KEY, TEST_PUBLISHABLE_STRIPE_KEY } from '../../constants/PaymentKeys';
import { Container } from '@mui/material';
import { Event } from '../../models/Event';

interface Props {
    event: Event;
}

const stripePromise = loadStripe(TEST_PUBLISHABLE_STRIPE_KEY);

const PaymentPage: FC<Props> = ({ event }) => {
    
    const location = useLocation();

    return (
        <Container>
            <Elements stripe={stripePromise}>
                <PaymentForm 
                    attendeeId={attendeeId} 
                    price={location.state.price}
                />
            </Elements>
        </Container>
    );
};

export default PaymentPage;
