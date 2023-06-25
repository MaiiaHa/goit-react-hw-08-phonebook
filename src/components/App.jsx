// import Container from './Container/Container';
// import ContactForm from './ContactForm/ContactForm';
// import Filter from './Filter/Filter';
// import ContactList from './ContactList/ContactList';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRout';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'Hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  console.log('App ~ isRefreshing', isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
}
// <div>
//   <Container title={'Phonebook'}>
//     <ContactForm />
//   </Container>
//   <Container title={'Contacts'}>
//     <Filter />
//     <ContactList />
//   </Container>
// </div>
