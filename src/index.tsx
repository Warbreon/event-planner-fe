import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { ThemeProvider } from '@emotion/react';
import projectTheme from './themes/theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<LocalizationProvider dateAdapter={AdapterMoment}>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={projectTheme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</LocalizationProvider>
);
