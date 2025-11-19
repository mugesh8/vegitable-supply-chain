import React, { useState } from 'react';
import { Search, ChevronRight, Plus, MoreVertical, ChevronLeft } from 'lucide-react';

const OrderManagementList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('All Time');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [productFilter, setProductFilter] = useState('Product Type');
  const [currentPage, setCurrentPage] = useState(1);

  const stats = [
    { label: 'Total Orders', value: '142', bgColor: 'from-emerald-100 to-teal-100', textColor: 'text-teal-900' },
    { label: 'Created', value: '28', bgColor: 'from-emerald-200 to-teal-300', textColor: 'text-teal-900' },
    { label: 'Assigned', value: '45', bgColor: 'from-emerald-300 to-teal-400', textColor: 'text-teal-900' },
    { label: 'In Transit', value: '51', bgColor: 'from-emerald-500 to-teal-600', textColor: 'text-white' },
    { label: 'Delivered', value: '18', bgColor: 'from-emerald-700 to-teal-800', textColor: 'text-white' }
  ];

  const orders = [
    {
      orderId: 'ORD-1001',
      customer: 'Fresh Mart Store',
      boxesBags: '50 boxes',
      typeOfPacking: 'Single Farmer',
      netWeight: '25 kg',
      grossWeight: '27 kg',
      total: '1350 kg',
      marketPrice: '₹67,500'
    },
    {
      orderId: 'ORD-1002',
      customer: 'Organic Valley Store',
      boxesBags: '100 bags',
      typeOfPacking: 'Red',
      netWeight: '50 kg',
      grossWeight: '52 kg',
      total: '5200 kg',
      marketPrice: '₹1,56,000'
    },
    {
      orderId: 'ORD-1003',
      customer: 'VV Vegie Store',
      boxesBags: '75 bags',
      typeOfPacking: 'Green',
      netWeight: '30 kg',
      grossWeight: '31 kg',
      total: '2325 kg',
      marketPrice: '₹69,750'
    },
    {
      orderId: 'ORD-1004',
      customer: 'Farm Fresh Retails',
      boxesBags: '40 boxes',
      typeOfPacking: 'Brown',
      netWeight: '20 kg',
      grossWeight: '22 kg',
      total: '880 kg',
      marketPrice: '₹52,800'
    },
    {
      orderId: 'ORD-1005',
      customer: 'Green Basket Co.',
      boxesBags: '60 boxes',
      typeOfPacking: 'Red',
      netWeight: '15 kg',
      grossWeight: '16 kg',
      total: '960 kg',
      marketPrice: '₹28,800'
    },
    {
      orderId: 'ORD-1006',
      customer: "Nature's Bounty",
      boxesBags: '80 boxes',
      typeOfPacking: 'Single Farmer',
      netWeight: '12 kg',
      grossWeight: '13 kg',
      total: '1040 kg',
      marketPrice: '₹41,600'
    },
    {
      orderId: 'ORD-1007',
      customer: 'Urban Green Store',
      boxesBags: '30 bags',
      typeOfPacking: 'Red',
      netWeight: '10 kg',
      grossWeight: '10.5 kg',
      total: '315 kg',
      marketPrice: '₹23,625'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1"></div>
          <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm text-sm">
            <Plus className="w-4 h-4" />
            New Order
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by order ID, customer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Time Filter */}
              <div className="relative min-w-[140px]">
                <select
                  value={timeFilter}
                  onChange={(e) => setTimeFilter(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white text-sm font-medium text-gray-700 cursor-pointer pr-10"
                >
                  <option>All Time</option>
                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Status Filter */}
              <div className="relative min-w-[140px]">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white text-sm font-medium text-gray-700 cursor-pointer pr-10"
                >
                  <option>All Status</option>
                  <option>Created</option>
                  <option>Assigned</option>
                  <option>In Transit</option>
                  <option>Delivered</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Product Type Filter */}
              <div className="relative min-w-[140px]">
                <select
                  value={productFilter}
                  onChange={(e) => setProductFilter(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none bg-white text-sm font-medium text-gray-700 cursor-pointer pr-10"
                >
                  <option>Product Type</option>
                  <option>Single Farmer</option>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Brown</option>
                </select>
                <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>

              {/* Export Button */}
              <button className="px-6 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium transition-colors hover:bg-emerald-50 text-sm whitespace-nowrap">
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 shadow-sm`}
            >
              <div className={`text-sm font-semibold mb-2 ${index < 3 ? 'text-teal-800' : 'text-white/90'}`}>
                {stat.label}
              </div>
              <div className={`text-4xl font-bold ${stat.textColor}`}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-emerald-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    No of Boxes/Bag
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Type of Packing
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Net Weight
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Gross Weight
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Market Prize
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">{order.orderId}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{order.boxesBags}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{order.typeOfPacking}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{order.netWeight}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">{order.grossWeight}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{order.total}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-semibold text-gray-900">{order.marketPrice}</div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-100">
            {orders.map((order, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{order.orderId}</div>
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">Boxes/Bags:</span>
                    <div className="font-medium text-gray-900">{order.boxesBags}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Type:</span>
                    <div className="font-medium text-gray-900">{order.typeOfPacking}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Net Weight:</span>
                    <div className="font-medium text-gray-900">{order.netWeight}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Gross Weight:</span>
                    <div className="font-medium text-gray-900">{order.grossWeight}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Total:</span>
                    <div className="font-medium text-gray-900">{order.total}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Price:</span>
                    <div className="font-semibold text-gray-900">{order.marketPrice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-50 to-emerald-50 border-t border-gray-200 gap-3">
            <div className="text-sm text-gray-600">
              Showing 6 of 248 Labours
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-lg border border-gray-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center text-gray-600"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button className="w-9 h-9 rounded-lg bg-emerald-600 text-white text-sm font-semibold">
                1
              </button>

              <button className="w-9 h-9 rounded-lg border border-gray-300 text-gray-600 hover:bg-white text-sm font-semibold transition-colors">
                2
              </button>

              <span className="text-gray-400 px-2">...</span>

              <button className="w-9 h-9 rounded-lg border border-gray-300 text-gray-600 hover:bg-white text-sm font-semibold transition-colors">
                9
              </button>

              <button className="w-9 h-9 rounded-lg bg-emerald-600 text-white text-sm font-semibold">
                10
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-9 h-9 rounded-lg border border-gray-300 hover:bg-white transition-colors flex items-center justify-center text-gray-600"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagementList;