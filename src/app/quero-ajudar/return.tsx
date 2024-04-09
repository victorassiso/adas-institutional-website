'use client'
import { useSearchParams } from 'next/navigation'

import { stripe } from '@/utils/stripe'

async function getSession(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId)
  return session
}

export default async function CheckoutReturn() {
  const searchParams = useSearchParams()

  const sessionId = searchParams.get('session_id')
  const session = await getSession(sessionId!).catch(console.error)

  console.log(session)

  if (session?.status === 'open') {
    return <p>Payment did not work.</p>
  }

  if (session?.status === 'complete') {
    return (
      <h3>
        We appreciate your business! Your Stripe customer ID is:
        {session.customer as string}.
      </h3>
    )
  }

  return null
}
