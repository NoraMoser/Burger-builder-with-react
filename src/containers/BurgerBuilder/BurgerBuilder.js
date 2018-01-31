import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    updatePurchasableProduct (ingredients) {
        
        //this takes the ingredients object and puts it into an array with the keys as the number/values .reduce returns just one number
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            //the final price is returned-so one number
            return sum + el;
        }, 0);
        //so will become true if sum is greater than 0
        this.setState({purchasable: sum > 0})
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
        this.updatePurchasableProduct(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        //throws an error if we go below 0 without the if statement so with this nothing will happen if it's below 0
        if(oldCount <= 0) {
            return;
        }
        //taking away an ingredient now
        const newCount = oldCount - 1;

        //this makes us able to update the state
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //this makes the new count go to the state
        updatedIngredients[type] = newCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        //this takes away the prices of each ingredient we click less for.
        const newPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchasableProduct(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    //this exports content from Burger.js and then is able to be used on app.js
    render () {
        //this is the original state an is now immutable. 
        const disabledInfo = {
            ...this.state.ingredients
        };
        //each key in disabledInfo that is less than or equal to 0
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            //the ingredients on here refer to the ingredients in the state.  this is how the burger.js has a variable to relate to and how it knows the length that it needs to be.
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                addIngredients={this.addIngredientHandler}
                removeIngredients={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;