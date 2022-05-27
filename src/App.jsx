import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Driver from "./components/BeDriver"
import Customer from "./components/beCustomer"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Cash from "./components/Cash"
import Services from "./components/Services"
import Footer from "./components/Footer"
import Campaign from "./components/Campaign"
import Faq from "./components/Faq"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import ForgotPassword from "./components/ForgotPassword"
import ResetPassword from "./components/ResetPassword"

import ActiveOrders from './dashboardComponents/ActiveOrders'
import OrderHistory from './dashboardComponents/OrderHistory'
import AccountInfo from './dashboardComponents/AccountInfo'
import ChangePassword from './dashboardComponents/ChangePassword'
import SavedAddresses from './dashboardComponents/SavedAddresses'


export default function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cash" element={<Cash />} />
        <Route path="/services" element={<Services />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        {/* <Route path="/accountInfo" element={<AccountInfo />} /> */}
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="/dashboard/activeOrders" element={<ActiveOrders />} />
          <Route path="/dashboard/orderHistory" element={<OrderHistory />} />
          <Route path="/dashboard/accountInfo" element={<AccountInfo />} />
          <Route path="/dashboard/changePassword" element={<ChangePassword />} />
          <Route path="/dashboard/savedAddresses" element={<SavedAddresses />} />



        </Route>
        <Route />
      </Routes>
      <Footer />
    </div>
  )
}