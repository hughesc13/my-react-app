import React, { useEffect } from 'react';

export const CongratulationsMessage = ({ numberOfClicks, threshold, onHide }) => {
     useEffect(() => {
        return () => console.log('CongratulationsMessage unmounting!');
    }, []);//[] so useEffect is only used when component is first rendered
 
    return (
    numberOfClicks >= threshold ?
        <>
            <h1>Congratulations! you have reached {threshold} number of clicks!</h1>
           {/* <button onClick={onHide}>hide!</button> */}
        </>
        : null
    );
}
//if numberofclicks is over threshold, displau message and hide button. else, do nothing