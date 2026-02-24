import { CheckCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';

export function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Subscription Active!</h1>
        <p className="text-[#8A8A8A] mb-6">Your subscription is now active</p>

        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#8A8A8A]">Plan</span>
            <span className="font-semibold text-[#1E1E1E]">Basic</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-[#8A8A8A]">Amount</span>
            <span className="font-semibold text-[#1E1E1E]">₹199/month</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8A8A8A]">Expires On</span>
            <span className="font-semibold text-[#1E1E1E]">March 23, 2026</span>
          </div>
        </div>

        <Button onClick={() => navigate('/add-business')}>
          Add Your Business
        </Button>
      </div>
    </div>
  );
}
