import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistentStore, persistor } from './redux/store/PersistentStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import projectTheme from './themes/Theme';
import router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<LocalizationProvider dateAdapter={AdapterMoment}>
		<Provider store={persistentStore}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={projectTheme}>
					<RouterProvider router={router} />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</LocalizationProvider>
);
