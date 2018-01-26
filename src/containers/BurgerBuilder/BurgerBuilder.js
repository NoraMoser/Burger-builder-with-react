import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    //using a state is how we're going to make it dynamic
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0, 
            meat: 0
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;

        //this makes us able to update the state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //this makes the new count go to the state
        updatedIngredients[type] = newCount;
    }

    removeIngredientHandler = (type) => {

    }

    //this exports content from Burger.js and then is able to be used on app.js
    render () {
        return (
            //the ingredients on here refer to the ingredients in the state.  this is how the burger.js has a variable to relate to and how it knows the length that it needs to be.
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;