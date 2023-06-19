// React utils
import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from 'utils/history';

// Components
import App from './App';

// Scss
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HistoryRouter history={history}>
        <App />
    </HistoryRouter>
);
