import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutePath from './RoutePath';
import Layout from '@/components/layout'


const HomePage = lazy(() => import('../pages/home'));
const ChartPage = lazy(() => import('../pages/charts'));

const AppRouter = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path={RoutePath.home} element={<HomePage />} />
            <Route path={RoutePath.charts} element={<ChartPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;