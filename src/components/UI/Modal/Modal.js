import React, {Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    //not pure component because i'm not using all the checks.
    //checking that this only updates when show changes
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    componentWillUpdate() {
        console.log('[Modal] WillUpdate');
    }
    //made this a class so we don't update any components unnecessarily

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} 
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
} 

export default Modal;