import React from 'react';
import { Button } from './Button';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congratulations! you have reached {threshold} number of clicks!</h1>
            <Button onClick={onHide}>hide!</Button>
        </>
    );
}
//if numberofclicks is over threshold, displau message and hide button. else, do nothing