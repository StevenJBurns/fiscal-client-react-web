const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

export const createAccount = () => ({
  type: typeof CREATE_ACCOUNT,
});

export const deleteAccount = (accountId: string) => ({
  type: typeof DELETE_ACCOUNT,
  payload: accountId,
});

export const updateAccount = () => ({
  type: typeof UPDATE_ACCOUNT,
});
