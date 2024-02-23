import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {store} from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
   
    <React.StrictMode>
      <Provider store={store}>
    {/* <PersistGate loading ={null} persistor={persistore}> */}
     <BrowserRouter basename="/goit-react-hw-07-phonebook">
    <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
 
);
