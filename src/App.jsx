import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StoreProvider from './store/storeProvider';
import './App.css';
import Main from './components/pages/Main';
import MushroomDetails from './components/pages/MushroomDetails';
import ErrorPage from './components/pages/ErrorPage';
import bacground from './img/robert-wiedemann-pslVHH-4fZw-unsplash.jpg';
import Loading from './components/atoms/Loading';

const App = () => {
  return (
    <div className="App">
      <Router>
        <StoreProvider>
          <Loading />
          <div
            className="relative min-h-screen"
            style={{
              backgroundImage: `url('${bacground}')`,
              backgroundSize: `cover`,
              backgroundPosition: `center`,
              backgroundAttachment: `fixed`,
            }}
          >
            <Switch>
              <Route path="/" exact component={Main} />
              <Route
                path="/mushroom_details/:slug"
                component={MushroomDetails}
              />
              <Route path="*" component={ErrorPage} status={404} />
            </Switch>
          </div>
        </StoreProvider>
      </Router>
    </div>
  );
};

export default App;
