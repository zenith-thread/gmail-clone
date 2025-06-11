export const selectIsComposeEmail = (state) => state.composeEmail.isOpen;

export const selectEmailsFromState = (state) => state.composeEmail.emails;

export const selectEmailRequestStatus = (state) => state.composeEmail.status;

export const selectEmailRequestError = (state) => state.composeEmail.error;

export const selectSelectedEmail = (state) => state.composeEmail.selectedEmail;

export const selectSearchField = (state) => state.composeEmail.searchField;
