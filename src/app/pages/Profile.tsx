import { 
  Store, Heart, CreditCard, Shield, Settings, LogOut, 
  ChevronRight, CheckCircle 
} from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router';

export function Profile() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#F4A300] to-[#E08900] px-4 pt-8 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />
          <div className="flex-1 text-white">
            <h2 className="text-xl font-bold mb-1">Rahul Patil</h2>
            <p className="text-white/90 text-sm">Pune, Maharashtra</p>
            <p className="text-white/90 text-sm">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Subscription Card */}
      <div className="px-4 -mt-4 mb-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-[#8A8A8A] mb-1">Active Plan</p>
              <h3 className="text-lg font-bold text-[#1E1E1E]">Basic Plan</h3>
            </div>
            <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#2E7D32]" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-[#8A8A8A]">Expires on</span>
            <span className="font-semibold text-[#1E1E1E]">March 23, 2026</span>
          </div>
          <button className="w-full py-2 bg-[#F4A300] text-white rounded-lg font-semibold hover:bg-[#E09800] transition-colors">
            Renew Subscription
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
          <Link to="/my-listings" className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
              <Store className="w-5 h-5 text-[#F4A300]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1E1E1E]">My Business Listings</h3>
              <p className="text-xs text-[#8A8A8A]">Manage your businesses</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8A8A8A]" />
          </Link>

          <Link to="/my-matrimonial" className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1E1E1E]">My Matrimonial Profile</h3>
              <p className="text-xs text-[#8A8A8A]">View and edit profile</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8A8A8A]" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
          <Link to="/subscription" className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1E1E1E]">My Subscription</h3>
              <p className="text-xs text-[#8A8A8A]">Manage billing</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8A8A8A]" />
          </Link>

          <Link to="/kyc" className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#2E7D32]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1E1E1E]">KYC Verification</h3>
              <p className="text-xs text-[#8A8A8A]">Verify your account</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8A8A8A]" />
          </Link>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200">
          <Link to="/settings" className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-[#8A8A8A]" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#1E1E1E]">Settings</h3>
              <p className="text-xs text-[#8A8A8A]">Preferences and privacy</p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8A8A8A]" />
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
              <LogOut className="w-5 h-5 text-[#C62828]" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-[#C62828]">Logout</h3>
              <p className="text-xs text-[#8A8A8A]">Sign out of your account</p>
            </div>
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
