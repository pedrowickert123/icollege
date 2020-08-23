import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter history={history}>
          <Routes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
