import React, { MouseEventHandler, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DictionaryEntryPage from './pages/DictionaryEntryPage';
import Header from './Header';
import SettingsModal from './SettingsModal';

const App = (): JSX.Element => {
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
          <DictionaryEntryPage />
        </Route>
      </Switch>
      <SettingsModal {...{ isOpen: settingsIsOpen }} />
    </Router>
  );
};

export default App;
