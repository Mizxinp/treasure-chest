import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RoutePath from './RoutePath';
// import PageContainer from '../components/PageContainer';


const HomePage = lazy(() => import('../pages/home'));

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <div>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;