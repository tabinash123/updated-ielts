import React from 'react';
import { Provider } from 'react-redux';
import store from './listening/store';
import ListeningSection from './listening/ListeningSection';

function App() {
  return (
    <Provider store={store}>
      <ListeningSection />
    </Provider>
  );
}

export default App;