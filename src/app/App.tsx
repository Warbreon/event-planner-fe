import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ROUTES from '../routes/routes.ts';
import PageNotFound from '../pages/not-found/NotFound.tsx';
import Event from '../pages/event/Event.tsx';
import ExploreEvents from '../pages/explore-events/ExploreEvents.tsx';
import SignIn from '../pages/sign-in/SignIn.tsx';
import ForgotPassword from '../pages/password-reset/forgot-pasword/ForgotPassword.tsx';
import PasswordReset from '../pages/password-reset/create-new-password/PasswordReset.tsx';
import MyEvents from '../pages/my-events/MyEvents.tsx';
import CreateEvent from '../pages/create-event/CreateEvent.tsx';
import EditEvent from '../pages/edit-event/EditEvent.tsx';
import Settings from '../pages/settings/Settings.tsx';
import PrivacyPolicy from '../pages/privacy-policy/PrivacyPolicy.tsx';
import TermOfService from '../pages/terms-of-service/TermOfService.tsx';
import Support from '../pages/support/Support.tsx';
import Main from '../pages/main/Main.tsx';


function App() {
	return (
		<Routes>
			<Route path={ROUTES.INDEX} element={<Main />}>
				<Route index element={<ExploreEvents />} />
				<Route path={ROUTES.SIGN_IN} element={<SignIn />} />
				<Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
				<Route path={ROUTES.RESET_PASSWORD} element={<PasswordReset />} />
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
