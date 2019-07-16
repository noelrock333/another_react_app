import React from 'react';
import './App.css';
import AppRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <div className='main-container'>
          <AppRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
