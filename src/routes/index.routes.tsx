import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/404'
import LandingPage from '../pages/landing'
import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

const IndexRoutes = () => {
  return (
    <LandingPage/>
    // <Routes>
    //   <Route index  element={<LandingPage/>}/>
    //   <Route element={<PublicRoutes/>}></Route>
    //   <Route element={<PrivateRoutes/>}></Route>
    //   <Route path='/404' element={<NotFound/>}/>
    // </Routes>
  )
}

export default IndexRoutes