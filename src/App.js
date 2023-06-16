//import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting'; //exporting Greeting as named thing instead of default
import { PeopleList } from './PeopleList';

//IM SO CONFUSED WHAT IS GOING ON W PEOPLELISTITEM AND PEOPLELIST GAHSDGKSDFSF

const people = [{
  name: 'Claire',
  age: 21,
  hairColor: 'brown',
}, { 
  name: 'Alex',
  age: 23,
  hairColor: 'brown',
}];

/* const displayAlert = () => {
  alert("maisa wants pets!");
} */

function App() {
  let adjective = 'cool';
  let url = "https://reactjs.org";

  //functional components return jsx :)
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Claire" numberOfBarks={4}/>
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
        </a>
      </header>
    </div>
  );
}

export default App;
