import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

export const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    padding: '16px',
    flexDirection: 'row',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const liStyle = {
    margin: '0 8px',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <Divider style={{background: 'white'}} orientation="vertical" flexItem />
        <li style={liStyle}>
          <Link to="/counter" style={linkStyle}>Counter Button</Link>
        </li>
        <Divider style={{background: 'white'}} orientation="vertical" flexItem />
        <li style={liStyle}>
          <Link to="/people-list" style={linkStyle}>People List</Link>
        </li>
        <Divider style={{background: 'white'}} orientation="vertical" flexItem />
        <li style={liStyle}>
          <Link to="/forms" style={linkStyle}>Forms</Link>
        </li>
        <Divider style={{background: 'white'}} orientation="vertical" flexItem />
        <li style={liStyle}>
          <Link to="/user" style={linkStyle}>User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};