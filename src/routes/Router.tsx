import { createBrowserRouter } from 'react-router-dom';
import ROUTES from './Routes';
import ExploreEvents from '../pages/explore-events/ExploreEvents';
import PageNotFound from '../pages/not-found/NotFound';
import Event from '../pages/event/Event';
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
import RootLayout from '../pages/main/RootLayout';
import ProtectedRoute from './ProtectedRoute';
import SystemAdminRoute from './SystemAdminRoute';
import PublicRoutes from './PublicRoutes';
import Notifications from '../pages/notifications/Notifications';
import CreateEditEventProtectedRoute from './CreateEditEventProtectedRoute';
import Payment from '../pages/payment/Payment';

const router = createBrowserRouter([
	{
		path: ROUTES.INDEX,
		element: <RootLayout />,
		children: [
			{
				path: ROUTES.INDEX,
				element: (
					<ProtectedRoute>
						<ExploreEvents />
					</ProtectedRoute>
				),
			},
			{
				path: ROUTES.EVENT,
				element: (
					<ProtectedRoute>
						<Event />
					</ProtectedRoute>
				),
			},
			{
				path: ROUTES.ADD_EVENT,
				element: (
					<CreateEditEventProtectedRoute>
						<ProtectedRoute>
							<CreateEvent />
						</ProtectedRoute>
					</CreateEditEventProtectedRoute>
				),
			},
			{
				path: ROUTES.EDIT_EVENT,
				element: (
					<CreateEditEventProtectedRoute>
						<ProtectedRoute>
							<EditEvent />
						</ProtectedRoute>
					</CreateEditEventProtectedRoute>
				),
			},
			{
				path: ROUTES.SETTINGS,
				element: (
					<SystemAdminRoute>
						<ProtectedRoute>
							<Settings />
						</ProtectedRoute>
					</SystemAdminRoute>
				),
			},
			{
				path: ROUTES.MY_EVENTS,
				element: (
					<ProtectedRoute>
						<MyEvents />
					</ProtectedRoute>
				),
			},
			{
				path: ROUTES.NOTIFICATIONS,
				element: (
					<ProtectedRoute>
						<Notifications />
					</ProtectedRoute>
				),
			},
			{
				path: ROUTES.PAYMENT,
				element: (
					<ProtectedRoute>
						<Payment />
					</ProtectedRoute>
				),
			}
		],
	},

	{
		path: ROUTES.SIGN_IN,
		element: (
			<PublicRoutes>
				<SignIn />
			</PublicRoutes>
		),
	},

	{
		path: ROUTES.FORGOT_PASSWORD,
		element: (
			<PublicRoutes>
				<ForgotPassword />
			</PublicRoutes>
		),
	},

	{
		path: ROUTES.RESET_PASSWORD,
		element: (
			<PublicRoutes>
				<PasswordReset />
			</PublicRoutes>
		),
	},
	{
		path: '*',
		element: <PageNotFound />,
	},
	{
		path: ROUTES.TERMS_OF_SERVICE,
		element: <TermOfService />,
	},
	{
		path: ROUTES.SUPPORT,
		element: <Support />,
	},
	{
		path: ROUTES.PRIVACY_POLICY,
		element: <PrivacyPolicy />,
	},
]);

export default router;
