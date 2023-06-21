import React, { useState  } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
//import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';
import { DisplayIf } from '../DisplayIf';


export const CounterButtonPage = () => {
  const location = useLocation();
  const starting = queryString.parse(location.search).starting || 0;
  console.log("starting value = " + starting);

  const [numberOfClicks, setNumberOfClicks] = useState(Number(starting));//array destructuring syntax. first const = curr value of state, second const = updated value of state. setting both to 0 at start
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
