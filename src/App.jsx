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
import EditAccount from "./components/EditAccount"
import EditPhone from "./components/EditPhone"




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
        <Route path="/editAccount" element={<EditAccount />} />
        <Route path="/editPhone" element={<EditPhone />} />


        <Route path="/dashboard" element={<Dashboard />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  )
}