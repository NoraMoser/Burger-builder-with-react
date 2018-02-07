import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import CheckoutData from '../Checkout/ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1, 
            bacon: 1
        }
    }
    //built in js function
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}

        //params here are name and value of the state. So this way we update the setState below dynamically.
        for (let param of query.entries()) {
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHandler = () => {
        //goes back to the last page
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render (){
        return (
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients} 
                checkoutCancelled={this.checkoutCancelledHandler}
                checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.path + '/contact-data'} component={CheckoutData}/>
            </div>
        );
    }
}

export default Checkout;