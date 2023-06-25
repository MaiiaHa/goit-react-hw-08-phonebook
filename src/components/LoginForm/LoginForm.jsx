import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="current-password"
        />
      </label>
      <label className={css.label}>
        <TextField
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
      </label>
      <Button variant="contained" type="submit" aria-label="Log In">
        Log In
      </Button>
    </form>
  );
};
