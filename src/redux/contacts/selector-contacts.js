import { createSelector } from 'reselect';

export const selectContacts = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectAllFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const { loading, error, items } = contacts;

    if (!filter) {
      return contacts;
    }

    const filterNormalize = filter.toLowerCase();
    const filteredContacts = items.filter(el => {
      const checkedEl = el.name.toLowerCase();
      return checkedEl.includes(filterNormalize);
    });

    return {
      items: filteredContacts,
      loading,
      error,
    };
  }
);
