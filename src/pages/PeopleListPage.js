import React from 'react';
import { PeopleList } from '../PeopleList.js';
import { ThemeButton } from '../ThemeButton';

const people = [{
    name: 'Claire',
    age: 21,
    hairColor: 'red'
}, {
    name: 'Alex',
    age: 23,
    hairColor: 'purple'
}];

export const PeopleListPage = () => (
    <>
        <h1>The People List Page</h1>
        <PeopleList people={people}/>
    </>
);