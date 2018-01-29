import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

//This array of controls is only for convenience; you don't have to have it
const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

//key is necessary and has to be individual.  Label works for this.  Won't always work.
const buildControls = (props) => (
    //the toFixed makes it only show to 2 decimal places
    <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.addIngredients(ctrl.type)}
            removed={() => props.removeIngredients(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;