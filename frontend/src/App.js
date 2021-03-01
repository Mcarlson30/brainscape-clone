import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session'
import Navigation from './components/Navigation';
// import AllDecks from './components/AllDecks/AllDecks';
import GetAllDecks from './components/AllDecks/AllDecksComponent'
import GetUserDecks from './components/AllDecks/UserDecksComponent'
import GetAllCards from './components/AllDecks/AllCardsComponent'
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
          <Route exact path='/decks'>
            <GetAllDecks></GetAllDecks>
          </Route>
          <Route exact path='/decks/user'>
            <GetUserDecks></GetUserDecks>
          </Route>
          <Route path='/cards'>
            <GetAllCards></GetAllCards>
          </Route>
        </Switch>

      )}
    </>
  );
}

export default App;
