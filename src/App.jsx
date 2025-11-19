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
import AddDriver from './components/admin/pages/AddDriver'
import EditDriver from './components/admin/pages/EditDriver'
import DriverDetails from './components/admin/pages/DriverDetails'
import DriverAirportDelivery from './components/admin/pages/DriverAirportDelivery'
import PayoutManagement from './components/admin/pages/PayoutManagement'
import PayoutLabour from './components/admin/pages/PayoutLabour'
import PayoutDriver from './components/admin/pages/PayoutDriver'
import RolesPermissionSystem from './components/admin/pages/RolesAndPermissionsManagements'
import LabourManagement from './components/admin/pages/LabourManagement'
import LabourAdd from './components/admin/pages/LabourAdd'
import LabourEdit from './components/admin/pages/LabourEdit'
import LabourDetails from './components/admin/pages/LabourDetails'
import LabourAttendance from './components/admin/pages/LabourAttendance'
import LabourWorkAssignment from './components/admin/pages/LabourWorkAssignment'
import ReportManagement from './components/admin/pages/ReportManagement'
import ReportFarmer from './components/admin/pages/ReportFarmer'
import ReportLabour from './components/admin/pages/ReportLabour'
import ReportInvoice from './components/admin/pages/ReportInvoice'
import ReportPayout from './components/admin/pages/ReportPayout'
import ReportOrder from './components/admin/pages/ReportOrder'
import AddProduct from './components/admin/pages/AddProduct'

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
        <Route path="/drivers/add" element={<Layout><AddDriver /></Layout>} />
        <Route path="/drivers/:id/edit" element={<Layout><EditDriver /></Layout>} />
        <Route path="/drivers/:id" element={<Layout><DriverDetails /></Layout>} />
        <Route path="/drivers/:id/airport" element={<Layout><DriverAirportDelivery /></Layout>} />
        <Route path="/payouts" element={<Layout><PayoutManagement /></Layout>} />
        <Route path="/payout-labour" element={<Layout><PayoutLabour /></Layout>} />
        <Route path="/payout-driver" element={<Layout><PayoutDriver /></Layout>} />
        <Route path="/roles" element={<Layout><RolesPermissionSystem /></Layout>} />
        <Route path="/labour" element={<Layout><LabourManagement /></Layout>} />
        <Route path="/labour/add" element={<Layout><LabourAdd /></Layout>} />
        <Route path="/labour/:id/edit" element={<Layout><LabourEdit /></Layout>} />
        <Route path="/labour/:id" element={<Layout><LabourDetails /></Layout>} />
        <Route path="/labour/attendance" element={<Layout><LabourAttendance /></Layout>} />
        <Route path="/labour/work-assignment" element={<Layout><LabourWorkAssignment /></Layout>} />
        <Route path="/reports" element={<Layout><ReportManagement /></Layout>} />
        <Route path="/reports/farmer" element={<Layout><ReportFarmer /></Layout>} />
        <Route path="/reports/labour" element={<Layout><ReportLabour /></Layout>} />
        <Route path="/reports/invoice" element={<Layout><ReportInvoice /></Layout>} />
        <Route path="/reports/payout" element={<Layout><ReportPayout /></Layout>} />
        <Route path="/reports/order" element={<Layout><ReportOrder /></Layout>} />
        <Route path="/products/add" element={<Layout><AddProduct /></Layout>} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App