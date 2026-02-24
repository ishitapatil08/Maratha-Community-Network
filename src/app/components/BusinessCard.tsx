import { MapPin, Phone } from 'lucide-react';
import { Badge } from './Badge';
import { Link } from 'react-router';

interface BusinessCardProps {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  featured?: boolean;
  verified?: boolean;
}

export function BusinessCard({ id, name, category, location, image, featured, verified }: BusinessCardProps) {
  return (
    <Link to={`/business/${id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="relative h-40 bg-gray-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="featured">Featured</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-[#1E1E1E] text-base">{name}</h3>
            {verified && <Badge variant="verified">✓</Badge>}
          </div>
          <p className="text-sm text-[#8A8A8A] mb-2">{category}</p>
          <div className="flex items-center gap-1 text-sm text-[#8A8A8A]">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
