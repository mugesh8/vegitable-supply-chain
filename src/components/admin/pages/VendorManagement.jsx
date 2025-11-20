import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, MoreVertical } from 'lucide-react';
import ConfirmDeleteModal from '../../common/ConfirmDeleteModal';

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, vendorId: null, vendorName: '' });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (action, vendorId, vendorName) => {
    if (action === 'view') {
      navigate(`/vendors/${vendorId}`);
    } else if (action === 'edit') {
      navigate(`/vendors/${vendorId}/edit`);
    } else if (action === 'delete') {
      setDeleteModal({ isOpen: true, vendorId, vendorName });
    }
    setOpenDropdown(null);
  };

  const stats = [
    { label: 'Total Vendors', value: '248', color: 'bg-gradient-to-r from-[#D1FAE5] to-[#A7F3D0]' },
    { label: 'Farmers', value: '42', color: 'bg-gradient-to-r from-[#6EE7B7] to-[#34D399]' },
    { label: 'Suppliers', value: '1,847', color: 'bg-gradient-to-r from-[#10B981] to-[#059669]' },
    { label: 'Third Party', value: '156', color: 'bg-gradient-to-r from-[#047857] to-[#065F46]' }
  ];

  const vendors = [
    {
      id: 1,
      name: 'Green Fields Farm',
      vendorId: 'ID: VEN-001',
      avatar: 'GF',
      type: 'Farmer',
      contact: '+91 98765 43210',
      email: 'contact@greenfields.in',
      location: 'Tamil Nadu, India',
      products: [
        { name: 'Tomatoes', color: 'bg-[#D4F4E8] text-[#047857]' },
        { name: 'Carrots', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Excellent',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Fresh Vegetable Supply Co.',
      vendorId: 'ID: VEN-002',
      avatar: 'FV',
      type: 'Supplier',
      contact: '+91 98765 43211',
      email: 'sales@freshveg.com',
      location: 'Kerala, India',
      products: [
        { name: 'Potatoes', color: 'bg-[#D4F4E8] text-[#047857]' },
        { name: 'Onions', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Good',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Organic Valley Farmers',
      vendorId: 'ID: VEN-003',
      avatar: 'OV',
      type: 'Farmer',
      contact: '+91 98765 43212',
      email: 'info@organicvalley.in',
      location: 'Karnataka, India',
      products: [
        { name: 'Spinach', color: 'bg-[#D4F4E8] text-[#047857]' },
        { name: 'Broccoli', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Excellent',
      status: 'Active'
    },
    {
      id: 4,
      name: 'Agri Logistics Partners',
      vendorId: 'ID: VEN-004',
      avatar: 'AL',
      type: 'Third Party',
      contact: '+91 98765 43213',
      email: 'ops@agrilogistics.com',
      location: 'Maharashtra, India',
      products: [
        { name: 'All Vegetables', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Good',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Sunrise Farms',
      vendorId: 'ID: VEN-005',
      avatar: 'SF',
      type: 'Farmer',
      contact: '+91 98765 43214',
      email: 'contact@sunrisefarms.in',
      location: 'Gujarat, India',
      products: [
        { name: 'Lettuce', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Average',
      status: 'Inactive'
    },
    {
      id: 6,
      name: 'Harvest Supply Chain',
      vendorId: 'ID: VEN-006',
      avatar: 'HS',
      type: 'Supplier',
      contact: '+91 98765 43215',
      email: 'support@harvest.in',
      location: 'Punjab, India',
      products: [
        { name: 'Peas', color: 'bg-[#D4F4E8] text-[#047857]' },
        { name: 'Cauliflower', color: 'bg-[#D4F4E8] text-[#047857]' }
      ],
      performance: 'Good',
      status: 'Active'
    }
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header with Add Button */}
      <div className="flex items-center justify-end mb-6">
        <button 
          onClick={() => navigate('/vendors/add')}
          className="bg-[#0D7C66] hover:bg-[#0a6354] text-white px-4 sm:px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Add Vendor
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className={`${stat.color} rounded-2xl p-6 ${
              index === 2 || index === 3 ? 'text-white' : 'text-[#0D5C4D]'
            }`}
          >
            <div className="text-sm font-medium mb-2 opacity-90">{stat.label}</div>
            <div className="text-4xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B8782]" size={20} />
        <input
          type="text"
          placeholder="Search vendors by name, contact, or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-[#F0F4F3] border-none rounded-xl text-[#0D5C4D] placeholder-[#6B8782] focus:outline-none focus:ring-2 focus:ring-[#0D8568]"
        />
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#D0E0DB]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#D4F4E8]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Vendor Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Product List</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Performance</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#0D5C4D]">Action</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor, index) => (
                <tr 
                  key={vendor.id} 
                  className={`border-b border-[#D0E0DB] hover:bg-[#F0F4F3] transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F0F4F3]/30'
                  }`}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#B8F4D8] flex items-center justify-center text-[#0D5C4D] font-semibold text-sm">
                        {vendor.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-[#0D5C4D]">{vendor.name}</div>
                        <div className="text-xs text-[#6B8782]">{vendor.vendorId}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#D4F4E8] text-[#047857]">
                      {vendor.type}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {vendor.products.map((product, idx) => (
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
                    <div className="text-sm text-[#0D5C4D]">{vendor.contact}</div>
                    <div className="text-xs text-[#6B8782]">{vendor.email}</div>
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm text-[#0D5C4D]">{vendor.location}</div>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                      vendor.performance === 'Excellent' ? 'bg-[#4ED39A] text-white' :
                      vendor.performance === 'Good' ? 'bg-[#4ED39A] text-white' :
                      'bg-amber-500 text-white'
                    }`}>
                      {vendor.performance}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      vendor.status === 'Active' ? 'bg-[#4ED39A] text-white' : 'bg-red-500 text-white'
                    }`}>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      {vendor.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="relative" ref={openDropdown === vendor.id ? dropdownRef : null}>
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === vendor.id ? null : vendor.id)}
                        className="text-[#6B8782] hover:text-[#0D5C4D] transition-colors p-1 hover:bg-[#F0F4F3] rounded"
                      >
                        <MoreVertical size={20} />
                      </button>
                      
                      {openDropdown === vendor.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-[#D0E0DB] py-1 z-10">
                          <button
                            onClick={() => handleAction('view', vendor.id)}
                            className="w-full text-left px-4 py-2 text-sm text-[#0D5C4D] hover:bg-[#F0F4F3] transition-colors"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleAction('edit', vendor.id)}
                            className="w-full text-left px-4 py-2 text-sm text-[#0D5C4D] hover:bg-[#F0F4F3] transition-colors"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleAction('delete', vendor.id, vendor.name)}
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F0F4F3] border-t border-[#D0E0DB]">
          <div className="text-sm text-[#6B8782]">
            Showing 6 of 248 vendors
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
        onClose={() => setDeleteModal({ isOpen: false, vendorId: null, vendorName: '' })}
        onConfirm={() => {
          console.log('Deleting vendor:', deleteModal.vendorId);
          setDeleteModal({ isOpen: false, vendorId: null, vendorName: '' });
        }}
        title="Delete Vendor"
        message={`Are you sure you want to delete ${deleteModal.vendorName}? This action cannot be undone.`}
      />
    </div>
  );
};

export default VendorDashboard;