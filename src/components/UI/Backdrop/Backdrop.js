import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    //ternary expression ? : is true and false
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;