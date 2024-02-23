import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAllContacts,
  requestAddContacts,
  requestDeleteContact,
} from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchALLcontacts",
  async(_, thunkAPI) => {
    try {
      const data = await requestAllContacts();
      return data;
    }
     catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
export const addContactInReduser = createAsyncThunk(
  "contacts/fetchADDcontacts",
async(body , {rejectWithValue})=> {
  try {
    const data = await requestAddContacts(body);
    return data;
  }
   catch (error) {
    return rejectWithValue(error.message)
  }
},

{
condition: ({name} , {getState}) => {
const {contacts}= getState();
const normalizedDataName = name.toLowerCase();

const checkContact = contacts.items?.find(el => {
   const normalizedCurrentName = el.name.toLowerCase();
   return (normalizedDataName === normalizedCurrentName);
 })
 if (checkContact) {
 alert(`${name} is already in the list of contacts`);
      return false;
      }
    }

  }

)

// export const addContactInReduser = body => {
//   const funcOper = async dispatch => {
//     try {
//       dispatch(fetchaddContactLoading());

//       const data = await requestAddContacts(body);
//       dispatch(fetchaddContactSucsess(data));
//     } catch (error) {
//       dispatch(fetchaddContactError(error.message));
//     }
//   };
//   return funcOper;
// };

export const deleteContactInReduser = createAsyncThunk(
  "contacts/fetchDeleteContact",
  async(id , {rejectWithValue}) => {
    try {
     await requestDeleteContact(id);
      return id;
    }
     catch (error) {
      return rejectWithValue(error.message)
    }
  }
)