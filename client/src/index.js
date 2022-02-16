import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <SnackbarProvider maxSnack={2} anchorOrigin={{horizontal:'left' , vertical:'bottom'}} autoHideDuration={1000}>
    <App />
    </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
