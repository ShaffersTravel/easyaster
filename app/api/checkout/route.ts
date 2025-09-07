import Stripe from 'stripe';
import { NextResponse } from 'next/server';

// Initialize Stripe using a secret key stored in the environment. When
// deploying, set STRIPE_SECRET_KEY in your environment. For local
// development you can use test keys from the Stripe dashboard.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2023-10-16',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const priceId: string = body.priceId;
    // Map product tiers to Stripe price IDs. These environment
    // variables should be defined in your .env file for test mode.
    const priceLookup: Record<string, string | undefined> = {
      basic: process.env.PRICE_BASIC,
      premium: process.env.PRICE_PREMIUM,
      concierge: process.env.PRICE_CONCIERGE,
    };
    const price = priceLookup[priceId];
    if (!price) {
      return NextResponse.json({ error: 'Unknown price' }, { status: 400 });
    }
    const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(req.url).origin;
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/pricing`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}