import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { FaUserPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/selectors';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsFromState = useSelector(getContacts);

  const nameRandomId = nanoid(10);
  const numberRandomId = nanoid(10);

  const formSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const checkedName = contactsFromState.find(
      el => el.name === form.elements.name.value
    );
    if (checkedName) {
      alert(
        `${form.elements.name.value} is already in list. Please enter other name.`
      );
      form.reset();
      return;
    }

    dispatch(
      addContact({
        id: nanoid(10),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.contacts} action="" onSubmit={formSubmit}>
      <label className={css.input}>
        <TextField
          id={nameRandomId}
          className={css.inputField}
          type="text"
          name="name"
          label="Name Surname"
          variant="standard"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.input}>
        <TextField
          id={numberRandomId}
          className={css.inputField}
          type="tel"
          name="number"
          label="555-55-55"
          variant="standard"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button
        className={css.inputBtn}
        variant="contained"
        type="submit"
        aria-label="Add contact"
      >
        <FaUserPlus />
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
