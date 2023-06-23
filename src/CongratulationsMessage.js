import React from 'react';
import Button from '@mui/material/Button';

export const CongratulationsMessage = ({ threshold, onHide }) => {
    return (
        <>
            <h1>Congratulations! you have reached {threshold} number of clicks!</h1>
            <Button variant="contained" onClick={onHide}>hide!</Button>
        </>
    );
}
//if numberofclicks is over threshold, displau message and hide button. else, do nothing