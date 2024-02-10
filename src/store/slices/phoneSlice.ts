import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data2 } from "../../data/data";

export const phoneSlice = createSlice({
   name: "phoneSlice",
   initialState: {
      phones: data2,
   },
   reducers: {
      addPhone: (state, { payload }) => {
         state.phones = [
            {
               ...payload,
               id: Math.round(Math.random() * new Date().getTime()),
            },
            ...state.phones,
         ];
      },
      updatePhone: (state, { payload }) => {
         const index = state.phones.findIndex(
            (phone) => phone.id === payload.id
         );

         state.phones[index] = payload;
      },
      deletePhone: (state, { payload }) => {
         state.phones = state.phones.filter((phone) => phone.id !== payload);
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
         return action.payload;
      });
   },
});

export const { addPhone, updatePhone, deletePhone } = phoneSlice.actions;

export default phoneSlice.reducer;

export const fetchUsers = createAsyncThunk("k", async (test) => {
  console.log(test);
  
   const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
   const results = await data.json();
  //  console.log(results);
});
