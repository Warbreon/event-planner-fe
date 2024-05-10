import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationSlice from '../slices/AuthenticationSlice';
import createEventPageUserSlice from '../slices/CreateEventPageSlice';
import filtersSlice from '../slices/FiltersSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import tagsSlice from '../slices/TagsSlice';

const persistConfig = {
	key: 'session',
	storage,
};

const rootReducer = combineReducers({
	user: persistReducer(persistConfig, authenticationSlice),
	createEventGuests: createEventPageUserSlice,
	filters: filtersSlice,
	tags: tagsSlice,
});

export const store: any = configureStore({
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
export type AppDispatch = typeof store.dispatch;
