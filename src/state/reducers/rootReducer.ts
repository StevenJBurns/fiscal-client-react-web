import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: () => null,
  accounts: () => null,
});

const persistConfig = {
  key: 'root',
  storage: storage,
};

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
