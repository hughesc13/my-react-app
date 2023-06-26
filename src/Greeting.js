//new component called greeting! practice for 1 component per file
import React from 'react';

export function Greeting({ name, numberOfBarks }) {
    if (!name) return null;

    const getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        console.log(hour);
        return hour;
    }

    let greetingHeader = (getHour() < 12)
        ? <h3>Good morning {name}!</h3>
        : <h3>Good afternoon {name}!</h3>;

    return (
        <>
            {greetingHeader}
            {numberOfBarks === 0
                ? <p>Maisa did not bark at you :/</p>
                : <p>Maisa barked at you {numberOfBarks} times!</p>}
        </>
    );
}