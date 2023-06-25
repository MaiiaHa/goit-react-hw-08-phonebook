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
          // id="outlined-password-input"
          label="Username"
          type="text"
          name="name"
          autoComplete="current-password"
        />
        {/* Username
        <input type="text" name="name" /> */}
      </label>
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
        aria-label="Register"
      >
        Register
      </Button>

      {/* <button type="submit">Register</button> */}
    </form>
  );
};
