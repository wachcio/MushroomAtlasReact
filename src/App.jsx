import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from './store/storeProvider';
import './App.css';
import Main from './components/pages/Main';
import MushroomDetails from './components/pages/MushroomDetails';
import bacground from './img/robert-wiedemann-pslVHH-4fZw-unsplash.jpg';

const App = () => {
  return (
    <div className="App">
      <Router>
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
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/mushroom_details" component={MushroomDetails} />
            </Switch>
          </div>
        </StoreProvider>
      </Router>
    </div>
  );
};

export default App;
