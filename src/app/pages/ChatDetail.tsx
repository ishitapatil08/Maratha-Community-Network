import { useState } from 'react';
import { ChevronLeft, Send } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';

export function ChatDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');

  const messages = [
    {
      id: '1',
      text: 'Hi, I am interested in your electronics store',
      sent: true,
      timestamp: '10:30 AM'
    },
    {
      id: '2',
      text: 'Hello! Thank you for reaching out. How can I help you?',
      sent: false,
      timestamp: '10:32 AM'
    },
    {
      id: '3',
      text: 'Do you have the latest iPhone models?',
      sent: true,
      timestamp: '10:33 AM'
    },
    {
      id: '4',
      text: 'Yes, we have all the latest models in stock. Would you like to visit our store?',
      sent: false,
      timestamp: '10:35 AM'
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#FAF6F0]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)}>
          <ChevronLeft className="w-6 h-6 text-[#1E1E1E]" />
        </button>
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=100&h=100&fit=crop"
          alt="Chat"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-[#1E1E1E]">Shivaji Electronics</h2>
          <p className="text-xs text-[#8A8A8A]">Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sent ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                msg.sent
                  ? 'bg-[#F4A300]/20 rounded-tr-none'
                  : 'bg-white rounded-tl-none border border-gray-200'
              }`}
            >
              <p className="text-sm text-[#1E1E1E]">{msg.text}</p>
              <p className="text-xs text-[#8A8A8A] mt-1">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300] focus:outline-none"
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="w-10 h-10 bg-[#F4A300] rounded-full flex items-center justify-center hover:bg-[#E09800] transition-colors"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
