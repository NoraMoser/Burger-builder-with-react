import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    //Object.keys transforms the object into an array of keys the .map turns it into a different array - in this case jsx elements
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        //igKey is the ingredient name props.ingredents[igKey] is the value
        //span let's me capitalize double {{}} is just javascript built in style
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A yummy burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
};

export default orderSummary;