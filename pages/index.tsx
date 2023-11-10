import Image from 'next/image'
import { Inter } from 'next/font/google'
import PricingCard from '../components/PricingCard'

const inter = Inter({ subsets: ['latin'] })

const plans = [
  {
    name: 'Basic',
    price: '$19',
    features: ['1 Website', '5 GB Storage', 'Unlimited Bandwidth', '24/7 Support']
  },
  {
    name: 'Pro',
    price: '$49',
    features: ['5 Websites', '30 GB Storage', 'Unlimited Bandwidth', '24/7 Support']
  },
  {
    name: 'Enterprise',
    price: '$99',
    features: ['Unlimited Websites', 'Unlimited Storage', 'Unlimited Bandwidth', '24/7 Support']
  }
]

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-gray-700 mb-10">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </main>
  )
}