import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

//global variables are typically all caps
const INGREDIENT_PRICES = {
    salad: 0.2,
    bacon: 0.8,
    cheese: 1.0,
    meat: 2.3
}

class BurgerBuilder extends Component {

    //using a state is how we're going to make it dynamic
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0, 
            meat: 0
        },
        totalPrice: 4
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
        //(below) this adds the prices listed in the global variable to each ingredient added with type
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        //this adds the prices to the overall price for a plain burger which I set to 4.
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removeIngredientHandler = (type) => {

    }

    //this exports content from Burger.js and then is able to be used on app.js
    render () {
        return (
            //the ingredients on here refer to the ingredients in the state.  this is how the burger.js has a variable to relate to and how it knows the length that it needs to be.
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;