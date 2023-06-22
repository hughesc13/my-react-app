import { useState, useEffect } from 'react';

export const usePersistentState = (storageKey, defaultValue, Type) => {
    const [state, setState] = useState(
        Type(localStorage.getItem(storageKey)) || defaultValue
    );

    useEffect(() => {
        localStorage.setItem(storageKey, state);
    }, [state]);//effect updates everytime numberOfClicks changes

    return [state, setState];
}