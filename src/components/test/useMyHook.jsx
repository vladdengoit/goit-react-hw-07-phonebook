import React, { useState } from 'react';

export const useMyHook = () => {
  const [contacts, setContacts] = useState([]);

  return {
    contacts,
    setContacts,
  };
};
