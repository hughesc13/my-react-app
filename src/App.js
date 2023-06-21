import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { 
  HomePage, 
  CounterButtonPage, 
  PeopleListPage, 
  NotFoundPage, 
  ProtectedPage, 
  ControlledFormPage, 
  UncontrolledFormPage,
  UserProfilePage } from './pages';
import { NavBar } from './NavBar';
import { FormsNavBar } from './FormsNavBar';
import { UserDataLoader } from './UserDataLoader';
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

          <Route path="/user" element={<UserDataLoader><UserProfilePage /></UserDataLoader>}/>



          <Route path="/forms">
            <Route index element={<FormsNavBar />} />
            <Route path="controlled" element={<ControlledFormPage />}/>
            <Route path="uncontrolled" element={<UncontrolledFormPage />}/>
          </Route>

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