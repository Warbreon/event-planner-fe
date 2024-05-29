import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import projectTheme from './themes/Theme';
import router from './routes/Router';
import UnderConstructionOverlay from "./components/under-construction-overlay/UnderConstructionOverlay";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import './localization/MomentLocalization';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<LocalizationProvider dateAdapter={AdapterMoment}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={projectTheme}>
					<UnderConstructionOverlay text={'Mobile version of the website is under construction'}>
						<RouterProvider router={router} />
					</UnderConstructionOverlay>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</LocalizationProvider>
);
