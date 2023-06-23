import * as React from 'react';
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
import { ThemeContext } from './ThemeContext';
import { ThemeButton } from './ThemeButton';

//import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

//next step: have a pic of maisa, everytime u click on it the bark count goes up


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