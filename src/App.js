import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { HomePage, CounterButtonPage, PeopleListPage } from './pages';
import './App.css';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);//array destructuring syntax. first const = curr value of state, second const = updated value of state. setting both to 0 at start
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  const resetClicks = () => setNumberOfClicks(0);
  const [hideMessage, setHideMessage] = useState(false);  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter" exact>
            <CounterButtonPage />
          </Route>
          <Route path="/people-list" exact>
            <PeopleListPage />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


/*    <Greeting name="Claire" numberOfBarks={4}/>
        <PeopleList people={people}/>
        <button onClick={() => alert("maisa wants pets!")}>click me!</button>
        <p>
          This is so {adjective}!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */