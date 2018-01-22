import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {
 //initially we won't render anything
 let ingredient = null;
 
 //this.props.type lets you put in type= on other pages, and if it matches case, then the jsx will render.  
     switch (this.props.type) {
         case ('bread-bottom'):
             ingredient = <div className={classes.BreadBottom}></div>
             break;
         case ('bread-top'):
             ingredient = (
                 <div className={classes.BreadTop}>
                 <div className={classes.Seeds1}></div>
                 <div className={classes.Seeds2}></div>
                 </div>
             );
             break;
         case ('meat'):
             ingredient = <div className={classes.Meat}></div>
             break;
         case ('cheese'):
             ingredient = <div className={classes.Cheese}></div>
             break;
         case ('salad'):
             ingredient = <div className={classes.Salad}></div>
             break;
         case ('bacon'):
             ingredient = <div className={classes.Bacon}></div>
             break;
         default:
             ingredient = null;
     }
     return ingredient;
    }
}

//not positive what this does.
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}; 


export default BurgerIngredient;