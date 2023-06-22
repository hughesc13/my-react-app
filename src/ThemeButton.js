import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeButton = ({ theme, setTheme }) => {
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
    )
}