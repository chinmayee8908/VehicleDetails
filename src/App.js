import React from 'react'
import HomePage from './HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard/DashBoard'
import DetailPage from './Details/DetailPage'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
                <Route path='/detailsPage' element={<DetailPage/>}/>
        </Routes>
        </BrowserRouter>
  )
}

export default App