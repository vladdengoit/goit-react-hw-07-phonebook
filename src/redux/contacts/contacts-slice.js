import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContactInReduser,
  deleteContactInReduser,
} from './contacts-operations';
const pending = state => {
  state.loading = true;
  state.error = null;
};

const rejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  loading: false,
  error: 0,
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, rejected)

      .addCase(addContactInReduser.pending, pending)
      .addCase(addContactInReduser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addContactInReduser.rejected, rejected)

      .addCase(deleteContactInReduser.pending, pending)
      .addCase(deleteContactInReduser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContactInReduser.rejected, rejected);
  },
});

export default contactsSlice.reducer;
