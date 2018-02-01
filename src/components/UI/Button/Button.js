import React from 'react';
import classes from './Button.css';

const button = (props) => (
    //array in the class name so we can add conditional classes
    <button className={[classes.]}
    onClick={props.clicked}>{props.children}</button>
);

export default button;