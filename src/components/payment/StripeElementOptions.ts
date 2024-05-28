import { StripeCardCvcElementOptions, StripeCardExpiryElementOptions, StripeCardNumberElementOptions } from "@stripe/stripe-js";

const cardDetailsStyleOptions = {
  base: {
    color: '#30313d',
    backgroundColor: '#ffffff',
    fontFamily: 'Inter',
    fontSmoothing: 'antialiased',
    fontSize: '20px',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
  invalid: {
    color: '#df1b41',
    iconColor: '#df1b41',
  },
  
};

export const styleOptions: StripeCardNumberElementOptions | StripeCardCvcElementOptions | StripeCardExpiryElementOptions = {
  style: cardDetailsStyleOptions
};


