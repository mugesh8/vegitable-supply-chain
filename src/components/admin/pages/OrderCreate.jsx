import React, { useState } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';

const NewOrderForm = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: '',
      boxes: '0',
      packingType: '',
      netWeight: '',
      grossWeight: '',
      marketPrice: '₹0.00'
    }
  ]);

  const [formData, setFormData] = useState({
    customerName: '',
    customerId: '',
    phoneNumber: '+91',
    email: '',
    alternateContact: '',
    deliveryAddress: '',
    neededByDate: '',
    preferredDeliveryTime: '',
    priority: 'Normal'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductChange = (id, field, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, [field]: value } : product
    ));
  };

  const addProduct = () => {
    setProducts([...products, {
      id: products.length + 1,
      productName: '',
      boxes: '0',
      packingType: '',
      netWeight: '',
      grossWeight: '',
      marketPrice: '₹0.00'
    }]);
  };

  const removeProduct = (id) => {
    if (products.length > 1) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, products });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          
          {/* Customer Information Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 italic">Customer Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Customer Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Customer Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  placeholder="Enter customer or store name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Customer ID */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Customer ID
                </label>
                <input
                  type="text"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  placeholder="e.g., CLI-089"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Address */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="customer@example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Alternate Contact */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Alternate Contact
                </label>
                <input
                  type="tel"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleInputChange}
                  placeholder="Alternate phone number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
          </div>

          {/* Delivery Details Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 italic">Delivery Details</h2>
            
            {/* Delivery Address */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleInputChange}
                placeholder="Enter complete delivery address with landmark"
                rows="3"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm resize-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Needed By Date */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Needed By Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="neededByDate"
                  value={formData.neededByDate}
                  onChange={handleInputChange}
                  placeholder="DD/MM/YYYY"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Preferred Delivery Time */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Preferred Delivery Time
                </label>
                <div className="relative">
                  <select
                    name="preferredDeliveryTime"
                    value={formData.preferredDeliveryTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-sm text-gray-500 cursor-pointer"
                  >
                    <option value="">Select time slot</option>
                    <option value="morning">Morning (6 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Priority
                </label>
                <div className="relative">
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-sm cursor-pointer"
                  >
                    <option value="Normal">Normal</option>
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 italic">Products</h2>
            
            {/* Products Table - Desktop */}
            <div className="hidden lg:block overflow-x-auto mb-4">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Product Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      No of Boxes/Bags
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Type of Packing
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Net Weight
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Gross Weight
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Market Price
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider italic">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} className="border-t border-gray-200">
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={product.productName}
                          onChange={(e) => handleProductChange(product.id, 'productName', e.target.value)}
                          placeholder="Select or type product"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={product.boxes}
                          onChange={(e) => handleProductChange(product.id, 'boxes', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-center"
                          min="0"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative">
                          <select
                            value={product.packingType}
                            onChange={(e) => handleProductChange(product.id, 'packingType', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none text-sm cursor-pointer"
                          >
                            <option value="">e.g., 30Kg Box</option>
                            <option value="30kg-box">30Kg Box</option>
                            <option value="50kg-bag">50Kg Bag</option>
                            <option value="25kg-box">25Kg Box</option>
                          </select>
                          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={product.netWeight}
                          onChange={(e) => handleProductChange(product.id, 'netWeight', e.target.value)}
                          placeholder="kg (auto)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={product.grossWeight}
                          onChange={(e) => handleProductChange(product.id, 'grossWeight', e.target.value)}
                          placeholder="kg (auto)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm bg-gray-50"
                          readOnly
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={product.marketPrice}
                          onChange={(e) => handleProductChange(product.id, 'marketPrice', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          type="button"
                          onClick={() => removeProduct(product.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          disabled={products.length === 1}
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Products Cards - Mobile */}
            <div className="lg:hidden space-y-4 mb-4">
              {products.map((product, index) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-gray-900">Product {index + 1}</h3>
                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)}
                      className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                      disabled={products.length === 1}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={product.productName}
                      onChange={(e) => handleProductChange(product.id, 'productName', e.target.value)}
                      placeholder="Product name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                    
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="number"
                        value={product.boxes}
                        onChange={(e) => handleProductChange(product.id, 'boxes', e.target.value)}
                        placeholder="Boxes/Bags"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      />
                      
                      <select
                        value={product.packingType}
                        onChange={(e) => handleProductChange(product.id, 'packingType', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                      >
                        <option value="">Packing Type</option>
                        <option value="30kg-box">30Kg Box</option>
                        <option value="50kg-bag">50Kg Bag</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={product.netWeight}
                        placeholder="Net Weight (auto)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                        readOnly
                      />
                      <input
                        type="text"
                        value={product.grossWeight}
                        placeholder="Gross Weight (auto)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                        readOnly
                      />
                    </div>
                    
                    <input
                      type="text"
                      value={product.marketPrice}
                      onChange={(e) => handleProductChange(product.id, 'marketPrice', e.target.value)}
                      placeholder="Market Price"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Add Product Button */}
            <button
              type="button"
              onClick={addProduct}
              className="px-5 py-2.5 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium transition-colors hover:bg-emerald-50 flex items-center gap-2 text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrderForm;