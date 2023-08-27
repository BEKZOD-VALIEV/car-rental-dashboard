import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard } from "../pages/Dashboard";
import { Booking } from "../pages/Bookings";
import { SellCar } from "../pages/SellCar";
import { Settings } from "../pages/Settings";

const Router = () => {
  return <BrowserRouter>
    <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/sell-car' element={<SellCar/>} />
        <Route path='/settings' element={<Settings/>} />
    </Routes>
  </BrowserRouter>
}

export default Router