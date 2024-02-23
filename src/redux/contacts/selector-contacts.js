
//  import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = state =>  state.items;
// 
 
//  export const getAllContacts = store => store.contacts;

export const selecttAllFilteredContacts = store => {
  const { contacts, filter } = store;
    const{ loading, error } = contacts;

  if (!filter) {
    return contacts;
  }
  const filterNormalize = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(el => {
    const checkedEl = el.name.toLowerCase();
    return checkedEl.includes(filterNormalize);
  });
  return {
    items:filteredContacts,
    loading,
    error,
  };
};
