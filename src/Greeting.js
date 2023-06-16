//new component called greeting! practice for 1 component per file
import React from 'react';

export function Greeting({ name, numberOfBarks }) {
    if (!name) return null;

    let isMorning = (new Date()).getHours <12;//tells us if curr time is before or after 12pm
    let greetingHeader = isMorning
        ? <h3>It's morning, {name}.</h3>
        : <h3>Hello {name}! It is sometime after noon.</h3>;

    return (
        <>
            {greetingHeader}
            {numberOfBarks === 0
                ? <p>Maisa did not bark at you :/</p>
                : <p>Maisa barked at you {numberOfBarks} times!</p>}
        </>
    );
}