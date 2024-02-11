import Contact from '../../components/Contact/Contact';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, delContact } from '../../redux/actions';

const ContactMy = () => {
  // const contactsStore = useSelector(store => store.contacts);
  // const dispatch = useDispatch();
  // const deleteContact = id => {
  //   dispatch(delContact(id));

  return (
    <div>
      <Contact />
      {/* <Contact contacts={contactsStore} deleteContact={deleteContact} /> */}
    </div>
  );
};
export default ContactMy;
