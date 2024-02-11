import { combineReducers } from 'redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsSlice from './contacts/contacts-slice'
import filterSlice from './filter/filter-slice'

const persistConfig = {
  key: 'contacts',
  storage,
  mylist:['contacts'],
  }

const rootReduser = combineReducers({
  contacts:contactsSlice,
  filter:filterSlice,
})

const presistReduserForContacts = persistReducer(persistConfig, rootReduser);
export default presistReduserForContacts;