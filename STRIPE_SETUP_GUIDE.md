# Stripe Payments Integration - Step-by-Step Guide

This guide will walk you through setting up Stripe payments for your membership plans.

## Prerequisites

- A Stripe account (free to create at https://stripe.com)
- Your Strapi backend running
- Your Vue frontend running

---

## Step 1: Create a Stripe Account & Get API Keys

1. **Sign up for Stripe** (if you don't have an account):
   - Go to https://stripe.com
   - Click "Start now" and create an account (it's free)
   - You'll be in **Test mode** by default (perfect for development)

2. **Get your API keys**:
   - In Stripe Dashboard, go to **Developers** → **API keys**
   - You'll see:
     - **Publishable key** (starts with `pk_test_...`) - safe to expose in frontend
     - **Secret key** (starts with `sk_test_...`) - **NEVER share this or commit it to git**
   - Click "Reveal test key" to see your secret key
   - Copy both keys for later use

---

## Step 2: Create Products and Prices in Stripe

You need to create a Price for each membership plan (Starter, Athlete, Elite).

1. **In Stripe Dashboard**, go to **Products** → Click **"Add product"**

2. **For each plan**, create a product:
   
   **Starter Plan:**
   - Name: "Starter Membership"
   - Description: "Perfect for beginners getting started"
   - Pricing: **Recurring** → Monthly
   - Price: **KES 2,500** (or your equivalent in your currency)
   - Click **"Save product"**
   - **Copy the Price ID** (starts with `price_...`) - you'll need this!

   **Athlete Plan:**
   - Name: "Athlete Membership"
   - Description: "Our most popular choice for serious athletes"
   - Pricing: **Recurring** → Monthly
   - Price: **KES 4,500**
   - Click **"Save product"**
   - **Copy the Price ID**

   **Elite Plan:**
   - Name: "Elite Membership"
   - Description: "Premium package for competitive athletes"
   - Pricing: **Recurring** → Monthly
   - Price: **KES 7,500**
   - Click **"Save product"**
   - **Copy the Price ID**

3. **Note down all three Price IDs** - you'll add them to Strapi in the next step.

---

## Step 3: Add Stripe Price IDs to Strapi Membership Plans

1. **Open Strapi Admin** (http://localhost:1337/admin)

2. **Go to Content-Type Builder**:
   - Click **Content-Type Builder** in the left sidebar
   - Find **Membership Plan** → Click on it
   - Click **"Add another field"**

3. **Add a new field**:
   - Field type: **Text**
   - Field name: `stripePriceId`
   - Field type: **Short text**
   - Click **"Finish"** → **"Save"**

4. **Add Price IDs to your plans**:
   - Go to **Content Manager** → **Membership Plan**
   - For each plan:
     - Click to edit
     - Paste the corresponding Stripe Price ID in the `stripePriceId` field
     - Click **"Save"** → **"Publish"**

---

## Step 4: Configure Backend Environment Variables

1. **Create a `.env` file** in the `backend` folder (if it doesn't exist):
   ```bash
   cd backend
   # Create .env file (on Windows, you can use Notepad or PowerShell)
   ```

2. **Add your Stripe secret key** to the `.env` file:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   ```

   **Important**: Replace `sk_test_your_secret_key_here` with your actual Stripe secret key from Step 1.

3. **Also add your existing Strapi environment variables** (if not already there):
   ```env
   ADMIN_JWT_SECRET=bd7c7c7c9f2c4c9c9b2f3a7a2f6c48b1
   API_TOKEN_SALT=8a4e6c2b5f1d4a8e9b7c3a1f6d2e4b9c
   TRANSFER_TOKEN_SALT=6c9f1a2b3d4e5f6a7b8c9d0e1f2a3b4c
   ENCRYPTION_KEY=1f2e3d4c5b6a79808a7b6c5d4e3f2a1b
   APP_KEYS=2f4a6c8e0b1d3f5a,7c9e1a3b5d7f9a1c
   HOST=0.0.0.0
   PORT=1337
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   ```

4. **Restart your Strapi backend** for the changes to take effect:
   - Stop the backend (Ctrl+C)
   - Start it again: `npm run dev`

---

## Step 5: Configure Strapi Permissions

1. **In Strapi Admin**, go to **Settings** → **Users & Permissions plugin** → **Roles** → **Public**

2. **Enable permissions** for:
   - **Membership Plan**: ✅ **find** (read)
   - **Payments**: ✅ **create-checkout-session** (if shown)

3. **Click "Save"**

---

## Step 6: Update Frontend to Fetch Plans from Strapi (Optional but Recommended)

Currently, the membership plans are hardcoded. To use the Stripe Price IDs from Strapi:

1. **Update `src/components/Membership.vue`** to fetch plans from Strapi API instead of using hardcoded data.

2. **Uncomment and update the `fetchMembershipPlans` function** in `Membership.vue` to actually fetch from Strapi.

3. **Call `fetchMembershipPlans()` on component mount**.

Alternatively, you can manually add the `stripePriceId` to the hardcoded plans array in `Membership.vue` for quick testing.

---

## Step 7: Test the Integration

1. **Make sure both servers are running**:
   - Backend: `http://localhost:1337`
   - Frontend: `http://localhost:5173`

2. **Test the checkout flow**:
   - Go to your website → Membership section
   - Click "Choose Athlete" (or any plan with a `stripePriceId`)
   - You should be redirected to Stripe Checkout

3. **Use Stripe test card**:
   - Card number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)

4. **Complete the test payment**:
   - Fill in the form
   - Click "Subscribe"
   - You should be redirected to `/success` page

5. **Test cancel flow**:
   - Click a plan again
   - Click "Cancel" on Stripe Checkout
   - You should be redirected to `/cancel` page

---

## Step 8: Verify in Stripe Dashboard

1. **Check Stripe Dashboard** → **Payments**:
   - You should see test payments appear
   - Status will show as "Succeeded" (test mode)

2. **Check Subscriptions**:
   - Go to **Customers** → You'll see test customers
   - Go to **Subscriptions** → You'll see active subscriptions

---

## Troubleshooting

### Error: "Missing priceId" or "Invalid price"
- ✅ Make sure you added `stripePriceId` to the membership plan in Strapi
- ✅ Verify the Price ID is correct (starts with `price_...`)

### Error: "Invalid API Key"
- ✅ Check that `STRIPE_SECRET_KEY` is set correctly in `backend/.env`
- ✅ Make sure you're using the **test** key (starts with `sk_test_...`)
- ✅ Restart the Strapi backend after adding the env variable

### 403 Forbidden when calling payments endpoint
- ✅ Check Strapi permissions (Step 5)
- ✅ Make sure CORS is configured for `http://localhost:5173`

### Checkout page doesn't load
- ✅ Check browser console for errors
- ✅ Verify the backend is running and accessible
- ✅ Check network tab to see if the API call succeeded

---

## Going Live (Production)

When you're ready to accept real payments:

1. **Switch to Live mode** in Stripe Dashboard (toggle in top right)
2. **Get your live API keys** (Developers → API keys)
3. **Update `.env`** with live secret key (`sk_live_...`)
4. **Create live Prices** in Stripe (same as test, but in live mode)
5. **Update Price IDs** in Strapi with live Price IDs
6. **Test with a real $0.50 payment** first to verify everything works

---

## Next Steps (Optional Enhancements)

- Add webhook handler to automatically mark subscriptions as active in Strapi
- Create a `subscriptions` collection in Strapi to track customer subscriptions
- Add email notifications for successful payments
- Add subscription management page for users to cancel/upgrade

---

## Quick Reference

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Test Cards**: https://stripe.com/docs/testing
- **Stripe API Docs**: https://stripe.com/docs/api

