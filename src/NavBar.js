import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    //CHECK OUT IF I CAN USE MUI DIVIDERS HERE
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#2196f3',
    padding: '16px',
    flexDirection: 'row',
  };

  const listItemStyle = {
    margin: '0 8px',
    borderRight: '1px solid white',
    paddingRight: '8px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  const last = {
    margin: '0 8px',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={listItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/counter" style={linkStyle}>Counter Button</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/people-list" style={linkStyle}>People List</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/forms" style={linkStyle}>Forms</Link>
        </li>
        <li style={last}>
          <Link to="/user" style={linkStyle}>User Profile</Link>
        </li>
      </ul>
    </nav>
  );
};


/* import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const myStyle={listStyleType: 'none'};
    return(
        <ul style={myStyle}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter Button</Link>
            </li>
            <li>
                <Link to="/people-list">People List</Link>
            </li>
            <li>
                <Link to="/forms">Forms</Link>
            </li>
            <li>
                <Link to="/user">User Profile</Link>
            </li>
        </ul>
    );
} */