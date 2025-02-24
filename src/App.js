import React from 'react'
import Pricing from './pages/Pricing/Pricing'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingSocialMediaButton from './components/FloatingSocialMediaButton'
import Orders from './pages/Orders/Orders'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home'
import Consulting from './pages/Consulting/Consulting'
import Training from './components/Training/Training'
import Docs from './pages/Docs/Docs'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <FloatingSocialMediaButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/training" element={<Training />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
