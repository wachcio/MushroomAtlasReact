import React from 'react';
import StoreProvider from './store/storeProvider';
import './App.css';
import Main from './components/pages/Main';
import bacground from './img/robert-wiedemann-pslVHH-4fZw-unsplash.jpg';

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <div
          className="min-h-screen"
          style={{
            backgroundImage: `url('${bacground}')`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            backgroundAttachment: `fixed`,
          }}
        >
          <Main />
        </div>
      </StoreProvider>
    </div>
  );
};

export default App;
