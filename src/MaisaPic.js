import React, { useState } from 'react';
import Button from '@mui/material/Button';
import pic from './maisa.jpg';

export const MaisaPic = ({ onIncrement, barks, resetBarks }) => {
    const picClick = () => {
        console.log("maisa was clicked!");
    }

    return (
        <>
        <Button variant="outlined" onClick={resetBarks}>reset barks!</Button>
        <p> </p>
        <img src={pic} alt="dog named Maisa sitting on a bed" with="300" height="400" onClick={onIncrement}/>
        </>
    );
}