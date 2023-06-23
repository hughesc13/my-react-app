import React, { useState } from 'react';
import Button from '@mui/material/Button';

export const ControlledFormPage = () => {
    const [name, setName] = useState(''); //empty str is initial value
    const [email, setEmail] = useState('');
    const [fav, setFav] = useState('');

    return (
        <form>
            <h3>Please enter your information:</h3>
            <div>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder="Favorite Something"
                    value={fav}
                    onChange={e => setFav(e.target.value)} />
            </div>
            <Button onClick={e => {
                alert(`
                your name is ${name}
                your email is ${email}
                and ${fav} is your fav
                `);
                e.preventDefault();
            }}>Submit</Button>
        </form>
    );
}