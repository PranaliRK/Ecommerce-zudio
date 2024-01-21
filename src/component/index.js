import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51ONIYxSIISLtKMRZ0ZJ6SwOj2zan7W2nBDoUIdggR4LIAJbvojBagPnxZbRGGZETh3wTJr0PDD61FEE20YE24pW0005hl82nZB');

export default function App() {
  const options = {
   
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};