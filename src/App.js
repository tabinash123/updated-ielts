import React from 'react';
import { Provider } from 'react-redux';
// import store from './listening/store';
// import ListeningSection from './listening/ListeningSection';
import ReadingSection from './reading/readingSection/ReadingSection';
import store from './reading/utils/store';


function App() {
  return (
    <Provider store={store}>
      {/* <ListeningSection /> */}
      <ReadingSection />
    </Provider>
  );
}

export default App;