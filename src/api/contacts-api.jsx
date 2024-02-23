import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65ca40a83b05d29307e0078b.mockapi.io/api/Contacts',
});

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};
export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
