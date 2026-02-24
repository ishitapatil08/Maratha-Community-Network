import { Phone, MessageCircle, MapPin, ChevronLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { useNavigate, useParams } from 'react-router';

export function BusinessDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-[#FAF6F0]">
      {/* Header Image */}
      <div className="relative h-64 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&h=600&fit=crop"
          alt="Business"
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-[#1E1E1E]" />
        </button>
        <div className="absolute top-4 right-4">
          <Badge variant="featured">Featured</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Title Section */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <h1 className="text-2xl font-bold text-[#1E1E1E] flex-1">Shivaji Electronics</h1>
            <Badge variant="verified">✓ Verified</Badge>
          </div>
          <p className="text-[#8A8A8A] mb-2">Electronics & Appliances</p>
          <div className="flex items-center gap-1 text-[#8A8A8A]">
            <MapPin className="w-4 h-4" />
            <span>Pune, Maharashtra</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">About</h3>
          <p className="text-[#8A8A8A] text-sm leading-relaxed">
            Your one-stop shop for all electronics and home appliances. We offer genuine products with warranty 
            and excellent after-sales service. Visit our store for the best deals on smartphones, laptops, TVs, 
            and home appliances.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-5 border border-gray-200">
          <h3 className="font-semibold text-[#1E1E1E] mb-3">Contact Information</h3>
          <div className="space-y-2 text-sm">
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Phone:</span> +91 98765 43210
            </p>
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Email:</span> info@shivajielectronics.com
            </p>
            <p className="text-[#8A8A8A]">
              <span className="font-semibold text-[#1E1E1E]">Address:</span> Shop No. 12, MG Road, Pune - 411001
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="primary" className="flex-1">
            <Phone className="w-5 h-5" />
            Call Now
          </Button>
          <Button variant="outline" className="flex-1" onClick={() => navigate('/chat/1')}>
            <MessageCircle className="w-5 h-5" />
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
}
