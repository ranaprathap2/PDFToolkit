import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: 'forever',
    features: [
      'Basic PDF editing',
      'Up to 5 PDF merges per day',
      'File size limit: 10MB',
      'Basic support'
    ]
  },
  {
    name: 'Weekly',
    price: '$5',
    period: 'per week',
    features: [
      'Advanced PDF editing',
      'Unlimited PDF merges',
      'File size limit: 50MB',
      'Priority support',
      'No watermarks'
    ]
  },
  {
    name: 'Monthly',
    price: '$15',
    period: 'per month',
    popular: true,
    features: [
      'Everything in Weekly',
      'File size limit: 200MB',
      'OCR text recognition',
      'Premium support',
      'API access'
    ]
  },
  {
    name: 'Yearly',
    price: '$149',
    period: 'per year',
    features: [
      'Everything in Monthly',
      'Unlimited file size',
      'Batch processing',
      '24/7 support',
      'White-label option',
      '2 months free'
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-500 text-white text-center py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 px-4 rounded-lg font-semibold ${plan.popular ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}