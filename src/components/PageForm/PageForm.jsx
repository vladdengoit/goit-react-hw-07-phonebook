// import { useState, useEffect } from 'react';
import FormPhonebook from '../FormPhoneBook/FormPhoneBook';
import Contact from '../Contact/Contact';
import Filter from '../Filter/Filter';
import { getAllFilteredContacts } from '../../redux/contacts/selector-contacts';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';

const PageForm = () => {
  const contactsStore = useSelector(getAllFilteredContacts);

  const dispatch = useDispatch();

  const handlerFormSPhonebook = data => {
    if (checkName(data)) {
      return alert(`${data.name} is already in the list of contacts`);
    }
    dispatch(addContact(data));
  };

  const checkName = data => {
    const normalizedDataName = data.name.toLowerCase();
    const checkContact = contactsStore?.find(el => {
      const normalizedCurrentName = el.name.toLowerCase();
      return normalizedDataName === normalizedCurrentName;
    });
    return Boolean(checkContact);
  };

  const deleteContactForm = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  const propsFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <>
      <FormPhonebook handlerFormSPhonebook={handlerFormSPhonebook} />
      <Contact contacts={contactsStore} deleteContact={deleteContactForm} />
      <Filter propsFilter={propsFilter} />
    </>
  );
};
export default PageForm;
