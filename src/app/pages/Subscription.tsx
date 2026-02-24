import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Subscription() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('basic');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹199',
      period: '/month',
      features: [
        '1 Business Listing',
        'Search Visibility',
        'Contact Access',
        'Verified Badge'
      ],
      highlighted: true
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹249',
      period: '/month',
      features: [
        '3 Business Listings',
        'Featured Badge',
        'Priority Support',
        'Analytics Dashboard',
        'Social Media Integration'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹499',
      period: '/month',
      features: [
        'Unlimited Listings',
        'Homepage Featured',
        'Dedicated Support',
        'Advanced Analytics',
        'Custom Branding',
        'API Access'
      ]
    }
  ];

  const handleSubscribe = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/payment-success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Start Listing Your Business</h1>
        <p className="text-[#8A8A8A] mb-8">Choose a plan that works for you</p>

        <div className="space-y-4 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                plan.highlighted
                  ? 'border-[#F4A300] bg-[#F4A300]/5 shadow-md'
                  : selectedPlan === plan.id
                  ? 'border-[#F4A300] bg-white'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#1E1E1E]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-[#F4A300]">{plan.price}</span>
                    <span className="text-sm text-[#8A8A8A]">{plan.period}</span>
                  </div>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id
                      ? 'border-[#F4A300] bg-[#F4A300]'
                      : 'border-gray-300'
                  }`}
                >
                  {selectedPlan === plan.id && <Check className="w-4 h-4 text-white" />}
                </div>
              </div>

              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#2E7D32] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1E1E1E]">{feature}</span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        <Button onClick={handleSubscribe} loading={loading}>
          Subscribe Now
        </Button>

        <p className="text-center text-xs text-[#8A8A8A] mt-4">
          Cancel anytime. No hidden charges.
        </p>
      </div>
    </div>
  );
}
