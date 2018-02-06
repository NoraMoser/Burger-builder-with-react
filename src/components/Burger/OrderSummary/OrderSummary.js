import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
        render () {
        //Object.keys transforms the object into an array of keys the .map turns it into a different array - in this case jsx elements
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
        //igKey is the ingredient name props.ingredents[igKey] is the value
        //span let's me capitalize double {{}} is just javascript built in style
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>)
        } );
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A yummy burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Total Price: $<strong>{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
        </Aux>
    );
}

}

export default OrderSummary;