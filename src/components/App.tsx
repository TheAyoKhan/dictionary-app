import React, { FC, MouseEventHandler, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import WordPage from './pages/WordPage';
import Header from './Header';
import SettingsModal from './SettingsModal';

const App: FC = () => {
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  const handleClick: MouseEventHandler = (event) => {
    const newSettingsIsOpen = !settingsIsOpen;
    console.log({target: event.target, newSettingsIsOpen});
    setSettingsIsOpen(newSettingsIsOpen);
  }

  return (
    <Router>
      <Header {...{ handleClick }} />
      <Switch>
        <Route path="/dictionary">
          <WordPage />
        </Route>
      </Switch>
      <SettingsModal {...{ isOpen: settingsIsOpen }} />
    </Router>
  );
};

export default App;
