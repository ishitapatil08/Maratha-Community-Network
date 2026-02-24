import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';

export function OTP() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState<'mobile' | 'otp'>('mobile');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 1000);
  };

  const handleVerifyOTP = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/profile-setup');
    }, 1000);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] p-6">
      <button onClick={() => step === 'otp' ? setStep('mobile') : navigate(-1)} className="mb-6">
        <ChevronLeft className="w-6 h-6 text-[#1E1E1E]" />
      </button>

      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">
          {step === 'mobile' ? 'Enter Mobile Number' : 'Verify OTP'}
        </h1>
        <p className="text-[#8A8A8A] mb-8">
          {step === 'mobile' 
            ? 'We will send you a verification code' 
            : `Code sent to +91 ${mobile}`}
        </p>

        {step === 'mobile' ? (
          <div className="space-y-6">
            <Input
              label="Mobile Number"
              type="tel"
              placeholder="Enter 10 digit mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength={10}
            />
            <Button 
              onClick={handleSendOTP} 
              loading={loading}
              disabled={mobile.length !== 10}
            >
              Send OTP
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1E1E1E] mb-3">
                Enter 6-digit OTP
              </label>
              <div className="flex gap-2 justify-between">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-12 h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
                  />
                ))}
              </div>
            </div>
            
            <Button 
              onClick={handleVerifyOTP} 
              loading={loading}
              disabled={otp.some(d => !d)}
            >
              Verify OTP
            </Button>

            <button className="w-full text-center text-[#F4A300] font-semibold">
              Resend OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
