import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

    
    state = {
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
        return sum > 0
    }

    

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        // alert('You continue!');

        const queryParams = [];
        //encode = makes elements so they can be used in the url

        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });

    }

    //this exports content from Burger.js and then is able to be used on app.js
    render () {
        //this is the original state an is now immutable. 
        const disabledInfo = {
            ...this.props.ings
        };
        //each key in disabledInfo that is less than or equal to 0
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            //the ingredients on here refer to the ingredients in the state.  this is how the burger.js has a variable to relate to and how it knows the length that it needs to be.
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.props.ings}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} 
                    price={this.props.price}/>
                </Modal>
                <Burger ingredients={this.props.ings}/>
                <BuildControls 
                addIngredients={this.props.onIngredientAdded}
                removeIngredients={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchasable={this.updatePurchasableProduct(this.props.ings)}
                ordered={this.purchaseHandler}
                price={this.props.price}/>
            
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);