import React, { FC } from 'react';
import WordPage from './pages/WordPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/word">
          <WordPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
