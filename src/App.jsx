import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ReservationsPage from './pages/ReservationsPage'
import BookingPage from './pages/BookingPage'
import AboutPage from './pages/AboutPage'
import LoginPage from './pages/LoginPage'
import MainLayout from './layouts/MainLayout'

function App() {
  
  return (
   <Routes>
      <Route element={<MainLayout />}>
       <Route index element={<HomePage />} />
       <Route path="menu" element={<MenuPage />} />   
       <Route path="reservations" element={<ReservationsPage />} /> 
       <Route path="booking" element={<BookingPage />} /> 
       <Route path="about" element={<AboutPage />} />
       <Route path="login" element={<LoginPage />} /> 
      </Route>
   </Routes>
  )
}
export default App
