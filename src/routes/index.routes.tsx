import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/404';
import LandingPage from '../pages/landing';
import Privacy from '../pages/privacy';
import Terms from '../pages/terms';
// import PrivateRoutes from './private.routes'
// import PublicRoutes from './public.routes'

const IndexRoutes = () => {
  return (
    // <LandingPage/>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route element={<Privacy />} path="/privacy"></Route>
        <Route element={<Terms />} path="/terms"></Route>
      </Route>

      {/* <Route element={<PublicRoutes/>}></Route>
      <Route element={<PrivateRoutes/>}></Route> */}
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default IndexRoutes;
