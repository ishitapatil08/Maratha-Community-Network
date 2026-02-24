import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router';
import { Camera } from 'lucide-react';

export function ProfileSetup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    city: '',
    gender: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">Complete Your Profile</h1>
        <p className="text-[#8A8A8A] mb-8">Tell us about yourself</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2 relative">
              <Camera className="w-8 h-8 text-[#8A8A8A]" />
              <input 
                type="file" 
                accept="image/*" 
                className="absolute inset-0 opacity-0 cursor-pointer" 
              />
            </div>
            <p className="text-sm text-[#8A8A8A]">Upload Profile Photo</p>
          </div>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />

          <Input
            label="City"
            placeholder="Enter your city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />

          <div>
            <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              {['Male', 'Female', 'Other'].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => setFormData({ ...formData, gender })}
                  className={`flex-1 py-3 rounded-lg border-2 transition-all ${
                    formData.gender === gender
                      ? 'border-[#F4A300] bg-[#F4A300]/10 text-[#F4A300]'
                      : 'border-gray-300 text-[#8A8A8A]'
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          <Button 
            type="submit" 
            loading={loading}
            disabled={!formData.fullName || !formData.city || !formData.gender}
          >
            Complete Profile
          </Button>
        </form>
      </div>
    </div>
  );
}
