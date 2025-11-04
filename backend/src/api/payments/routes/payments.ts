export default {
  routes: [
    {
      method: 'POST',
      path: '/payments/create-checkout-session',
      handler: 'payments.createCheckoutSession',
      config: {
        auth: false,
      },
    },
  ],
};


