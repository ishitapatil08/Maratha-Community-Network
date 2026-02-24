import { Filter, PlusCircle } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { MatrimonialCard } from '../components/MatrimonialCard';
import { Link } from 'react-router';

export function Matrimonial() {
  const profiles = [
    {
      id: '1',
      name: 'Priya Deshmukh',
      age: 26,
      location: 'Pune, Maharashtra',
      education: 'MBA, Marketing',
      profession: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'Rajesh Patil',
      age: 29,
      location: 'Mumbai, Maharashtra',
      education: 'B.Tech, Computer Science',
      profession: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Sneha Jadhav',
      age: 25,
      location: 'Nagpur, Maharashtra',
      education: 'MBBS',
      profession: 'Doctor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-3">Matrimonial</h1>
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-4 border border-pink-100">
          <p className="text-sm font-semibold text-[#800000]">
            🎉 Profiles are currently FREE
          </p>
          <p className="text-xs text-[#8A8A8A] mt-1">Create your profile today</p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-2 rounded-full bg-[#F4A300] text-white font-semibold text-sm whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-[#1E1E1E] font-semibold text-sm whitespace-nowrap">
            Age 25-30
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-[#1E1E1E] font-semibold text-sm whitespace-nowrap">
            Education
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-100 text-[#1E1E1E] font-semibold text-sm whitespace-nowrap">
            Location
          </button>
        </div>
      </div>

      {/* Profile List */}
      <div className="px-4 py-4 space-y-4">
        {profiles.map((profile) => (
          <MatrimonialCard key={profile.id} {...profile} />
        ))}
      </div>

      {/* Floating Add Button */}
      <Link 
        to="/create-matrimonial-profile"
        className="fixed bottom-24 right-4 w-14 h-14 bg-pink-500 rounded-full shadow-lg flex items-center justify-center hover:bg-pink-600 transition-colors z-40"
      >
        <PlusCircle className="w-7 h-7 text-white" />
      </Link>

      <BottomNav />
    </div>
  );
}
