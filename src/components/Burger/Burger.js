import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //this turns it into an array so we can use the .map method on it- then we're trying to make an array that's the length of the values from the original state.
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
    });
    return (
        //the classes.Burger is the css for the entire burger (size, etc) and the BurgerIngredient it's bringing in css from the BurgerIngredient css.  Type is the case names.
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
            </div>
    );
};

export default burger;