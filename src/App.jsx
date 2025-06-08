
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SignIn from './Signin'
import BookWithoutLogin from './Appointment'
import AppointmentMember from './Appointmember'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/book-without-login" element={<BookWithoutLogin />} />
        <Route path="/appointment-member" element={<AppointmentMember />} />
      </Routes>
    </BrowserRouter>
  )
}