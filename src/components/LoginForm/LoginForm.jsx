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
          // id="outlined-password-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="current-password"
        />
        {/* Email
        <input type="email" name="email" /> */}
      </label>
      <label className={css.label}>
        <TextField
          // id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        {/* Password
        <input type="password" name="password" /> */}
      </label>
      <Button
        // className={css.inputBtn}
        variant="contained"
        type="submit"
        aria-label="Log In"
      >
        Log In
      </Button>

      {/* <button type="submit">Log In</button> */}
    </form>
  );
};
