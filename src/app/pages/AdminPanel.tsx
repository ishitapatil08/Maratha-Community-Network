import { useState } from 'react';
import { 
  LayoutDashboard, Store, Heart, CreditCard, FileText, 
  Menu, X, Check, XCircle, Search 
} from 'lucide-react';

export function AdminPanel() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'business', label: 'Business Approvals', icon: Store },
    { id: 'matrimonial', label: 'Matrimonial Approvals', icon: Heart },
    { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const businessApprovals = [
    {
      id: '1',
      userName: 'Rahul Patil',
      businessName: 'Shivaji Electronics',
      category: 'Electronics',
      status: 'Pending',
      submittedOn: '2024-02-20'
    },
    {
      id: '2',
      userName: 'Priya Sharma',
      businessName: 'Maratha Textiles',
      category: 'Fashion',
      status: 'Pending',
      submittedOn: '2024-02-21'
    }
  ];

  const stats = [
    { label: 'Total Users', value: '1,234', color: 'bg-blue-500' },
    { label: 'Active Businesses', value: '456', color: 'bg-[#F4A300]' },
    { label: 'Active Subscriptions', value: '789', color: 'bg-[#2E7D32]' },
    { label: 'Pending Approvals', value: '23', color: 'bg-[#800000]' }
  ];

  return (
    <div className="flex h-screen bg-[#FAF6F0]">
      {/* Sidebar */}
      <div 
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold text-[#1E1E1E] mb-1">Admin Panel</h1>
          <p className="text-sm text-[#8A8A8A]">Maratha Network</p>
        </div>
        
        <nav className="px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#F4A300] text-white'
                    : 'text-[#1E1E1E] hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? (
              <X className="w-6 h-6 text-[#1E1E1E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1E1E1E]" />
            )}
          </button>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Dashboard</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-4`}>
                      <LayoutDashboard className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1E1E1E] mb-1">{stat.value}</h3>
                    <p className="text-sm text-[#8A8A8A]">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="font-bold text-[#1E1E1E]">Recent Activity</h3>
                </div>
                <div className="p-6">
                  <p className="text-[#8A8A8A] text-sm">No recent activity</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'business' && (
            <div>
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">Business Approvals</h2>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">User Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">Business Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">Category</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">Submitted</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-[#1E1E1E]">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {businessApprovals.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-[#1E1E1E]">{item.userName}</td>
                        <td className="px-6 py-4 text-sm text-[#1E1E1E] font-semibold">{item.businessName}</td>
                        <td className="px-6 py-4 text-sm text-[#8A8A8A]">{item.category}</td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#8A8A8A]">{item.submittedOn}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-2 bg-[#2E7D32] text-white rounded-lg hover:bg-[#256028] transition-colors">
                              <Check className="w-4 h-4" />
                            </button>
                            <button className="p-2 bg-[#C62828] text-white rounded-lg hover:bg-[#A82020] transition-colors">
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'matrimonial' || activeTab === 'subscriptions' || activeTab === 'reports') && (
            <div>
              <h2 className="text-2xl font-bold text-[#1E1E1E] mb-6">
                {menuItems.find(m => m.id === activeTab)?.label}
              </h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-[#8A8A8A] text-center">Content for this section coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
