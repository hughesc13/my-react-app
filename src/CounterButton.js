import React, { useEffect } from 'react';

export const CounterButton = ({ onIncrement, numberOfClicks, resetClicks }) => {
    useEffect(() => {
        console.log('useEffect function called');//called when ever we render
        return () => console.log('unmounting');
    }, []);

    return (
        <>
        <p>you've clicked the button {numberOfClicks} times</p>
        <button onClick={onIncrement}>click me!</button>
        <button onClick={resetClicks}>reset clicks!</button>
        </>
    );
}

//react only rerenders components DOM only if props or a hook changes. thats y we need useState - if we make our own variable to count clicks and its not a prop, it wont work