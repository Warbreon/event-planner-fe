import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ROUTES from '../routes/Routes1';
import PageNotFound from '../pages/not-found/NotFound';
import Event from '../pages/event/Event';
import ExploreEvents from '../pages/explore-events/ExploreEvents';
import SignIn from '../pages/sign-in-pages/sign-in/SignIn';
import ForgotPassword from '../pages/sign-in-pages/forgot-password/ForgotPassword';
import PasswordReset from '../pages/sign-in-pages/create-new-password/PasswordReset';
import MyEvents from '../pages/my-events/MyEvents';
import CreateEvent from '../pages/create-event/CreateEvent';
import EditEvent from '../pages/edit-event/EditEvent';
import Settings from '../pages/settings/Settings';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy';
import TermOfService from '../pages/terms-of-service/TermOfService';
import Support from '../pages/support/Support';
import Main from '../pages/main/Main';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.INDEX} element={<Main />}>
				<Route path={ROUTES.SIGN_IN} element={<SignIn />} />
				<Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
				<Route path={ROUTES.RESET_PASSWORD} element={<PasswordReset />} />
				<Route index element={<ExploreEvents />} />
				<Route path={ROUTES.EVENT} element={<Event />} />
				<Route path={ROUTES.MY_EVENTS} element={<MyEvents />} />
				<Route path={ROUTES.ADD_EVENT} element={<CreateEvent />} />
				<Route path={ROUTES.EDIT_EVENT} element={<EditEvent />} />
				<Route path={ROUTES.SETTINGS} element={<Settings />} />
				<Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicy />} />
				<Route path={ROUTES.TERMS_OF_SERVICE} element={<TermOfService />} />
				<Route path={ROUTES.SUPPORT} element={<Support />} />
				<Route path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
