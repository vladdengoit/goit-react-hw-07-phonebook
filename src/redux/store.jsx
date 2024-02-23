import { configureStore } from '@reduxjs/toolkit';
import rootReduser from './rootReduser';
// import { persistStore } from 'redux-persist';
// import { contactsReduser } from './contacts/reduser-contacts';
// import { filterReduser } from './filter/reduser-filter';

// const store = configureStore({
//   reducer: {
//     contacts:contactsReduser,
//     filter: filterReduser,
//   },
// });

export const store = configureStore({
  reducer: rootReduser,
});
// export const persistore = persistStore(store);

// export default store;
