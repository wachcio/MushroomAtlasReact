import React from 'react';
import StoreProvider from './store/storeProvider';
import './App.css';
import Main from './components/pages/Main';

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <Main />
      </StoreProvider>
    </div>
  );
};

export default App;
