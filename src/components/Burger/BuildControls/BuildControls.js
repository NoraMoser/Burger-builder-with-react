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
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.addIngredients(ctrl.type)}
            removed={() => props.removeIngredients(ctrl.type)} />
        ))}
    </div>
);

export default buildControls;