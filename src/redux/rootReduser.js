import { combineReducers } from 'redux'
import contactsSlice from './contacts/contacts-slice'
import filterSlice from './filter/filter-slice'

const rootReduser = combineReducers({
  contacts:contactsSlice,
  filter:filterSlice,
})
export default rootReduser
