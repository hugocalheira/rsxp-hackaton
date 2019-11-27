import React from 'react';
import Routes from './Routes';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './global/styles';
import history from './services/history';

function App() {
    return  <Router history={history}>
                <GlobalStyle />
                <ToastContainer autoClose={3000} />
                <Routes />
            </Router>
}

export default App;
