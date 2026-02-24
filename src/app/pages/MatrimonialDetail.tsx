import { 
  ChevronLeft, MapPin, GraduationCap, Briefcase, Users, Heart 
} from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate, useParams } from 'react-router';

export function MatrimonialDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Header Image */}
      <div className="relative h-80 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-[#1E1E1E]" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-4">
        {/* Basic Info */}
        <div>
          <h1 className="text-2xl font-bold text-[#1E1E1E] mb-1">Priya Deshmukh, 26</h1>
          <div className="flex items-center gap-1 text-[#8A8A8A]">
            <MapPin className="w-4 h-4" />
            <span>Pune, Maharashtra</span>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">About</h3>
          <p className="text-[#8A8A8A] text-sm leading-relaxed">
            A passionate marketing professional with a love for creativity and innovation. 
            Looking for a life partner who values family, culture, and mutual growth.
          </p>
        </div>

        {/* Education & Career */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">Education & Career</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-[#F4A300] mt-0.5" />
              <div>
                <p className="font-semibold text-[#1E1E1E] text-sm">MBA, Marketing</p>
                <p className="text-xs text-[#8A8A8A]">Pune University</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-[#F4A300] mt-0.5" />
              <div>
                <p className="font-semibold text-[#1E1E1E] text-sm">Marketing Manager</p>
                <p className="text-xs text-[#8A8A8A]">Tech Solutions Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Family */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">Family Details</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Father:</span> Business Owner
            </p>
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Mother:</span> Homemaker
            </p>
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Siblings:</span> 1 Brother
            </p>
          </div>
        </div>

        {/* Partner Expectations */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">Partner Expectations</h3>
          <p className="text-[#8A8A8A] text-sm leading-relaxed">
            Looking for an educated, family-oriented individual who respects traditions and 
            has a modern outlook. Should be well-settled professionally and emotionally mature.
          </p>
        </div>

        {/* Send Interest Button */}
        <Button variant="primary">
          <Heart className="w-5 h-5" />
          Send Interest
        </Button>
      </div>
    </div>
  );
}
