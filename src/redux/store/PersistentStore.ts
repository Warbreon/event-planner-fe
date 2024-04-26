import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from '../slices/AuthenticationSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
	key: 'session',
	storage,
};

const persistedReducer = persistReducer(persistConfig, authenticationSlice);

export const persistentStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(persistentStore);
export type PersistentStoreRootState = ReturnType<typeof persistentStore.getState>;
