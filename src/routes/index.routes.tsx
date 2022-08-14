import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './private.routes'
import PublicRoutes from './public.routes'

const IndexRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes/>}></Route>
      <Route element={<PrivateRoutes/>}></Route>
    </Routes>
  )
}

export default IndexRoutes