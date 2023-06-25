import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log(form.elements.name.value);
    dispatch(
      register({
        name: form.elements.name.value,
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
          label="Username"
          type="text"
          name="name"
          autoComplete="current-password"
        />
      </label>
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
      <Button variant="contained" type="submit" aria-label="Register">
        Register
      </Button>
    </form>
  );
};
