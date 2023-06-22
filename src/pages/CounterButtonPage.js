import React, { useState, useEffect } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';
import { usePersistentState } from '../usePersistentState';


export const CounterButtonPage = () => {
  const [numberOfClicks, setNumberOfClicks] = usePersistentState('numberOfClicks', 0, Number);


  const [hideMessage, setHideMessage] = useState(false);  
  const increment = () => setNumberOfClicks(numberOfClicks + 1);
  const resetClicks = () => {
    setHideMessage(false);
    setNumberOfClicks(0);
  }



  return (
      <>
      <h1>The Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks>= 10} >
        <CongratulationsMessage
            threshold={10}
            onHide={() => setHideMessage(true)}/>
      </DisplayIf>
      <CounterButton onIncrement={increment} 
        numberOfClicks={numberOfClicks}
        resetClicks={resetClicks}/>
      </>
  );
}

//when hideMessage is true, we setHideMessage to false so the message will be hidden.
//when hideMessage is false, we y
