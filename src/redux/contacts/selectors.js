import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectUserContacts = (state) => state.contacts.contacts;
export const selectContactsIsLoading = (state) => state.contacts.isLoading;
export const selectContactsIsError = (state) => state.contacts.isError;

export const selectFilteredContacts = createSelector(
  [selectUserContacts, selectNameFilter],
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

