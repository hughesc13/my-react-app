import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedPage = () => {
    const navigate = useNavigate();
    const isAuthed = false;

    useEffect(() => {
        if(!isAuthed) {
            navigate("/");
        }
    });

    return (<h1>only authed users can see this!</h1>);

/*     if (isAuthed) {
        return (
            <h1>only authed users can see this!</h1>
        );
    } else {
       return (
        <Navigate to="/" />
       ); 
    } */
}