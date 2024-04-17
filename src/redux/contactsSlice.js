import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectContacts, selectNameFilter } from "../selectors/selectors";

const handlePending = state => {
    state.isLoading = true
}

const handleFetchFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items = action.payload;
}
const handleAddFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(action.payload)
}
const handleDelFullfield = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const i = state.items.findIndex((task) => task.id === action.payload.id)
    state.items.splice(i, 1)
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contacts;
    }
  }
);


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
          .addCase(fetchContacts.pending, handlePending)
          .addCase(fetchContacts.fulfilled, handleFetchFullfield)
          .addCase(fetchContacts.rejected, handleRejected)
          .addCase(addContact.pending, handlePending)
          .addCase(addContact.fulfilled, handleAddFullfield)
          .addCase(addContact.rejected, handleRejected)
          .addCase(deleteContact.pending, handlePending)
          .addCase(deleteContact.fulfilled, handleDelFullfield)
          .addCase(deleteContact.rejected, handleRejected)
               
    }
})

export const contactsReducer = contactsSlice.reducer




// import { createSlice } from "@reduxjs/toolkit";
// import contactsData from "../contactsData.json"
// import { nanoid } from "nanoid";
// // import {createAsyncThunk} from "@reduxjs/toolkit"


// // const fetchGetContactsThunkAPI = createAsyncThunk("getContact/fetchGetContact", async (contactId, thunkAPI)=> {
// // try {
// //     const res = await axios.get("contactId")
// //     return res.data
// // } catch (error) {
// //     return thunkAPI.rejectWithValue(error.message)
// // }
// // })

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         items: contactsData,
//     },
//     reducers: {
//         addContact: {
//             reducer(state, action) {
//                 state.items.push(action.payload)
//             },
//             prepare(value) {
//                 return {
//                     payload: {
//                         ...value,
//                         id: nanoid()
//                     }
//                 }
//             }
//         },
//         deleteContact(state, action) {
//             const i = state.items.findIndex((contact) => contact.id === action.payload)
//             state.items.splice(i, 1)
//         }
//     }
// })

// export const { addContact, deleteContact } = contactsSlice.actions
// export const contactsReducer = contactsSlice.reducer