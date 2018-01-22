import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    //using a state is how we're going to make it dynamic
    state = {
        ingredients: {
            salad: 1,
            bacon: 2,
            cheese: 3, 
            meat: 1
        }
    }

    //this exports content from Burger.js and then is able to be used on app.js
    render () {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;