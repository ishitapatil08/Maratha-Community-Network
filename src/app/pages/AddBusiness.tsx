import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router';
import { ChevronLeft, Upload } from 'lucide-react';

export function AddBusiness() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    description: '',
    location: '',
    contact: ''
  });

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/business-pending');
    }, 1500);
  };

  const categories = [
    'Electronics', 'Fashion', 'Food & Dining', 'Healthcare', 
    'Education', 'IT Services', 'Real Estate', 'Other'
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] p-6">
      <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)} className="mb-6">
        <ChevronLeft className="w-6 h-6 text-[#1E1E1E]" />
      </button>

      <div className="max-w-md mx-auto">
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= s ? 'bg-[#F4A300] text-white' : 'bg-gray-200 text-[#8A8A8A]'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`flex-1 h-1 mx-2 ${step > s ? 'bg-[#F4A300]' : 'bg-gray-200'}`}
                />
              )}
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-2">
          {step === 1 ? 'Basic Information' : step === 2 ? 'Media & Contact' : 'Review & Submit'}
        </h1>
        <p className="text-[#8A8A8A] mb-8">
          {step === 1 ? 'Tell us about your business' : step === 2 ? 'Add images and contact' : 'Review your listing'}
        </p>

        {step === 1 && (
          <div className="space-y-6">
            <Input
              label="Business Name"
              placeholder="Enter business name"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />

            <div>
              <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe your business..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
              />
            </div>

            <Input
              label="Location"
              placeholder="City, State"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />

            <Button 
              onClick={handleNext}
              disabled={!formData.businessName || !formData.category || !formData.location}
            >
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">Upload Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#F4A300] transition-colors cursor-pointer">
                <Upload className="w-10 h-10 text-[#8A8A8A] mx-auto mb-2" />
                <p className="text-sm text-[#8A8A8A]">Click to upload images</p>
                <input type="file" accept="image/*" multiple className="hidden" />
              </div>
            </div>

            <Input
              label="Contact Number"
              type="tel"
              placeholder="Enter contact number"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />

            <Button onClick={handleNext} disabled={!formData.contact}>
              Next
            </Button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-gray-200 space-y-3">
              <div>
                <p className="text-xs text-[#8A8A8A] mb-1">Business Name</p>
                <p className="font-semibold text-[#1E1E1E]">{formData.businessName}</p>
              </div>
              <div>
                <p className="text-xs text-[#8A8A8A] mb-1">Category</p>
                <p className="font-semibold text-[#1E1E1E]">{formData.category}</p>
              </div>
              <div>
                <p className="text-xs text-[#8A8A8A] mb-1">Location</p>
                <p className="font-semibold text-[#1E1E1E]">{formData.location}</p>
              </div>
              <div>
                <p className="text-xs text-[#8A8A8A] mb-1">Contact</p>
                <p className="font-semibold text-[#1E1E1E]">{formData.contact}</p>
              </div>
            </div>

            <Button onClick={handleSubmit} loading={loading}>
              Submit for Approval
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
