import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';

export default function Contacts() {
  return (
    <>
      <Container title="Phonebook">
        {/* <title>Phonebook</title> */}
        {/* <h1>contacts...</h1> */}
        <ContactForm />
      </Container>

      <Container title="Contacts">
        {/* <title>Contacts</title> */}
        <Filter />
        <ContactList />
        {/* <div>{isLoading && 'Request in progress...'}</div> */}
        <div>{'Request in progress...'}</div>
      </Container>
    </>
  );
}
