import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormModal from "./components/LoginFormModal";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import Notes from './components/Notes';
import EditNoteForm from './components/Notes/EditNoteForm';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Navigation isLoaded={isLoaded} />
            <SplashPage />
          </Route>

          <Route path="/signup">
            <SignupFormPage />
          </Route>

          <Route path='/login'>
            <Navigation isLoaded={isLoaded} />
            <LoginFormModal />
          </Route>

          <Route path='/users/:userId'>
            <Navigation isLoaded={isLoaded} />
            <HomePage />
          </Route>

          <Route exact path='/notebooks/:notebookId/notes/:noteId/edit'>
            <Navigation isLoaded={isLoaded} />
            <EditNoteForm />
          </Route>
          
          <Route path='/notebooks/:notebookId'>
            <Navigation isLoaded={isLoaded} />
            <Notes />
          </Route>


          <Route>
            <h1>Page Not Found</h1>
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
