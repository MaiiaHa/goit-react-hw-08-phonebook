import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';

export default function Contacts() {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <Container>
        {/* title="Phonebook" */}
        <ContactForm />
      </Container>

      <Container>
        {/* title="Contacts" */}
        <Filter />
        <ContactList />
        <div>{isLoading && 'Request in progress...'}</div>
      </Container>
    </>
  );
}
