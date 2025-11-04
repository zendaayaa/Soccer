import axios from 'axios';

const API_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337/api';

export async function startCheckout(priceId: string, options?: { successUrl?: string; cancelUrl?: string; customerEmail?: string }) {
  const res = await axios.post(`${API_URL}/payments/create-checkout-session`, {
    priceId,
    successUrl: options?.successUrl,
    cancelUrl: options?.cancelUrl,
    customerEmail: options?.customerEmail,
  });
  const url = res.data?.url;
  if (!url) throw new Error('Missing checkout url');
  window.location.href = url;
}


