import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutePath from './RoutePath';
import Layout from '@/components/layout'
import Widgets from '@/pages/widgets';


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
            <Route path={RoutePath.widgets} element={<Widgets />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;