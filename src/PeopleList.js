import React from 'react';
import { PeopleListItem } from './PeopleListItem';
//import styled from 'styled-components';

/* const Wrapper = styled.div`
    border: 2px solid white;
    padding: 32px;
`;
 */
//this is returning everything in the jsx! we j dont say return bc its shorthand
export const PeopleList = ({ people }) => (
    <>
     {people.map(person => <PeopleListItem key={person.name} person={person}/>)}
    </>
);