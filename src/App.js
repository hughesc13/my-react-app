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

//https://stackoverflow.com/questions/70641518/how-to-navigate-submenu-items-using-react-router-dom-v6#:~:text=%3CNavItem%20link%3D%22%2Fmanage%22%20icon%3D%20%7BHappinessIcon%7D%20label%3D%22Manage%22%20hasSubItem%3E%20%3Cdiv%3E%20%3CNavSubItem,%3CNavSubItem%20link%3D%22%2Fmanage%2Fsub2%22%20label%3D%22Sub%20Item%202%22%20%2F%3E%20%3C%2Fdiv%3E%20%3C%2FNavItem%3E
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

          <Route path="/forms">

            <FormsNavBar />
              <Route path="/forms/controlled" element={<ControlledFormPage />}/>
              <Route path="/forms/uncontrolled" element={<UncontrolledFormPage />}/>
          
          </Route>

          <Route path="/controlled" element={<ControlledFormPage />}/>
          <Route path="/uncontrolled" element={<UncontrolledFormPage />}/>
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