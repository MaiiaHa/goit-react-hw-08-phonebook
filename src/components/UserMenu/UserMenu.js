import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../Hooks/useAuth';
import css from './UserMenu.module.css';
import { Avatar, Button } from '@mui/material';
// import { deepOrange } from '@mui/material/colors';
import { stringAvatar } from 'styles/Avatar';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Avatar {...stringAvatar(user.name)} />
      {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar> */}
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        // variant="text"
        size="medium"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
