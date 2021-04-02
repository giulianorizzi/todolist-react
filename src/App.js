import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FolderContainer from './components/Folder/FolderContainer';
import TodoContainer from './components/Todo/TodoContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FolderContainer} />
          <Route path="/folder/:idFolder" component={TodoContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
