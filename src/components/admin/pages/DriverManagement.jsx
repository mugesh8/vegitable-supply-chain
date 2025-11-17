import React, { useState } from 'react';
import { Search, ChevronDown, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const DriverManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [vehicleFilter, setVehicleFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const drivers = [
    {
      id: 'DRV-001',
      name: 'Rajesh Pandey',
      phone: '+91 98765 43210',
      initial: 'RP',
      color: 'bg-teal-700',
      vehicle: { name: 'Tata Ace', number: 'TN 01 AB 1234', capacity: '1 Ton' },
      deliveryType: 'Collection',
      status: 'Available',
      workingHours: '8.5 hrs'
    },
    {
      id: 'DRV-002',
      name: 'Suresh Kumar',
      phone: '+91 98765 43211',
      initial: 'SK',
      color: 'bg-teal-700',
      vehicle: { name: 'Mahindra Bolero', number: 'TN 02 CD 9876', capacity: '1.5 Ton' },
      deliveryType: 'Airport Delivery',
      status: 'On Trip',
      workingHours: '6.0 hrs'
    },
    {
      id: 'DRV-003',
      name: 'Arun Menon',
      phone: '+91 98765 43212',
      initial: 'AM',
      color: 'bg-teal-700',
      vehicle: { name: 'Ashok Leyland', number: 'TN 03 EF 4512', capacity: '3 Ton' },
      deliveryType: 'Collection',
      status: 'Available',
      workingHours: '7.2 hrs'
    },
    {
      id: 'DRV-004',
      name: 'Vijay Narayanan',
      phone: '+91 98765 43213',
      initial: 'VN',
      color: 'bg-teal-700',
      vehicle: { name: 'Eicher Pro 3015', number: 'TN 04 GH 3456', capacity: '3 Ton' },
      deliveryType: 'Airport Delivery',
      status: 'Available',
      workingHours: '5.8 hrs'
    },
    {
      id: 'DRV-005',
      name: 'Karthik Prasad',
      phone: '+91 98765 43214',
      initial: 'KP',
      color: 'bg-teal-700',
      vehicle: { name: 'Tata 407', number: 'TN 05 IJ 7890', capacity: '2.5 Ton' },
      deliveryType: 'Collection',
      status: 'Break',
      workingHours: '4.0 hrs'
    },
    {
      id: 'DRV-006',
      name: 'Muthu Selvam',
      phone: '+91 98765 43215',
      initial: 'MS',
      color: 'bg-teal-700',
      vehicle: { name: 'Mahindra Pickup', number: 'TN 06 KL 2345', capacity: '1 Ton' },
      deliveryType: 'Airport Delivery',
      status: 'On Trip',
      workingHours: '9.0 hrs'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-100 text-emerald-700';
      case 'On Trip':
        return 'bg-red-100 text-red-700';
      case 'Break':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-emerald-500';
      case 'On Trip':
        return 'bg-red-500';
      case 'Break':
        return 'bg-amber-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getDeliveryTypeColor = (type) => {
    switch (type) {
      case 'Collection':
        return 'bg-blue-100 text-blue-700';
      case 'Airport Delivery':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                activeTab === 'all'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              All Drivers
            </button>
            <button
              onClick={() => setActiveTab('collection')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                activeTab === 'collection'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Collection Drivers
            </button>
            <button
              onClick={() => setActiveTab('airport')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all text-sm ${
                activeTab === 'airport'
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Airport Delivery
            </button>
          </div>

          <button className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm text-sm">
            <Plus className="w-4 h-4" />
            Add Driver
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search driver by name or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm bg-gray-50"
              />
            </div>

            {/* Status Filter */}
            <div className="relative min-w-[160px]">
              <div className="text-xs text-gray-600 mb-1 font-medium">Status: {statusFilter}</div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white text-sm font-medium text-gray-700 cursor-pointer"
              >
                <option>All</option>
                <option>Available</option>
                <option>On Trip</option>
                <option>Break</option>
              </select>
              <ChevronDown className="absolute right-3 bottom-2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Vehicle Filter */}
            <div className="relative min-w-[160px]">
              <div className="text-xs text-gray-600 mb-1 font-medium">Vehicle: {vehicleFilter}</div>
              <select
                value={vehicleFilter}
                onChange={(e) => setVehicleFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none bg-white text-sm font-medium text-gray-700 cursor-pointer"
              >
                <option>All</option>
                <option>Tata Ace</option>
                <option>Mahindra Bolero</option>
                <option>Ashok Leyland</option>
                <option>Eicher Pro</option>
              </select>
              <ChevronDown className="absolute right-3 bottom-2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Drivers Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-white">
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Driver Info
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Vehicle Details
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Delivery Type
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Working Hours
                  </th>
                  <th className="text-left px-6 py-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {drivers.map((driver, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 ${driver.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                          {driver.initial}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{driver.name}</div>
                          <div className="text-xs text-gray-500">{driver.id} • {driver.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{driver.vehicle.name}</div>
                      <div className="text-xs text-gray-500">{driver.vehicle.number} • {driver.vehicle.capacity}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-4 py-1.5 rounded-lg text-xs font-medium ${getDeliveryTypeColor(driver.deliveryType)}`}>
                        {driver.deliveryType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium ${getStatusColor(driver.status)}`}>
                        <span className={`w-2 h-2 rounded-full ${getStatusDot(driver.status)}`}></span>
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {driver.workingHours}
                    </td>
                    <td className="px-6 py-4">
                      <button className="px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-medium transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden divide-y divide-gray-100">
            {drivers.map((driver, index) => (
              <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-11 h-11 ${driver.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                    {driver.initial}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-900 mb-1">{driver.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{driver.id} • {driver.phone}</div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-block px-3 py-1 rounded-lg text-xs font-medium ${getDeliveryTypeColor(driver.deliveryType)}`}>
                        {driver.deliveryType}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium ${getStatusColor(driver.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(driver.status)}`}></span>
                        {driver.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-3 pl-14">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Vehicle:</span>
                    <span className="text-gray-900 font-medium">{driver.vehicle.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Number:</span>
                    <span className="text-gray-900">{driver.vehicle.number}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Capacity:</span>
                    <span className="text-gray-900">{driver.vehicle.capacity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Working Hours:</span>
                    <span className="text-gray-900 font-medium">{driver.workingHours}</span>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-xs font-medium transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
            <div className="text-sm text-gray-600">
              Showing 6 of 298 Farmers
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>

              <button
                onClick={() => setCurrentPage(1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? 'bg-teal-700 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                1
              </button>

              <button
                onClick={() => setCurrentPage(2)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 2
                    ? 'bg-teal-700 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                2
              </button>

              <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
                ...
              </button>

              <button className="w-9 h-9 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors">
                5
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  'bg-teal-700 text-white'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverManagement;