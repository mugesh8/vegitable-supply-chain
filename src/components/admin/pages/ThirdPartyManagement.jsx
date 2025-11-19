import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical } from 'lucide-react';
import ConfirmDeleteModal from '../../common/ConfirmDeleteModal';

const ThirdPartyManagement = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, thirdPartyId: null, thirdPartyName: '' });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (action, thirdPartyId, thirdPartyName) => {
    setOpenDropdown(null);
    if (action === 'view') {
      navigate(`/third-party/${thirdPartyId}`);
    } else if (action === 'edit') {
      navigate(`/third-party/${thirdPartyId}/edit`);
    } else if (action === 'delete') {
      setDeleteModal({ isOpen: true, thirdPartyId, thirdPartyName });
    }
  };

  const stats = [
    { label: 'Total Third Party', value: '86', change: '+12%', color: 'bg-gradient-to-r from-[#D1FAE5] to-[#A7F3D0]' },
    { label: 'Active Third Party', value: '72', change: '+8%', color: 'bg-gradient-to-r from-[#6EE7B7] to-[#34D399]' },
    { label: 'Pending Payouts', value: '₹12.4 L', change: '24 Third Party', color: 'bg-gradient-to-r from-[#10B981] to-[#059669]' },
    { label: 'Total Paid (Month)', value: '₹2.8 L', change: '156 Transactions', color: 'bg-gradient-to-r from-[#047857] to-[#065F46]' }
  ];

  const thirdParties = [
    {
      id: 1,
      name: 'Green Fields Farm',
      thirdPartyId: 'ID: TP-001',
      avatar: 'GF',
      products: [
        { name: 'Carrot', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Cabbage', color: 'bg-purple-100 text-purple-700' }
      ],
      contact: '+91 98765 43210',
      email: 'contact@greenfields.com',
      location: 'Tamil Nadu, India',
      status: 'Active',
      dues: '₹6,400'
    },
    {
      id: 2,
      name: 'Fresh Vegetable Supply Co.',
      thirdPartyId: 'ID: TP-002',
      avatar: 'FV',
      products: [
        { name: 'Tomato', color: 'bg-red-100 text-red-700' },
        { name: 'Cucumber', color: 'bg-yellow-100 text-yellow-700' }
      ],
      contact: '+91 98765 43211',
      email: 'sales@freshveg.com',
      location: 'Kerala, India',
      status: 'Active',
      dues: '₹0'
    },
    {
      id: 3,
      name: 'Organic Valley Farmers',
      thirdPartyId: 'ID: TP-003',
      avatar: 'OV',
      products: [
        { name: 'Chili', color: 'bg-red-100 text-red-700' },
        { name: 'Broccoli', color: 'bg-green-100 text-green-700' }
      ],
      contact: '+91 98765 43212',
      email: 'info@organicvalley.in',
      location: 'Karnataka, India',
      status: 'Active',
      dues: '₹12,300'
    },
    {
      id: 4,
      name: 'Agri Logistics Partners',
      thirdPartyId: 'ID: TP-004',
      avatar: 'AL',
      products: [
        { name: 'Potato', color: 'bg-blue-100 text-blue-700' },
        { name: 'Onion', color: 'bg-purple-100 text-purple-700' }
      ],
      contact: '+91 98765 43213',
      email: 'logistics@agripartners.com',
      location: 'Maharashtra, India',
      status: 'Active',
      dues: '₹6,600'
    },
    {
      id: 5,
      name: 'Sunrise Farms',
      thirdPartyId: 'ID: TP-005',
      avatar: 'SF',
      products: [
        { name: 'Capsicum', color: 'bg-red-100 text-red-700' }
      ],
      contact: '+91 98765 43214',
      email: 'contact@sunrisefarms.in',
      location: 'Gujarat, India',
      status: 'Inactive',
      dues: '₹0'
    },
    {
      id: 6,
      name: 'Harvest Supply Chain',
      thirdPartyId: 'ID: TP-006',
      avatar: 'HS',
      products: [
        { name: 'Carrot', color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Coriander', color: 'bg-green-100 text-green-700' }
      ],
      contact: '+91 98765 43215',
      email: 'support@harvest.in',
      location: 'Punjab, India',
      status: 'Active',
      dues: '₹21,500'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-end mb-6">
        <button 
          onClick={() => navigate('/third-party/add')}
          className="bg-[#0D7C66] hover:bg-[#0a6354] text-white px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Third Party
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.color} rounded-2xl p-6 ${index === 2 || index === 3 ? 'text-white' : 'text-[#0D5C4D]'}`}
          >
            <div className="text-sm font-medium mb-2 opacity-90">{stat.label}</div>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${index === 2 || index === 3 ? 'bg-white/20 text-white' : 'bg-white/60 text-[#0D5C4D]'}`}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B8782]" size={20} />
        <input
          type="text"
          placeholder="Search third party by name, contact, or location..."
          className="w-full pl-12 pr-4 py-3 bg-[#F0F4F3] border-none rounded-xl text-[#0D5C4D] placeholder-[#6B8782] focus:outline-none focus:ring-2 focus:ring-[#0D8568]"
        />
      </div>

      <div className="bg-white rounded-2xl overflow-hidden border border-[#D0E0DB]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#D4F4E8]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Third Party Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Product List</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Dues</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Action</th>
              </tr>
            </thead>
            <tbody>
              {thirdParties.map((thirdParty, index) => (
                <tr 
                  key={thirdParty.id} 
                  className={`border-b border-[#D0E0DB] hover:bg-[#F0F4F3] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#F0F4F3]/30'}`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#B8F4D8] flex items-center justify-center text-[#0D5C4D] font-semibold text-sm">
                        {thirdParty.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0D5C4D]">{thirdParty.name}</div>
                        <div className="text-xs text-[#6B8782]">{thirdParty.thirdPartyId}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {thirdParty.products.map((product, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#D4F4E8] text-[#047857]"
                        >
                          {product.name}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm text-[#0D5C4D]">{thirdParty.contact}</div>
                    <div className="text-xs text-[#6B8782]">{thirdParty.email}</div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm text-[#0D5C4D]">{thirdParty.location}</div>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${thirdParty.status === 'Active' ? 'bg-[#4ED39A] text-white' : 'bg-red-500 text-white'}`}>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      {thirdParty.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className={`text-sm font-semibold ${thirdParty.dues === '₹0' ? 'text-[#047857]' : 'text-red-600'}`}>
                      {thirdParty.dues}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="relative" ref={openDropdown === thirdParty.id ? dropdownRef : null}>
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === thirdParty.id ? null : thirdParty.id)}
                        className="text-[#6B8782] hover:text-[#0D5C4D] transition-colors p-1 hover:bg-[#F0F4F3] rounded"
                      >
                        <MoreVertical size={20} />
                      </button>
                      
                      {openDropdown === thirdParty.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-[#D0E0DB] py-1 z-10">
                          <button
                            onClick={() => handleAction('view', thirdParty.id)}
                            className="w-full text-left px-4 py-2 text-sm text-[#0D5C4D] hover:bg-[#F0F4F3] transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleAction('edit', thirdParty.id)}
                            className="w-full text-left px-4 py-2 text-sm text-[#0D5C4D] hover:bg-[#F0F4F3] transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleAction('delete', thirdParty.id, thirdParty.name)}
                            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#F0F4F3] transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-6 py-4 bg-[#F0F4F3] border-t border-[#D0E0DB]">
          <div className="text-sm text-[#6B8782]">
            Showing 6 of 86 third party
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-2 text-[#6B8782] hover:bg-[#D0E0DB] rounded-lg transition-colors">
              &lt;
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors bg-[#0D8568] text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors text-[#6B8782] hover:bg-[#D0E0DB]">
              2
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors text-[#6B8782] hover:bg-[#D0E0DB]">
              3
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors text-[#6B8782] hover:bg-[#D0E0DB]">
              4
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors text-[#6B8782] hover:bg-[#D0E0DB]">
              5
            </button>
            <button className="px-3 py-2 text-[#6B8782] hover:bg-[#D0E0DB] rounded-lg transition-colors">
              ...
            </button>
            <button className="px-4 py-2 rounded-lg font-medium transition-colors text-[#6B8782] hover:bg-[#D0E0DB]">
              10
            </button>
            <button className="px-3 py-2 text-[#6B8782] hover:bg-[#D0E0DB] rounded-lg transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, thirdPartyId: null, thirdPartyName: '' })}
        onConfirm={() => {
          console.log('Deleting third party:', deleteModal.thirdPartyId);
          setDeleteModal({ isOpen: false, thirdPartyId: null, thirdPartyName: '' });
        }}
        title="Delete Third Party"
        message={`Are you sure you want to delete ${deleteModal.thirdPartyName}? This action cannot be undone.`}
      />
    </div>
  );
};

export default ThirdPartyManagement;
