import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';
import Button from '@mui/material/Button';

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
        <Button padding="16px" variant="outlined" onClick={toggleTheme}>Toggle Theme</Button>
        </>
    );
}