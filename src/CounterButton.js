import React, { useEffect } from 'react';
import Button from '@mui/material/Button';

export const CounterButton = ({ onIncrement, numberOfClicks, resetClicks }) => {
    return (
        <>
        <p>you've clicked the button {numberOfClicks} times</p>
        <Button variant="contained" onClick={onIncrement}>click me!</Button>
        <p> </p>
        <Button variant="contained" onClick={resetClicks}>reset clicks!</Button>
        </>
    );
}

//react only rerenders components DOM only if props or a hook changes. thats y we need useState - if we make our own variable to count clicks and its not a prop, it wont work