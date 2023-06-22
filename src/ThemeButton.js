import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';

const backgroundColor = styled.div`
    background-color = ${props => props.theme || 'light'}
`;

export const ThemeButton = ({ theme, setTheme, ...props }) => {
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <>
        <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    );
}