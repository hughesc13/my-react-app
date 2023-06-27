import React, { useState } from 'react';
import Button from '@mui/material/Button';
import pic from './maisa.jpg';
import dogBark from './dogBark.mp3';

export const MaisaPic = ({ onIncrement, barks, resetBarks }) => {
    const handleClick = () => {
        console.log("maisa was clicked!");
        const b = new Audio(dogBark);
        b.play();
        onIncrement();
    }

    return (
        <>
        <Button variant="outlined" onClick={resetBarks}>reset barks!</Button>
        <p> </p>
        <img src={pic} alt="dog named Maisa sitting on a bed" with="300" height="400" onClick={handleClick}/>
        </>
    );
}