import { Store, ShoppingBag, Heart, PlusCircle } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { BusinessCard } from '../components/BusinessCard';
import { Link } from 'react-router';

export function Home() {
  const featuredBusinesses = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20">
      {/* Hero Section */}
      <div className="relative h-[250px] overflow-hidden">
        {/* Saffron Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #F4A300 0%, #E08900 100%)'
          }}
        />
        
        {/* Subtle Fort Silhouette Background */}
        <svg 
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 250"
          preserveAspectRatio="xMidYMid slice"
          style={{ opacity: 0.07 }}
        >
          <path
            d="M50 200 L50 130 L70 130 L70 110 L90 110 L90 130 L110 130 L110 100 L130 100 L130 130 L150 130 L150 85 L170 85 L170 130 L190 130 L190 75 L210 75 L210 130 L230 130 L230 85 L250 85 L250 130 L270 130 L270 100 L290 100 L290 130 L310 130 L310 110 L330 110 L330 130 L350 130 L350 200 Z"
            fill="currentColor"
            className="text-orange-900"
          />
        </svg>

        {/* Subtle Circular Maharaj Silhouette - Right Side */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden" style={{ opacity: 0.12 }}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="50" fill="#8B4513" opacity="0.2" />
            <path
              d="M45 25 Q48 22 52 23 Q55 24 56 27 L58 32 Q58 35 55 38 L53 42 L52 50 L52 65 Q50 70 45 70 L40 70 L38 65 L38 50 L37 42 Q35 38 35 35 L35 32 Q36 28 40 26 Q42 24 45 25 Z"
              fill="#8B4513"
            />
            <path
              d="M42 20 Q45 18 50 18 Q55 18 58 20 L60 25 L58 28 L52 26 L45 28 L42 25 Z"
              fill="#8B4513"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pt-8">
          <div className="text-white">
            <h1 className="text-2xl font-bold mb-1">जय शिवराय 🙏</h1>
            <p className="text-white/90 text-lg">Welcome, Rahul</p>
          </div>
        </div>
      </div>

      {/* Quick Actions - 2x2 Grid */}
      <div className="relative -mt-16 px-4 pb-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="grid grid-cols-2 gap-3">
            <Link to="/marketplace" className="flex flex-col items-center justify-center p-4 rounded-xl bg-orange-50 border border-orange-100 hover:bg-orange-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#F4A300] flex items-center justify-center mb-2">
                <Store className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#1E1E1E] text-center">Browse Businesses</span>
            </Link>

            <Link to="/marketplace" className="flex flex-col items-center justify-center p-4 rounded-xl bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-2">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#1E1E1E] text-center">Buy Products</span>
            </Link>

            <Link to="/matrimonial" className="flex flex-col items-center justify-center p-4 rounded-xl bg-pink-50 border border-pink-100 hover:bg-pink-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#1E1E1E] text-center">Matrimonial</span>
            </Link>

            <Link to="/subscription" className="flex flex-col items-center justify-center p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#2E7D32] flex items-center justify-center mb-2">
                <PlusCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#1E1E1E] text-center">List Business</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Businesses */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#1E1E1E]">Featured Businesses</h2>
          <Link to="/marketplace" className="text-[#F4A300] font-semibold text-sm">
            View All
          </Link>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {featuredBusinesses.map((business) => (
            <div key={business.id} className="min-w-[280px]">
              <BusinessCard {...business} />
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
