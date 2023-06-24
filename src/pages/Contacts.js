import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <title>Phonebook</title>
      <ContactForm />
      <title>Contacts</title>
      <Filter />
      <ContactList />
      {/* <div>{isLoading && 'Request in progress...'}</div> */}
      <div>{'Request in progress...'}</div>
    </>
  );
}
