import { nanoid } from "nanoid";
import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name:"contacts",

  initialState: [],

  reducers:{
    addContact: {
      reducer: ( state, {payload})=>{
        state.push(payload);
      },
        prepare: data =>{          
            return {
                  payload: {
                    id: nanoid(),
                    ...data,
                  }  
                }
                }
    },
    deleteContact:( state , {payload}) => state.filter( el => el.id !== payload  , console.log(payload)),
        }
  });
  export const{ addContact,deleteContact }= contactsSlice.actions;
  export default contactsSlice.reducer;
