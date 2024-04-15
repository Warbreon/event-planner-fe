import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import { ThemeProvider } from '@emotion/react';
import projectTheme from './themes/Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={projectTheme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);
