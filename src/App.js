import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage, 
  UncontrolledFormPage } from './pages';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/counter" element={<CounterButtonPage />}/>
          <Route path="/people-list" element={<PeopleListPage />}/>
          <Route path="/protected" element={<ProtectedPage />}/>
          <Route path="/forms/controlled" element={<ControlledFormPage />}/>
          <Route path="/forms/uncontrolled" element={<UncontrolledFormPage />}/>
          <Route path="/forms/*" element={<FormsNavBar />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        </div>
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

/* 
  const [numberOfClicks, setNumberOfClicks] = useState(0);//array destructuring syntax. first const = curr value of state, second const = updated value of state. setting both to 0 at start
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  const resetClicks = () => setNumberOfClicks(0);
  const [hideMessage, setHideMessage] = useState(false);  
*/