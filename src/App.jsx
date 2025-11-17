import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/admin/auth/Login'
import Signup from './components/admin/auth/Signup'
import Dashboard from './components/admin/pages/Dashboard'
import Layout from './components/admin/Layout'
import Notifications from './components/admin/pages/Notification'
import VendorManagement from './components/admin/pages/VendorManagement'
import Farmers from './components/admin/pages/FarmerManagement'
import AddFarmer from './components/admin/pages/AddFarmer'
import EditFarmer from './components/admin/pages/EditFarmer'
import FarmerDetails from './components/admin/pages/FarmerDetails'
import FarmerIndividualOrderHistory from './components/admin/pages/FarmerIndividualOrderHistory'
import FarmerPayout from './components/admin/pages/FarmerPayout'
import VendorDetails from './components/admin/pages/VendorDetails'
import AddVendorForm from './components/admin/pages/AddVendor'
import EditVendorDetails from './components/admin/pages/EditVendor'
import SupplierDashboard from './components/admin/pages/SupplierManagement'
import AddSupplierForm from './components/admin/pages/AddSupplier'
import SupplierDetails from './components/admin/pages/SupplierDetails'
import EditSupplier from './components/admin/pages/EditSupplier'
import SupplierIndividualOrderHistory from './components/admin/pages/SupplierIndividualOrderHistory'
import SupplierPayout from './components/admin/pages/SupplierPayout'
import ThirdPartyManagement from './components/admin/pages/ThirdPartyManagement'
import AddThirdParty from './components/admin/pages/AddThirdParty'
import EditThirdParty from './components/admin/pages/EditThirdParty'
import ThirdPartyDetails from './components/admin/pages/ThirdPartyDetails'
import ThirdPartyIndividualOrderHistory from './components/admin/pages/ThirdPartyIndividualOrderHistory'
import ThirdPartyPayout from './components/admin/pages/ThirdPartyPayout'
import DriverManagement from './components/admin/pages/DriverManagement'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
        <Route path="/vendors" element={<Layout><VendorManagement /></Layout>} />
        <Route path="/farmers" element={<Layout><Farmers /></Layout>} />
        <Route path="/farmers/add" element={<Layout><AddFarmer /></Layout>} />
        <Route path="/farmers/:id/edit" element={<Layout><EditFarmer /></Layout>} />
        <Route path="/farmers/:id" element={<Layout><FarmerDetails /></Layout>} />
        <Route path="/farmers/:id/orders" element={<Layout><FarmerIndividualOrderHistory /></Layout>} />
        <Route path="/farmers/:id/payout" element={<Layout><FarmerPayout /></Layout>} />
        <Route path="/vendors/:id" element={<Layout><VendorDetails /></Layout>} />
        <Route path="/vendors/add" element={<Layout><AddVendorForm /></Layout>} />
        <Route path="/vendors/:id/edit" element={<Layout><EditVendorDetails /></Layout>} />
        <Route path="/suppliers" element={<Layout><SupplierDashboard /></Layout>} />
        <Route path="/suppliers/add" element={<Layout><AddSupplierForm /></Layout>} />
        <Route path="/suppliers/:id/edit" element={<Layout><EditSupplier /></Layout>} />
        <Route path="/suppliers/:id" element={<Layout><SupplierDetails /></Layout>} />
        <Route path="/suppliers/:id/orders" element={<Layout><SupplierIndividualOrderHistory /></Layout>} />
        <Route path="/suppliers/:id/payout" element={<Layout><SupplierPayout /></Layout>} />
        <Route path="/third-party" element={<Layout><ThirdPartyManagement /></Layout>} />
        <Route path="/third-party/add" element={<Layout><AddThirdParty /></Layout>} />
        <Route path="/third-party/:id/edit" element={<Layout><EditThirdParty /></Layout>} />
        <Route path="/third-party/:id" element={<Layout><ThirdPartyDetails /></Layout>} />
        <Route path="/third-party/:id/orders" element={<Layout><ThirdPartyIndividualOrderHistory /></Layout>} />
        <Route path="/third-party/:id/payout" element={<Layout><ThirdPartyPayout /></Layout>} />
        <Route path="/drivers" element={<Layout><DriverManagement /></Layout>} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App