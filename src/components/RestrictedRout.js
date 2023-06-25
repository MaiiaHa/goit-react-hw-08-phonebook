import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn: 7', isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

//======rep

// import { useAuth } from 'hooks';
// import { Navigate } from 'react-router-dom';

// /**
//  * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
//  * - Otherwise render the component
//  */

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
