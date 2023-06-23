import React from 'react';
import Button from '@mui/material/Button';


export const UncontrolledFormPage = () => {
    const nInput = React.createRef();
    const eInput = React.createRef();
    const fInput = React.createRef();
    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                    ref={nInput}
                    type="text" 
                    placeholder="Name"/>
            </div>
            <div>
                <input 
                    ref={eInput}
                    type="text" 
                    placeholder="Email"/>
            </div>
            <div>
                <input 
                    ref={fInput}
                    type="text" 
                    placeholder="Favorite Something"/>
            </div>
            <Button onClick={e => {
                alert(`
                    Your name is ${nInput.current.value}
                    your email is ${eInput.current.value}
                    and ${fInput.current.value} is your favorite!
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
    );
}