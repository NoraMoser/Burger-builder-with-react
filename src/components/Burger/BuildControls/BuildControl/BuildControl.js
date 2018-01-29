import React from 'react';

import classes from './BuildControl.css';




const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
    //added property comes from BuildControls.js which is what ties in the add Ingredients function from BurgerBuilder.js
);

export default buildControl;