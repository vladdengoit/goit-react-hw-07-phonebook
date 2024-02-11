import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PhoheBook = lazy(() => import('./pages/PhoneBook/PhoneBook'));
const Contact = lazy(() => import('./pages/Contact/ContactMy'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="my-form" element={<PhoheBook />} />
        <Route path="my-contacts" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
