import React, { useState  } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { useParams } from 'react-router-dom';

export const CounterButtonPage = () => {
    const [numberOfClicks, setNumberOfClicks] = useState(0);//array destructuring syntax. first const = curr value of state, second const = updated value of state. setting both to 0 at start
    const increment = () => setNumberOfClicks(numberOfClicks + 1);
    const resetClicks = () => setNumberOfClicks(0);
    const [hideMessage, setHideMessage] = useState(false);  
  
    return (
        <>
        <h1>The Counter Button Page</h1>
           {hideMessage
            ? <CongratulationsMessage numberOfClicks={numberOfClicks} 
              threshold={10}
              onHide={() => setHideMessage(false)}/>
            : <CongratulationsMessage numberOfClicks={numberOfClicks} 
              threshold={10}
              onHide={() => setHideMessage(true)}/> }
          <CounterButton onIncrement={increment} 
          numberOfClicks={numberOfClicks}
          resetClicks={resetClicks}/>
        </>
    );
}