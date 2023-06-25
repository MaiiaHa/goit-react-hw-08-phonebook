import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selectors';
import { IconButton, ListItem } from '@mui/material';

const ContactList = () => {
  const dispatch = useDispatch();

  const contactsFromState = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = Object.values(filter).join().toLowerCase();
    return contactsFromState.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contacts = getVisibleContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContacts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          className={css.listItem}
          key={id}
          height={400}
          width={360}
          itemSize={46}
          itemCount={200}
          overscanCount={5}
        >
          {name}: <br />
          {number}
          <IconButton
            aria-label="delete"
            onClick={() => deleteContacts(id)}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
