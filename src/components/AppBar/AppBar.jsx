// // import { Block } from './Header.styled';
// // import Navigation from '../Navigation';
// // import AuthNav from '../AuthNav';
// // import { useSelector } from 'react-redux';
// // import { getIsLoggedIn } from '../../redux/auth/authSelectors';
// // import UserMenu from '../UserMenu';

// // import { useSelector } from 'react-redux';
// // import { selectIsLoggedIn } from 'redux/selectors';

// const AppBar = () => {
//   // const isLoggedIn = useSelector(selectIsLoggedIn);
//   // console.log(isLoggedIn);
//   return (
//     <>
//       <h1>AppBar...</h1>
//       {/* {isLoggedIn ? 'UserMenu' : 'AuthNav'} */}
//     </>
//     // <Block>
//     // {/* <Navigation /> */}

//     // {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
//     // </Block>
//   );
// };

// export default AppBar;

import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../Hooks/useAuth';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
