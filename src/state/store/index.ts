import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistedRootReducer } from 'state/reducers/rootReducer';

const initialRootState = {
    user: undefined,
    accounts: undefined,
    selectedAccount: undefined,
};

export const store = createStore(
  persistedRootReducer,
  initialRootState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(store);
