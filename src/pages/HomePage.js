import React from 'react';
import { Greeting } from '../Greeting';
import { MaisaPic } from '../MaisaPic';
import { usePersistentState } from '../usePersistentState';

export const HomePage = () => {
    const [barks, setBarks] = usePersistentState('barks', 0, Number);
    const increment = () => {
        console.log("maisa was clicked!");
        setBarks(barks + 1);
    }
    const resetBarks = () => {
        setBarks(0);
    }
    return (
        <>
        <h1>The Home Page</h1>
        <Greeting name="Claire" numberOfBarks={barks}/>
        <MaisaPic onIncrement={increment}
                barks={barks}
                resetBarks={resetBarks} />
        </>
    );
}