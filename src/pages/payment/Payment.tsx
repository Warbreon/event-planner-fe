import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../../components/payment/PaymentForm';
import { PUBLISHABLE_STRIPE_KEY, TEST_PUBLISHABLE_STRIPE_KEY } from '../../constants/PaymentKeys';
import { Container } from '@mui/material';
import { Event } from '../../models/Event';

const stripePromise = loadStripe(TEST_PUBLISHABLE_STRIPE_KEY);

const PaymentPage = () => {
    
    const location = useLocation();

    return (
        <Container>
            <Elements stripe={stripePromise}>
                <PaymentForm 
                    attendeeId={'27'} 
                    price={1}
                />
            </Elements>
        </Container>
    );
};

export default PaymentPage;
