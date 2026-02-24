import { Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router';

export function BusinessPending() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-[#F4A300] rounded-full flex items-center justify-center mx-auto mb-6">
          <Clock className="w-12 h-12 text-white" />
        </div>

        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Pending Admin Approval</h1>
        <p className="text-[#8A8A8A] mb-6">
          Your business listing has been submitted and is currently under review. You'll be notified once it's approved.
        </p>

        <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-200 text-left">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">What happens next?</h3>
          <ul className="space-y-2 text-sm text-[#8A8A8A]">
            <li>• Admin will review your listing within 24-48 hours</li>
            <li>• You'll receive a notification once approved</li>
            <li>• Your business will be visible to all users</li>
          </ul>
        </div>

        <Button onClick={() => navigate('/home')}>
          Go to Home
        </Button>
      </div>
    </div>
  );
}
