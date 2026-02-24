import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router';

interface MatrimonialCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  education: string;
  profession: string;
  image: string;
}

export function MatrimonialCard({ id, name, age, location, education, profession, image }: MatrimonialCardProps) {
  return (
    <Link to={`/matrimonial/${id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="relative h-48 bg-gray-200">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-[#1E1E1E] text-base mb-1">{name}, {age}</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              <span>{education}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#8A8A8A]">
              <Briefcase className="w-4 h-4 flex-shrink-0" />
              <span>{profession}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
