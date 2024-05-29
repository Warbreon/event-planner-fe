import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authenticationSlice from '../slices/AuthenticationSlice';
import createEventPageUserSlice from '../slices/CreateEventPageSlice';
import filtersSlice from '../slices/FiltersSlice';
import editEvenPageAttendeeSlice from '../slices/EditEventSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import tagsSlice from '../slices/TagsSlice';
import userInfoSlice from '../slices/UserInfoSlice';
import userSlice from '../slices/UserSlice';
import venueSlice from '../slices/VenueSlice';
import myEventsSlice from '../slices/MyEventsSlice';
import urlPathSlice from '../slices/UrlPathSlice'

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
	editEventGuests: editEvenPageAttendeeSlice,
	tags: tagsSlice,
	users: userSlice,
	venues: venueSlice,
	myEvents: myEventsSlice,
	urlPath: urlPathSlice
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
