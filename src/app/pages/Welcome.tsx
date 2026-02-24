import { Button } from '../components/Button';
import { Link } from 'react-router';

export function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4A300] to-[#E08900] flex flex-col items-center justify-between p-6 text-white">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        {/* Logo/Icon Area */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <circle cx="50" cy="50" r="45" fill="white" opacity="0.9" />
              <path
                d="M45 30 Q48 27 52 28 Q55 29 56 32 L58 37 Q58 40 55 43 L53 47 L52 55 L52 70 Q50 75 45 75 L40 75 L38 70 L38 55 L37 47 Q35 43 35 40 L35 37 Q36 33 40 31 Q42 29 45 30 Z"
                fill="#800000"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-center mb-2">जय शिवराय 🙏</h1>
          <p className="text-white/90 text-center text-lg">Maratha Community Network</p>
        </div>

        <div className="w-full space-y-4">
          <p className="text-center text-white/90 mb-6">
            Connect, Grow, and Strengthen Our Community
          </p>
          
          <Link to="/otp" className="block">
            <Button variant="primary" className="bg-white text-[#F4A300] hover:bg-gray-100">
              Continue with Mobile
            </Button>
          </Link>
          
          <Link to="/otp" className="block text-center text-white/90 underline">
            Already have an account? Login
          </Link>
        </div>
      </div>

      <div className="text-center text-white/70 text-sm">
        Building a Strong Maratha Network
      </div>
    </div>
  );
}
