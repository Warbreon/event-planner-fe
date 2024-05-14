import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationSlice from '../slices/AuthenticationSlice';
import createEventPageUserSlice from '../slices/CreateEventPageSlice';
import filtersSlice from '../slices/FiltersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import userInfoSlice from '../slices/UserInfoSlice';

const persistConfig = {
	key: 'session',
	storage,
};

const userInfoPersistConfig = {
	key: 'userInfo',
	storage,
}

const rootReducer = combineReducers({
	user: persistReducer(persistConfig, authenticationSlice),
	userInfo: persistReducer(userInfoPersistConfig, userInfoSlice),
	createEventGuests: createEventPageUserSlice,
	filters: filtersSlice,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export type StoreState = ReturnType<typeof store.getState>;
