import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const stripe = stripeSecret ? new Stripe(stripeSecret) : null;

export default {
  async createCheckoutSession(ctx) {
    try {
      if (!stripe) {
        ctx.throw(500, 'Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.');
      }

      const { priceId, successUrl, cancelUrl, customerEmail } = ctx.request.body || {};
      if (!priceId) {
        ctx.throw(400, 'Missing priceId');
      }

      const session = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl || 'http://localhost:5173/?checkout=success',
        cancel_url: cancelUrl || 'http://localhost:5173/?checkout=cancel',
        customer_email: customerEmail,
        allow_promotion_codes: true,
        billing_address_collection: 'auto',
      });

      ctx.send({ url: session.url });
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to create checkout session' };
    }
  },
};


