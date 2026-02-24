import { Search, Filter, PlusCircle } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { BusinessCard } from '../components/BusinessCard';
import { Link } from 'react-router';

export function Marketplace() {
  const categories = [
    'All', 'Electronics', 'Fashion', 'Food & Dining', 'Services', 'Healthcare', 'Education'
  ];

  const businesses = [
    {
      id: '1',
      name: 'Shivaji Electronics',
      category: 'Electronics & Appliances',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=300&fit=crop',
      featured: true,
      verified: true
    },
    {
      id: '2',
      name: 'Maratha Textiles',
      category: 'Clothing & Fashion',
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      featured: true,
      verified: true
    },
    {
      id: '3',
      name: 'Royal Restaurant',
      category: 'Food & Dining',
      location: 'Nagpur, Maharashtra',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      verified: true
    },
    {
      id: '4',
      name: 'Tech Solutions',
      category: 'IT Services',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-4">Marketplace</h1>
        
        {/* Search Bar */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
            <input
              type="text"
              placeholder="Search businesses..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
            />
          </div>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-300 bg-white">
            <Filter className="w-5 h-5 text-[#1E1E1E]" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold text-sm transition-colors ${
                category === 'All'
                  ? 'bg-[#F4A300] text-white'
                  : 'bg-gray-100 text-[#1E1E1E] hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Business List */}
      <div className="px-4 py-4 space-y-4">
        {businesses.map((business) => (
          <BusinessCard key={business.id} {...business} />
        ))}
      </div>

      {/* Floating Add Button */}
      <Link 
        to="/subscription"
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#F4A300] rounded-full shadow-lg flex items-center justify-center hover:bg-[#E09800] transition-colors z-40"
      >
        <PlusCircle className="w-7 h-7 text-white" />
      </Link>

      <BottomNav />
    </div>
  );
}
