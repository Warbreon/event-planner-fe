import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slices/UserSlice';
import storageSession from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
	key: 'session',
	storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

export const userStore = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(userStore);
export type PersistentStoreRootState = ReturnType<typeof userStore.getState>;
