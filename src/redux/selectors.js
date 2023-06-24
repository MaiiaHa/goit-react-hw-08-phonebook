//Contacts
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;

//Auth
export const selectIsLoggedIn = state => {
  // console.log(state);
  return state.auth.isLoggedIn;
};

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;