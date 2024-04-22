import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { userStore, persistor } from './redux/store/PersistentStore';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import projectTheme from './themes/Theme';
import router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<LocalizationProvider dateAdapter={AdapterMoment}>
		<Provider store={userStore}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={projectTheme}>
					<RouterProvider router={router} />
					{/* <App /> */}
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</LocalizationProvider>
);

//nesugadintas router
// root.render(
// 	<LocalizationProvider dateAdapter={AdapterMoment}>
// 			<Provider store={userStore}>
// 				<PersistGate loading={null} persistor={persistor}>
// 					<BrowserRouter>
// 						<ThemeProvider theme={projectTheme}>
// 							<App />
// 						</ThemeProvider>
// 					</BrowserRouter>
// 				</PersistGate>
// 			</Provider>
// 	</LocalizationProvider>
// );
