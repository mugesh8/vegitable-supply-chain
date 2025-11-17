import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X } from 'lucide-react';

const AddFarmer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    farmerName: '',
    registrationNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactPerson: '',
    tapeColor: '',
    dialingPerson: '',
    primaryPhone: '',
    secondaryPhone: '',
    email: '',
    vegetables: [],
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
  });

  const [selectedVegetables, setSelectedVegetables] = useState([
    { name: 'Tomato', color: 'bg-blue-100 text-blue-700' },
    { name: 'Onion', color: 'bg-green-100 text-green-700' },
    { name: 'Potato', color: 'bg-yellow-100 text-yellow-700' }
  ]);

  const availableVegetables = [
    'Tomato', 'Onion', 'Potato', 'Cabbage', 'Carrot', 'Broccoli', 
    'Cauliflower', 'Spinach', 'Lettuce', 'Cucumber', 'Pepper', 'Eggplant'
  ];

  const bankList = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India'
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const removeVegetable = (index) => {
    setSelectedVegetables(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    navigate('/farmers');
  };



  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/farmers')}
            className="flex items-center gap-2 text-[#0D5C4D] hover:text-[#0a6354] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Farmers</span>
          </button>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#D0E0DB] p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Farmer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farmer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="farmerName"
                  placeholder="Enter Farmer Name"
                  value={formData.farmerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Registration Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  name="registrationNumber"
                  placeholder="UST/CTN Number"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  placeholder="Enter complete address&#10;Street, Landmark"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm resize-none"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="Enter 6-digit pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  maxLength="6"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  placeholder="Full name of contact person"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Tape Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tape Color
                </label>
                <input
                  type="text"
                  name="tapeColor"
                  placeholder="Enter Tape Color"
                  value={formData.tapeColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                />
              </div>

              {/* Dialing Person */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dialing Person
                </label>
                <input
                  type="text"
                  name="dialingPerson"
                  placeholder="Enter Dialing Person"
                  value={formData.dialingPerson}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="primaryPhone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.primaryPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Secondary Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Phone
                </label>
                <input
                  type="tel"
                  name="secondaryPhone"
                  placeholder="Optional"
                  value={formData.secondaryPhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Product List */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Product List</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vegetables Supplied <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm appearance-none bg-white mb-3"
              >
                <option value="">Select items (Multiple selection)</option>
                {availableVegetables.map(veg => (
                  <option key={veg} value={veg}>{veg}</option>
                ))}
              </select>

              {/* Selected Vegetables */}
              <div className="flex flex-wrap gap-2">
                {selectedVegetables.map((veg, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${veg.color} flex items-center gap-2`}
                  >
                    {veg.name}
                    <button
                      type="button"
                      onClick={() => removeVegetable(index)}
                      className="hover:opacity-70"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Add More
                </button>
              </div>
            </div>
          </div>

          {/* Bank Account Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Bank Account Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Account Holder Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Holder Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountHolderName"
                  placeholder="As per bank account"
                  value={formData.accountHolderName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Bank Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bank Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="bankName"
                  placeholder="Enter bank name"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Account Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="Enter account number"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* IFSC Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  IFSC Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ifscCode"
                  placeholder="Enter IFSC code"
                  value={formData.ifscCode}
                  onChange={handleInputChange}
                  maxLength="11"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D7C66] focus:border-transparent text-sm uppercase"
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#0D7C66] hover:bg-[#0a6354] text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              Add Farmer
            </button>
            <button
              type="button"
              onClick={() => navigate('/farmers')}
              className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
            >
              Cancel
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default AddFarmer;