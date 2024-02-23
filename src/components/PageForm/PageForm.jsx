import FormPhonebook from '../FormPhoneBook/FormPhoneBook';
import Contact from '../Contact/Contact';
import Filter from '../Filter/Filter';
import {
  selectAllFilteredContacts,
  selectContacts,
} from '../../redux/contacts/selector-contacts';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import {
  fetchContacts,
  addContactInReduser,
  deleteContactInReduser,
} from '../../redux/contacts/contacts-operations';
import { useEffect } from 'react';

const PageForm = () => {
  const { items } = useSelector(selectAllFilteredContacts);
  const { error, loading } = useSelector(selectContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerFormSPhonebook = data => {
    dispatch(addContactInReduser(data));
  };

  const deleteContactForm = id => {
    dispatch(deleteContactInReduser(id));
  };

  const propsFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <>
      <FormPhonebook handlerFormSPhonebook={handlerFormSPhonebook} />
      {loading && <p>...Loading</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && (
        <Contact contacts={items} deleteContact={deleteContactForm} />
      )}
      <Filter propsFilter={propsFilter} />
    </>
  );
};
export default PageForm;
