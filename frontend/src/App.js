import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
// import MyDecks from './components/MyDecks';
// import Cards from './components/Cards';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path='/signup'>
            <SignupFormPage />
          </Route> */}
          {/* <Route path='/mydecks'>
            <MyDecks />
          </Route>
          <Route path='/cards'>
            <Cards />
          </Route> */}
        </Switch>
      )}
    </>
  );
}

export default App;
