import React from 'react';
import { Provider } from 'react-redux';
import Index from './screens/calc/index';
import configureStore from './configurestore';
import Header from './screens/calc/Header';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Index />
    </Provider>
  );
}

export default App;
