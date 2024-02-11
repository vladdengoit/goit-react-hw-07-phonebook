export const getAllContacts = store => store.contacts;

export const getAllFilteredContacts = store => {
  const{contacts, filter}=store
  if (!filter) {
    return contacts;
  }
  const filterNormalize = filter.toLowerCase();
  const filteredContacts = contacts.filter(el => {
    const checkedEl = el.name.toLowerCase();
    return checkedEl.includes(filterNormalize);
  });
  return filteredContacts;
}