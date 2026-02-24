import { Search } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { Link } from 'react-router';

export function Chat() {
  const chats = [
    {
      id: '1',
      name: 'Shivaji Electronics',
      lastMessage: 'Thank you for your inquiry!',
      timestamp: '2m ago',
      unread: 2,
      image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      name: 'Priya Deshmukh',
      lastMessage: 'Looking forward to connecting',
      timestamp: '1h ago',
      unread: 0,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      id: '3',
      name: 'Maratha Textiles',
      lastMessage: 'We have new stock available',
      timestamp: '3h ago',
      unread: 1,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-[#1E1E1E] mb-4">Messages</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="bg-white">
        {chats.map((chat) => (
          <Link
            key={chat.id}
            to={`/chat/${chat.id}`}
            className="flex items-center gap-3 px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="relative">
              <img
                src={chat.image}
                alt={chat.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              {chat.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#F4A300] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{chat.unread}</span>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-[#1E1E1E] truncate">{chat.name}</h3>
                <span className="text-xs text-[#8A8A8A] ml-2">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-[#8A8A8A] truncate">{chat.lastMessage}</p>
            </div>
          </Link>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
